import React from 'react'
import { CodeBlockFive, CodeBlockFour } from './CodeBlockDemo'
import { TextGenerateEffectDemoTwo } from './TextGenerateEffectDemo'

const Installation = () => {
  return (
    <section
              id="installation"
              className="w-full py-12 md:py-24 lg:py-32 bg-[#07091C]"
            >
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                      <TextGenerateEffectDemoTwo/>
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                      Get started in seconds with npm.
                    </p>
                  </div>
                </div>
                <div className="mx-auto max-w-3xl py-12">
                  <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                    <CodeBlockFour/>  
                    {/* <pre className="overflow-x-auto bg-muted p-4 rounded-md text-sm">
                      {`npm install pixel-craft-react`}
                      </pre> */}
                  </div>
                  <div className="mt-8 space-y-4">
                    <h3 className="text-xl font-bold">Basic Usage</h3>
                    <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                      < CodeBlockFive/>
                      {/* <pre className="overflow-x-auto bg-muted p-4 rounded-md text-sm">
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
                      </pre> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default Installation