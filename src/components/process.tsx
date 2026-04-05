import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Code2, Database, Rocket } from "lucide-react";

const processes = [
  {
    id: "01",
    title: "Architecture & Planning",
    description: "Before writing a single line of code, I map out the database schema, define API endpoints, and wireframe the user interface to ensure a scalable foundation.",
    icon: Lightbulb,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    id: "02",
    title: "Frontend Engineering",
    description: "Using React and Next.js, I build responsive, accessible, and highly interactive user interfaces focused on smooth animations and seamless user experiences.",
    icon: Code2,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    id: "03",
    title: "Backend Integration",
    description: "I develop robust server-side logic using Node.js or Laravel, integrating secure authentication, efficient database queries (MongoDB/MySQL), and RESTful APIs.",
    icon: Database,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    id: "04",
    title: "Deployment & Optimization",
    description: "Finally, I deploy the application using modern hosting platforms, optimize load times, monitor performance, and ensure cross-browser compatibility.",
    icon: Rocket,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export function Process() {
  return (
    <section id="process" className="w-full flex flex-col justify-center items-center py-24 md:py-32 bg-secondary/20 border-y border-border/50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent blur-[100px] rounded-full" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            Workflow
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Engineering Process</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
            A systematic approach to transforming complex problems into elegant, functional digital solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-border to-transparent -z-10" />

          {processes.map((step, index) => (
            <Card key={index} className="bg-background/60 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 relative">
              <CardContent className="p-6 md:p-8 flex flex-col items-start text-left h-full">
                <div className="flex w-full justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl ${step.bg} ${step.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <step.icon className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  <span className="text-4xl font-extrabold text-muted/30 group-hover:text-primary/20 transition-colors duration-300">
                    {step.id}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
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