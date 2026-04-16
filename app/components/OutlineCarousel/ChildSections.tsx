'use client';

// ── Primitives ────────────────────────────────────────────────

import Image from "next/image";
import dynamic from "next/dynamic";

const CatModel = dynamic(() => import("../CatModel"), { ssr: false });

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-400">{children}</p>
);

const SectionTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <h2 className={`mt-4 text-4xl font-semibold tracking-[-0.05em] ${className || "text-neutral-950"} md:text-5xl md:leading-[1.1]`}>
        {children}
    </h2>
);

// ── Sections ──────────────────────────────────────────────────

const AboutSection = () => (
    <section id="about" className="flex h-full w-full flex-col justify-between px-6 py-10 md:px-10 md:py-12 lg:px-12">
        <div className="max-w-2xl">
            <Eyebrow>소개</Eyebrow>
            <SectionTitle>
                <span className="sweep-algorithm">알고리즘</span>과{" "}
                <span className="sweep-ai">AI</span>,<br />
                개념부터 심화까지.            </SectionTitle>
            <p className="mt-5 max-w-lg text-lg leading-8 text-neutral-500">

                우리는 논리적 사고의 정수인 알고리즘을 통해 문제 해결 능력을 단련하고, 데이터 속에서 새로운 가치를 창출하는 인공지능 기술을 탐구합니다.
            </p>

            <p className="mt-5 max-w-lg text-lg leading-8 text-neutral-500 hidden lg:block" >
                POSCAT은 단순히 코딩을 배우는 것을 넘어, 미래 기술의 핵심이 될 분야의 깊이 있는 이해와 경험을 쌓을 수 있는 최고의 커뮤니티입니다.
            </p>
        </div>

        <dl className="mt-12 grid gap-8 md:grid-cols-3">
            {([
                ["문제 해결력", "그룹 스터디를 통해 자료구조 및 알고리즘 이론을 숙달하고, 문제 해결 능력을 기릅니다. 국내외 경진대회 참가를 목표로 함께 공부하고 성장합니다."],
                ["AI 탐구", "머신러닝, 딥러닝의 기초부터 최신 트렌드까지, 이론 학습과 코드 구현을 병행합니다."],
                ["함께 성장", "서로의 시도를 존중하며 오래 가는 실력을 만들어 갑니다."],
            ] as const).map(([term, detail]) => (
                <div key={term}>
                    <dt className="text-base font-semibold text-neutral-950">{term}</dt>
                    <dd className="mt-2 text-sm leading-6 text-neutral-500">{detail}</dd>
                </div>
            ))}
        </dl>
        <div className="lg:absolute -right-20 bottom-10 h-160 w-160 hidden md:block">
            <CatModel />
        </div>

    </section>
);

const ActivitiesSection = () => (
    <section id="activities" className="flex h-full w-full flex-col justify-between px-6 py-10 md:px-10 md:py-12 lg:px-12 w-full">
        <div className="max-w-2xl">
            <Eyebrow>활동</Eyebrow>
            <SectionTitle>매주 꾸준히,<br />함께 성장하는 곳.</SectionTitle>
            <p className="mt-5 text-lg leading-8 text-neutral-500">
                정규 세션으로 기본기를 다지고, 스터디와 프로젝트로 더 깊게 파고듭니다.
            </p>
        </div>

        <ol className="mt-12 space-y-6">
            {([
                ["알고리즘 세미나", "BOJ·Codeforces·AtCoder로 실력을 쌓고 ICPC 등 대회를 함께 준비합니다."],
                ["인공지능 세션", "이론과 구현을 넘나들며 CV·NLP 등 관심 분야를 깊게 탐구합니다."],
                ["프로젝트 & 협업", "팀 프로젝트로 아이디어를 코드로 만들고 코드 리뷰로 실력을 키웁니다."],
            ] as const).map(([title, desc], i) => (
                <li key={title} className="flex gap-6 items-start">
                    <span className="text-3xl font-bold tabular-nums tracking-[-0.05em] text-neutral-200 leading-none pt-1">
                        {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                        <p className="font-semibold text-neutral-950">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-neutral-500">{desc}</p>
                    </div>
                </li>
            ))}
        </ol>

        <img src="/postech-logo.png" alt="postech logo" className="hiddene md:visible w-100 opacity-50 absolute z-0 -right-12 bottom-12" />
    </section>
);

const LookingForSection = () => (
    <section id="looking-for" className="flex h-full w-full flex-col justify-between px-6 py-10 md:px-10 md:py-12 lg:px-12 relative">
        <div className="max-w-2xl relative z-10">
            <Eyebrow><span className="text-stone-700">카와이 다케쟈 다메데스카?</span></Eyebrow>
            <SectionTitle>와우</SectionTitle>
            <p className="mt-5 text-lg leading-8 text-stone-900">
                placeholder123 123
            </p>
        </div>


    </section>
);

const CompetitionSection = () => (
    <section id="competition" className="flex h-full w-full flex-col justify-between px-6 py-10 md:px-10 md:py-12 lg:px-12 relative z-10">
        <div className="max-w-2xl relative z-10">
            <Eyebrow>대회 출전</Eyebrow>
            <SectionTitle className="text-white"><span className="text-postech">POSTECH</span>의 이름으로,<br />승리를 향하여.</SectionTitle>
            <p className="mt-5 text-lg leading-8 text-neutral-100">
                알고리즘 분야에서 ICPC를, AI 분야에서 <br /> 포스텍-카이스트 학생대제전 우승을 목표합니다.
            </p>
        </div>

        <dl className="mt-12 grid gap-8 relative z-10">
            {([
                ["ICPC & 경진대회", "국제대학생 프로그래밍 경시대회(ICPC)를 비롯해 각종 대회에 참가합니다."],
                ["포스텍-카이스트 학생대제전", "포카전 AI 종목에서 카이스트를 이길 인공지능을 만듭니다."],
                ["온라인 플랫폼", "BOJ, Codeforces, AtCoder 등 다양한 플랫폼으로 꾸준히 실전 감각을 유지합니다."],
            ] as const).map(([term, detail]) => (
                <div key={term}>
                    <dt className="text-base font-semibold text-white">{term}</dt>
                    <dd className="mt-2 text-sm leading-6 text-neutral-100">{detail}</dd>
                </div>
            ))}
        </dl>
        <div className="bg-gradient-to-r from-black/90 via-black/60  to-transparent top-0 bottom-0 left-0 w-200 absolute z-5" />
        <Image src="/ucpc2025.png" alt="ucpc2025" width={5712} height={4284} className=" absolute z-0 object-cover object-left w-full -right-12 top-0 bottom-0 h-full z-0  rounded-bl-3xl" />


    </section>
);

export const childSections = [
    <AboutSection key="about" />,
    <ActivitiesSection key="activities" />,
    <CompetitionSection key="competition" />,
    <LookingForSection key="looking-for" />,
];

