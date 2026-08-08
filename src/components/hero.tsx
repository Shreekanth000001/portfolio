"use client";

import { TerminalConsole } from "@/components/terminal-console";
import { Button } from "@/components/ui/button";
import { ArrowRight, Command, Code, Sparkles } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  onOpenCommandPalette: () => void;
}

export function Hero({ onOpenCommandPalette }: HeroProps) {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden bg-grid-pattern">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Developer Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-mono font-semibold text-emerald-400 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for Web Development Internships
            </div>

            {/* Title & Bio */}
            <div className="space-y-3">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-sans leading-tight">
                Shreekanth K
                <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mt-2">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
                Pursuing BCA (2027) in Bangalore. I build web applications, RAG AI integrations, and real-time backends using Next.js, FastAPI, PostgreSQL, and WebSockets.
              </p>
            </div>

            {/* Quote Box */}
            <div className="p-4 rounded-xl bg-card/70 backdrop-blur-md border border-border/80 text-xs sm:text-sm font-mono text-muted-foreground space-y-1 shadow-sm">
              <p className="text-foreground font-semibold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                "Simplicity is prerequisite for reliability." — Edsger W. Dijkstra
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg" className="rounded-xl h-12 px-6 text-xs sm:text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={onOpenCommandPalette}
                className="rounded-xl h-12 px-5 text-xs sm:text-sm font-mono border-border/80 hover:bg-secondary transition-all"
              >
                <Command className="mr-2 h-4 w-4 text-primary" /> Command Menu (⌘K)
              </Button>
            </div>

            {/* Core Tech Stack */}
            <div className="pt-4 border-t border-border/60">
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-primary" /> Tech Stack:
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {[
                  "Next.js (App Router)",
                  "TypeScript",
                  "FastAPI (Python)",
                  "Node.js",
                  "PostgreSQL / pgvector",
                  "Redis",
                  "WebSockets",
                  "Azure Linux VMs"
                ].map((pill) => (
                  <span key={pill} className="px-2.5 py-1 rounded-md bg-secondary/80 text-foreground border border-border/60">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Terminal Console */}
          <div className="lg:col-span-5 w-full">
            <TerminalConsole />
          </div>

        </div>
      </div>
    </section>
  );
}
