import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { TerminalBlock } from "./terminal/TerminalBlock";
import { fade } from "../lib/motion";

export function QuickStart() {
  const [activeTab, setActiveTab] = useState("One-Liner");
  const [activeOs, setActiveOs] = useState("macOS & Linux");

  const isDockerTab = activeTab === "Docker";

const curlCommand = activeOs === 'Windows'
    ? `curl.exe -fsSL https://github.com/duckflixapp/duckflix/releases/latest/download/docker-compose.yml -o docker-compose.yml && docker-compose up -d`
    : `curl -fsSL https://github.com/duckflixapp/duckflix/releases/latest/download/docker-compose.yml -o docker-compose.yml && docker compose up -d`

  const dockerRunCommand = `docker run -d --name duckflix -p 3000:3000 ghcr.io/duckflixapp/duckflix:latest`;

  return (
    <motion.div {...fade(0.15)} className="mt-20 w-full max-w-175">
      <div className="flex items-center gap-2 mb-5">
        <ChevronRight className="text-primary" />
        <span className="font-semibold text-lg text-text">Quick Start</span>
      </div>

      <TerminalBlock
        tabs={["One-Liner", "Docker"]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        osTags={["macOS & Linux", "Windows"]}
        activeOs={activeOs}
        onOsChange={setActiveOs}
        comment={isDockerTab ? "# Pull and run the image directly from GHCR" : "# Pull docker-compose and start DuckFlix"}
        copyText={isDockerTab ? dockerRunCommand : curlCommand}
        footerText={
          activeOs === "Windows"
            ? "Windows users can run via WSL2 or PowerShell."
            : "Works on macOS and Linux."
        }
      >
        {isDockerTab ? (
          <div className="text-[13px] text-text leading-7" style={{ wordBreak: 'break-all' }}>
            <span className="text-primary">{activeOs === 'Windows' ? '>' : '$'}</span>{' '}
            <span>docker run -d --name duckflix -p 3000:3000 </span>
            <span className="text-accent">
              ghcr.io/duckflixapp/duckflix:latest
            </span>
          </div>
        ) : (
          <>
            <div className="text-[13px] text-text leading-7" style={{ wordBreak: 'break-all' }}>
              <span className="text-primary">{activeOs === 'Windows' ? '>' : '$'}</span>{' '}
              <span>{activeOs === 'Windows' ? 'curl.exe' : 'curl'} -fsSL </span>
              <span className="text-accent">
                https://github.com/duckflixapp/duckflix/releases/latest/download/docker-compose.yml
              </span>
              <span> -o docker-compose.yml</span>
            </div>
            <div className="text-[13px] text-text mt-1">
              <span className="text-primary">&amp;&amp;</span>{' '}
              <span>{activeOs === 'Windows' ? 'docker-compose' : 'docker compose'} up -d</span>
            </div>
          </>
        )}
      </TerminalBlock>
    </motion.div>
  );
}
