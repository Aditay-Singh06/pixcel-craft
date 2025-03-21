"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Image,
  Code,
  Crop,
  Filter,
  Layers,
  Download,
  Github,
  ArrowRight,
  BookOpen,
  FileText,
  Rocket,
  Search,
  MessageSquare,
} from "lucide-react"
const Documentation = () => {
  return (
    <section id="docs" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b bg-[#03050F]" >
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <BookOpen className="mr-1 h-3.5 w-3.5" />
          Documentation
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Master PixelCraft</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Everything you need to know to build amazing image experiences
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl py-12">
        <Tabs defaultValue="overview" className="w-full">
          <div className="mb-8">
            <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground w-auto">
              <TabsTrigger
                value="overview"
                className="rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="components"
                className="rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Components
              </TabsTrigger>
              <TabsTrigger
                value="examples"
                className="rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Examples
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Resources
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="overflow-hidden">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Getting Started</CardTitle>
                  <CardDescription>Everything you need to begin using PixelCraft</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                      <Rocket className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Quick Start</p>
                      <p className="text-sm text-muted-foreground">Get up and running in less than 5 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                      <Code className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Installation</p>
                      <p className="text-sm text-muted-foreground">Step-by-step guide to install PixelCraft</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                      <Layers className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Core Concepts</p>
                      <p className="text-sm text-muted-foreground">Learn the fundamentals of image processing</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Explore Guides
                  </Button>
                </CardFooter>
              </Card>

              <div className="grid gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Latest Updates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400">
                          New
                        </Badge>
                        <span className="text-sm font-medium">v2.3.0 Released</span>
                        <span className="ml-auto text-xs text-muted-foreground">2 days ago</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-400">
                          Update
                        </Badge>
                        <span className="text-sm font-medium">Performance Improvements</span>
                        <span className="ml-auto text-xs text-muted-foreground">1 week ago</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-800/30 dark:text-purple-400">
                          Guide
                        </Badge>
                        <span className="text-sm font-medium">Advanced Filters Tutorial</span>
                        <span className="ml-auto text-xs text-muted-foreground">2 weeks ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="pb-2 pt-6">
                    <CardTitle className="text-lg">Popular Topics</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="justify-start h-auto py-2 px-3">
                      <Crop className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">Cropping</span>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-2 px-3">
                      <Filter className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">Filters</span>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-2 px-3">
                      <Layers className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">Layers</span>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-2 px-3">
                      <Download className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">Export</span>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Documentation Search</CardTitle>
                <CardDescription>Find exactly what you're looking for</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search documentation..."
                    className="w-full rounded-md border border-input bg-background py-2 pl-8 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    Image Cropping
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    Filters
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    Optimization
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    React Hooks
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    Server Components
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="h-2 bg-blue-500"></div>
                <CardHeader>
                  <CardTitle>ImageEditor</CardTitle>
                  <CardDescription>Core component for image editing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="rounded-md bg-muted p-3">
                      <code className="text-xs text-muted-foreground">
                        {`<ImageEditor\n  src="/image.jpg"\n  width={800}\n  height={600}\n  onSave={handleSave}\n/>`}
                      </code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      The main component that provides a complete image editing experience.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View Documentation
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-2 bg-green-500"></div>
                <CardHeader>
                  <CardTitle>ImageCrop</CardTitle>
                  <CardDescription>Crop images with precision</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="rounded-md bg-muted p-3">
                      <code className="text-xs text-muted-foreground">
                        {`<ImageCrop\n  src="/image.jpg"\n  aspectRatio={16/9}\n  onCropComplete={handleCrop}\n/>`}
                      </code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Specialized component for cropping images with customizable constraints.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View Documentation
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-2 bg-purple-500"></div>
                <CardHeader>
                  <CardTitle>ImageFilter</CardTitle>
                  <CardDescription>Apply beautiful filters</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="rounded-md bg-muted p-3">
                      <code className="text-xs text-muted-foreground">
                        {`<ImageFilter\n  src="/image.jpg"\n  filter="sepia"\n  intensity={0.7}\n  onFilterApplied={handleFilter}\n/>`}
                      </code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Apply and customize filters with real-time previews.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View Documentation
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Component API Reference</CardTitle>
                <CardDescription>Detailed documentation for all components</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-0 border-b">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center">
                        <span className="font-medium">ImageEditor</span>
                        <Badge className="ml-2 bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-400">
                          Core
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Props</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex">
                              <span className="font-mono text-blue-600 dark:text-blue-400 min-w-[120px]">
                                src
                              </span>
                              <span className="text-muted-foreground">Source image URL (required)</span>
                            </li>
                            <li className="flex">
                              <span className="font-mono text-blue-600 dark:text-blue-400 min-w-[120px]">
                                width
                              </span>
                              <span className="text-muted-foreground">Width of the editor (optional)</span>
                            </li>
                            <li className="flex">
                              <span className="font-mono text-blue-600 dark:text-blue-400 min-w-[120px]">
                                height
                              </span>
                              <span className="text-muted-foreground">Height of the editor (optional)</span>
                            </li>
                            <li className="flex">
                              <span className="font-mono text-blue-600 dark:text-blue-400 min-w-[120px]">
                                onSave
                              </span>
                              <span className="text-muted-foreground">
                                Callback when image is saved (required)
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Methods</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex">
                              <span className="font-mono text-blue-600 dark:text-blue-400 min-w-[120px]">
                                reset()
                              </span>
                              <span className="text-muted-foreground">Reset all edits to original image</span>
                            </li>
                            <li className="flex">
                              <span className="font-mono text-blue-600 dark:text-blue-400 min-w-[120px]">
                                undo()
                              </span>
                              <span className="text-muted-foreground">Undo last edit operation</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-0 border-b">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center">
                        <span className="font-medium">ImageCrop</span>
                        <Badge className="ml-2 bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400">
                          Core
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Props</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex">
                              <span className="font-mono text-blue-600 dark:text-blue-400 min-w-[120px]">
                                src
                              </span>
                              <span className="text-muted-foreground">Source image URL (required)</span>
                            </li>
                            <li className="flex">
                              <span className="font-mono text-blue-600 dark:text-blue-400 min-w-[120px]">
                                aspectRatio
                              </span>
                              <span className="text-muted-foreground">Aspect ratio constraint (optional)</span>
                            </li>
                            <li className="flex">
                              <span className="font-mono text-blue-600 dark:text-blue-400 min-w-[120px]">
                                onCropComplete
                              </span>
                              <span className="text-muted-foreground">
                                Callback when crop is complete (required)
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-0 border-b">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center">
                        <span className="font-medium">ImageFilter</span>
                        <Badge className="ml-2 bg-purple-100 text-purple-800 dark:bg-purple-800/30 dark:text-purple-400">
                          Core
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Props</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex">
                              <span className="font-mono text-blue-600 dark:text-blue-400 min-w-[120px]">
                                src
                              </span>
                              <span className="text-muted-foreground">Source image URL (required)</span>
                            </li>
                            <li className="flex">
                              <span className="font-mono text-blue-600 dark:text-blue-400 min-w-[120px]">
                                filter
                              </span>
                              <span className="text-muted-foreground">Filter name to apply (required)</span>
                            </li>
                            <li className="flex">
                              <span className="font-mono text-blue-600 dark:text-blue-400 min-w-[120px]">
                                intensity
                              </span>
                              <span className="text-muted-foreground">Filter intensity from 0-1 (optional)</span>
                            </li>
                            <li className="flex">
                              <span className="font-mono text-blue-600 dark:text-blue-400 min-w-[120px]">
                                onFilterApplied
                              </span>
                              <span className="text-muted-foreground">
                                Callback when filter is applied (required)
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
              <CardFooter className="flex justify-center p-6">
                <Button>
                  <FileText className="mr-2 h-4 w-4" />
                  View Full API Reference
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                  <div className="text-white font-bold text-xl">Basic Editor</div>
                </div>
                <CardHeader>
                  <CardTitle>Simple Image Editor</CardTitle>
                  <CardDescription>A complete example of a basic image editor</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md bg-muted p-3">
                    <code className="text-xs text-muted-foreground">
                      {`import { ImageEditor } from 'pixel-craft-react';

function App() {
const handleSave = (editedImage) => {
console.log('Edited image:', editedImage);
// Save or process the image
};

return (
<div className="container mx-auto p-4">
<h1 className="text-2xl font-bold mb-4">
  Simple Image Editor
</h1>
<ImageEditor
  src="/sample-image.jpg"
  width={800}
  height={600}
  onSave={handleSave}
/>
</div>
);
}`}
                    </code>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
                  <div className="text-white font-bold text-xl">Filter Gallery</div>
                </div>
                <CardHeader>
                  <CardTitle>Filter Showcase</CardTitle>
                  <CardDescription>Demonstrate all available filters with previews</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md bg-muted p-3">
                    <code className="text-xs text-muted-foreground">
                      {`import { useState } from 'react';
import { ImageFilter } from 'pixel-craft-react';

const FILTERS = [
'normal', 'sepia', 'grayscale', 'vintage',
'blur', 'sharpen', 'invert'
];

function FilterGallery() {
const [selectedFilter, setSelectedFilter] = useState('normal');

return (
<div className="container mx-auto p-4">
<h1 className="text-2xl font-bold mb-4">
  Filter Gallery
</h1>
<div className="grid grid-cols-4 gap-2 mb-4">
  {FILTERS.map(filter => (
    <button
      key={filter}
      onClick={() => setSelectedFilter(filter)}
      className={\`p-2 rounded \${
        selectedFilter === filter 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-200'
      }\`}
    >
      {filter}
    </button>
  ))}
</div>
<ImageFilter
  src="/sample-image.jpg"
  filter={selectedFilter}
  intensity={0.7}
  onFilterApplied={console.log}
/>
</div>
);
}`}
                    </code>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Interactive Examples</CardTitle>
                <CardDescription>Try out PixelCraft components with live demos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-lg border overflow-hidden">
                    <div className="aspect-video bg-muted flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-blue-600 border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        3:24
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium">Crop & Resize Demo</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Interactive demo of the cropping functionality
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border overflow-hidden">
                    <div className="aspect-video bg-muted flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-blue-600 border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        4:12
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium">Filter Playground</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Try different filters and effects in real-time
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border overflow-hidden">
                    <div className="aspect-video bg-muted flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-blue-600 border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        5:37
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium">Layer Composition</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Learn how to work with multiple image layers
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button>
                  <Rocket className="mr-2 h-4 w-4" />
                  Explore All Examples
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-primary" />
                    Tutorials & Guides
                  </CardTitle>
                  <CardDescription>Step-by-step instructions for common tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Badge className="mt-0.5 bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400">
                        Beginner
                      </Badge>
                      <div>
                        <h4 className="text-sm font-medium">Getting Started with PixelCraft</h4>
                        <p className="text-xs text-muted-foreground">
                          Learn the basics and set up your first project
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge className="mt-0.5 bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-400">
                        Intermediate
                      </Badge>
                      <div>
                        <h4 className="text-sm font-medium">Advanced Image Manipulation</h4>
                        <p className="text-xs text-muted-foreground">
                          Take your image editing skills to the next level
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge className="mt-0.5 bg-purple-100 text-purple-800 dark:bg-purple-800/30 dark:text-purple-400">
                        Advanced
                      </Badge>
                      <div>
                        <h4 className="text-sm font-medium">Creating Custom Filters</h4>
                        <p className="text-xs text-muted-foreground">
                          Build your own custom filters from scratch
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Tutorials
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                    Community Resources
                  </CardTitle>
                  <CardDescription>Connect with other PixelCraft developers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Github className="h-5 w-5" />
                        <span className="text-sm font-medium">GitHub Discussions</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Join
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5" />
                        <span className="text-sm font-medium">Discord Community</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Join
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Code className="h-5 w-5" />
                        <span className="text-sm font-medium">Stack Overflow</span>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
                <CardTitle>Downloadable Resources</CardTitle>
                <CardDescription>Free resources to help you get the most out of PixelCraft</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-background">
                    <FileText className="h-8 w-8 text-blue-500 mb-2" />
                    <h4 className="text-sm font-medium mb-1">Cheat Sheet</h4>
                    <p className="text-xs text-muted-foreground mb-3">
                      Quick reference for all components and APIs
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="mr-2 h-3.5 w-3.5" />
                      Download PDF
                    </Button>
                  </div>

                  <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-background">
                    <Layers className="h-8 w-8 text-green-500 mb-2" />
                    <h4 className="text-sm font-medium mb-1">Sample Projects</h4>
                    <p className="text-xs text-muted-foreground mb-3">Complete example projects to learn from</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="mr-2 h-3.5 w-3.5" />
                      Download ZIP
                    </Button>
                  </div>

                  <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-background">
                    <Image className="h-8 w-8 text-purple-500 mb-2" />
                    <h4 className="text-sm font-medium mb-1">Asset Pack</h4>
                    <p className="text-xs text-muted-foreground mb-3">Sample images and resources for testing</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="mr-2 h-3.5 w-3.5" />
                      Download ZIP
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      </div>
      </section>
  )
}

export default Documentation