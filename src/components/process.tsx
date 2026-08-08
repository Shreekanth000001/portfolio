import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Code2, ServerCog, Rocket, Workflow } from "lucide-react";

const processes = [
  {
    id: "01",
    title: "Systems Architecture",
    description: "Before writing code, I design decoupled microservices, map relational database schemas, and define strict API contracts to ensure a scalable foundation.",
    icon: Lightbulb,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    id: "02",
    title: "Frontend Engineering",
    description: "Using Next.js and React Server Components, I build highly responsive, edge-cached user interfaces with a focus on streaming, Suspense, and optimistic UI mutations.",
    icon: Code2,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    id: "03",
    title: "Backend & AI Compute",
    description: "I develop robust compute layers using FastAPI and Node.js. My focus is on asynchronous job queues (Redis), vector databases (pgvector), and event-driven webhooks.",
    icon: ServerCog,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    id: "04",
    title: "DevOps & Deployment",
    description: "I manage bare-metal Linux servers (Azure), configuring Nginx reverse proxies, automated CI/CD pipelines via GitHub Actions, and managing SaaS FinOps integrations.",
    icon: Rocket,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export function Process() {
  return (
    <section id="process" className="w-full flex flex-col justify-center items-center py-24 md:py-32 bg-secondary/20 border-y border-border/60 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-3 text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-mono font-semibold text-primary">
            <Workflow className="w-3.5 h-3.5" /> Systems Workflow
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Engineering Process</h2>
          <p className="max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
            A systems-driven pipeline for turning complex infrastructure problems into resilient production software.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
          {processes.map((step, index) => (
            <Card key={index} className="bg-card/70 backdrop-blur-md border-border/70 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1 relative shadow-sm">
              <CardContent className="p-6 flex flex-col items-start text-left h-full">
                <div className="flex w-full justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl ${step.bg} ${step.color} transition-transform duration-300 group-hover:scale-110`}>
                    <step.icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <span className="text-3xl font-mono font-extrabold text-muted-foreground/30 group-hover:text-primary/40 transition-colors">
                    {step.id}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}