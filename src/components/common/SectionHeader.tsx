import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12",
        centered && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
          {label}
        </span>
      )}
      <h2 className="heading-section text-foreground mb-4">{title}</h2>
      {description && (
        <p className="text-body-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
