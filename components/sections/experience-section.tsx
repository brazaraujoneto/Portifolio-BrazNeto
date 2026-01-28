"use client";

import { useLanguage } from "@/contexts/language-context";
import { Briefcase, GraduationCap, Code2, Award } from "lucide-react";
import Image from "next/image";

interface ExperienceSectionProps {
  onNavigate: (section: string) => void;
}

export function ExperienceSection({ onNavigate }: ExperienceSectionProps) {
  const { t } = useLanguage();

  const skills = [
    { name: "React.js", icon: "JS" },
    { name: "Node.js", icon: "JS" },
    { name: "AWS / GCP", icon: "cloud" },
    { name: "Docker", icon: "docker" },
    { name: "MongoDB", icon: "db" },
    { name: "CyberSec", icon: "shield" },
  ];

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t("exp.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t("exp.subtitle")}
          </p>
        </div>

        {/* Main content grid - Side by side on desktop */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left column - Experience & Education */}
          <div className="space-y-8">
            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  {t("exp.experience")}
                </h3>
              </div>

              {/* Timeline */}
              <div className="relative space-y-6">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

                {/* Job 1 */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="p-6 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-foreground">
                        {t("job1.title")}
                      </h4>
                      <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                        {t("exp.present")}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-1">@ {t("job1.company")}</p>
                    <p className="text-sm text-muted-foreground mb-4">{t("job1.period")}</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {t("job1.desc1")}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {t("job1.desc2")}
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Job 2 */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="p-6 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {t("job2.title")}
                    </h4>
                    <p className="text-primary font-medium mb-1">@ {t("job2.company")}</p>
                    <p className="text-sm text-muted-foreground mb-4">{t("job2.period")}</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {t("job2.desc1")}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {t("job2.desc2")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  {t("exp.education")}
                </h3>
              </div>

              <div className="space-y-4">
                {/* Education 1 */}
                <div className="p-6 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md flex gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {t("edu1.title")}
                    </h4>
                    <p className="text-muted-foreground mb-2">{t("edu1.school")}</p>
                    <p className="text-sm text-primary">{t("edu1.period")}</p>
                  </div>
                  <div className="w-20 h-20 rounded-lg overflow-hidden relative hidden sm:block">
                    <Image
                      src="/images/university.jpg"
                      alt="University"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Education 2 */}
                <div className="p-6 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md flex items-center gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {t("edu2.title")}
                    </h4>
                    <p className="text-muted-foreground">{t("edu2.school")}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Skills Grid */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                {t("exp.skills")}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-6 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-primary font-bold text-sm">{skill.icon}</span>
                    </div>
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onNavigate("projects")}
              className="mt-8 w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25"
            >
              {t("exp.viewProjects")}
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
