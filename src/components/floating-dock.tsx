"use client";

import { Command, User, FolderGit2, Cpu, Mail, Terminal as TerminalIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface FloatingDockProps {
  onOpenCommandPalette: () => void;
}

export function FloatingDock({ onOpenCommandPalette }: FloatingDockProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!scrolled) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center gap-1.5 p-2 rounded-2xl bg-slate-900/90 dark:bg-slate-950/90 text-slate-100 border border-slate-800 backdrop-blur-xl shadow-2xl ring-1 ring-white/10 select-none">
        
        <button
          onClick={onOpenCommandPalette}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary text-slate-950 hover:bg-primary/90 font-mono text-xs font-bold transition-all shadow-xs"
          title="Open Command Palette (Cmd+K)"
        >
          <Command className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">⌘K</span>
        </button>

        <div className="h-4 w-px bg-slate-800 mx-1" />

        <button
          onClick={() => handleNavigate("#about")}
          className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-colors"
          title="About & Skills"
        >
          <User className="w-4 h-4" />
        </button>

        <button
          onClick={() => handleNavigate("#projects")}
          className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-colors"
          title="Projects"
        >
          <FolderGit2 className="w-4 h-4" />
        </button>

        <button
          onClick={() => handleNavigate("#ai-generator")}
          className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-colors"
          title="AI Copy Lab"
        >
          <Cpu className="w-4 h-4" />
        </button>

        <button
          onClick={() => handleNavigate("#contact")}
          className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-colors"
          title="Contact"
        >
          <Mail className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
}
