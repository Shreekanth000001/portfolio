import { Layers } from "lucide-react";
import Link from "next/link";

export function AppHeader() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <Layers className="h-6 w-6 text-primary" />
        <span className="sr-only">Portfolio</span>
      </Link>
      <span className="ml-2 text-lg font-semibold">Portfolio</span>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          About
        </Link>
        <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Projects
        </Link>
        <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Testimonials
        </Link>
        <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
