import * as fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { ReactNode } from "react";
import { TemplateId, templateRegistry } from "@/templates/registry";

const getData = async (component: ReactNode) => {
  const ReactDOMServer = (await import("react-dom/server")).default;
  const staticMarkup = ReactDOMServer.renderToString(component);
  return staticMarkup;
};

export async function GET(req: NextRequest) {
  const templateName = req.nextUrl.searchParams.get('template') || 'landingPage';
  if (
    typeof templateName === "string" &&
    templateRegistry[templateName as TemplateId]
  ) {
    const filePath = path.join(
      process.cwd(),
      `public/templates/${templateName}.html`
    );

    const TemplateComponent = templateRegistry[templateName as TemplateId];

    if (fs.existsSync(filePath)) {
      const appString = await getData(<TemplateComponent />);
      const htmlString = fs
        .readFileSync(filePath, "utf-8")
        .replace('<div id="root"></div>', `<div id="root">${appString}</div>`)
        .replace('{{TITLE}}', 'Creative Template');

      return new NextResponse(htmlString, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    }
    return new NextResponse("File not found");
  } else {
    return new NextResponse("Template not Found");
  }
}
