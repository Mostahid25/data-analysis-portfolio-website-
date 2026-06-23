import { motion } from 'motion/react';
import { Mail, Linkedin, Github, CalendarDays, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/5 bg-[#050505] overflow-hidden pt-24 pb-12 px-6">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Ready to find insights in your messy data?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm currently open for entry-level roles and freelance data modeling & dashboarding projects. Let's discuss your data needs.
          </p>

          <div className="flex flex-col items-center">
            <a 
              href="mailto:gmostahid@example.com" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#4ade80] hover:bg-[#3bca6b] text-[#0a0a0a] rounded-full font-bold text-lg hover:shadow-[0_0_40px_-10px_#4ade80] transition-all min-h-[48px]"
            >
              <CalendarDays size={20} />
              Book My Strategy Call
            </a>
            <p className="mt-4 text-sm font-medium text-slate-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
              Takes less than 60 seconds
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
            </p>
          </div>
        </motion.div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 text-left">
          <div>
            <div className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4ade80]"></span>
              G. M Mostahid
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Data Analyst<br/>
              BSc Statistics, Khulna University<br/>
              Khulna / Dhaka, Bangladesh
            </p>
          </div>
          
          <div className="md:col-span-2 flex flex-col items-start md:items-end w-full">
            <div className="flex gap-4 mb-8">
              <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-slate-300 hover:text-white transition-colors border border-white/10 min-h-[48px] min-w-[48px] flex items-center justify-center aria-label='LinkedIn'">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Mostahid25?tab=repositories" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-slate-300 hover:text-white transition-colors border border-white/10 min-h-[48px] min-w-[48px] flex items-center justify-center aria-label='GitHub'">
                <Github size={20} />
              </a>
              <a href="mailto:gmostahid@example.com" className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-slate-300 hover:text-white transition-colors border border-white/10 min-h-[48px] min-w-[48px] flex items-center justify-center aria-label='Email'">
                <Mail size={20} />
              </a>
              <a href="tel:+8801771426048" className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-slate-300 hover:text-white transition-colors border border-white/10 min-h-[48px] min-w-[48px] flex items-center justify-center aria-label='Phone'">
                <Phone size={20} />
              </a>
            </div>
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} G. M Mostahid. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
