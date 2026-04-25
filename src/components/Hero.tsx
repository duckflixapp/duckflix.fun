import { motion } from 'framer-motion'
import { fade } from '../lib/motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <motion.div {...fade(0)} className="flex flex-col items-center text-center max-w-2xl w-full">
      <div className="mb-7">
        {/* placeholder for logo */}
      </div>

      <h1
        className="font-bold tracking-[-0.03em] leading-none m-0 text-text"
        style={{ fontSize: 'clamp(48px, 9vw, 80px)' }}
      >
        DuckFlix
      </h1>

      <p className="mt-4 text-[12px] font-medium tracking-[0.18em] uppercase text-primary">
        Your media. Your server. Your rules.
      </p>

      <p className="mt-5 text-[15px] font-light leading-7 text-muted max-w-110">
        A self-hosted, open-source streaming platform for movies and series.
        No subscriptions. No tracking. Full control.
      </p>

      <a title='Demo application' href="https://app.duckflix.fun" target='_blank' className="mt-8 inline-flex items-center gap-2.5 border border-primary/15 rounded-full py-1.5 pl-2 pr-3.5 text-[12px] text-muted">
        <span className="bg-primary text-primary-fg text-[10px] font-semibold tracking-[0.08em] px-2 py-0.5 rounded-full">
          DEMO
        </span>
        Try web app on app.duckflix.fun<ArrowRight size={12} />
      </a>
    </motion.div>
  )
}