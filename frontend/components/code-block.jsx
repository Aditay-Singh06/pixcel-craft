"use client"
import { useState } from "react"
import { Copy, Check, Expand } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <div className="absolute right-2 top-2 flex space-x-2 z-10">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300"
          title={copied ? "Copied!" : "Copy code"}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-1.5 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300"
          title={expanded ? "Collapse" : "Expand"}
        >
          <Expand size={16} />
        </button>
      </div>
      <div
        className={`${
          expanded ? "max-h-none" : "max-h-[400px]"
        } overflow-auto rounded-lg`}
      >
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          customStyle={{
            margin: 0,
            borderRadius: "0.5rem",
            background: "#111",
            fontSize: "0.9rem"
          }}
          wrapLines={true}
          showLineNumbers={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
