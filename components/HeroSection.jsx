import Image from "next/image";
import { ArrowDown } from "lucide-react";
import MyImage from "@/public/me.webp";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="text-center md:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in">
                  Hi, I&apos;m
                </span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1">
                  {" "}
                  Elad
                </span>
                <span className="text-gradient opacity-0 ml-2 animate-fade-in-delay-2">
                  {" "}
                  Gelerenter
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
                I&apos;m a Software Engineer with practical experience in
                full-stack development and DevOps.
                <br />
                Focused on building scalable, reliable applications and writing
                clean, maintainable code.
              </p>

              <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button">
                  View My Work
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end opacity-0 animate-fade-in-delay-3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-primary/25 blur-2xl" />
              <div className="relative w-64 h-72 md:w-72 md:h-[320px] rounded-3xl mr-10 overflow-hidden bg-card/60 backdrop-blur border border-white/10 shadow-lg">
                <Image
                  src={MyImage}
                  alt="Elad Gelerenter"
                  fill
                  className="object-cover"
                  priority
                  placeholder="blur"
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 280px, 70vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
}
