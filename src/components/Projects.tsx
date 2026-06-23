import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

function Slider({ slides }: { slides: string[] }) {
  const [index, setIndex] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % slides.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-64 md:h-72 overflow-hidden bg-slate-900 group">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slides[index]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
          alt={`Dashboard Screenshot ${index + 1}`}
        />
      </AnimatePresence>

      {/* Decorative Gradient Overlay to ensure text readability if overlaid */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-[#0a0a0a]/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 pointer-events-none">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-auto">
          <button className="flex items-center gap-2 px-6 py-3 bg-[#4ade80] hover:bg-[#3bca6b] transition-colors text-[#0a0a0a] font-semibold rounded-full min-h-[48px]">
            <span>View Dashboard</span>
            <ExternalLink size={18} />
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <div className="absolute inset-x-0 bottom-0 top-0 flex items-center justify-between px-3 pointer-events-none">
          <button 
            onClick={prev} 
            className="w-12 h-12 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/80 backdrop-blur transition-colors shadow-lg pointer-events-auto min-h-[48px] min-w-[48px]"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next} 
            className="w-12 h-12 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/80 backdrop-blur transition-colors shadow-lg pointer-events-auto min-h-[48px] min-w-[48px]"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none z-10">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Projects() {
  // Using high quality abstract data/tech placeholders if real screenshots aren't provided.
  const projects = [
    {
      title: "Global Layoffs Analysis (MySQL)",
      description: "End-to-end cleaning and analysis tracking company layoffs. Used CTEs and window functions to uncover trends hit hardest during the timeline.",
      tags: ["MySQL", "CTEs", "Window Functions", "Data Cleaning"],
      slides: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
      ],
      colSpan: "md:col-span-2 lg:col-span-2"
    },
    {
      title: "Data Jobs Market Analysis",
      description: "Interactive Power BI dashboard analyzing 479k+ data job postings to uncover median salaries, market trends, and compensation benchmarks.",
      tags: ["Power BI", "DAX", "Data Viz"],
      slides: [
        "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
      ],
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Airbnb Listings Dashboard",
      description: "Cleaned and reshaped raw Airbnb data via Power Query. Built PivotTables reflecting occupancy and pricing density.",
      tags: ["Excel", "Power Query", "PivotTables"],
      slides: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
      ],
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Chocolate Sales Dashboard",
      description: "Sales performance dashboard inspired by Chandoo. KPI cards and visual breakdowns by product, using DAX-style logic.",
      tags: ["Excel", "Dashboard Design", "KPIs"],
      slides: [
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
      ],
      colSpan: "md:col-span-2 lg:col-span-2"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 mt-[-40px] relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#4ade80] font-mono text-sm mb-3 tracking-widest uppercase"
            >
              Selected Works
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-xl"
            >
              Dashboards & Data Cleaning.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-sm mt-6 md:mt-0 text-lg md:text-right"
          >
            Built on real, self-initiated project work. Swipe to view screenshots.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card rounded-2xl overflow-hidden flex flex-col ${project.colSpan}`}
            >
              <Slider slides={project.slides} />
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-slate-300 hover:text-white hover:border-white/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
