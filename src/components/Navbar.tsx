import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4ade80]"></span>
          G. M Mostahid
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollTo('#contact')}
            className="px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/10 rounded-full text-sm font-medium transition-all"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white min-w-[48px] min-h-[48px] flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-white/5 absolute top-20 left-0 right-0 py-4 px-6 flex flex-col gap-4 shadow-2xl"
        >
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-left py-3 text-lg font-medium text-slate-300 hover:text-white border-b border-white/5 min-h-[48px]"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollTo('#contact')}
            className="mt-2 py-3 bg-[#4ade80] text-[#0a0a0a] rounded-lg font-semibold text-center min-h-[48px]"
          >
            Let's Talk
          </button>
        </motion.div>
      )}
    </nav>
  );
}
