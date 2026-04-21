import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bookmark, Share2, ExternalLink } from "lucide-react";
import Tag from "./ui/Tag.jsx";

const TABS = ["Creator", "Stack", "Details", "Links"];

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState(null);

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex flex-col justify-end"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-bg rounded-t-3xl overflow-hidden flex flex-col"
        style={{ height: "92vh" }}
      >
        {/* Top bar */}
        <div className="shrink-0 flex justify-between items-center px-6 md:px-10 py-4 border-b border-border">
          <span className="font-body text-sm text-muted">
            {project.title}{" "}
            <span className="text-muted/40">by</span>{" "}
            <span className="text-text font-medium">Gio Dalaoyan</span>
          </span>
          <div className="flex items-center gap-5">
            <button aria-label="Bookmark" className="text-muted hover:text-text transition-colors">
              <Bookmark size={17} />
            </button>
            <button aria-label="Share" className="text-muted hover:text-text transition-colors">
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
        </div>

        {/* Title section */}
        <div className="shrink-0 text-center py-6 px-6 border-b border-border">
          <p className="font-mono text-[10px] text-muted tracking-[0.25em] uppercase mb-2">
            {project.tags[0]}&nbsp;·&nbsp;{new Date().getFullYear()}
          </p>
          <h2 className="font-body font-[100] text-4xl md:text-6xl leading-[0.92] tracking-[0.02em] uppercase text-text">
            {project.title}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="w-6 h-6 rounded-full bg-surface border border-border flex items-center justify-center font-mono text-[9px] text-muted">
              G
            </div>
            <span className="font-body text-sm text-text">Gio Dalaoyan</span>
          </div>
        </div>

        {/* Website preview iframe */}
        <div className="flex-1 overflow-hidden relative">
          {project.liveUrl ? (
            <iframe
              src={project.liveUrl}
              title={project.title}
              className="w-full h-full border-0"
              loading="lazy"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-muted font-mono text-xs">
              No preview available
            </div>
          )}

          {/* Tab content panel — floats above iframe */}
          <AnimatePresence>
            {activeTab && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-sm bg-bg border border-border rounded-2xl px-5 py-4 shadow-2xl"
              >
                {activeTab === "Creator" && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center font-mono text-sm text-muted">
                      G
                    </div>
                    <div>
                      <p className="font-body text-sm text-text font-medium">Gio Dalaoyan</p>
                      <p className="font-mono text-[10px] text-muted">Frontend Developer · UI Designer</p>
                    </div>
                  </div>
                )}

                {activeTab === "Stack" && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                )}

                {activeTab === "Details" && (
                  <p className="font-body text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                )}

                {activeTab === "Links" && (
                  <div className="flex flex-col gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-muted hover:text-text transition-colors tracking-wide"
                      >
                        → Live Site
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-muted hover:text-text transition-colors tracking-wide"
                      >
                        → Source Code
                      </a>
                    )}
                    {!project.liveUrl && !project.githubUrl && (
                      <p className="font-mono text-xs text-muted/50">No links available.</p>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom pill toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10"
        >
          <div className="flex items-center bg-text text-bg rounded-2xl overflow-hidden shadow-xl">
            <div className="w-11 h-11 bg-text/80 flex items-center justify-center font-mono text-bg text-sm font-bold mx-0.5 rounded-xl">
              G.
            </div>

            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(activeTab === tab ? null : tab)}
                className={`px-4 py-3 font-body text-xs tracking-wide transition-colors whitespace-nowrap ${
                  activeTab === tab ? "text-bg" : "text-bg/45 hover:text-bg/75"
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
    </motion.div>
  );
}
