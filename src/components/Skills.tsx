"use client";

import { motion } from "framer-motion";
import ScrollFloat from './ScrollFloat';

const skills = [
  { category: "Languages", items: ["Java", "Python", "JavaScript", "Bash"] },
  { category: "Backend", items: ["Spring Boot", "Spring MVC", "Spring Security", "REST API", "Microservices", "Kafka"] },
  { category: "Data & DB", items: ["MySQL", "Stored Procedures", "Query Optimization", "Performance Tuning"] },
  { category: "CI/CD & DevOps", items: ["GitHub Actions", "Docker", "Git", "Linux", "Bash Scripting"] },
  { category: "Frontend & UI", items: ["React.js", "Redux", "HTML5", "CSS3", "ES6"] },
  { category: "Gen AI", items: ["LangChain", "OpenAI API", "Google Gemini", "RAG", "ChromaDB", "NLP"] },
];

export default function Skills() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="skills">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="mb-6">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
              textClassName="text-5xl md:text-7xl font-bold text-white tracking-tight"
            >
              Technical Arsenal
            </ScrollFloat>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A comprehensive stack enabling end-to-end development of scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <h3 className="text-2xl font-bold text-blue-300 mb-6 uppercase tracking-wider">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 bg-black/40 rounded-full text-sm text-gray-300 border border-white/10 hover:border-white/30 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
