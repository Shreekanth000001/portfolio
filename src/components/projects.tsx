import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Academic Planner (AI SaaS)",
    description: "An AI-powered SaaS platform that ingests PDF syllabi, generates vector embeddings, and uses a conversational RAG pipeline to generate structured study schedules. Monetized via Stripe webhooks.",
    image: "/imgs/acaPlan.png",
    imageHint: "AI SaaS Dashboard Interface",
    link: "https://planner.shreek.me",
    docsLink: "https://github.com/Shreekanth000001/Academic-Planner" 
  },
  {
    title: "Agri-Connect",
    description: "A comprehensive real-time bidding marketplace bridging the gap in the agricultural sector. Features complex relational data models and geospatial mapping for farmers and buyers.",
    image: "/imgs/Agri.png", 
    imageHint: "agriculture technology platform interface",
    link: "https://agriconnect.shreek.me", 
    docsLink: "https://github.com/Shreekanth000001/agri-connect" 
  },
  {
    title: "Nexus Games",
    description: "A real-time social platform and community for gamers. Engineered with WebSocket infrastructure for instant networking, messaging, and game discovery.",
    image: "/imgs/nexus.png",
    imageHint: "web application interface",
    link: "https://nexusgames.shreek.me/",
    docsLink: "https://github.com/Shreekanth000001/nexusgames" 
  }
];

export function Projects() {
  return (
    <section id="projects" className="w-full flex flex-col justify-center items-center py-24 md:py-32 relative">
      {/* Decorative background elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px] -z-10" />

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start space-y-4 mb-16 max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Selected Works</h2>
          <p className="text-muted-foreground md:text-xl leading-relaxed">
            A curated showcase of full-stack applications, distributed system architectures, and AI integrations. 
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-background/60 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 flex flex-col rounded-2xl">
              <div className="relative aspect-video overflow-hidden bg-muted">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 font-medium">
                    Project Visual Rendering...
                  </div>
                )}
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="flex flex-col flex-grow p-6 md:p-8">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow mb-8">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="p-0 pt-4 flex flex-wrap gap-3 border-t border-border/50 mt-auto">
                  <Button asChild className="rounded-full gap-2 transition-transform hover:-translate-y-0.5">
                    <Link href={project.link}>
                      <ExternalLink className="h-4 w-4" /> Live Preview
                    </Link>
                  </Button>
                  {project.docsLink && (
                    <Button asChild variant="secondary" className="rounded-full gap-2 transition-transform hover:-translate-y-0.5">
                      <Link href={project.docsLink}>
                        <Github className="h-4 w-4" /> Source
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}