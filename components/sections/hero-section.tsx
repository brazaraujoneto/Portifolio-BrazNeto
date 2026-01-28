"use client";

import { useLanguage } from "@/contexts/language-context";
import { Rocket, FileText } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useLanguage();

  const expertise = ["Terraform", "AWS", "React", "Node.js", "Docker", "TypeScript"];

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wider mb-6">
              {t("hero.role")}
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t("hero.name")}
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed text-pretty">
              {t("hero.bio")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => onNavigate("projects")}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25"
              >
                <Rocket className="w-5 h-5" />
                {t("hero.viewProjects")}
              </button>
              <button
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[var(--glass-bg)] border border-[var(--glass-border)] text-foreground rounded-xl font-medium hover:bg-muted/50 transition-all duration-200 backdrop-blur-sm"
              >
                <FileText className="w-5 h-5" />
                {t("hero.resume")}
              </button>
            </div>

            {/* Expertise Tags */}
            <div>
              <span className="text-xs font-semibold tracking-wider text-muted-foreground mb-4 block">
                {t("hero.expertise")}
              </span>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-foreground text-sm font-medium backdrop-blur-sm"
                  >
                    <span className="text-primary mr-1">#</span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl scale-110" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile photo"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-125 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
