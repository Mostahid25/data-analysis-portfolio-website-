import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="about" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#4ade80]/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      {/* Floating Interactive Stickers */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="hidden lg:flex absolute top-1/3 right-[15%] z-20 glass-card px-6 py-3 rounded-full items-center gap-3 border-[#4ade80]/30 shadow-[#4ade80]/10 shadow-xl cursor-default"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] animate-pulse"></span>
        <span className="font-mono text-sm text-[#4ade80] tracking-wide">Data &gt; Opinion</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [2, -2, 2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="hidden lg:flex absolute bottom-1/3 left-[15%] z-20 glass-card px-6 py-3 rounded-xl border-purple-500/30 font-mono text-sm text-purple-300 shadow-xl cursor-default"
      >
        import pandas as pd
      </motion.div>

      <div className="max-w-6xl mx-auto z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]"></span>
            </span>
            <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">
              Open to remote & entry-level roles
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]"
          >
            G. M Mostahid <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
              Data Analyst
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
          >
            I work with messy datasets, clean and organize data, and build dashboards using <strong className="text-slate-200 font-medium">Excel, SQL, and Power BI</strong>. I bridge the gap between business questions and data reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a0a0a] rounded-full font-semibold hover:bg-slate-200 transition-colors pointer-cursor"
            >
              View My Work
              <ArrowRight size={18} />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1xbB2bDtGKUw9uSYDMreEfRvoQ6IbDV0E?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 glass hover:bg-white/10 rounded-full font-medium text-white transition-colors"
            >
              Resume <span className="opacity-50 text-sm">BSc Statistics</span>
              <Download size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
