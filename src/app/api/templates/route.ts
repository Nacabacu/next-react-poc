import * as fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), 'public/templates/landingPage.html');
  
  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Read the file from the file system
    const fileContents = fs.readFileSync(filePath);

    return new NextResponse(fileContents, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  }

  return new NextResponse('File not found');
}