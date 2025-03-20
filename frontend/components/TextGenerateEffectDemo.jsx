"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `See It In Action`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
} 

const wordsTwo = `Quick Installation`;
export function TextGenerateEffectDemoTwo() {
    return <TextGenerateEffect words={wordsTwo} />;
  }
  
