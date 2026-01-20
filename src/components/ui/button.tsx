import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        "bg-foreground text-background hover:bg-foreground/90 border-transparent",
    secondary:
        "bg-muted text-foreground hover:bg-muted/70 border-border",
    ghost:
        "bg-transparent text-foreground hover:bg-muted/60 border-transparent"
};

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => (
        <button
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 disabled:opacity-50 disabled:cursor-not-allowed",
                variantStyles[variant],
                className
            )}
            {...props}
        />
    )
);
Button.displayName = "Button";

export interface ButtonLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: ButtonVariant;
    href: string;
}

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
    ({ className, variant = "primary", href, ...props }, ref) => (
        <Link
            ref={ref}
            href={href}
            className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40",
                variantStyles[variant],
                className
            )}
            {...props}
        />
    )
);
ButtonLink.displayName = "ButtonLink";
