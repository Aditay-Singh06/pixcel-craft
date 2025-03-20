import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import React from 'react'
import { CodeBlockDemo, CodeBlockThree, CodeBlockTwo,  } from "./CodeBlockDemo";
import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";

const Example = () => {
  return (  
    <section id="examples" className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                      <TextGenerateEffectDemo/>
                      
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                      Check out these examples to see how easy it is to use
                      PixelCraft in your projects.
                    </p>
                  </div>
                </div>
                <div className="mx-auto max-w-3xl py-12">
                  <Tabs defaultValue="crop" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="crop">Crop</TabsTrigger>
                      <TabsTrigger value="filter">Filter</TabsTrigger>
                      <TabsTrigger value="optimize">Optimize</TabsTrigger>
                    </TabsList>
                    <TabsContent value="crop" className="mt-6 space-y-4">
                      <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                    <CodeBlockDemo/>
                        {/* <pre className="overflow-x-auto bg-muted p-4 rounded-md text-sm">
                          {`import { ImageCrop } from 'pixel-craft-react';
    
    function App() {
      return (
        <ImageCrop
          src="/your-image.jpg"
          aspectRatio={16/9}
          onCropComplete={(croppedImage) => {
            console.log(croppedImage);
          }}
        />
      );
    }`}
                        </pre> */}
                        <div className="mt-4 flex justify-center">
                          <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-lg border">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="h-32 w-48 border-2 border-white border-dashed rounded-md"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="filter" className="mt-6 space-y-4">
                      <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                      <CodeBlockTwo/>
                        {/* <pre className="overflow-x-auto bg-muted p-4 rounded-md text-sm">
                          {`import { ImageFilter } from 'pixel-craft-react';
    
    function App() {
      return (
        <ImageFilter
          src="/your-image.jpg"
          filter="sepia"
          intensity={0.7}
          onFilterApplied={(filteredImage) => {
            console.log(filteredImage);
          }}
        />
      );
    }`}
                        </pre> */}
                        <div className="mt-4 flex justify-center">
                          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                            <div className="aspect-square rounded-lg overflow-hidden">
                              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500"></div>
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden">
                              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 sepia"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="optimize" className="mt-6 space-y-4">
                      <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                      <CodeBlockThree/>
                        {/* <pre className="overflow-x-auto bg-muted p-4 rounded-md text-sm">
                          {`import { ImageOptimize } from 'pixel-craft-react';
    
    function App() {
      return (
        <ImageOptimize
          src="/your-image.jpg"
          quality={80}
          format="webp"
          onOptimized={(optimizedImage) => {
            console.log(optimizedImage);
          }}
        />
      );
    }`}
                        </pre> */}
                        <div className="mt-4 flex justify-center">
                          <div className="space-y-2 w-full max-w-md">
                            <div className="flex justify-between text-sm">
                              <span>Original: 1.2MB</span>
                              <span>Optimized: 240KB</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2.5">
                              <div className="bg-primary h-2.5 rounded-full w-[20%]"></div>
                            </div>
                            <p className="text-xs text-muted-foreground text-center">
                              80% size reduction
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </section>
  )
}

export default Example