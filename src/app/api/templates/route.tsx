import * as fs from "fs";
import { NextResponse } from "next/server";
import path from "path";
import { Template } from "../../../templates/template";
import { ReactNode } from "react";

const getData = async (component: ReactNode) => {
  const ReactDOMServer = (await import('react-dom/server')).default;
  const staticMarkup = ReactDOMServer.renderToString(component);
  return staticMarkup;
};

export async function GET() {
  const filePath = path.join(process.cwd(), 'public/templates/landingPage.html');
  
  if (fs.existsSync(filePath)) {
    const appString = await getData(<Template />);
    const htmlString = fs.readFileSync(filePath, 'utf-8').replace('<div id="root"></div>', `<div id="root">${appString}</div>`);

    return new NextResponse(htmlString, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  }

  return new NextResponse('File not found');
}