"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Find all individual fade-in elements
            const elements = gsap.utils.toArray<HTMLElement>("[data-scroll-reveal]");
            elements.forEach((el) => {
                gsap.fromTo(
                    el,
                    { autoAlpha: 0, y: 40 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });

            // Find staggering group containers
            const staggerGroups = gsap.utils.toArray<HTMLElement>("[data-scroll-stagger]");
            staggerGroups.forEach((group) => {
                gsap.fromTo(
                    group.children,
                    { autoAlpha: 0, y: 40 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: group,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return <>{children}</>;
};
