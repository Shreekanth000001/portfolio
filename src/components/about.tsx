import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Database, LayoutTemplate } from "lucide-react";
import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="w-full flex flex-col justify-center items-center py-20 md:py-32 bg-secondary/30 border-y border-border/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Beyond the Code</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Main Bio Card - Spans 2 columns on desktop */}
          <Card className="md:col-span-2 bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors">
            <CardContent className="p-8 h-full flex flex-col justify-center space-y-6">
              <h3 className="text-2xl font-bold">The Developer Journey</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Currently pursuing a Bachelor of Computer Applications (BCA), I bridge the gap between academic theory and real-world engineering. My focus is on writing clean, maintainable code and building architectures that scale. Whether I'm architecting a complex database structure or fine-tuning a reactive UI, I engineer solutions that matter.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Off the screen, I maintain a sharp, analytical mindset through a passion for chess, always thinking three moves ahead—a philosophy I carry directly into my software development lifecycle.
              </p>
            </CardContent>
          </Card>

          {/* Photo/Avatar Card */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-border/50 flex flex-col items-center justify-center p-4 overflow-hidden relative group">
            {/* Subtle animated background overlay */}
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />

            {/* Decorative blur glows */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-colors duration-500" />

            {/* Image Container with fixed dimensions and responsive sizing */}
            <div className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-background shadow-2xl bg-muted flex items-center justify-center relative z-10 overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500">
              <Image
                src='/propic.jpg'
                alt="Shreekanth K - Professional Headshot"
                width={250}
                height={250}
                // Change here: Added 'object-[40%_40%]'
                className="w-full h-full object-cover object-[40%_40%] transition-transform duration-700 group-hover:scale-110"
                priority
              />
            </div>
          </Card>

          {/* Skills / Tech Stack Bento Box */}
          <Card className="md:col-span-3 bg-background/50 backdrop-blur-sm border-border/50 p-6 md:p-8">
            {/* Added grid-cols-1 for mobile to prevent cramping */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              
              <div className="space-y-3 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2 md:mb-4">
                  <LayoutTemplate size={20} />
                </div>
                <h4 className="font-semibold text-lg">Frontend</h4>
                <p className="text-sm text-muted-foreground">React.js, Next.js, Tailwind CSS</p>
              </div>

              <div className="space-y-3 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2 md:mb-4">
                  <Server size={20} />
                </div>
                <h4 className="font-semibold text-lg">Backend</h4>
                <p className="text-sm text-muted-foreground">Node.js, Express, Laravel</p>
              </div>

              <div className="space-y-3 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2 md:mb-4">
                  <Database size={20} />
                </div>
                <h4 className="font-semibold text-lg">Database</h4>
                <p className="text-sm text-muted-foreground">MongoDB, MySQL</p>
              </div>

              <div className="space-y-3 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2 md:mb-4">
                  <Code size={20} />
                </div>
                <h4 className="font-semibold text-lg">CMS & Tools</h4>
                <p className="text-sm text-muted-foreground">Headless WordPress, Git, REST APIs</p>
              </div>

            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}