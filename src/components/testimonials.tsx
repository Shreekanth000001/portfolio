import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Working with Shreekanth was an absolute pleasure. His attention to detail and commitment to quality is unparalleled. The final product exceeded all our expectations.",
    name: "Kiran",
    title: "CEO, Innovate Inc.",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "person face",
  },
  {
    quote: "A true professional who delivers exceptional results. His technical skills and creative vision brought our project to life in ways we hadn't imagined.",
    name: "Dhanush",
    title: "CTO, Tech Solutions",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "person portrait"
  },
  {
    quote: "I highly recommend Shreekanth for any web development project. He is reliable, communicative, and incredibly talented. We couldn't be happier with the outcome.",
    name: "Emily White",
    title: "Marketing Director, Creative Co.",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "Bhuvan"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What My Clients Say</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I've had the privilege of working with some amazing people. Here's what they think.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-lg bg-secondary/50">
                    <CardContent className="p-6 flex flex-col gap-4 items-start text-left">
                      <blockquote className="text-base font-semibold leading-snug flex-grow">
                        “{testimonial.quote}”
                      </blockquote>
                      <div className="flex items-center gap-4 mt-4 pt-4 border-t w-full">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} data-ai-hint={testimonial.avatarHint} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex"/>
        </Carousel>
      </div>
    </section>
  );
}
