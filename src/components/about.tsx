import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Server, Database, CloudCog, GraduationCap, Cpu, ShieldCheck, Code2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="w-full flex flex-col justify-center items-center py-20 md:py-32 bg-secondary/20 border-y border-border/60">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-3 text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-mono font-semibold text-primary">
            <Code2 className="w-3.5 h-3.5" /> About Me
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Beyond the Code</h2>
          <p className="max-w-2xl text-muted-foreground text-sm sm:text-base">
            Pursuing BCA with a focus on full-stack web applications and backend performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          
          {/* Main Bio Card */}
          <Card className="lg:col-span-8 bg-card/70 backdrop-blur-md border-border/70 hover:border-primary/40 transition-colors shadow-sm rounded-3xl">
            <CardContent className="p-6 md:p-8 flex flex-col justify-center space-y-5">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">The Developer Journey</h3>
                  <p className="text-xs font-mono text-muted-foreground">BCA Degree (Expected 2027) • Full Stack Developer</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Currently pursuing my BCA (Expected 2027), I work across the full stack—building frontends with Next.js, backends with FastAPI and Node.js, and integrating AI pipelines with pgvector.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Off the screen, I maintain a sharp, analytical mindset through a passion for chess—always thinking three moves ahead when designing scalable, fault-tolerant software architectures.
              </p>
            </CardContent>
          </Card>

          {/* Quick System Specs Card */}
          <Card className="lg:col-span-4 bg-gradient-to-br from-card to-secondary/50 border-border/70 p-6 flex flex-col justify-between shadow-sm rounded-3xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border/60">
                <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Quick Specs
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-muted-foreground block">Degree Target:</span>
                  <span className="font-semibold text-foreground">Bachelor of Computer Applications (2027)</span>
                </div>
                <div>
                  <span className="text-muted-foreground block">Location:</span>
                  <span className="font-semibold text-foreground">Bangalore, India (Open to Remote)</span>
                </div>
                <div>
                  <span className="text-muted-foreground block">Core Focus:</span>
                  <span className="font-semibold text-foreground">Next.js, RAG AI, WebSockets & SQL</span>
                </div>
                <div>
                  <span className="text-muted-foreground block">Server Hosting:</span>
                  <span className="font-semibold text-foreground">Azure Linux VMs & Nginx</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/60 mt-4">
              <p className="text-[11px] text-muted-foreground italic">
                "Code is read far more often than it is written. Build for clarity, architect for performance."
              </p>
            </div>
          </Card>

          {/* Bento Grid Skills Architecture (4 Pillars) */}
          <Card className="lg:col-span-12 bg-card/70 backdrop-blur-md border-border/70 p-6 md:p-8 shadow-sm rounded-3xl">
            <div className="mb-6 flex items-center justify-between">
              <h4 className="text-lg font-bold flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" /> Technical Stack & Skills
              </h4>
              <span className="text-xs font-mono text-muted-foreground hidden sm:inline">Production Tech 2026</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              
              <div className="p-4 rounded-xl bg-background/60 border border-border/60 space-y-2">
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <Terminal size={18} />
                </div>
                <h5 className="font-bold text-sm">Frontend Engine</h5>
                <p className="text-xs text-muted-foreground leading-relaxed">Next.js (App Router), React Server Components, TypeScript, Tailwind CSS</p>
              </div>

              <div className="p-4 rounded-xl bg-background/60 border border-border/60 space-y-2">
                <div className="h-9 w-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-2">
                  <Server size={18} />
                </div>
                <h5 className="font-bold text-sm">Backend & Queues</h5>
                <p className="text-xs text-muted-foreground leading-relaxed">FastAPI, Python, Node.js, Redis, ARQ Worker Queues, WebSockets</p>
              </div>

              <div className="p-4 rounded-xl bg-background/60 border border-border/60 space-y-2">
                <div className="h-9 w-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-2">
                  <Database size={18} />
                </div>
                <h5 className="font-bold text-sm">Databases & AI</h5>
                <p className="text-xs text-muted-foreground leading-relaxed">PostgreSQL, pgvector Embeddings, SQLAlchemy, Genkit / OpenAI RAG</p>
              </div>

              <div className="p-4 rounded-xl bg-background/60 border border-border/60 space-y-2">
                <div className="h-9 w-9 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-2">
                  <CloudCog size={18} />
                </div>
                <h5 className="font-bold text-sm">Cloud & DevOps</h5>
                <p className="text-xs text-muted-foreground leading-relaxed">Azure (Linux VMs), Nginx, GitHub Actions CI/CD, Stripe Webhooks</p>
              </div>

            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}