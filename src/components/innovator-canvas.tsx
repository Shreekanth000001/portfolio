"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Lightbulb, Zap, ArrowRight, Layers, ShieldCheck, Code2, ExternalLink, Cpu, Database, Server } from "lucide-react";
import Link from "next/link";

interface DomainBreakthrough {
  id: string;
  badge: string;
  title: string;
  challenge: string;
  creativeShift: string;
  solutionStack: string[];
  metrics: { key: string; val: string }[];
  liveLink: string;
}

const domains: DomainBreakthrough[] = [
  {
    id: "rag-ai",
    badge: "01 // AI RAG INTELLIGENCE",
    title: "Converting PDF Syllabus Chaos into Automated Schedules",
    challenge: "University syllabi are dense, multi-page PDFs. Students waste hours manually organizing exam schedules and topic dependencies.",
    creativeShift: "Transform PDF documents into a 1536-dimensional vector search space, allowing an AI agent to extract key dates, calculate topic difficulty, and generate personalized daily study plans.",
    solutionStack: ["Next.js (App Router)", "OpenAI Embeddings", "PostgreSQL pgvector", "Stripe Webhooks"],
    metrics: [
      { key: "Ingestion Speed", val: "< 3.2s per PDF" },
      { key: "Retrieval Latency", val: "< 420ms RAG" },
      { key: "Vector Space", val: "1536 Dimensions" }
    ],
    liveLink: "https://planner.shreek.me"
  },
  {
    id: "agri-market",
    badge: "02 // GEOSPATIAL BIDDING",
    title: "Peer-to-Peer Agricultural Trading via PostGIS Radius Search",
    challenge: "Agricultural crop markets suffer from severe information asymmetry and predatory middlemen taking unfair margins from farmers.",
    creativeShift: "Engineer a real-time, location-aware bidding marketplace where farmers publish crop yields and buyers submit binding bids filtered by PostGIS geographic radius queries.",
    solutionStack: ["React Client", "PostgreSQL PostGIS", "WebSockets Engine", "Node.js Compute"],
    metrics: [
      { key: "Bid Sync Speed", val: "< 18ms Real-Time" },
      { key: "Geospatial Index", val: "PostGIS Geography" },
      { key: "Marketplace Type", val: "Direct P2P Bidding" }
    ],
    liveLink: "https://agriconnect.shreek.me"
  },
  {
    id: "gaming-sockets",
    badge: "03 // LOW-LATENCY INFRA",
    title: "High-Concurrency Matchmaking & WebSocket Relay",
    challenge: "Traditional HTTP polling creates high server overhead, stale room states, and sluggish user experiences in multiplayer social platforms.",
    creativeShift: "Decouple heavy database persistence from active socket relays. Use Redis Pub/Sub as an in-memory event bus to distribute messages instantly across 5,000+ active connections.",
    solutionStack: ["Next.js App Router", "Redis Pub/Sub", "WebSockets Gateway", "Tailwind CSS"],
    metrics: [
      { key: "Relay Latency", val: "< 12ms WebSocket" },
      { key: "Socket Concurrency", val: "5,000+ Sockets" },
      { key: "In-Memory Bus", val: "Redis Channel Pub/Sub" }
    ],
    liveLink: "https://nexusgames.shreek.me/"
  }
];

export function InnovatorCanvas() {
  const [activeTab, setActiveTab] = useState<string>("rag-ai");

  const current = domains.find((d) => d.id === activeTab) || domains[0];

  return (
    <section id="canvas" className="w-full py-24 md:py-32 bg-secondary/10 border-y border-border/60 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono font-semibold text-cyan-400">
            <BrainCircuit className="w-3.5 h-3.5" /> 01 // PROBLEM-SOLVING CANVAS
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-sans">
            Creative Breakthroughs & Architecture
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Deconstructing real-world friction into first-principles software innovations. Click a domain to explore the solution breakdown.
          </p>
        </div>

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Domain Selectors (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {domains.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveTab(d.id)}
                className={`p-5 rounded-2xl text-left transition-all border font-mono text-xs flex flex-col justify-between group ${
                  activeTab === d.id
                    ? "bg-slate-950 text-slate-100 border-cyan-500/50 ring-1 ring-cyan-500/30 shadow-xl shadow-cyan-500/5 scale-[1.02]"
                    : "bg-card/70 hover:bg-secondary text-muted-foreground border-border/80"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className={`font-bold ${activeTab === d.id ? "text-cyan-400" : "text-muted-foreground"}`}>
                    {d.badge}
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${activeTab === d.id ? "text-cyan-400 translate-x-1" : "opacity-0"}`} />
                </div>
                <h4 className="font-bold text-sm font-sans text-foreground group-hover:text-cyan-400 transition-colors">
                  {d.title}
                </h4>
              </button>
            ))}
          </div>

          {/* Right Column: Interactive Canvas Spotlight (8 Columns) */}
          <div className="lg:col-span-8">
            <Card className="h-full bg-card/80 backdrop-blur-xl border-border/80 p-6 sm:p-8 shadow-2xl rounded-3xl relative overflow-hidden flex flex-col justify-between">
              
              <div className="space-y-6">
                
                {/* Header info */}
                <div className="space-y-2 border-b border-border/60 pb-5">
                  <span className="text-xs font-mono font-bold text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    {current.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground pt-2">
                    {current.title}
                  </h3>
                </div>

                {/* Challenge vs Creative Paradigm Shift */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="p-5 rounded-2xl bg-secondary/50 border border-border/60 space-y-2">
                    <h4 className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Lightbulb className="w-4 h-4" /> The Problem / Friction:
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {current.challenge}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 space-y-2">
                    <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4" /> Creative Paradigm Shift:
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                      {current.creativeShift}
                    </p>
                  </div>

                </div>

                {/* Metrics & Tech Stack */}
                <div className="pt-2 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Stack Pills */}
                  <div className="md:col-span-7 space-y-2">
                    <span className="text-[11px] font-mono text-muted-foreground uppercase font-semibold block">
                      Implementation Stack:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {current.solutionStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-md bg-secondary text-foreground font-mono text-xs border border-border/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="md:col-span-5 grid grid-cols-3 gap-2 text-center font-mono">
                    {current.metrics.map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-background/80 border border-border/60 space-y-0.5">
                        <span className="text-[10px] text-muted-foreground block truncate">{m.key}</span>
                        <span className="text-xs font-bold text-cyan-400">{m.val}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>

              {/* Bottom Action */}
              <div className="pt-6 border-t border-border/60 flex items-center justify-between mt-6">
                <span className="text-xs font-mono text-muted-foreground hidden sm:inline">
                  Tested & Deployed Live
                </span>
                
                <Button asChild size="sm" className="rounded-xl text-xs font-semibold gap-1.5 shadow-md shadow-primary/20">
                  <a href={current.liveLink} target="_blank" rel="noopener noreferrer">
                    Launch Production App <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Button>
              </div>

            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
