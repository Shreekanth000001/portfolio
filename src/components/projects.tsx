import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Agri-Connect",
    description: "A comprehensive platform dedicated to bridging the gap in the agricultural sector, providing streamlined connectivity and modern technological resources for users.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAoEmasOPnw03PWtIlNXZXznbybnOyCUbGWLKH2da_qIoQYrLkV9cEtXyFWJStRhW5oWd-0MXU_4TXOc3N62bf-8Ts-b7hfbK7TEYWWAYATJdR5J9pCzcFnKjfNoxFE09JEyo1nN3vcer1v5Kp2Us-X-hIhj6XuvvNJqyMjVmYC3TMLheKRh3Bulu6bl0/s1600/Screenshot%20from%202026-03-29%2009-56-38.png", // Add your Agri-Connect screenshot URL here
    imageHint: "agriculture technology platform interface",
    link: "https://agri-connect-it.vercel.app/", 
    docsLink: "#" 
  },
  {
    title: "Nexus Games",
    description: "A Community For Gamers by NEXUSGAME. Meet, network, make new friends and play together.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNS1FNNEO0GPh7Wwsuj5X8zzTljRwHfv6YFKrf7uho2FNFI7Y-eMUYnUDqlbUuMNeO8esBshwVX-N-1n9d4mTmSq15BanXaziv7iLlk5rI615r0rfxHpTZv4-jFSZ3HRZ4DNSLJPMr-cC0FtD24GZOnAESu06ZFJtu-agSI5nqAYLLilnRkVl7BFoMbrQ/s1600/Screenshot%20from%202025-08-07%2017-26-48.png",
    imageHint: "web application interface",
    link: "https://nexusgames.great-site.net/",
    docsLink: "" 
  },
  {
    title: "Mats",
    description: "An Attendance tracker platform with a custom CMS, featuring a modern design and seamless user experience.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgk-32mv2L1CToaolUZqrvmWZWlZ7JuUtN32UOZum1LN-CYM9NdxcJg-STbL-UEFeCXJkPDFUKk3SeDfmymXk6JBK_HEfbVLQ5CZu3fd-ja44nYVpTAARag3SdPLwVpocm3nqP_i37NLWtzU2Ad3sXd6-4VRH_WAK58PDV2sTMYku17m1HqpEfyuhi5FSo/s1600/Screenshot%20from%202025-08-07%2017-28-50.png",
    imageHint: "ecommerce website",
    link: "https://mats-edu.vercel.app/",
    docsLink: ""
  },
  {
    title: "MiVote",
    description: "A mobile-first social media app concept designed to connect people with shared interests.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg92SI0pUVyOs7cWJNrdJgA1M6oW-Y4ASMCOpUMam2_tg0_BbYjySBXp0BeIx7lNEeV-rSS6l1ODmrl6Xc1PK3kFyP85e8o-fsBxloSYRs6g5zaNnIRjD83PVBIxhTl5uk75uD4w6tVDV3Zd5iwzVX2gf4Jm6B2mWf029V9rf-OL3wyWP7riahXrCYs5m0/s1600/Screenshot%20from%202025-08-26%2008-13-15.png",
    imageHint: "mobile app design",
    link: "https://mivote.vercel.app/",
    docsLink: ""
  },
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
            A curated showcase of full-stack applications, system architectures, and UI/UX engineering. 
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:gap-12">
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
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow mb-8">
                  <p className="text-muted-foreground leading-relaxed">
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
                        <BookOpen className="h-4 w-4" /> View Docs
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