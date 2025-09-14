import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  gradient?: boolean;
}

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  onClick,
  className,
  children,
  gradient = false
}: FeatureCardProps) => {
  return (
    <Card 
      className={cn(
        "card-hover cursor-pointer group shadow-card",
        gradient && "bg-gradient-hero border-primary/20",
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className={cn(
            "h-12 w-12 rounded-lg flex items-center justify-center",
            gradient ? "bg-primary/10" : "bg-gradient-primary"
          )}>
            <Icon className={cn(
              "h-6 w-6",
              gradient ? "text-primary" : "text-white"
            )} />
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      {children && (
        <CardContent className="pt-0">
          {children}
        </CardContent>
      )}
    </Card>
  );
};