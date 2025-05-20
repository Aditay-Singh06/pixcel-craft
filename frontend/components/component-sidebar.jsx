"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const components = [
  // {
  //   category: "Follow for updates",
  //   items: [{ name: "Twitter @aceternityco" }],
  // },
  {
    category: "Installation",
    items: [
      { name: "Install React + vite", link: "https://vite.dev/" },
      // { name: "Add utilities" },
    ],
  },
  {
    category: "All Components",
    items: [
      { name: "Image Watermark", link: "/main/getstarted/ImageWatermark" },
      {
        name: "Image Format Conversion",
        link: "/main/getstarted/ImageFormatConversion",
        isNew: true,
      },
      { name: "Filters and Effects", link: "/main/getstarted/FilterEffects" },
      { name: "Image Compressor", link: "/main/getstarted/ImageCompressor" },
      {
        name: "Image Editor",
        link: "/main/getstarted/ImageEditor",
        isActive: true,
      },
    ],
  },
];

export default function ComponentSidebar() {
  const pathname = usePathname();
  const [expandedCategories, setExpandedCategories] = useState(
    Object.fromEntries(components.map((category) => [category.category, true]))
  );
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    // Update active item based on current path
    const currentPath = pathname;
    components.forEach((category) => {
      category.items.forEach((item) => {
        if (item.link === "https://vite.dev/") {
          setActiveItem(item.name);
        }
      });
    });
  }, [pathname]);

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <aside className="w-64 border-r border-gray-800 h-screen overflow-y-auto bg-black flex-shrink-0">
      <div className="p-4 border-b border-gray-800">
        <Link href="/">
          <h1 className="text-xl font-bold flex items-center">PixelCraft</h1>
        </Link>
      </div>
      <nav className="p-4">
        {components.map((category) => (
          <div key={category.category} className="mb-6">
            <div
              className="flex items-center justify-between cursor-pointer mb-2"
              onClick={() => toggleCategory(category.category)}
            >
              <h3 className="text-sm font-medium text-gray-300">
                {category.category}
              </h3>
              {expandedCategories[category.category] ? (
                <ChevronDown size={16} className="text-gray-500" />
              ) : (
                <ChevronRight size={16} className="text-gray-500" />
              )}
            </div>
            {expandedCategories[category.category] && (
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.link || "#"}
                      onClick={() => handleItemClick(item.name)}
                      target={item.link?.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.link?.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`flex items-center text-sm py-1 px-2 rounded-md ${
                        activeItem === item.name || pathname === item.link
                          ? "bg-blue-900 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-800"
                      }`}
                    >
                      {item.name}
                      {item.isNew && (
                        <span className="ml-2 bg-green-900 text-green-300 text-xs px-1.5 py-0.5 rounded">
                          New
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
