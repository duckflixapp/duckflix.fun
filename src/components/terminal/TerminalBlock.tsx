import { type ReactNode } from "react";
import { CopyButton } from "./CopyButton";

const DOTS = ["#ff5f57", "#febc2e", "#28c840"];

export interface TerminalBlockProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  osTags: string[];
  activeOs: string;
  onOsChange: (os: string) => void;
  comment?: string;
  copyText?: string;
  footerText?: string;
  children?: ReactNode;
}

export function TerminalBlock({
  tabs,
  activeTab,
  onTabChange,
  osTags,
  activeOs,
  onOsChange,
  comment,
  copyText,
  footerText,
  children,
}: TerminalBlockProps) {
  return (
    <div className="bg-surface border border-primary/8 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
      {/* Title bar */}
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-primary/6">
        {/* Mac tačkice */}
        <div className="flex gap-1.5">
          {DOTS.map((c) => (
            <div
              key={c}
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: c }}
            />
          ))}
        </div>

        {/* Tabovi (Sada interaktivni) */}
        <div className="flex gap-1.5 ml-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => onTabChange(t)}
              className={`text-[11px] px-2.5 py-0.5 rounded-xl font-medium transition-colors ${
                activeTab === t
                  ? "bg-primary text-primary-fg"
                  : "text-muted border border-primary/12 hover:text-text"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* OS Tagovi (Sada interaktivni) */}
        <div className="ml-auto flex gap-1.5">
          {osTags.map((label) => (
            <button
              key={label}
              onClick={() => onOsChange(label)}
              className={`text-[10px] px-2 py-0.5 rounded-xl font-medium tracking-[0.04em] transition-colors ${
                activeOs === label
                  ? "bg-accent/15 text-accent border border-accent/25"
                  : "text-muted border border-primary/10 hover:text-text"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Code body */}
      <div className="px-5 pt-5 pb-6 font-mono">
        {comment && <p className="text-[12px] text-comment mb-3">{comment}</p>}
        <div className="flex items-start gap-3">
          <div className="flex-1 min-w-0">{children}</div>
          {copyText && <CopyButton text={copyText} />}
        </div>
      </div>

      {footerText && (
        <p className="px-5 pb-4 text-[12px] text-comment">{footerText}</p>
      )}
    </div>
  );
}
