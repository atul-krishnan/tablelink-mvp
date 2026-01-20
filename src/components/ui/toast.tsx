"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
    type?: "success" | "error";
}

export function Toast({ message, isVisible, onClose, type = "success" }: ToastProps) {
    React.useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    <div
                        className={`rounded-xl border px-5 py-4 shadow-glow ${type === "success"
                                ? "border-success/20 bg-success/10 text-foreground"
                                : "border-error/20 bg-error/10 text-foreground"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-lg" aria-hidden="true">
                                {type === "success" ? "✓" : "!"}
                            </span>
                            <p className="text-sm font-medium">{message}</p>
                            <button
                                onClick={onClose}
                                className="ml-2 text-muted-foreground hover:text-foreground transition"
                                aria-label="Close notification"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
