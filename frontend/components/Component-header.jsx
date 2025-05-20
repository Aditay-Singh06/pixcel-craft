"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Github } from "lucide-react";

// Array of available components and their paths
const searchableComponents = [
  { name: "Image Watermark", path: "/main/getstarted/ImageWatermark" },
  {
    name: "Image Format Conversion",
    path: "/main/getstarted/ImageFormatConversion",
  },
  { name: "Filters and Effects", path: "/main/getstarted/FilterEffects" },
  { name: "Image Compressor", path: "/main/getstarted/ImageCompressor" },
  { name: "Image Editor", path: "/main/getstarted/ImageEditor" },
];

export default function ComponentHeader() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setShowResults(query.length > 0);
    setNoResults(false);

    if (query.length === 0) {
      setShowResults(false);
      return;
    }

    // Check if we have any matching components
    const matchingComponents = searchableComponents.filter((component) =>
      component.name.toLowerCase().includes(query.toLowerCase())
    );

    if (matchingComponents.length === 0) {
      setNoResults(true);
    }
  };

  const handleResultClick = (path) => {
    setSearchQuery("");
    setShowResults(false);
    router.push(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-white">Components</h2>
          <Link href="https://www.npmjs.com/package/pixel-craft">
            <span className="bg-blue-900 text-white px-2 py-0.5 rounded-md text-sm">
              npm
            </span>
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <div className="relative">
            <div className="flex items-center">
              <div className="relative mr-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search components..."
                  className="w-64 bg-gray-900 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="https://github.com/Aditay-Singh06/react-lib-pixelcraft"
                  className="hidden md:flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="text-sm">Star on GitHub</span>
                </a>
              </div>
            </div>

            {/* Search Results Dropdown */}
            {showResults && (
              <div className="absolute left-0 top-full mt-1 w-64 bg-gray-900 rounded-lg shadow-lg py-2 z-[60]">
                {noResults ? (
                  <div className="px-4 py-2 text-sm text-gray-400">
                    No components found
                  </div>
                ) : (
                  searchableComponents
                    .filter((component) =>
                      component.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((component) => (
                      <div
                        key={component.path}
                        onClick={() => handleResultClick(component.path)}
                        className="px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 cursor-pointer"
                      >
                        {component.name}
                      </div>
                    ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
