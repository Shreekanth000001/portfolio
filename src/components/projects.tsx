"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Layers, Cpu } from "lucide-react";
import { ArchitectureModal, ProjectArchitecture } from "./architecture-modal";

const projects: (ProjectArchitecture & {
  description: string;
  image: string;
  imageHint: string;
  tags: string[];
})[] = [
  {
    title: "PlantPulse",
    category: "Industrial IoT Monitoring Platform",
    description: "Built a multi-plant telemetry pipeline: MQTT broker, FastAPI batched idempotent ingest, and a daily-partitioned PostgreSQL table, with a history API that downsamples to 500 points (about 96 ms over 1M rows). Secured with per-plant broker ACLs, hashed viewer tokens, rate-limited admin routes, and an admin UI; covered by 195 backend and 63 frontend tests with GitHub Actions CI.",
    image: "/imgs/plantpulse.png",
    imageHint: "industrial IoT manufacturing operations dashboard",
    tags: ["FastAPI", "PostgreSQL", "MQTT", "Next.js", "Docker"],
    link: "https://plant-pulse-rho.vercel.app",
    docsLink: "https://github.com/Shreekanth000001/Plant-Pulse",
    blueprint: {
      nodes: [
        { label: "Edge Fleet", sub: "Multi-plant MQTT telemetry", icon: "🏭" },
        { label: "Mosquitto Broker", sub: "Per-plant ACLs & PBKDF2 auth", icon: "📡" },
        { label: "FastAPI Ingest", sub: "Batched idempotent ingestion", icon: "⚡" },
        { label: "Partitioned Postgres", sub: "Daily tables & 96ms downsampling", icon: "🗄️" }
      ],
      techDetails: [
        { key: "Backend", value: "FastAPI (Python) + Uvicorn" },
        { key: "Database", value: "PostgreSQL (Daily Partitioning)" },
        { key: "IoT Broker", value: "Eclipse Mosquitto (MQTT)" },
        { key: "Frontend", value: "Next.js (App Router)" },
        { key: "DevOps", value: "Docker Supervised Container Stack" },
        { key: "Performance", value: "500 pts downsample (~96ms over 1M rows)" },
        { key: "Test Coverage", value: "195 Backend + 63 Frontend Tests (CI)" }
      ],
      codeSnippet: `// FastAPI Batched Idempotent Telemetry Ingest & Daily Partitioning
@app.post("/api/v1/telemetry/batch")
async def ingest_batch(batch: TelemetryBatch, db: Connection = Depends(get_db)):
    ensure_daily_partition(db, batch.recorded_at)
    query = """
        INSERT INTO telemetry_values (plant_id, machine_code, signal_code, value, recorded_at)
        VALUES (%s, %s, %s, %s, %s)
        ON CONFLICT (plant_id, machine_code, signal_code, recorded_at) DO NOTHING
    """
    db.executemany(query, [item.to_tuple() for item in batch.readings])
    return {"status": "ok", "ingested": len(batch.readings)}`
    }
  },
  {
    title: "Academic Planner",
    category: "AI-Powered SaaS",
    description: "Built an AI SaaS (Next.js on Vercel) with a stateless FastAPI/PostgreSQL API on an Azure Linux VM, deployed via GitHub Actions; a Redis/ARQ queue and pgvector power non-blocking PDF chat (RAG). Integrated Stripe and Clerk webhooks into a billing ledger that deducts credits as users consume AI compute.",
    image: "/imgs/acaPlan.png",
    imageHint: "AI SaaS Dashboard Interface",
    tags: ["Next.js", "FastAPI", "Redis", "Stripe", "Azure"],
    link: "https://planner.shreek.me",
    docsLink: "https://github.com/Shreekanth000001/Academic-Planner",
    blueprint: {
      nodes: [
        { label: "Next.js on Vercel", sub: "Frontend UI & Clerk Auth", icon: "💻" },
        { label: "Azure VM API", sub: "Stateless FastAPI Backend", icon: "☁️" },
        { label: "Redis / ARQ", sub: "Non-blocking background queue", icon: "⚡" },
        { label: "PostgreSQL pgvector", sub: "Vector search & billing ledger", icon: "🗄️" }
      ],
      techDetails: [
        { key: "Frontend", value: "Next.js on Vercel" },
        { key: "API Server", value: "Stateless FastAPI on Azure Linux VM" },
        { key: "Task Queue", value: "Redis + ARQ Worker" },
        { key: "Vector Storage", value: "PostgreSQL + pgvector" },
        { key: "Billing Ledger", value: "Stripe & Clerk Webhooks" },
        { key: "Deployment", value: "GitHub Actions CI/CD to Azure" }
      ],
      codeSnippet: `// Non-blocking ARQ Background Worker for PDF RAG & Credit Ledger
async def process_pdf_rag(ctx, user_id: str, document_id: str, chunk_text: str):
    embedding = await generate_embeddings(chunk_text)
    async with get_db_pool() as conn:
        await conn.execute(
            "INSERT INTO doc_embeddings (user_id, doc_id, vector) VALUES ($1, $2, $3)",
            user_id, document_id, embedding
        )
        await deduct_user_credits(conn, user_id, cost=1)`
    }
  },
  {
    title: "Agri-Connect",
    category: "AgriTech Bidding Marketplace",
    description: "Architected a decoupled marketplace (Next.js 16 / FastAPI) with a WebSocket live-negotiation engine and a CrewAI multi-agent advisory crew that streams crop diagnostics over Server-Sent Events (SSE).",
    image: "/imgs/Agri.png", 
    imageHint: "agriculture technology platform interface",
    tags: ["Next.js", "FastAPI", "WebSockets", "CrewAI"],
    link: "https://agriconnect.shreek.me", 
    docsLink: "https://github.com/Shreekanth000001/agri-connect",
    blueprint: {
      nodes: [
        { label: "Next.js 16 Client", sub: "Bidding & live SSE interface", icon: "📱" },
        { label: "FastAPI Core", sub: "Async marketplace backend", icon: "⚡" },
        { label: "WebSocket Gateway", sub: "Live price negotiation engine", icon: "📡" },
        { label: "CrewAI Multi-Agent", sub: "Diagnostic crew over SSE", icon: "🤖" }
      ],
      techDetails: [
        { key: "Frontend", value: "Next.js 16" },
        { key: "Backend", value: "FastAPI (Python)" },
        { key: "Negotiation Engine", value: "Bi-directional WebSockets" },
        { key: "AI Architecture", value: "CrewAI Multi-Agent Advisory" },
        { key: "Streaming Protocol", value: "Server-Sent Events (SSE)" }
      ],
      codeSnippet: `// CrewAI Multi-Agent Diagnostic Crew streaming insights over SSE
@app.get("/api/v1/diagnostics/stream/{crop_id}")
async def stream_crop_advisory(crop_id: str):
    crew = Crew(
        agents=[soil_analyst, agronomy_specialist, market_pricing_agent],
        tasks=[analyze_crop_health, generate_pricing_recommendation]
    )
    async def event_generator():
        async for step in crew.kickoff_async(inputs={"crop_id": crop_id}):
            yield f"data: {json.dumps(step)}\\n\\n"
    return StreamingResponse(event_generator(), media_type="text/event-stream")`
    }
  },
  {
    title: "Nexus Games",
    category: "Real-Time Social Platform",
    description: "Built real-time chat with Pusher and Laravel Echo, plus a Vue 3 frontend rendering IGDB game data.",
    image: "/imgs/nexus.png",
    imageHint: "web application interface",
    tags: ["Laravel", "Vue 3", "Pusher"],
    link: "https://nexusgames.shreek.me/",
    docsLink: "https://github.com/Shreekanth000001/nexusgames",
    blueprint: {
      nodes: [
        { label: "Vue 3 Frontend", sub: "IGDB game data rendering", icon: "🎮" },
        { label: "Laravel Echo", sub: "Client-side event listener", icon: "⚡" },
        { label: "Pusher Gateway", sub: "Real-time websocket broadcast", icon: "📡" },
        { label: "Laravel Backend", sub: "Message dispatch & auth", icon: "🛡️" }
      ],
      techDetails: [
        { key: "Backend", value: "Laravel (PHP)" },
        { key: "Frontend", value: "Vue 3" },
        { key: "Real-Time", value: "Pusher + Laravel Echo" },
        { key: "External Data", value: "IGDB API Integration" },
        { key: "Core Features", value: "Real-time chat & game directory" }
      ],
      codeSnippet: `// Laravel Event Broadcast for Real-Time Chat via Pusher
class MessageSent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public function __construct(public User $user, public Message $message, public string $roomId) {}

    public function broadcastOn(): Channel
    {
        return new PrivateChannel("game-room.{$this->roomId}");
    }
}`
    }
  }
];

