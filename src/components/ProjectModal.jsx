import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bookmark, Share2, ExternalLink, ArrowUpRight } from "lucide-react";
import Tag from "./ui/Tag.jsx";

const TABS = ["Overview", "Stack", "Links"];

export default function ProjectModal({ project, onClose }) {
               const [activeTab, setActiveTab] = useState("Overview");

       useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-bg flex flex-col overflow-hidden"
    >
      <header className="shrink-0 flex justify-between items-center px-6 md:px-10 py-4 border-b border-border">
        <span className="font-body text-sm text-muted">
          {project.title}{" "}
          <span className="text-muted/40">by</span>{" "}
          <span className="text-text font-medium">Gio Dalaoyan</span>
        </span>

        <div className="flex items-center gap-5">
          <button
            aria-label="Bookmark"
            className="text-muted hover:text-text transition-colors"
          >
            <Bookmark size={17} />
          </button>
          <button
            aria-label="Share"
            className="text-muted hover:text-text transition-colors"
          >
            <Share2 size={17} />
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open live site"
              className="text-muted hover:text-text transition-colors"
            >
              <ExternalLink size={17} />
            </a>
          )}
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-36 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl text-center"
        >
          <p className="font-mono text-[10px] text-muted tracking-[0.25em] uppercase mb-5">
            {project.tags[0]} &nbsp;·&nbsp; {new Date().getFullYear()}
          </p>

          <h2 className="font-body font-[100] text-[10vw] md:text-[7vw] leading-[0.92] tracking-[0.02em] uppercase text-text">
            {project.title}
          </h2>

          <div className="flex items-center justify-center gap-3 mt-7 mb-14">
            <div className="w-7 h-7 rounded-full bg-surface border border-border flex items-center justify-center font-mono text-[10px] text-muted">
              G
            </div>
            <span className="font-body text-sm text-text">Gio Dalaoyan</span>
          </div>

          <div className="text-left max-w-lg mx-auto min-h-[80px]">
            <AnimatePresence mode="wait">
              {activeTab === "Overview" && (
                <motion.p
                  key="overview"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="font-body font-[300] text-muted text-sm leading-[1.85]"
                >
                  {project.description}
                </motion.p>
              )}

              {activeTab === "Stack" && (
                <motion.div
                  key="stack"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-wrap gap-2"
                >
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </motion.div>
              )}

              {activeTab === "Links" && (
                <motion.div
                  key="links"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-col gap-4"
                >
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-text transition-colors tracking-wide"
                    >
                      <ArrowUpRight size={13} /> Live Site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-text transition-colors tracking-wide"
                    >
                      <ArrowUpRight size={13} /> Source Code
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <p className="font-mono text-xs text-muted/50">No links available.</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10"
      >
        <div className="flex items-center bg-text text-bg rounded-2xl overflow-hidden shadow-xl">
          <div className="w-11 h-11 bg-text/80 flex items-center justify-center font-mono text-bg text-sm font-bold mx-0.5 rounded-xl">
            G.
          </div>

          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-body text-xs tracking-wide transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? "text-bg"
                  : "text-bg/45 hover:text-bg/75"
              }`}
            >
              {tab}
            </button>
          ))}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f5c842] text-[#111] font-body font-medium text-xs px-5 py-2.5 m-1 rounded-xl hover:bg-[#f5c842]/90 transition-colors tracking-wide whitespace-nowrap"
            >
              Visit Site
            </a>
          )}
        </div>

        <button
          onClick={onClose}
          aria-label="Close modal"
          className="w-11 h-11 bg-text text-bg rounded-xl flex items-center justify-center hover:opacity-75 transition-opacity shadow-xl"
        >
          <X size={17} />
        </button>
      </motion.div>
    </motion.div>
  );
}
