"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import ComponentSidebar from "@/components/component-sidebar";
import CodeBlock from "@/components/code-block";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs2";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("preview");
  const [expandedSections, setExpandedSections] = useState({
    installation: true,
    dependencies: true,
    utilFile: true,
    sourceCode: true,
  });

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const componentCode = `import React, { useEffect, useRef } from 'react';

type Position = 
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'center'
  | 'custom';

interface WatermarkedImageProps {
  baseImageUrl: string;
  watermarkText?: string;
  watermarkImageUrl?: string;
  position?: Position;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  opacity?: number;
  font?: string;
  textColor?: string;
  watermarkWidth?: number;
  watermarkHeight?: number;
}

const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
  baseImageUrl,
  watermarkText,
  watermarkImageUrl,
  position = 'bottom-right',
  top,
  left,
  bottom,
  right,
  opacity = 0.5,
  font = '24px Arial',
  textColor = 'rgba(255, 255, 255, 0.7)',
  watermarkWidth = 100,
  watermarkHeight = 50,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const baseImage = new Image();
    baseImage.crossOrigin = 'anonymous';
    baseImage.src = baseImageUrl;

    baseImage.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = baseImage.width;
      canvas.height = baseImage.height;

      ctx.drawImage(baseImage, 0, 0);

      const applyWatermark = () => {
        ctx.globalAlpha = opacity;

        let x = 0, y = 0;

        const calculatePosition = () => {
          switch (position) {
            case 'top-left':
              x = 10;
              y = 10;
              break;
            case 'top-right':
              x = baseImage.width - (watermarkWidth + 10);
              y = 10;
              break;
            case 'bottom-left':
              x = 10;
              y = baseImage.height - (watermarkHeight + 10);
              break;
            case 'bottom-right':
              x = baseImage.width - (watermarkWidth + 10);
              y = baseImage.height - (watermarkHeight + 10);
              break;
            case 'center':
              x = (baseImage.width - watermarkWidth) / 2;
              y = (baseImage.height - watermarkHeight) / 2;
              break;
            case 'custom':
              x = left ?? baseImage.width - (right ?? watermarkWidth + 10) - watermarkWidth;
              y = top ?? baseImage.height - (bottom ?? watermarkHeight + 10) - watermarkHeight;
              break;
            default:
              x = 10;
              y = 10;
          }
        };

        calculatePosition();

        if (watermarkText) {
          ctx.font = font;
          ctx.fillStyle = textColor;
          ctx.fillText(watermarkText, x, y + watermarkHeight);
        } else if (watermarkImageUrl) {
          const watermarkImage = new Image();
          watermarkImage.crossOrigin = 'anonymous';
          watermarkImage.src = watermarkImageUrl;
          watermarkImage.onload = () => {
            ctx.drawImage(watermarkImage, x, y, watermarkWidth, watermarkHeight);
          };
        }

        ctx.globalAlpha = 1.0;
      };

      applyWatermark();
    };
  }, [
    baseImageUrl,
    watermarkText,
    watermarkImageUrl,
    position,
    top,
    left,
    bottom,
    right,
    opacity,
    font,
    textColor,
    watermarkWidth,
    watermarkHeight,
  ]);

  return <canvas ref={canvasRef} />;
};

export default WatermarkedImage;`;

  const usageCode = `import WatermarkedImage from './WatermarkedImage';

<WatermarkedImage
  baseImageUrl="https://example.com/image.jpg"
  watermarkText="© PixelCraft"
  position="bottom-right"
  opacity={0.7}
  font="20px Helvetica"
  textColor="rgba(255,255,255,0.8)"
/>
`;

  const installDependencies = `npm install pixel-craft --save`;

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <ComponentSidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="flex justify-between px-20 py-4 border-b border-gray-800">
          <div className="flex jus items-center space-x-4">
            <span className="text-lg">Components</span>
            {/* <span>Templates</span> */}
            <span className="bg-blue-900 text-white px-2 py-0.5 rounded-md text-ms">
              New
            </span>
            {/* <span>Pricing</span> */}
            {/* <span>Showcase</span> */}
            {/* <span>Playground</span> */}
            <span className="text-xl">Twitter</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-900 rounded-md pl-8 pr-4 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
        </header>

        {/* Component Content */}
        <main className="max-w-5xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold mb-2">Watermark</h1>
          <p className="text-gray-400 mb-6">
            Add personalized watermarks to images using a simple React.
          </p>

          {/* Tabs */}
          <Tabs defaultValue="preview" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              {/* <TabsTrigger value="code">Code</TabsTrigger> */}
              <TabsTrigger value="usage">Usage</TabsTrigger>
            </TabsList>
            <TabsContent
              value="preview"
              className="p-4 bg-gray-900 rounded-lg flex justify-center items-center min-h-[200px]"
            >
              <div className="p-4 flex flex-col items-center">
                <div className="flex items-center justify-between w-full max-w-3xl">
                  {/* Original Image Container */}
                  <div className="flex flex-col items-center">
                    <div className="w-64 h-64 bg-gray-800 rounded-lg overflow-hidden">
                      <img
                        src="/sampleImage.avif"
                        alt="Original"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-2 text-gray-400 text-sm">
                      Image Without Watermark
                    </p>
                  </div>

                  {/* Arrow Section */}
                  <div className="flex flex-col items-center mx-8">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-blue-500"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <p className="mt-2 text-gray-400 text-sm">Image after adding watermark</p>
                  </div>

                  {/* Compressed Image Container */}
                  <div className="flex flex-col items-center">
                    <div className="w-64 h-64 bg-gray-800 rounded-lg overflow-hidden">
                      <img
                        src="/helloTwo.png"
                        alt="Compressed"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-2 text-gray-400 text-sm">
                      Image with Watermark
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="relative group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=48&width=48`}
                        alt={`User ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-black text-white rounded-md text-sm whitespace-nowrap transition-opacity duration-200">
                      User {i}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                    </div>
                  </div>
                ))}
              </div> */}
            </TabsContent>
            <TabsContent value="usage">
              <CodeBlock code={usageCode} language="jsx" />
            </TabsContent>
          </Tabs>

          {/* Installation */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Installation</h2>
            <div className="flex space-x-4 mb-4">
              {/* <button
                className={`px-4 py-2 rounded-md ${
                  activeTab === "cli"
                    ? "bg-blue-900 text-white"
                    : "bg-gray-800 text-gray-300"
                }`}
                onClick={() => setActiveTab("cli")}
              >
                CLI
              </button> */}
              <button
                className={`px-4 py-2 rounded-md ${
                  activeTab === "manual"
                    ? "bg-blue-900 text-white"
                    : "bg-gray-800 text-gray-300"
                }`}
                onClick={() => setActiveTab("manual")}
              >
                Manual
              </button>
            </div>

            {/* Install Dependencies */}
            <div className="mb-4">
              <div
                className="flex items-center cursor-pointer mb-2"
                onClick={() => toggleSection("dependencies")}
              >
                {expandedSections.dependencies ? (
                  <ChevronDown size={20} />
                ) : (
                  <ChevronRight size={20} />
                )}
                <h3 className="text-lg font-medium">Install dependencies</h3>
              </div>
              {expandedSections.dependencies && (
                <div className="relative">
                  <CodeBlock code={installDependencies} language="bash" />
                </div>
              )}
            </div>

            {/* Add util file */}
            {/* <div className="mb-4">
              <div
                className="flex items-center cursor-pointer mb-2"
                onClick={() => toggleSection("utilFile")}
              >
                {expandedSections.utilFile ? (
                  <ChevronDown size={20} />
                ) : (
                  <ChevronRight size={20} />
                )}
                <h3 className="text-lg font-medium">Add util file</h3>
              </div>
              {expandedSections.utilFile && (
                <div className="relative">
                  <CodeBlock code={utilFile} language="typescript" />
                </div>
              )}
            </div> */}

            {/* Copy the source code */}
            <div className="mb-4">
              <div
                className="flex items-center cursor-pointer mb-2"
                onClick={() => toggleSection("sourceCode")}
              >
                {expandedSections.sourceCode ? (
                  <ChevronDown size={20} />
                ) : (
                  <ChevronRight size={20} />
                )}
                <h3 className="text-lg font-medium">Copy the source code</h3>
              </div>
              {expandedSections.sourceCode && (
                <div className="relative">
                  <p className="text-gray-400 mb-2">
                    components/ImageCompressor.tsx
                  </p>
                  <CodeBlock code={componentCode} language="jsx" />
                </div>
              )}
            </div>
          </section>

          {/* Props */}
          <section className="mb-12 border border-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Props</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-3 px-4 text-left">Prop name</th>
                    <th className="py-3 px-4 text-left">Type</th>
                    <th className="py-3 px-4 text-left">Required</th>
                    <th className="py-3 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <code className="bg-gray-800 px-1 py-0.5 rounded">
                        baseImageURL
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code className="text-xs bg-gray-800 px-2 py-1 rounded">
                        String
                        {/* {`{ id?: number; name: string; designation: string; image: string }`} */}
                      </code>
                    </td>
                    <td className="py-3 px-4">(required)</td>

                    <td className="py-3 px-4 text-gray-300">
                      URL of the base image to apply watermark on.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <code className="bg-gray-800 px-1 py-0.5 rounded">
                        watermarkText
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code className="text-xs bg-gray-800 px-2 py-1 rounded">
                        String
                        {/* {`{ id?: number; name: string; designation: string; image: string }`} */}
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code>undefined</code>
                    </td>

                    <td className="py-3 px-4 text-gray-300">
                      Text content of the watermark (either this or
                      <code className="text-xs bg-gray-800 px-2 py-1 rounded">
                        watermarkImageUrl
                      </code>
                      is used).
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <code className="bg-gray-800 px-1 py-0.5 rounded">
                        watermarkImageUrl
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code className="text-xs bg-gray-800 px-2 py-1 rounded">
                        string
                        {/* {`{ id?: number; name: string; designation: string; image: string }`} */}
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code>undefined</code>
                    </td>

                    <td className="py-3 px-4 text-gray-300">
                      URL of an image to be used as the watermark.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <code className="bg-gray-800 px-1 py-0.5 rounded">
                        position
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code className="text-xs bg-gray-800 px-2 py-1 rounded">
                        'top-left' <br></br>
                        'top-right'<br></br>
                        'bottom-left'<br></br>
                        'bottom-right'<br></br>
                        'center' 'custom'
                        {/* {`{ id?: number; name: string; designation: string; image: string }`} */}
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code>'bottom-right'</code>
                    </td>

                    <td className="py-3 px-4 text-gray-300">
                      Predefined or custom positioning of the watermark.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <code className="bg-gray-800 px-1 py-0.5 rounded">
                        top
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code className="text-xs bg-gray-800 px-2 py-1 rounded">
                        number
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code>undefined</code>
                    </td>

                    <td className="py-3 px-4 text-gray-300">
                      Top offset for custom positioning.
                    </td>
                  </tr>

                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <code className="bg-gray-800 px-1 py-0.5 rounded">
                        left
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code className="text-xs bg-gray-800 px-2 py-1 rounded">
                        number
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code>undefined</code>
                    </td>

                    <td className="py-3 px-4 text-gray-300">
                      Left offset for custom positioning.
                    </td>
                  </tr>

                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <code className="bg-gray-800 px-1 py-0.5 rounded">
                        bottom
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code className="text-xs bg-gray-800 px-2 py-1 rounded">
                        number
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code>undefined</code>
                    </td>

                    <td className="py-3 px-4 text-gray-300">
                      Bottom offset for custom positioning.
                    </td>
                  </tr>

                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <code className="bg-gray-800 px-1 py-0.5 rounded">
                        right
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code className="text-xs bg-gray-800 px-2 py-1 rounded">
                        number
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code>undefined</code>
                    </td>

                    <td className="py-3 px-4 text-gray-300">
                      Right offset for custom positioning.
                    </td>
                  </tr>

                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <code className="bg-gray-800 px-1 py-0.5 rounded">
                        opacity
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code className="text-xs bg-gray-800 px-2 py-1 rounded">
                        number
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code>0.5</code>
                    </td>

                    <td className="py-3 px-4 text-gray-300">
                      Opacity of the watermark (0 to 1).
                    </td>
                  </tr>

                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <code className="bg-gray-800 px-1 py-0.5 rounded">
                        font
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code className="text-xs bg-gray-800 px-2 py-1 rounded">
                        string
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code>'24px Arial'</code>
                    </td>

                    <td className="py-3 px-4 text-gray-300">
                      Font style used when applying text watermark.
                    </td>
                  </tr>

                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <code className="bg-gray-800 px-1 py-0.5 rounded">
                        textColor
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code className="text-xs bg-gray-800 px-2 py-1 rounded">
                        string
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code>'rgba(255,255,255,0.7)'</code>
                    </td>

                    <td className="py-3 px-4 text-gray-300">
                      Color of the watermark text.
                    </td>
                  </tr>

                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <code className="bg-gray-800 px-1 py-0.5 rounded">
                        watermarkWidth
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code className="text-xs bg-gray-800 px-2 py-1 rounded">
                        number
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code>100</code>
                    </td>

                    <td className="py-3 px-4 text-gray-300">
                      Width of watermark image (if using{" "}
                      <code>watermarkImageUrl </code> ).
                    </td>
                  </tr>

                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <code className="bg-gray-800 px-1 py-0.5 rounded">
                        watermarkHeight
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code className="text-xs bg-gray-800 px-2 py-1 rounded">
                        number
                      </code>
                    </td>
                    <td className="py-3 px-4">
                      <code>50</code>
                    </td>

                    <td className="py-3 px-4 text-gray-300">
                      Height of watermark image.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          {/* Common errors */}
          <section className="mb-12 border border-gray-800 p-4 rounded-lg">
            {/* Error Table */}
            <div className="overflow-x-auto">
              <h3 className="text-2xl font-semibold mb-3">
                Possible Errors and User Measures
              </h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="py-3 px-4 text-left border-b border-gray-700">
                      Error/ Issue
                    </th>
                    <th className="py-3 px-4 text-left border-b border-gray-700">
                      Cause
                    </th>
                    <th className="py-3 px-4 text-left border-b border-gray-700">
                      User's Measures/ Fixes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Base image fails to load</td>
                    <td className="py-3 px-4 text-gray-300">
                      Incorrect or no CORS headers
                      <code className="text-ms bg-gray-800 px-2 py-1 rounded">
                        baseImageUrl
                      </code>
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      Ensure the URL is correct and the server supports CORS
                      <code className="text-ms bg-gray-800 px-2 py-1 rounded">
                        (Access-Control-Allow-Origin).
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Watermark image not shown</td>
                    <td className="py-3 px-4 text-gray-300">
                      Wrong
                      <code className="text-ms bg-gray-800 px-2 py-1 rounded">
                        watermarkImageUrl
                      </code>
                      or CORS restriction
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      Same as above: use accessible images and check CORS
                      headers.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Watermark text is not visible</td>
                    <td className="py-3 px-4 text-gray-300">
                      Poor{" "}
                      <code className="text-ms bg-gray-800 px-2 py-1 rounded">
                        textColor
                      </code>{" "}
                      contrast with base image
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      Use high-contrast colors or semi-transparent backgrounds
                      for text.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Canvas size is 0</td>
                    <td className="py-3 px-4 text-gray-300">
                      Image fails to load before drawing
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      Add error handling (
                      <code className="text-ms bg-gray-800 px-2 py-1 rounded">
                        onError
                      </code>
                      ) and conditionally render fallback UI.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      Watermark image not positioned properly
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      nvalid custom position values (
                      <code className="text-ms bg-gray-800 px-2 py-1 rounded">
                        top
                      </code>
                      ,{" "}
                      <code className="text-ms bg-gray-800 px-2 py-1 rounded">
                        left
                      </code>
                      ,{" "}
                      <code className="text-ms bg-gray-800 px-2 py-1 rounded">
                        right
                      </code>
                      ,{" "}
                      <code className="text-ms bg-gray-800 px-2 py-1 rounded">
                        bottom
                      </code>
                      )
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      Validate and clamp position values before use.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      Image not updated when props change
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      Renders once and doesn’t reflect updated props{" "}
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      Ensure{" "}
                      <code className="text-ms bg-gray-800 px-2 py-1 rounded">
                        useeffect
                      </code>{" "}
                      dependency list includes all props affecting rendering
                      (which you've already done well).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Real World Uses */}
          <section className="mb-12 border border-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Real World Uses</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Branding product images
                </h3>
                <p className="text-gray-300 mb-4">
                  Automatically add company logo to product or catalog images
                  before display/upload.
                </p>
                {/* <div className="bg-black/50 p-4 rounded-lg">
                  <div className="flex space-x-3 justify-center">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="relative group">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        <div className="absolute opacity-0 group-hover:opacity-100 -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-black text-white rounded-md text-xs whitespace-nowrap transition-opacity duration-200">
                          Team Member {i}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Watermarking user-uploaded content
                </h3>
                <p className="text-gray-300 mb-4">
                  Add a copyright notice or username to user-uploaded photos in
                  CMS, marketplaces, or design tools.
                </p>
                {/* <div className="bg-black/50 p-4 rounded-lg h-40 relative">
                  <div className="absolute top-1/4 left-1/4 relative group">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                      1
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-black text-white rounded-md text-xs whitespace-nowrap transition-opacity duration-200">
                      Location A: Downtown
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                    </div>
                  </div>
                  <div className="absolute top-2/3 left-2/3 relative group">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                      2
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-black text-white rounded-md text-xs whitespace-nowrap transition-opacity duration-200">
                      Location B: Harbor
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                    </div>
                  </div>
                </div> */}
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Protecting images in gallery/portfolio
                </h3>
                <p className="text-gray-300 mb-4">
                  Prevent misuse by watermarking preview images with your brand
                  or signature.
                </p>
                {/* <div className="bg-black/50 p-4 rounded-lg h-40 relative flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-800 rounded-md relative">
                    {[
                      { top: "10%", left: "10%", label: "Feature 1" },
                      { top: "10%", right: "10%", label: "Feature 2" },
                      { bottom: "10%", left: "10%", label: "Feature 3" },
                      { bottom: "10%", right: "10%", label: "Feature 4" },
                    ].map((pos, i) => (
                      <div key={i} className="absolute group" style={pos}>
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                          +
                        </div>
                        <div className="absolute opacity-0 group-hover:opacity-100 -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-black text-white rounded-md text-xs whitespace-nowrap transition-opacity duration-200">
                          {pos.label}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Batch watermarking
                </h3>
                <p className="text-gray-300 mb-4">
                  Use in a loop to process multiple images and save/download
                  them.
                </p>
                {/* <div className="bg-black/50 p-4 rounded-lg">
                  <div className="flex -space-x-2 justify-center">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="relative group">
                        <div className="w-8 h-8 rounded-full ring-2 ring-black bg-gradient-to-r from-green-400 to-blue-500"></div>
                        <div className="absolute opacity-0 group-hover:opacity-100 -top-16 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-black text-white rounded-md text-xs max-w-[150px] transition-opacity duration-200">
                          "This product changed my life! Highly recommended."
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                        </div>
                      </div>
                    ))}
                    <div className="relative group">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs">
                        +12
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>

          {/* Optimization Techniques */}
          <section className="mb-12 border border-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Optimization Techniques</h2>

            <div className="space-y-6">
              {/* <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Lazy Loading
                </h3>
                <p className="text-gray-300 mb-4">
                  Implement lazy loading to only load images when they're about
                  to enter the viewport, reducing initial page load time.
                </p>
                <div className="bg-black/50 p-4 rounded-lg">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Using native lazy loading
<img 
  src={item.image || "/placeholder.svg"} 
  alt={item.name} 
  loading="lazy" 
  className="object-cover rounded-full h-12 w-12"
/>`}</code>
                  </pre>
                </div>
              </div> */}

              <div className=" rounded-lg p-6">
                {/* <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Image Formats & Compression
                </h3> */}
                {/* <p className="text-gray-300 mb-4">
                  Use modern image formats like WebP and AVIF for better
                  compression and quality. Implement proper image compression to
                  reduce file sizes.
                </p> */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="py-2 px-4 text-left border-b border-gray-700">
                          Techniques
                        </th>
                        <th className="py-2 px-4 text-left border-b border-gray-700">
                          Benefits
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800">
                        {/* <td className="py-2 px-4 text-gray-300">WebP</td> */}
                        <td className="py-2 px-4 text-gray-300">
                          Use{" "}
                          <code className="text-ms bg-gray-800 px-2 py-1 rounded">
                            requestAnimationFrame
                          </code>{" "}
                          or async chunking for canvas work
                        </td>
                        <td className="py-2 px-4 text-gray-300">
                          Prevents UI freezing on large image loads or batch
                          processing.
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-2 px-4 text-gray-300">
                          Convert canvas to Blob instead of DataURL for large
                          outputs
                        </td>
                        <td className="py-2 px-4 text-gray-300">
                          More memory-efficient and suitable for upload.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 text-gray-300">
                          Preload watermark image
                        </td>
                        <td className="py-2 px-4 text-gray-300">
                          Avoid delayed drawing on first render; use
                          <code className="text-ms bg-gray-800 px-2 py-1 rounded">
                            Image
                          </code>{" "}
                          with before canvas use. or{" "}
                          <code className="text-ms bg-gray-800 px-2 py-1 rounded">
                            onload
                          </code>{" "}
                          to prevent UI freezing.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 text-gray-300">
                          Allow setting watermark scaling relative to base image
                          size
                        </td>
                        <td>
                          &nbsp;&nbsp;&nbsp;Makes watermark responsive to
                          different image resolutions.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 text-gray-300">
                          Debounce rerenders if props update rapidly
                        </td>
                        <td>
                          &nbsp;&nbsp;&nbsp;Useful if image URL or options are updated frequently (e.g., sliders/UI &nbsp;&nbsp;&nbsp;tools).
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Responsive Images
                </h3>
                <p className="text-gray-300 mb-4">
                  Serve different image sizes based on the device's screen size
                  and resolution to avoid loading unnecessarily large images.
                </p>
                <div className="bg-black/50 p-4 rounded-lg">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Using srcset for responsive images
<img 
  src={item.image || "/placeholder.svg"} 
  srcSet={
    \`\${item.image}?width=48 48w, 
     \${item.image}?width=96 96w, 
     \${item.image}?width=128 128w\`
  }
  sizes="(max-width: 768px) 48px, 96px"
  alt={item.name} 
  className="object-cover rounded-full h-12 w-12"
/>`}</code>
                  </pre>
                </div>
              </div> */}

              {/* <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Image CDN Integration
                </h3>
                <p className="text-gray-300 mb-4">
                  Use an image CDN like Cloudinary, Imgix, or Next.js Image to
                  automatically optimize, resize, and deliver images in the best
                  format.
                </p>
                <div className="bg-black/50 p-4 rounded-lg">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Using Next.js Image component
import Image from 'next/image';

// In your component
<div className="relative group">
  <Image
    src={item.image || "/placeholder.svg"}
    alt={item.name}
    width={48}
    height={48}
    className="rounded-full"
    placeholder="blur"
    blurDataURL="data:image/svg+xml;base64,..."
  />
  <div className="absolute opacity-0 group-hover:opacity-100 -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-black text-white rounded-md text-sm">
    {item.name}
  </div>
</div>`}</code>
                  </pre>
                </div>
              </div> */}

              {/* <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Placeholder Techniques
                </h3>
                <p className="text-gray-300 mb-4">
                  Implement image placeholders to improve perceived loading
                  performance while images are being loaded.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-black/50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium mb-2 text-gray-200">
                      Blur-Up
                    </h4>
                    <div className="aspect-square w-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-full animate-pulse"></div>
                    <p className="text-xs text-gray-400 mt-2">
                      Tiny blurred version that transitions to full image
                    </p>
                  </div>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium mb-2 text-gray-200">
                      LQIP
                    </h4>
                    <div className="aspect-square w-full bg-gradient-to-r from-gray-800 to-gray-700 rounded-full"></div>
                    <p className="text-xs text-gray-400 mt-2">
                      Low Quality Image Placeholder
                    </p>
                  </div>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium mb-2 text-gray-200">
                      Dominant Color
                    </h4>
                    <div className="aspect-square w-full bg-blue-700 rounded-full"></div>
                    <p className="text-xs text-gray-400 mt-2">
                      Uses the dominant color from the image
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </section>
        </main>

        {/* Footer */}

        <footer className="border-t border-gray-800 p-8 bg-black">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">PixelCraft</h3>
              <p className="text-gray-400 text-sm">
                Powerful image processing tools for modern web applications
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com"
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-white">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer">
                  Documentation
                </li>
                <li className="hover:text-white cursor-pointer">
                  API Reference
                </li>
                <li className="hover:text-white cursor-pointer">Examples</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-white cursor-pointer">
                  Terms of Service
                </li>
                <li className="hover:text-white cursor-pointer">
                  Cookie Policy
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} PixelCraft. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