export function Projects() {
  const [selectedBlueprint, setSelectedBlueprint] = useState<ProjectArchitecture | null>(null);

  return (
    <section id="projects" className="w-full flex flex-col justify-center items-center py-24 md:py-32 relative">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-mono font-semibold text-primary">
            <Layers className="w-3.5 h-3.5" /> Selected Works
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Projects</h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Full-stack web applications, AI integrations, real-time WebSocket platforms, and cloud deployments.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-card/70 backdrop-blur-md border-border/70 hover:border-primary/50 transition-all duration-300 flex flex-col rounded-3xl shadow-sm hover:shadow-lg">
              
              {/* Image Preview Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-950 border-b border-border/60">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-mono text-xs">
                    Project Rendering...
                  </div>
                )}
                
                {/* Category Badge on Top */}
                <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-md border border-border/60 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold text-primary shadow-xs">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-grow p-6">
                <CardHeader className="p-0 mb-3">
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0 flex-grow mb-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-secondary/80 text-[11px] font-mono text-muted-foreground border border-border/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                {/* Footer Buttons */}
                <CardFooter className="p-0 pt-4 flex flex-wrap gap-2 border-t border-border/60 mt-auto">
                  <Button asChild size="sm" className="rounded-xl gap-1.5 text-xs font-semibold">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 h-3.5" /> Live App
                    </Link>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    onClick={() => setSelectedBlueprint(project)}
                    className="rounded-xl gap-1.5 text-xs font-mono border border-border/60"
                  >
                    <Cpu className="h-3.5 h-3.5 text-primary" /> Tech Specs
                  </Button>

                  {project.docsLink && (
                    <Button asChild size="sm" variant="ghost" className="rounded-xl gap-1.5 text-xs font-medium">
                      <Link href={project.docsLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 h-3.5" /> Source
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </div>

            </Card>
          ))}
        </div>
      </div>

      {/* Interactive System Blueprint Modal */}
      <ArchitectureModal 
        project={selectedBlueprint} 
        open={Boolean(selectedBlueprint)} 
        onOpenChange={(open) => !open && setSelectedBlueprint(null)} 
      />
    </section>
  );
}