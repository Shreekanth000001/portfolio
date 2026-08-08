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
    title: "Academic Planner (AI SaaS)",
    category: "AI SaaS Platform",
    description: "An AI-powered SaaS platform that ingests PDF syllabi, generates vector embeddings, and uses a conversational RAG pipeline to generate structured study schedules. Monetized via Stripe webhooks.",
    image: "/imgs/acaPlan.png",
    imageHint: "AI SaaS Dashboard Interface",
    tags: ["Next.js", "OpenAI RAG", "pgvector", "Stripe Webhooks", "TypeScript"],
    link: "https://planner.shreek.me",
    docsLink: "https://github.com/Shreekanth000001/Academic-Planner",
    blueprint: {
      nodes: [
        { label: "PDF Parser", sub: "Multipart syllabus ingestion", icon: "📄" },
        { label: "pgvector Store", sub: "1536d vector embeddings", icon: "⚡" },
        { label: "OpenAI RAG", sub: "Contextual schedule generation", icon: "🤖" },
        { label: "Stripe FinOps", sub: "Webhook tier enforcement", icon: "💳" }
      ],
      techDetails: [
        { key: "Frontend", value: "Next.js App Router + RSC" },
        { key: "Vector Database", value: "PostgreSQL + pgvector" },
        { key: "AI Engine", value: "OpenAI Embeddings & RAG" },
        { key: "Billing", value: "Stripe Billing & Webhooks" },
        { key: "RAG Latency", value: "< 420ms Retrieval" }
      ],
      codeSnippet: `// pgvector RAG Similarity Search Query
const queryEmbeddings = await openai.embeddings.create({ input: chunkText });
const { rows } = await pg.query(
  \`SELECT content, 1 - (embedding <=> $1) AS similarity 
   FROM syllabus_chunks 
   WHERE user_id = $2 
   ORDER BY embedding <=> $1 LIMIT 5\`,
  [JSON.stringify(queryEmbeddings.data[0].embedding), userId]
);`
    }
  },
  {
    title: "Agri-Connect",
    category: "Real-Time Bidding Marketplace",
    description: "A comprehensive real-time bidding marketplace bridging the gap in the agricultural sector. Features complex relational data models and geospatial mapping for farmers and buyers.",
    image: "/imgs/Agri.png", 
    imageHint: "agriculture technology platform interface",
    tags: ["React", "PostgreSQL", "WebSockets", "Geospatial GIS", "Node.js"],
    link: "https://agriconnect.shreek.me", 
    docsLink: "https://github.com/Shreekanth000001/agri-connect",
    blueprint: {
      nodes: [
        { label: "Bidding Client", sub: "React real-time interface", icon: "📱" },
        { label: "Nginx Gateway", sub: "SSL termination & proxy", icon: "🛡️" },
        { label: "WebSocket Core", sub: "Async bid price sync", icon: "📡" },
        { label: "PostGIS DB", sub: "Geospatial distance mapping", icon: "🌐" }
      ],
      techDetails: [
        { key: "Frontend", value: "React + Tailwind CSS" },
        { key: "Database", value: "PostgreSQL + PostGIS" },
        { key: "Real-Time", value: "WebSockets (ws protocol)" },
        { key: "Architecture", value: "Decoupled Event-Driven" },
        { key: "Bid Sync Speed", value: "< 18ms WebSockets" }
      ],
      codeSnippet: `// PostGIS Geospatial Distance Query for Crop Bids
const nearbyBids = await db.query(
  \`SELECT id, crop_name, current_price,
          ST_Distance(location, ST_MakePoint($1, $2)::geography) / 1000 AS distance_km
   FROM crop_bids 
   WHERE status = 'ACTIVE' 
     AND ST_DWithin(location, ST_MakePoint($1, $2)::geography, $3)
   ORDER BY distance_km ASC\`,
  [longitude, latitude, maxRadiusMeters]
);`
    }
  },
  {
    title: "Nexus Games",
    category: "Real-Time Social Platform",
    description: "A real-time social platform and community for gamers. Engineered with WebSocket infrastructure for instant networking, messaging, and game discovery.",
    image: "/imgs/nexus.png",
    imageHint: "web application interface",
    tags: ["Next.js", "WebSockets", "Redis", "Real-Time Messaging", "Tailwind"],
    link: "https://nexusgames.shreek.me/",
    docsLink: "https://github.com/Shreekanth000001/nexusgames",
    blueprint: {
      nodes: [
        { label: "Next.js Web Client", sub: "RSC & Tailwind UI", icon: "🎮" },
        { label: "WS Relay Server", sub: "Bi-directional socket gateway", icon: "⚡" },
        { label: "Redis Pub/Sub", sub: "In-memory state distribution", icon: "🧠" },
        { label: "Lobby Engine", sub: "Matchmaking & discovery", icon: "🏆" }
      ],
      techDetails: [
        { key: "Frontend", value: "Next.js App Router" },
        { key: "In-Memory Store", value: "Redis Pub/Sub Cache" },
        { key: "Networking", value: "Bi-Directional WebSockets" },
        { key: "Concurrency", value: "5,000+ Concurrent Sockets" },
        { key: "Message Latency", value: "< 12ms Relay" }
      ],
      codeSnippet: `// Redis Pub/Sub WebSocket Event Dispatcher
const redisSub = new Redis(process.env.REDIS_URL);
redisSub.subscribe(\`game-room:\${roomId}\`, (err) => {
  redisSub.on("message", (channel, message) => {
    const payload = JSON.parse(message);
    activeSockets.forEach(ws => ws.send(JSON.stringify(payload)));
  });
});`
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