import React from "react";
import { FlipWords } from "../ui/flip-words";
import { Cover } from "./cover";

export function FlipWordsDemo() {
  const words = ["Powerful", "Open Source"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4">
      <div className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={words} />
        Image Utilities with <br />{" "}
        <div className="mt-3">
          
          <Cover> PixelCraft</Cover>
        </div>
      </div>
    </div>
  );
}
