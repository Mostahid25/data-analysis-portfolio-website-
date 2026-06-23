import { motion } from 'motion/react';
import { Database, BarChart3, Terminal, FileSpreadsheet, Braces, Code2 } from 'lucide-react';

export function Skills() {
  const skills = [
    { name: 'Advanced Excel', icon: FileSpreadsheet, color: 'text-emerald-400', bgColor: 'bg-emerald-400', level: 'Advanced' },
    { name: 'SQL', icon: Database, color: 'text-blue-400', bgColor: 'bg-blue-400', level: 'Comfortable' },
    { name: 'Power BI', icon: BarChart3, color: 'text-amber-400', bgColor: 'bg-amber-400', level: 'Comfortable' },
    { name: 'DAX', icon: Braces, color: 'text-purple-400', bgColor: 'bg-purple-400', level: 'Intermediate' },
    { name: 'Power Query', icon: Terminal, color: 'text-orange-400', bgColor: 'bg-orange-400', level: 'Advanced' },
    { name: 'Python', icon: Code2, color: 'text-sky-400', bgColor: 'bg-sky-400', level: 'Basic (Learning)' },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#4ade80] font-mono text-sm mb-3 tracking-widest uppercase"
          >
            Skills & Tools
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Where I actually stand.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl text-lg"
          >
            Bars reflect honest working levels based on real hands-on projects, not just certification counts. Python is currently my active learning area.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 group cursor-default"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors ${skill.color}`}>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                    {skill.level}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                  <div className="w-full bg-white/5 h-1.5 rounded-full mt-4 overflow-hidden">
                    <motion.div 
                      className={`h-full ${skill.bgColor}`}
                      initial={{ width: 0 }}
                      whileInView={{ 
                        width: skill.level === 'Advanced' ? '85%' 
                             : skill.level === 'Comfortable' ? '70%' 
                             : skill.level === 'Intermediate' ? '50%'
                             : '20%'
                      }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (index * 0.1), duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
