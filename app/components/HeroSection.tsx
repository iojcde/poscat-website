"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { NyanCat } from "./NyanCat";

gsap.registerPlugin(SplitText);

export const HeroSection = () => {
    const heroRef = useRef<HTMLElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
            tlRef.current = tl;

            // Set initial state
            gsap.set("[data-hero]:not([data-hero='h1'])", { autoAlpha: 0, y: 28 });
            gsap.set("[data-hero='mascot']", { autoAlpha: 0, y: 24, x: 20, scale: 0.96 });

            // Show the parent element now that javascript has loaded
            // (we hid it in HTML to prevent FOUC)
            gsap.set("[data-hero='h1']", { autoAlpha: 1 });

            const split = new SplitText("[data-hero='h1']", { type: "chars" });
            gsap.set(split.chars, { autoAlpha: 0, y: 80, scale: 0.1, rotation: 25 });

            tl.to(split.chars, {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                rotation: 0,
                duration: 1.4,
                stagger: 0.08,
                ease: "elastic.out(1, 0.3)"
            })
                .to("[data-hero='h2']", { autoAlpha: 1, y: 0, duration: 0.8 }, "<0.3")
                .to("[data-hero='p']", { autoAlpha: 1, y: 0, duration: 0.8 }, "<0.2")
                .to("[data-hero='cta']", { autoAlpha: 1, y: 0, duration: 0.8 }, "<0.2")
                .to("[data-hero='mascot']", { autoAlpha: 1, y: 0, x: 0, scale: 1, duration: 0.7 });
        }, el);

        return () => ctx.revert();
    }, []);

    return (<div className="relative bg-stone-50 shadow-inner">
        <section
            ref={heroRef}
            id="story"
            className="mx-auto flex max-w-300 lg:text-left text-center flex-col justify-center  px-6 pt-24 lg:pt-32 pb-32 mb-16  relative md:px-10 lg:px-12 "
        >
            <div className="pb-10">
                <h1
                    data-hero="h1"
                    className="text-5xl lg:text-6xl font-extrabold cursor-pointer select-none [&>*]:-m-[1px] pt-10 font-yuruka text-rose-500/90"
                    style={{ visibility: "hidden" }}
                    onClick={() => tlRef.current?.restart()}
                    title="애니메이션 다시 보기"
                >
                    POSCAT!
                </h1>

                <h2
                    data-hero="h2"
                    className="mt-8 text-3xl font-semibold leading-[1.4] tracking-[-0.02em] text-stone-950 md:text-3xl lg:text-4xl"
                    style={{ visibility: "hidden" }}
                >
                    <span className="font-bold">포항공과대학교</span>의 유일무이
                    <br />
                    <span className="font-extrabold">알고리즘 & 인공지능</span> 동아리.
                </h2>

                <p
                    data-hero="p"
                    className="mt-5 max-w-xl text-base lg:text-xl mx-auto lg:ml-0 leading-relaxed text-stone-500"
                    style={{ visibility: "hidden" }}
                >
                    알고리즘과 인공지능을 깊이 있게 탐구하는
                    <br />
                    포항공과대학교 동아리, <span className="font-bold text-stone-900">POSCAT</span>입니다.
                </p>

                <div data-hero="cta" className="mx-auto max-w-fit lg:ml-0 mt-8 flex flex-wrap gap-4" style={{ visibility: "hidden" }}>
                    <a
                        href="#focus"
                        className="rounded-full bg-stone-950 px-7 py-2.5 text-sm font-medium text-white transition hover:bg-rose-400"
                    >
                        더 알아보기
                    </a>
                    <a
                        href="#join"
                        className="rounded-full border border-stone-200 bg-white px-7 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-300 hover:bg-stone-50"
                    >
                        지원하기
                    </a>
                </div></div>
            <img
                src="/mascot.png"
                data-hero="mascot"
                className="absolute inset-0 mt-auto right-0 lg:right-20 -bottom-10 max-w-50 xl:max-w-200 opacity-100 ml-auto"
            />
        </section>

    </div>
    );
};
