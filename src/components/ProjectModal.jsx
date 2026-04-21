import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bookmark, Share2, ExternalLink } from "lucide-react";
import Tag from "./ui/Tag.jsx";

const TABS_DEFAULT    = ["Creator", "Stack", "Details", "Links"];
const TABS_COMING_SOON = ["Creator", "Details"];

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
        style={{ height: "92dvh" }}
      >
        {/* Top bar */}
        <div className="shrink-0 flex justify-between items-center px-4 md:px-10 py-3 md:py-4 border-b border-border">
          <span className="font-body text-xs md:text-sm text-muted truncate pr-4">
            {project.title}{" "}
            <span className="text-muted/40">by</span>{" "}
            <span className="text-text font-medium">Gio Dalaoyan</span>
          </span>
          <div className="flex items-center gap-3 md:gap-5 shrink-0">
            <button aria-label="Bookmark" className="text-muted hover:text-text transition-colors p-1">
              <Bookmark size={15} />
            </button>
            <button aria-label="Share" className="text-muted hover:text-text transition-colors p-1">
              <Share2 size={15} />
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open live site"
                className="text-muted hover:text-text transition-colors p-1"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Title section */}
        <div className="shrink-0 text-center py-4 md:py-6 px-4 md:px-6 border-b border-border">
          <p className="font-mono text-[9px] md:text-[10px] text-muted tracking-[0.25em] uppercase mb-1.5 md:mb-2">
            {project.tags[0]}&nbsp;·&nbsp;{new Date().getFullYear()}
          </p>
          <h2 className="font-body font-[100] text-3xl md:text-6xl leading-[0.92] tracking-[0.02em] uppercase text-text">
            {project.title}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2 md:mt-3">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-surface border border-border flex items-center justify-center font-mono text-[9px] text-muted">
              G
            </div>
            <span className="font-body text-xs md:text-sm text-text">Gio Dalaoyan</span>
          </div>
        </div>

        {/* Website preview iframe / coming soon teaser */}
        <div className="flex-1 overflow-hidden relative">
          {project.comingSoon ? (
            <div className="flex flex-col items-center justify-center h-full gap-6 px-8 text-center select-none">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted"
              >
                In Development
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-body font-[100] text-3xl md:text-5xl text-text leading-tight tracking-wide"
              >
                {project.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-body text-sm text-muted leading-relaxed max-w-sm"
              >
                {project.description}
              </motion.p>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 0.6, duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted/50"
              >
                Coming Soon
              </motion.span>
            </div>
          ) : project.liveUrl ? (
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
                className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-sm bg-bg border border-border rounded-2xl px-4 md:px-5 py-3 md:py-4 shadow-2xl"
              >
                {activeTab === "Creator" && (
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-surface border border-border flex items-center justify-center font-mono text-sm text-muted shrink-0">
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
          className="absolute bottom-4 md:bottom-6 left-3 right-3 md:left-1/2 md:right-auto md:-translate-x-1/2 flex items-center gap-2 z-10"
        >
          {/* Pill — flex-1 on mobile so it fills space left of X button, auto on desktop */}
          <div className="flex-1 md:flex-none flex items-center bg-text text-bg rounded-2xl shadow-xl overflow-x-auto scrollbar-none">
            <div className="w-9 h-9 md:w-11 md:h-11 bg-text/80 flex items-center justify-center font-mono text-bg text-xs md:text-sm font-bold mx-0.5 rounded-xl shrink-0">
              G.
            </div>

            {(project.comingSoon ? TABS_COMING_SOON : TABS_DEFAULT).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(activeTab === tab ? null : tab)}
                className={`px-3 md:px-4 py-2.5 md:py-3 font-body text-[11px] md:text-xs tracking-wide transition-colors whitespace-nowrap shrink-0 ${
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
                className="bg-[#f5c842] text-[#111] font-body font-medium text-[11px] md:text-xs px-4 md:px-5 py-2 md:py-2.5 m-1 rounded-xl hover:bg-[#f5c842]/90 transition-colors tracking-wide whitespace-nowrap shrink-0"
              >
                Visit Site
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 md:w-11 md:h-11 bg-text text-bg rounded-xl flex items-center justify-center hover:opacity-75 transition-opacity shadow-xl shrink-0"
          >
            <X size={15} />
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
