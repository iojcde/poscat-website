import Image from "next/image";

export default function Home() {
  return (
    <div className="p-6 mx-auto max-w-5xl space-y-6 text-lg">

      <h1 className="text-9xl font-bold tracking-tighter flex items-center">
        <img className="inline-block" alt="POSCAT Logo" src="/logo.webp" width={128} height={128} />POSCAT
      </h1>

      <p className="text-xl">
        POSCAT은
        포항공과대학교의
        유일무이 알고리즘·인공지능 동아리입니다.</p>

      <h2 className="text-2xl font-medium">
        Welcome to POSCAT
      </h2>

      <p className="text-neutral-900">
        포항공과대학교 유일의 알고리즘·인공지능 동아리, POSCAT입니다.
      </p>
      <p >우리는 논리적 사고의 정수인 알고리즘을 통해 문제 해결 능력을 단련하고, 데이터 속에서 새로운 가치를 창출하는 인공지능 기술을 탐구합니다.<br /> POSCAT은 단순히 코딩 기술을 배우는 것을 넘어, 미래 기술의 핵심이 될 두 분야의 깊이 있는 이해와 실질적인 경험을 쌓는 최고의 커뮤니티입니다.
      </p>

      <h2>주요 활동</h2>
      - 알고리즘 세미나, 경쟁 프로그래밍
      체계적인 스터디를 통해 자료구조, 알고리즘 이론을 마스터하고, 백준(BOJ) 등 다양한 플랫폼에서 문제 해결 능력을 기릅니다. 국내외 경진대회(ICPC 등) 참가를 목표로 함께 성장합니다. Codeforces와 AtCoder 등 인터넷 대회에도 참여합니다.
      - 인공지능 세션
      머신러닝, 딥러닝의 기초부터 최신 트렌드까지, 이론 학습과 코드 구현을 병행합니다. 컴퓨터 비전(CV), 자연어 처리(NLP) 등 관심 분야별 소규모 팀을 구성하여 심도 있는 연구를 진행합니다. 포스텍-카이스트 학생대제전의 AI 종목을 승리로 이끌 AI를 만듭니다.
      - 프로젝트과 협업
      아이디어를 현실로 만드는 팀 프로젝트를 통해 실전 경험을 쌓습니다.


      <h2>이런 분들을 기다립니다</h2>
      알고리즘 문제 해결에 뜨거운 열정을 가진 분
      AI와 머신러닝의 무한한 가능성을 함께 탐구하고 싶은 분
      최고의 동료들과 함께 배우고 성장하며, 값진 네트워크를 만들고 싶은 분
      포스텍의 일원으로서 포스텍-카이스트 학생대제전의 AI 종목에서 승리로 이끌어가고 싶은 분
    </div>
  );
}
