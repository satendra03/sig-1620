// import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";

export function ShimmerButton({ text }) {
    return (
        <div className="z-10 flex items-center justify-center">
            <div
                className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 hover:bg-blue-600",
                )}
            >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:dark:text-neutral-400 hover:text-white">
                    <span>✨ {text}</span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
            </div>
        </div>
    );
}
