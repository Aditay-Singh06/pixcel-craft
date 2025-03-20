import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  Image,
  Code,
  Crop,
  Filter,
  Layers,
  Zap,
  Download,
  Github,
  ArrowRight,
  Check,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import { Cover } from "../../components/ui/cover";  
import { FeaturesSectionDemo } from "../../components/FeatureSectionDemo";
import { HeroSectionOne } from "../../components/Hero-Section";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Navbar />

      <main className="flex-1">
      
          <HeroSectionOne/>
        

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-black"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Powerful Features
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Everything you need to manipulate, optimize, and enhance
                  images in your React applications.
                </p>
              </div>
            </div>
            {/* <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">

            

              <Card className="">
                <CardContent className="pt-6 hover:border-red/10">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 ">
                    <Crop className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Image Cropping</h3>
                  <p className="text-sm text-muted-foreground">
                    Easily crop images with an intuitive interface and precise
                    controls.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Filter className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Filters & Effects</h3>
                  <p className="text-sm text-muted-foreground">
                    Apply beautiful filters and effects with just a few lines of
                    code.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Layer Composition</h3>
                  <p className="text-sm text-muted-foreground">
                    Combine multiple images with advanced blending modes and
                    masks.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatically optimize images for the web without
                    sacrificing quality.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Export Options</h3>
                  <p className="text-sm text-muted-foreground">
                    Export images in multiple formats with customizable quality
                    settings.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Developer Friendly</h3>
                  <p className="text-sm text-muted-foreground">
                    Simple API with comprehensive documentation and examples.
                  </p>
                </CardContent>
              </Card>
            </div> */}
          </div>
          <FeaturesSectionDemo/>
        </section>

        {/* Examples Section */}
        <section id="examples" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  See It In Action
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
                    <pre className="overflow-x-auto bg-muted p-4 rounded-md text-sm">
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
                    </pre>
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
                    <pre className="overflow-x-auto bg-muted p-4 rounded-md text-sm">
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
                    </pre>
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
                    <pre className="overflow-x-auto bg-muted p-4 rounded-md text-sm">
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
                    </pre>
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

        {/* Installation Section */}
        <section
          id="installation"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Quick Installation
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Get started in seconds with npm.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                <pre className="overflow-x-auto bg-muted p-4 rounded-md text-sm">{`npm install pixel-craft-react`}</pre>
              </div>
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-bold">Basic Usage</h3>
                <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                  <pre className="overflow-x-auto bg-muted p-4 rounded-md text-sm">
                    {`import React from 'react';
import { ImageEditor } from 'pixel-craft-react';

function App() {
  return (
    <div className="App">
      <h1>Image Editor</h1>
      <ImageEditor
        src="/your-image.jpg"
        width={800}
        height={600}
        onSave={(editedImage) => {
          console.log(editedImage);
        }}
      />
    </div>
  );
}

export default App;`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simple Pricing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Choose the plan that's right for you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 space-y-2">
                    <h3 className="text-2xl font-bold">Free</h3>
                    <p className="text-4xl font-bold">$0</p>
                    <p className="text-sm text-muted-foreground">
                      Perfect for hobby projects
                    </p>
                  </div>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic image manipulation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>5 filters and effects</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Community support</span>
                    </li>
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardContent className="p-6">
                  <div className="mb-4 space-y-2">
                    <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Popular
                    </div>
                    <h3 className="text-2xl font-bold">Pro</h3>
                    <p className="text-4xl font-bold">$29</p>
                    <p className="text-sm text-muted-foreground">
                      Per month, billed annually
                    </p>
                  </div>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced image manipulation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>All filters and effects</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Commercial use</span>
                    </li>
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 space-y-2">
                    <h3 className="text-2xl font-bold">Enterprise</h3>
                    <p className="text-4xl font-bold">Custom</p>
                    <p className="text-sm text-muted-foreground">
                      For large organizations
                    </p>
                  </div>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Dedicated support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>SLA guarantees</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to transform your image processing?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Join thousands of developers using PixelCraft to create amazing
                image experiences.
              </p>
            </div>
            <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} PixelCraft. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
