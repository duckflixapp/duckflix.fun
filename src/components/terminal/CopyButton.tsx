import { useState } from "react";

interface Props {
  text: string;
}

export function CopyButton({ text }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      title="Copy"
      className={`
        shrink-0 bg-primary/8 border border-primary/15 rounded-xl
        px-2.5 py-1 text-[11px] tracking-[0.04em] font-sans
        cursor-pointer transition-colors duration-200
        ${copied ? "text-accent" : "text-muted"}
      `}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
