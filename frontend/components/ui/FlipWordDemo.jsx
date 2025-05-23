import React from "react";
import { FlipWords } from "../ui/flip-words";
import { Cover } from "./cover";

export function FlipWordsDemo() {
  const words = ["Powerful", "Open Source"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4">
      <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 m-2">
        <FlipWords words={words} /><br />
        Image Utilities with
          <Cover className=''> PixelCraft</Cover>
        <div></div>
      </div>
    </div>
  );
} 
