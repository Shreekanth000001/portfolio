import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am a passionate and creative developer with a knack for building beautiful, functional, and user-centric web applications. With a strong foundation in modern web technologies, I strive to create seamless digital experiences. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
            </p>
          </div>
          <div className="flex justify-center">
            <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary shadow-lg">
              <AvatarImage src="https://placehold.co/300x300.png" alt="Professional Headshot" data-ai-hint="professional headshot" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
}
