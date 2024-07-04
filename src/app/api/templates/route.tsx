import * as fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { ReactNode } from "react";
import { TemplateId } from "@/templates/registry";
import { BusinessData } from '@/types/business';

const defaultBusiness: BusinessData = {
  shopName: "Cozy Coffee Shop",
  address: 'เลขที่ 808/22 ถ. พหลโยธิน ตำบลเวียง อำเภอเมืองเชียงราย เชียงราย 57000',
  description: "Cozy Coffee Shop offers a warm atmosphere and the finest coffee in town. Our beans are sourced from the best farms around the world.",
  reviewers: [
    {
      name: "John Doe",
      comment: "Excellent coffee and cozy atmosphere!",
      rate: 5,
    },
  ],
  contactNumber: "(555) 123-4567",
  landingImageUrl: ''
};

const getData = async (component: ReactNode) => {
  const ReactDOMServer = (await import("react-dom/server")).default;
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(component);
  return staticMarkup;
};

export async function GET(req: NextRequest) {
  const templateName = req.nextUrl.searchParams.get('template') || 'landingPage';
  const { templateRegistry } = (await import('@/templates/registry'));
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
      const appString = await getData(<TemplateComponent businessData={defaultBusiness} />);
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
    return new NextResponse("File not found", {
      status: 404,
    });
  } else {
    return new NextResponse("Template not Found", {
      status: 404
    });
  }
}
