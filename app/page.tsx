"use client";
import React, { useState } from "react";
import { predefinedHtml } from "./predefinedhtml";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [htmlContent, setHtmlContent] = useState(""); 
  const [previewContent, setPreviewContent] = useState("");

  const handleGeneratePreview = () => {
    const contentToRender = htmlContent || predefinedHtml;
    setPreviewContent(contentToRender);
  };

  const handlePasteHtml = () => {
    setHtmlContent(predefinedHtml);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 -ml-5 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Card>
          <CardHeader>
            <CardTitle>HTML Previewer</CardTitle>
            <CardDescription>
              Enter your HTML code and see the preview
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <textarea
              rows={8}
              cols={35}
              className="rounded-lg p-2"
              placeholder="Enter your HTML code here..."
              value={htmlContent}
              onChange={(e) => setHtmlContent(e.target.value)}
            />
            <div className="buttons w-full flex items-center justify-around">
              <Button onClick={handleGeneratePreview}>Generate Preview</Button>
              <Button onClick={handlePasteHtml}>Paste HTML</Button>
            </div>
          </CardContent>
          <CardFooter>
            <div
              className="display w-full rounded-lg border-2 p-4"
              dangerouslySetInnerHTML={{ __html: previewContent }}
            />
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}




