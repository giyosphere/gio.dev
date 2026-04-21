import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Reveal from "./Reveal.jsx";
import Tag from "./ui/Tag.jsx";
import ProjectModal from "./ProjectModal.jsx";
import { projects } from "@/data/projects.js";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="projects" className="py-20 md:py-28 px-8 md:px-14 lg:px-20 border-b border-border">
        <Reveal>
          <p className="glitch font-body text-[11px] tracking-[0.22em] uppercase text-muted mb-8">
            Works
          </p>
        </Reveal>

        <div className="flex flex-col divide-y divide-border">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <article
                className="group py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-0 cursor-pointer"
                onClick={() => setSelected(project)}
              >
                {/* Number */}
                <span className="font-mono text-[11px] text-muted/40 md:w-14 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="glitch font-body font-[200] text-2xl md:text-3xl text-text tracking-wide flex-1 group-hover:text-muted transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 md:w-56 shrink-0">
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>

                {/* Arrow hint */}
                <div className="flex items-center gap-1 md:ml-8 shrink-0 text-muted/0 group-hover:text-muted transition-colors duration-200">
                  <ArrowUpRight size={16} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
