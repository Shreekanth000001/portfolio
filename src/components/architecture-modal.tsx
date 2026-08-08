"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Cpu, Database, Server, Layers, ArrowRight, ShieldCheck, Zap, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ProjectArchitecture {
  title: string;
  category: string;
  blueprint: {
    nodes: { label: string; sub: string; icon: string }[];
    techDetails: { key: string; value: string }[];
    codeSnippet: string;
  };
  link: string;
  docsLink?: string;
}

interface ArchitectureModalProps {
  project: ProjectArchitecture | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ArchitectureModal({ project, open, onOpenChange }: ArchitectureModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-6 border-border/80 bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden font-sans">
        
        {/* Header */}
        <DialogHeader className="space-y-1.5 border-b border-border/60 pb-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              System Architecture Blueprint
            </span>
            <span className="text-xs font-mono text-muted-foreground">{project.category}</span>
          </div>
          <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2 pt-1">
            <Cpu className="w-5 h-5 text-primary" /> {project.title}
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            End-to-end data flow, compute nodes, and architectural specifications.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4 max-h-[75vh] overflow-y-auto pr-1 terminal-scroll">
          
          {/* Data Flow Diagram Pipeline */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 font-bold">
              <Layers className="w-4 h-4 text-primary" /> Pipeline & Data Flow Nodes:
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 relative">
              {project.blueprint.nodes.map((node, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-card border border-border/80 relative flex flex-col justify-between group hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-muted-foreground px-1.5 py-0.5 rounded bg-secondary">
                      NODE 0{idx + 1}
                    </span>
                    <span className="text-xs text-primary font-mono font-bold">{node.icon}</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-foreground group-hover:text-primary transition-colors">{node.label}</h5>
                    <p className="text-[11px] text-muted-foreground mt-0.5 font-mono">{node.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Key Engineering Specs:
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
              {project.blueprint.techDetails.map((detail, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-secondary/50 border border-border/60 space-y-1">
                  <span className="text-[10px] text-muted-foreground block uppercase">{detail.key}</span>
                  <span className="font-bold text-foreground text-xs">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Production Code Snippet */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 font-bold">
              <Code2 className="w-4 h-4 text-amber-400" /> Architectural Code Implementation:
            </h4>
            
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-200 overflow-x-auto terminal-scroll">
              <pre className="text-[11px] leading-relaxed text-sky-300">
                <code>{project.blueprint.codeSnippet}</code>
              </pre>
            </div>
          </div>

        </div>

        {/* Footer CTAs */}
        <div className="pt-4 border-t border-border/60 flex items-center justify-between">
          <div className="flex gap-2">
            <Button asChild size="sm" className="rounded-xl text-xs font-semibold gap-1.5">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Launch Live App <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Button>
            {project.docsLink && (
              <Button asChild size="sm" variant="outline" className="rounded-xl text-xs font-medium border-border/80">
                <a href={project.docsLink} target="_blank" rel="noopener noreferrer">
                  View Source Code
                </a>
              </Button>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={() => onOpenChange(false)} className="text-xs font-mono text-muted-foreground">
            Close ✕
          </Button>
        </div>

      </DialogContent>
    </Dialog>
  );
}
