import { TemplateId } from "@/templates/registry";
import path from "path";
import * as fs from "fs";
import { BusinessData } from "@/types/business";
import archiver from "archiver";
import { ReactNode } from "react";
import { NextRequest, NextResponse } from 'next/server';
import { PassThrough } from 'stream';

const getData = async (component: ReactNode) => {
  const ReactDOMServer = (await import("react-dom/server")).default;
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(component);
  return staticMarkup;
};

export async function POST(req: NextRequest) {
  const templateName = req.nextUrl.searchParams.get('template') as TemplateId;
  const { templateRegistry } = await import("@/templates/registry");
  if (
    typeof templateName === "string" &&
    templateRegistry[templateName as TemplateId]
  ) {
    const businessData: BusinessData = await req.json();
    const htmlFilePath = path.join(
      process.cwd(),
      `public/templates/${templateName}.html`
    );
    const scriptFilePath = path.join(
      process.cwd(),
      `public/templates/${templateName}.bundle.js`
    );
    const TemplateComponent = templateRegistry[templateName as TemplateId];

    if (fs.existsSync(htmlFilePath)) {
      const appString = await getData(
        <TemplateComponent businessData={businessData} />
      );
      const preloadScript = JSON.stringify({
        business: businessData,
      });
      const htmlString = fs
        .readFileSync(htmlFilePath, "utf-8")
        .replace('<div id="root"></div>', `<div id="root">${appString}</div>`)
        .replace("{{TITLE}}", businessData.shopName)
        .replace("'{{__INITIAL_DATA__}}'", preloadScript);
      const scriptContent = fs.readFileSync(scriptFilePath, "utf-8");

      const passThrough = new PassThrough();

      const archive = archiver("zip", {
        zlib: { level: 9 }, // Sets the compression level
      });
      archive.pipe(passThrough);
      archive.append(htmlString, { name: "index.html" });
      archive.append(scriptContent, { name: `templates/${templateName}.bundle.js` });

      archive.finalize();

      return new NextResponse(passThrough as unknown as BodyInit, {
        headers: {
          'Content-Disposition': 'attachment; filename=website.zip',
          'Content-Type': 'application/zip',
        },
      });
    }

    return new NextResponse("File not Found", {
      status: 404
    });
  }
  return new NextResponse("Template not Found", {
    status: 404
  });
}

