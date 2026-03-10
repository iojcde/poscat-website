
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Carousel } from "./components/OutlineCarousel";
import { childSections } from "./components/OutlineCarousel/ChildSections";
import { ScrollReveal } from "./components/ScrollReveal";

const focusCards = [
  {
    id: "01",
    title: "알고리즘",
    description:
      "기초 자료구조부터 고급 알고리즘까지 체계적으로 마스터합니다. 백준(BOJ), Codeforces, AtCoder 등 플랫폼을 활용하고, ICPC를 비롯한 국내외 경진대회를 함께 준비합니다.",
    meta: "정기 세미나 · 경쟁 프로그래밍",
    accent: "bg-stone-100 text-stone-600",
  },
  {
    id: "02",
    title: "인공지능",
    description:
      "머신러닝·딥러닝 기초 이론부터 모델 구현, 데이터 실험까지 전 과정을 경험합니다. CV·NLP 등 관심 분야별 소규모 팀을 구성해 심도 있는 연구를 진행하며, 포스텍-카이스트 학생대제전 AI 종목 우승을 목표로 합니다.",
    meta: "논문 리딩 · 딥러닝 모델 구현",
    accent: "bg-stone-100 text-stone-600",
  },
  {
    id: "03",
    title: "프로젝트 & 협업",
    description:
      "아이디어를 현실로 만드는 팀 프로젝트를 통해 실전 경험을 쌓습니다. 코드를 리뷰하고 피드백을 주고받으며 실무 감각을 키워갑니다.",
    meta: "기술 교류 · 건강한 동반 성장",
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
          <section id="focus" className=" bg-stone-50 pt-20">
            <div className="max-w-300  px-6 md:px-10 lg:px-12  mx-auto">
              <div data-scroll-reveal className="mb-20 max-w-lg">
                <p className="text-[11px] uppercase tracking-[0.22em] text-stone-400">
                  주요 활동
                </p>
                <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] text-stone-950 md:text-5xl">
                  깊이를 더하는<br />다양한 학술 활동.
                </h2>
              </div>

              <div data-scroll-stagger className="space-y-8">
                {focusCards.map((card) => (
                  <article
                    key={card.id}
                    className="surface grid items-start gap-8 rounded-4xl p-8 md:grid-cols-[auto_1fr_1.2fr] md:items-center md:gap-12 md:p-12"
                  >
                    <span className="text-5xl font-bold tracking-[-0.05em] text-stone-200 md:text-6xl">
                      {card.id}
                    </span>
                    <div>
                      <span
                        className={`mb-3 inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em] ${card.accent}`}
                      >
                        {card.meta}
                      </span>
                      <h3 className="text-2xl font-bold tracking-tight text-stone-950 md:text-3xl">
                        {card.title}
                      </h3>
                    </div>
                    <p className="leading-8 text-stone-600">{card.description}</p>
                  </article>
                ))}
              </div>
            </div>

          </section>



          {/* ── Tagline ── */}
          <section className="mx-auto max-w-full px-6 pb-30 text-center md:px-10 pt-20 lg:px-12">

            <p data-scroll-reveal className="text-[12px] tracking-[0.22em] text-stone-400">
              가치
            </p>
            <p data-scroll-reveal className="mt-4 text-3xl font-bold leading-snug tracking-tight text-stone-950 md:text-5xl lg:text-6xl">
              고민하고. 구현하고. 공유하고.
            </p>
            <p data-scroll-reveal className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-stone-500">
              끝없는 지적 호기심과 성장에 대한 열망을 함께 나눕니다.
              POSCAT에서는 언제나 더 나은 방법을 고민하고, 아이디어를 코드로 구현하며, 그 경험을 서로 공유합니다. 혼자라면 멈출 곳에서도 함께라면 더 멀리 나아갈 수 있습니다.
            </p>

            <div id="logo-section">


            </div>
          </section>


          {/* ── Stats ── */}
          <section className="mx-auto max-w-300 px-6 pb-24 md:px-10 lg:px-12 pt-8 mt-20 mb-12">
            <div data-scroll-reveal className="mb-12">
              <p className="text-3xl font-bold text-center">통계로 보는 POSCAT.</p>
            </div>
            <div data-scroll-stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="surface rounded-4xl p-10">
                <p className="text-6xl font-extrabold tracking-[-0.05em] text-stone-950">72명</p>
                <p className="mt-3 text-sm font-medium text-stone-500">동아리 등록 인원</p>
                <p className="mt-1 text-lg uppercase tracking-wide text-stone-400">24년 2학기</p>
              </div>
              <div className="surface rounded-4xl p-10">
                <p className="text-6xl font-extrabold tracking-[-0.05em] text-stone-950">2X.X</p>
                <p className="mt-3 text-sm font-medium text-stone-500">동아리 평균 학번</p>
                <p className="mt-1 text-lg uppercase tracking-wide text-stone-400">24년 2학기</p>
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



          {/* ── Values ── */}
          <section
            id="join"
            className="mx-auto max-w-300 px-6 pt-40 md:px-10 md:pt-52 lg:px-12"
          >
            <div data-scroll-reveal className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] uppercase tracking-[0.22em] text-stone-400">
                함께하고 싶은 사람
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] text-stone-950 md:text-6xl">
                실력보다 눈부신,<br />
                성장에 대한 열정.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-stone-500">
                당장의 뛰어난 실력보다, 앞으로 더 크게 성장할 잠재력을 봅니다.
              </p>
            </div>

            <div data-scroll-stagger className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="surface rounded-4xl p-10 text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
                  Builders
                </p>
                <p className="mt-4 text-lg leading-8 text-stone-600">
                  이론에 머물지 않고 실제로 코드를 작성하며 직접 부딪혀보는 것을 즐기는 분.
                </p>
              </div>
              <div className="surface rounded-4xl p-10 text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
                  Thinkers
                </p>
                <p className="mt-4 text-lg leading-8 text-stone-600">
                  단순한 정답을 넘어 '왜 그렇게 동작하는지' 원리를 이해할 때까지 파고드는 분.
                </p>
              </div>
              <div className="surface rounded-4xl p-10 text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
                  Teammates
                </p>
                <p className="mt-4 text-lg leading-8 text-stone-600">
                  최고의 동료들과 배우고 성장하며, 값진 네트워크를 함께 만들어가고 싶은 분.
                </p>
              </div>
              <div className="surface rounded-4xl p-10 text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
                  Competitors
                </p>
                <p className="mt-4 text-lg leading-8 text-stone-600">
                  포스텍의 이름으로 포스텍-카이스트 학생대제전 AI 종목 승리를 함께 이끌고 싶은 분.
                </p>
              </div>
            </div>
          </section>

          {/* ── Recruiting ── */}
          <section className="mx-auto max-w-300 px-6 py-40 md:px-10 md:py-52 lg:px-12">
            <div data-scroll-reveal className="surface mx-auto max-w-2xl rounded-4xl p-10 text-center md:p-16">
              <div className="inline-flex rounded-full border bg-rose-400 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white">
                2026년 신입 부원 모집 중
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