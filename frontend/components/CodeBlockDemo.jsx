"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockDemo() {
  const code = `import { ImageFilter } from 'pixel-craft-react';

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
}`;

  return (
    <div className="max-w-3xl mx-auto w-full">
      <CodeBlock
        language="jsx"
        filename="DummyComponent.jsx"
        highlightLines={[9, 13, 14, 18]}
        code={code} />
    </div>
  );
}

export function CodeBlockTwo() {
    const code = `import { ImageOptimize } from 'pixel-craft-react';

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
}`;
  
    return (
      <div className="max-w-3xl mx-auto w-full">
        <CodeBlock
          language="jsx"
          filename="DummyComponent.jsx"
          highlightLines={[9, 13, 14, 18]}
          code={code} />
      </div>
    );
  }

  export function CodeBlockThree() {
    const code = `import { ImageOptimize } from 'pixel-craft-react';

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
}`;
  
    return (
      <div className="max-w-3xl mx-auto w-full">
        <CodeBlock
          language="jsx"
          filename="DummyComponent.jsx"
          highlightLines={[9, 13, 14, 18]}
          code={code} />
      </div>
    );
  }

  export function CodeBlockFour() {
    const code = `npm install pixel-craft-react`;

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
};
  
    return (
      <div className="max-w-3xl mx-auto w-full">
        <CodeBlock
          language="jsx"
          filename="DummyComponent.jsx"
          highlightLines={[9, 13, 14, 18]}
          code={code} />
      </div>
    );
  }

  export function CodeBlockFive() {
    const code = `import React from 'react';
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

export default App;`;

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
};
  
    return (
      <div className="max-w-3xl mx-auto w-full">
        <CodeBlock
          language="jsx"
          filename="DummyComponent.jsx"
          highlightLines={[9, 13, 14, 18]}
          code={code} />
      </div>
    );
  }