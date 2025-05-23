import { Github, ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import { FeaturesSectionDemo } from "../../components/FeatureSectionDemo";
import { HeroSectionOne } from "../../components/Hero-Section";
import Example from "../../components/Example";
import Installation from "../../components/Installation";
import Documentation from "../../components/Documentation";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen flex-col">
      {/* Header */}
      <div className=" mb-20 ">
        <Navbar />
      </div>
      <main className="flex-1">
        <section className="w-full" id=" hero-section mt-20">
          {/* <Spotlight/> */}
          <HeroSectionOne />
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full  py-12 md:py-24 lg:py-32 bg-[#03050F] mt-10"
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
            <FeaturesSectionDemo />
          </div>
        </section>

        {/* Examples Section */}
        <Example />

        {/* Documentation Section */}
        {/* <Documentation /> */}

        {/* Installation Section */}
        <Installation />

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-[#03050F]">
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
              <button className="w-50 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                <Link href="/main/getstarted/ImageEditor">
                  <div className="flex items-center justify-center gap-2 text-md">
                    Get Started
                    <ArrowRight />
                  </div>
                </Link>
              </button>
              <button className="w-50 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
                <div className="flex items-center justify-center gap-2 text-md">
                  <Link href="https://github.com/Aditay-Singh06/react-lib-pixelcraft.git">
                    View on GitHub
                  </Link>

                  <Github />
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
