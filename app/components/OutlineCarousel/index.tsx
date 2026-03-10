"use client"
import { useState, useRef, useEffect } from "react";
import { Controls } from "./controls";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export const Carousel = ({ childSections }: { childSections: React.ReactNode[] }) => {
    const [activeSection, setActiveSection] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const inViewRef = useRef(false);
    const activeSectionRef = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const el = containerRef.current;
        if (!el) return;

        const enter = () => {
            inViewRef.current = true;
            setIsRunning(true);
            const sections = document.querySelectorAll(".section");
            const activeSec = sections[activeSectionRef.current] as HTMLElement;
            gsap.set(activeSec?.querySelectorAll(".sweep-algorithm, .sweep-ai"), {
                animationPlayState: "running",
            });
        };

        const leave = () => {
            inViewRef.current = false;
            setIsRunning(false);
            gsap.set(document.querySelectorAll(".sweep-algorithm, .sweep-ai"), {
                animationPlayState: "paused",
            });
        };

        const st = ScrollTrigger.create({
            trigger: el,
            start: "top 40%",
            end: "bottom 30%",
            onEnter: enter,
            onEnterBack: enter,
            onLeave: leave,
            onLeaveBack: leave,
        });

        return () => st.kill();
    }, []);

    const activateSection = (index: number) => {
        setActiveSection(index);
        activeSectionRef.current = index;

        document.querySelectorAll(".dot-inner")[index].classList.add("active");

        const sections = document.querySelectorAll(".section");
        const section = sections[index] as HTMLElement;

        // Toggle CSS animation by changing play state (only if carousel is in view)
        const sweepElements = section.querySelectorAll(".sweep-algorithm, .sweep-ai");
        gsap.set(sweepElements, {
            animationPlayState: inViewRef.current ? "running" : "paused",
            overwrite: true,
        });

        // Reset other sections
        sections.forEach((s, idx) => {
            if (idx !== index) {
                gsap.set(s.querySelectorAll(".sweep-algorithm, .sweep-ai"), {
                    animationPlayState: "paused",
                });
            }
        });

        if (window.innerWidth < 1024) {
            gsap.to(".section-container", {
                duration: 1,
                // scrollLeft: -section.offsetLeft,
                scrollTo: {
                    x: section.offsetLeft,
                },
                ease: "wow",
            });
        } else {
            gsap.to(".section-container", {
                duration: 1,
                x: -section.offsetLeft,
                ease: "wow",
            });
        }
    }


    return (
        <div ref={containerRef} className={`outline-section pt-12 pb-12 overflow-clip cursor-pointer ${isRunning ? 'running' : ''}`}>
            <div className="max-w-300 mx-auto px-0 sm:px-6 h-full w-full ">
                <div className="px-6 sm:px-0">
                    <h2 className="text-4xl font-bold">일단 핵심부터.</h2>
                </div>
                <div className="mt-10 w-full relative pb-32">
                    <div className="section-container snap-x snap-mandatory  overflow-x-scroll lg:overflow-visible   ">
                        <div className="section-list  flex items-stretch gap-6 h-full">
                            {
                                childSections.map((child, index) => (
                                    <div key={index} onClick={() => activateSection(index)} className={`section min-h-[40rem] overflow-clip relative snap-center bg-stone-100/90  rounded-[1.5rem] min-w-full  dark w-full flex items-center text-3xl justify-center squircle`}>
                                        {child}
                                    </div>
                                ))
                            }
                        </div>{" "}
                    </div>
                    <Controls activeSection={activeSection} setActiveSection={setActiveSection} isRunning={isRunning} setIsRunning={setIsRunning} />
                </div>
            </div>
        </div>
    );
};