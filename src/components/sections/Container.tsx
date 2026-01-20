import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Container({ className, ...props }: ContainerProps) {
    return (
        <div
            className={cn("mx-auto max-w-6xl px-5 sm:px-8", className)}
            {...props}
        />
    );
}
