import { motion } from "framer-motion";
import { fade } from "./lib/motion";
import { Hero } from "./components/Hero";
import { QuickStart } from "./components/QuickStart";
import { Links } from "./components/Links";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text font-sans flex flex-col items-center px-6 pt-20 pb-30 transition-colors duration-300">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, color-mix(in oklch, var(--color-primary) 5%, transparent) 0%, transparent 70%)",
        }}
      />
      <ThemeToggle />
      <Hero />
      <QuickStart />
      <Links />
      <motion.p
        {...fade(0.4)}
        className="mt-20 text-[12px] text-faint text-center tracking-[0.04em]"
      >
        Open source · Self-hosted · Built with Bun & TypeScript
      </motion.p>
    </div>
  );
}
