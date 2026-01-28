"use client";

import { useLanguage } from "@/contexts/language-context";
import { Home, Briefcase, Code2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileBottomNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function MobileBottomNav({ activeSection, onNavigate }: MobileBottomNavProps) {
  const { t } = useLanguage();

  const navItems = [
    { id: "home", label: t("nav.home"), icon: Home },
    { id: "experience", label: "EXP", icon: Briefcase },
    { id: "projects", label: t("nav.projects"), icon: Code2 },
    { id: "contact", label: t("nav.contact"), icon: Mail },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--glass-bg)] backdrop-blur-md border-t border-[var(--glass-border)]">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={cn(
              "flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200",
              activeSection === item.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
