import { motion } from "framer-motion";
import { fade } from "../lib/motion";
import type { ReactNode } from "react";
import DiscordLogo from "../assets/logo/discord.svg";
import GithubLogo from "../assets/logo/github.svg";
import { useTheme } from "../lib/theme";

interface LinkItem {
  label: string;
  sub: string;
  href: string;
  icon: ReactNode;
}

const LINKS: LinkItem[] = [
  {
    label: "Discord",
    sub: "Join the community",
    href: "https://discord.gg/duckflix",
    icon: <img src={DiscordLogo} alt="Discord" className="w-6 h-6" />,
  },
  {
    label: "GitHub",
    sub: "View the source",
    href: "https://github.com/duckflixapp",
    icon: <img src={GithubLogo} alt="GitHub" className="w-8 h-8" />,
  },
];

export function Links() {
  const { theme } = useTheme();
  return (
    <motion.div {...fade(0.28)} className="mt-16 w-full max-w-175">
      <div className="grid grid-cols-2 gap-3">
        {LINKS.map(({ icon, label, sub, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex flex-col items-center gap-2.5 py-7 px-5
              bg-primary/3 border border-primary/8 rounded-3xl
              no-underline transition-all duration-200
              hover:bg-primary/6 hover:border-primary/18
            "
          >
            <div
              className={`flex items-center justify-center rounded-xl w-10 h-10 ${theme === "dark" ? "bg-primary/15" : "bg-primary/65"}`}
            >
              {icon}
            </div>
            <div className="text-center">
              <p className="text-[14px] font-semibold text-text">{label}</p>
              <p className="text-[12px] text-muted mt-1">{sub}</p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
