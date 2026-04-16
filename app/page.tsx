
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Carousel } from "./components/OutlineCarousel";
import { childSections } from "./components/OutlineCarousel/ChildSections";
import { ScrollReveal } from "./components/ScrollReveal";

const focusCards = [
  {
    id: "01",
    title: "알고리즘 트랙",
    description:
      "수준별 스터디그룹부터 PPC, ICPC 등 교내외 경진대회 출전까지 체계적으로 준비합니다. 정기적인 팀 연습, 주간 과제, 선배들과의 멘토링을 통해 종합적인 문제 해결 능력을 길러냅니다.",
    meta: "수준별 스터디 · 경쟁 프로그래밍",
    accent: "bg-stone-100 text-stone-600",
  }, { id: 'seperator' },
  {
    id: "02",
    title: "인공지능 트랙",
    description:
      "주제별 딥러닝 논문 스터디로 이론적 기반을 탄탄히 다지고, 카이스트와의 에이전트 대전 등 연합 학술제를 통해 실무 감각을 익힙니다. 포카전 AI 종목 대회 출전을 목표로 연구와 개발에 직접 참여합니다.",
    meta: "논문 리딩 · 포카전 AI 종목 대표",
    accent: "bg-stone-200 text-stone-700",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen text-stone-950 selection:bg-orange-100 selection:text-orange-900">
      {/* <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.15),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(96,165,250,0.12),transparent_24%),linear-gradient(to_bottom,#faf7f2,#f3eee7)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-size-[72px_72px] mask-[linear-gradient(to_bottom,white,rgba(255,255,255,0.22))]" />
      </div> */}
      {/* Add this behind your hero or cards for a subtle glow */}

      <Header />

      <ScrollReveal>
        <main>
          {/* ── Hero ── */}

          <HeroSection />
          {/* ── Outline ── */}

          <Carousel childSections={childSections} />


          {/* ── Activities ── */}
          <section id="focus" className=" bg-stone-50 py-20 pb-32">
            <div className="max-w-270 px-6 md:px-10 mx-auto">
              <div data-scroll-reveal className="mb-20 max-w-lg">
                <p className="text-[11px] uppercase tracking-[0.22em] text-stone-400">
                  주요 활동
                </p>
                <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] text-stone-950 md:text-5xl">
                  두가지 트랙.
                </h2>
              </div>

              <div className="flex flex-col gap-32">
                {/* ── Algorithm Track ── */}
                <article data-scroll-reveal className="relative flex flex-col gap-10 md:flex-row md:items-center md:gap-16 lg:gap-24">
                  <div className="flex-1">
                    <span className="mb-6 inline-block rounded-full bg-stone-200/60 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-stone-700">
                      수준별 스터디 · 경쟁 프로그래밍
                    </span>
                    <h3 className="mb-6 text-4xl font-extrabold tracking-tight text-stone-950 md:text-5xl lg:text-6xl sweep-algorithm">
                      알고리즘 트랙.
                    </h3>
                    <p className="text-lg font-medium leading-relaxed text-stone-600 md:text-xl md:leading-9">
                      수준별 스터디그룹부터 PPC, ICPC 등 교내외 경진대회 출전까지 체계적으로 준비합니다. 정기적인 팀 연습, 주간 과제, 선배들과의 멘토링을 통해 종합적인 문제 해결 능력을 길러냅니다.
                    </p>
                  </div>

                  {/* Visual/Image Placeholder */}
                  <div className="surface flex aspect-video flex-1 items-center justify-center rounded-[2.5rem] md:aspect-square lg:aspect-[4/3]">
                    <span className="select-none text-[120px] font-bold tracking-tighter text-stone-200/40 md:text-[200px]">
                      01
                    </span>
                  </div>
                </article>

                {/* ── AI Track ── */}
                <article data-scroll-reveal className="relative flex flex-col gap-10 md:flex-row-reverse md:items-center md:gap-16 lg:gap-24">
                  <div className="flex-1">
                    <span className="mb-6 inline-block rounded-full bg-stone-200/60 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-stone-700">
                      논문 리딩 · 포카전 AI 종목 대표
                    </span>
                    <h3 className="mb-6 text-4xl font-extrabold tracking-tight text-stone-950 md:text-5xl lg:text-6xl sweep-ai">
                      인공지능 트랙.
                    </h3>
                    <p className="text-lg font-medium leading-relaxed text-stone-600 md:text-xl md:leading-9">
                      주제별 딥러닝 논문 스터디로 이론적 기반을 탄탄히 다지고, 카이스트와의 에이전트 대전 등 연합 학술제를 통해 실무 감각을 익힙니다. 포카전 AI 종목 대회 출전을 목표로 연구와 개발에 직접 참여합니다.
                    </p>
                  </div>

                  {/* Visual/Image Placeholder */}
                  <div className="surface flex aspect-video flex-1 items-center justify-center rounded-[2.5rem] md:aspect-square lg:aspect-[4/3]">
                    <span className="select-none text-[120px] font-bold tracking-tighter text-stone-200/40 md:text-[200px]">
                      02
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </section>



          {/* ── Tagline ── */}
          <section className="mx-auto max-w-full px-6 pb-30 text-center md:px-10 pt-20 ">

            <p data-scroll-reveal className="text-[12px] tracking-[0.22em] text-stone-400">
              가치
            </p>
            <p data-scroll-reveal className="mt-4 text-3xl font-bold leading-snug tracking-tight text-stone-950 md:text-5xl lg:text-6xl">
              고민하고. 구현하고. 공유하고.
            </p>
            <p data-scroll-reveal className="mx-auto font-medium mt-6 max-w-xl text-pretty text-lg leading-relaxed text-stone-500">
              끝없는 지적 호기심과 성장에 대한 열망을 함께 나눕니다.
              POSCAT에서는 언제나 더 나은 방법을 고민하고, 아이디어를 코드로 구현하며, 그 경험을 서로 공유합니다. 혼자라면 멈출 곳에서도 함께라면 더 멀리 나아갈 수 있습니다.
            </p>

            <div id="logo-section">


            </div>
          </section>


          {/* ── Stats ── */}
          <section className="mx-auto max-w-300 px-6 pb-24 md:px-10 pt-8 mt-20 mb-12">
            <div data-scroll-reveal className="mb-12">
              <p className="text-3xl font-bold text-center">통계로 보는 POSCAT.</p>
            </div>
            <div data-scroll-stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="surface rounded-4xl p-10">
                <p className="text-6xl font-extrabold tracking-[-0.05em] text-stone-950">73명</p>
                <p className="mt-3 text-sm font-medium text-stone-500">동아리 등록 인원</p>
                <p className="mt-1 text-lg uppercase tracking-wide text-stone-400">26년 1학기</p>
              </div>
              <div className="surface rounded-4xl p-10">
                <p className="text-6xl font-extrabold tracking-[-0.05em] text-stone-950">2X.X</p>
                <p className="mt-3 text-sm font-medium text-stone-500">동아리 평균 학번</p>
                <p className="mt-1 text-lg uppercase tracking-wide text-stone-400">몰라요</p>
              </div>
              <div className="surface rounded-4xl p-10">
                <p className="text-6xl font-extrabold tracking-[-0.05em] text-stone-950">xx%</p>
                <p className="mt-3 text-sm font-medium text-stone-500">포카전 AI 종목 우승</p>
                <p className="mt-1 text-lg uppercase tracking-wide text-stone-400">&nbsp;</p>
              </div>
              <div className="surface rounded-4xl p-10">
                <p className="text-6xl font-extrabold tracking-[-0.05em] text-stone-950">XX<span className="text-3xl">년</span></p>
                <p className="mt-3 text-sm font-medium text-stone-500">동아리 역사</p>
                <p className="mt-1 text-lg uppercase tracking-wide text-stone-400">&nbsp;</p>
              </div>
            </div>
            <p className="mt-6 text-[11px] text-stone-400">* 위 통계는 아직 제대로 반영되지 않은 잘못된 통계입니다.</p>
          </section>





          {/* ── Recruiting ── */}
          <section className="mx-auto max-w-300 px-6 py-40 md:px-10 md:py-52 lg:px-12">
            <div data-scroll-reveal className="surface mx-auto max-w-2xl rounded-4xl p-10 text-center md:p-16">
              <div className="inline-flex rounded-full border bg-rose-500/50 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white">
                2027년 신입 부원 모집 중
              </div>

              <h3 className="mt-8 text-3xl font-bold tracking-tight text-stone-950 md:text-4xl">
                궁금한 점을 물어보세요.
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-stone-500">
                동아리 활동이나 모집에 대해 더 알고 싶으시다면<br className="hidden md:block" />
                언제든 편하게 문의해 주세요.
              </p>

              <a
                href="#"
                className="mt-10 inline-flex rounded-full bg-stone-950 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-stone-700"
              >
                운영진에게 문의하기
              </a>
            </div>
          </section>

        </main>
      </ScrollReveal>
    </div>
  );
}