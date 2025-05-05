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

export default WatermarkedImage;`

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

const installDependencies = `npm install --save image-compressor`;
const utilFile = `Hello`;

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <ComponentSidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="flex justify-around p-4 border-b border-gray-800">
          <div className="flex items-center space-x-4">
            <span>Components</span>
            {/* <span>Templates</span> */}
            <span className="bg-blue-900 text-white px-2 py-0.5 rounded-md text-xs">
              New
            </span>
            {/* <span>Pricing</span> */}
            {/* <span>Showcase</span> */}
            {/* <span>Playground</span> */}
            <span>Twitter</span>
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
          <h1 className="text-3xl font-bold mb-2">Watermark and Branding</h1>
          <p className="text-gray-400 mb-6">
            Add Image, Text in your images.
          </p>

          {/* Tabs */}
          <Tabs defaultValue="preview" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
            </TabsList>
            <TabsContent
              value="preview"
              className="p-8 bg-gray-900 rounded-lg flex justify-center items-center min-h-[200px]"
            >
              <div className="flex space-x-2">
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
                      User  {i}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="code">
              <CodeBlock code={componentCode} language="jsx" />
            </TabsContent>
            <TabsContent value="usage">
              <CodeBlock code={usageCode} language="jsx" />
            </TabsContent>
          </Tabs>

          {/* Installation */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Installation</h2>
            <div className="flex space-x-4 mb-4">
              <button
                className={`px-4 py-2 rounded-md ${
                  activeTab === "cli"
                    ? "bg-blue-900 text-white"
                    : "bg-gray-800 text-gray-300"
                }`}
                onClick={() => setActiveTab("cli")}
              >
                CLI
              </button>
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
            <div className="mb-4">
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
            </div>

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
                    components/ui/animated-tooltip.tsx
                  </p>
                  <CodeBlock code={componentCode} language="jsx" />
                </div>
              )}
            </div>
          </section>

          {/* Props */}
          <section className="mb-12">
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
                    <td className="py-3 px-4">
                      (required)
                    </td>
                    
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
                    Text content of the watermark (either this or<code className="text-xs bg-gray-800 px-2 py-1 rounded">watermarkImageUrl</code>
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
'center'
'custom'
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
                    Width of watermark image (if using <code>watermarkImageUrl </code> ).
                     
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

          {/* Promotional Section */}
          {/* <section className="bg-gray-900 rounded-lg p-8 mb-12">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold mb-2">
                Build websites faster and 10x better than your competitors
              </h2>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                with Aceternity UI Pro
              </h3>

              <p className="text-gray-300 mb-6">
                With the best in class components and templates, stand out from
                the crowd and get more attention to your website. Trusted by
                developers and entrepreneurs from all over the world.
              </p>

              <div className="flex space-x-4">
                <button className="bg-white text-black px-6 py-2 rounded-md font-medium">
                  Go Pro
                </button>
                <button className="border border-gray-600 px-6 py-2 rounded-md font-medium">
                  Talk to us
                </button>
              </div>
            </div>
          </section> */}
        </main>

        {/* Footer */}
        {/* <footer className="border-t border-gray-800 p-8">
          <div className="max-w-5xl mx-auto grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Aceternity UI</h3>
              <p className="text-gray-400 text-sm">A product by Aceternity</p>
              <p className="text-gray-400 text-sm">
                Built by code at @aceternityco
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Pricing</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Components</li>
                <li>Templates</li>
                <li>Categories</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Aceternity</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Aceternity UI Pro</li>
                <li>Twitter</li>
                <li>Discord</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Box Shadow</li>
                <li>Showcase</li>
                <li>Playground</li>
              </ul>
            </div>
          </div>
        </footer> */}
      </div>
    </div>
  );
}
