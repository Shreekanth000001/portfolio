import { AppHeader } from "@/components/header";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { AppFooter } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AIGenerator } from "@/components/ai-generator";
import { ArrowRight, Code2, Database, Layout } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background selection:bg-primary selection:text-primary-foreground">
      <AppHeader />
      <main className="flex-1 relative">
        {/* Modern Background Blur/Glow Effect */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        </div>

        <section className="w-full py-24 md:py-32 lg:py-48 flex items-center justify-center min-h-[90vh]">
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center space-y-8 text-center">
              
              {/* Floating Badge */}
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Available for Web Development Internships
              </div>

              <div className="space-y-4 max-w-4xl">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                  Engineering <br className="hidden sm:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Digital Experiences
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl font-medium leading-relaxed">
                  Hi, I'm Shreekanth K. A Full Stack Developer specializing in MERN, LAMP, and modern headless architectures. I build scalable, high-performance web applications.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1">
                  <Link href="#projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-8 text-base border-primary/20 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </div>

              {/* Tech Stack Mini-Showcase */}
              <div className="pt-16 flex items-center justify-center gap-8 text-muted-foreground/60">
                <div className="flex items-center gap-2 font-medium"><Layout className="h-5 w-5"/> Frontend</div>
                <div className="flex items-center gap-2 font-medium"><Database className="h-5 w-5"/> Backend</div>
                <div className="flex items-center gap-2 font-medium"><Code2 className="h-5 w-5"/> Full Stack</div>
              </div>

            </div>
          </div>
        </section>

        <About />
        <Projects />
        <AIGenerator />
        <Process />
        <Contact />
      </main>
      <AppFooter />
    </div>
  );
}