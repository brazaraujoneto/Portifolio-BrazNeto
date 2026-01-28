"use client";

import { useLanguage } from "@/contexts/language-context";
import { User, Mail, MessageSquare, Send, Github, Briefcase, MailIcon } from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Briefcase, href: "#", label: "Portfolio" },
    { icon: MailIcon, href: "#", label: "Email" },
  ];

  return (
    <section className="min-h-screen py-24 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header - Centered on desktop */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Form - Centered and constrained width on desktop */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md">
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <User className="w-4 h-4 text-primary" />
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  placeholder={t("contact.namePlaceholder")}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--input)] border border-[var(--glass-border)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <Mail className="w-4 h-4 text-primary" />
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  placeholder={t("contact.emailPlaceholder")}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--input)] border border-[var(--glass-border)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  {t("contact.message")}
                </label>
                <textarea
                  rows={5}
                  placeholder={t("contact.messagePlaceholder")}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--input)] border border-[var(--glass-border)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25"
              >
                {t("contact.send")}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <span className="text-xs font-semibold tracking-wider text-muted-foreground mb-6 block">
              {t("contact.connect")}
            </span>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-14 h-14 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200 backdrop-blur-sm"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 {t("footer.copyright")} • {t("footer.tagline")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
