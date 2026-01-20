"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
    question: string;
    answer: string;
}

export function Accordion({ items }: { items: AccordionItemProps[] }) {
    return (
        <div className="space-y-3">
            {items.map((item, index) => (
                <details
                    key={item.question}
                    className="group rounded-xl border border-border bg-card"
                >
                    <summary
                        className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-medium"
                        aria-expanded="false"
                        id={`faq-${index}`}
                    >
                        <span>{item.question}</span>
                        <span
                            className={cn(
                                "ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                            )}
                            aria-hidden="true"
                        >
                            +
                        </span>
                    </summary>
                    <div
                        className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground"
                        role="region"
                        aria-labelledby={`faq-${index}`}
                    >
                        {item.answer}
                    </div>
                </details>
            ))}
        </div>
    );
}
