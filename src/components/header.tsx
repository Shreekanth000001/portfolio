"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Command } from "lucide-react";

interface AppHeaderProps {
  onOpenCommandPalette: () => void;
}

export function AppHeader({ onOpenCommandPalette }: AppHeaderProps) {
  return (
    <header className="w-full px-4 lg:px-8 h-16 flex items-center bg-background/85 backdrop-blur-xl sticky top-0 z-40 border-b border-border/60 transition-all duration-300">
      <Link href="#" className="flex items-center group" prefetch={false}>
        {/* Same logo container as footer */}
        <div className="relative w-9 h-9 overflow-hidden rounded-xl bg-white p-0.5 border border-slate-300 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-all">
          <Image 
            src="/logo.png"
            alt="Shreekanth K Logo"
            fill
            sizes="36px"
            className="object-contain p-0.5"
            priority
          />
        </div>
        <div className="ml-3 flex flex-col">
          <span className="text-sm font-bold tracking-tight text-foreground group-hover:text-primary transition-colors font-sans">
            Shreekanth K
          </span>
          <span className="text-[10px] font-mono text-muted-foreground">
            Full Stack Developer
          </span>
        </div>
      </Link>

      <nav className="ml-auto hidden md:flex items-center gap-6 text-sm font-medium">
        <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
          About
        </Link>
        <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
          Projects
        </Link>
        <Link href="#ai-generator" className="text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
          AI Tool
        </Link>
        <Link href="#process" className="text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
          Process
        </Link>
        <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
          Contact
        </Link>
      </nav>

      <div className="ml-auto md:ml-6 flex items-center gap-2.5">
        <button
          onClick={onOpenCommandPalette}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/80 hover:bg-secondary text-xs font-mono text-muted-foreground border border-border/60 transition-colors shadow-xs"
          title="Open Command Palette (Cmd+K)"
        >
          <Command className="w-3.5 h-3.5 text-primary" />
          <span className="hidden sm:inline">Search</span>
          <kbd className="rounded bg-background px-1.5 py-0.5 text-[10px] border border-border">⌘K</kbd>
        </button>
        
        <ThemeToggle />
      </div>
    </header>
  );
}