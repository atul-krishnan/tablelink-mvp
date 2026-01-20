"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
    className?: string;
    children: React.ReactNode;
}

export function Reveal({ className, children }: RevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
