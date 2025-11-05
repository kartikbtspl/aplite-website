import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  primaryButton?: {
    text: string;
    href: string;
    showIcon?: boolean;
  };
  secondaryButton?: {
    text: string;
    href: string;
    showIcon?: boolean;
  };
  backgroundImage?: string;
  backgroundOverlay?: boolean;
}

export function PageHero({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  backgroundImage,
  backgroundOverlay = true,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          {backgroundOverlay && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative min-h-[450px] px-8 py-8 md:min-h-[500px] md:px-12 md:py-12">
        <div className="max-w-lg">
          <h1 className="mb-2 text-2xl font-bold text-white md:text-3xl">
            {title}
          </h1>
          <p className="mb-5 text-sm text-white/90 md:text-base">
            {subtitle}
          </p>

          {/* Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-wrap gap-4">
              {primaryButton && (
                <Link 
                  href={primaryButton.href}
                  className="inline-flex items-center gap-3 rounded-full border-2 border-white/80 bg-white/10 px-6 py-3 text-base font-medium text-white"
                >
                  {primaryButton.text}
                  {primaryButton.showIcon && (
                    <div className="rounded-full border border-white/60 p-2">
                      <ArrowUpRight className="h-6 w-6" />
                    </div>
                  )}
                </Link>
              )}
              {secondaryButton && (
                <Link 
                  href={secondaryButton.href}
                  className="inline-flex items-center gap-3 rounded-full border-2 border-white/80 bg-white/10 px-6 py-3 text-base font-medium text-white"
                >
                  {secondaryButton.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
