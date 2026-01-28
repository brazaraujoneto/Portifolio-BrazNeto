"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const projectImages = [
  "/images/project-crm.jpg",
  "/images/project-k8s.jpg",
  "/images/project-cicd.jpg",
];

export function ProjectsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "React", "Node.js", "Docker", "Terraform", "AWS"];

  const projects = [
    {
      id: 1,
      titleKey: "project1.title",
      descKey: "project1.desc",
      dateKey: "project1.date",
      tags: ["REACT", "POSTGRESQL"],
      image: 0,
      category: ["React"],
    },
    {
      id: 2,
      titleKey: "project2.title",
      descKey: "project2.desc",
      dateKey: "project2.date",
      tags: ["GO", "GRAFANA"],
      image: 1,
      category: ["Docker"],
    },
    {
      id: 3,
      titleKey: "project3.title",
      descKey: "project3.desc",
      dateKey: "project3.date",
      tags: ["TERRAFORM", "AWS"],
      image: 2,
      category: ["Terraform", "AWS"],
    },
    {
      id: 4,
      titleKey: "project4.title",
      descKey: "project4.desc",
      dateKey: "project4.date",
      tags: ["NODE.JS", "REDIS"],
      image: 0,
      category: ["Node.js"],
    },
    {
      id: 5,
      titleKey: "project5.title",
      descKey: "project5.desc",
      dateKey: "project5.date",
      tags: ["REACT", "SOCKET.IO"],
      image: 1,
      category: ["React", "Node.js"],
    },
    {
      id: 6,
      titleKey: "project6.title",
      descKey: "project6.desc",
      dateKey: "project6.date",
      tags: ["REACT", "D3.JS"],
      image: 2,
      category: ["React"],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-[var(--glass-bg)] border border-[var(--glass-border)] text-muted-foreground hover:text-foreground hover:border-primary/50"
              )}
            >
              {filter === "All" ? t("projects.all") : filter}
            </button>
          ))}
        </div>

        {/* Projects Grid - 3 columns on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={projectImages[project.image] || "/placeholder.svg"}
                  alt={t(project.titleKey)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Glow overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--glass-bg)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* External link button */}
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {t(project.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {t(project.descKey)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--glass-border)]">
                  <span className="text-sm text-muted-foreground">
                    {t(project.dateKey)}
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
