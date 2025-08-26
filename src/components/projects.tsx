import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Nexus Games",
    description: "A Community For Gamers by NEXUSGAME Meet, network, make new friends and play together",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNS1FNNEO0GPh7Wwsuj5X8zzTljRwHfv6YFKrf7uho2FNFI7Y-eMUYnUDqlbUuMNeO8esBshwVX-N-1n9d4mTmSq15BanXaziv7iLlk5rI615r0rfxHpTZv4-jFSZ3HRZ4DNSLJPMr-cC0FtD24GZOnAESu06ZFJtu-agSI5nqAYLLilnRkVl7BFoMbrQ/s1600/Screenshot%20from%202025-08-07%2017-26-48.png",
    imageHint: "web application interface",
    link: "https://nexusgames.great-site.net/"
  },
  {
    title: "Mats",
    description: "An Attendance tracker platform with a custom CMS, featuring a modern design and seamless user experience.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgk-32mv2L1CToaolUZqrvmWZWlZ7JuUtN32UOZum1LN-CYM9NdxcJg-STbL-UEFeCXJkPDFUKk3SeDfmymXk6JBK_HEfbVLQ5CZu3fd-ja44nYVpTAARag3SdPLwVpocm3nqP_i37NLWtzU2Ad3sXd6-4VRH_WAK58PDV2sTMYku17m1HqpEfyuhi5FSo/s1600/Screenshot%20from%202025-08-07%2017-28-50.png",
    imageHint: "ecommerce website",
    link: "https://mats-edu.vercel.app/"
  },
  {
    title: "MiVote",
    description: "A mobile-first social media app concept designed to connect people with shared interests.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg92SI0pUVyOs7cWJNrdJgA1M6oW-Y4ASMCOpUMam2_tg0_BbYjySBXp0BeIx7lNEeV-rSS6l1ODmrl6Xc1PK3kFyP85e8o-fsBxloSYRs6g5zaNnIRjD83PVBIxhTl5uk75uD4w6tVDV3Zd5iwzVX2gf4Jm6B2mWf029V9rf-OL3wyWP7riahXrCYs5m0/s1600/Screenshot%20from%202025-08-26%2008-13-15.png",
    imageHint: "mobile app design",
    link: "https://mivote.vercel.app/"
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover aspect-video"
                data-ai-hint={project.imageHint}
              />
              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-accent font-semibold">
                  <Link href={project.link}>
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
