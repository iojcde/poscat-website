const Footer = () => {
    return (
        <footer className="mx-auto max-w-300 border-t border-black/6 px-6 py-16 md:px-10 lg:px-12" >
            <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
                <div>
                    <p className="text-3xl font-bold leading-none tracking-[-0.05em] text-stone-950">
                        <img src="/logo.webp" alt="POSCAT logo" className="h-8 w-8 object-cover inline-block mb-2" />   POSCAT
                    </p><span className="font-light text-xl tracking-tight text-stone-500"> POSTECH Computing Algorithms Team</span>
                    <p className="mt-2 max-w-sm text-sm leading-7 text-stone-500">
                        포항공과대학교 알고리즘 & AI 학술 동아리
                    </p><p className="mt-2 text-sm text-stone-400">(37673) 경상북도 포항시 남구 청암로 77<br />
                        포항공과대학교 학생회관 2층 206-5호</p><br />
                </div>

                <div className="grid gap-12 text-sm text-stone-600 sm:grid-cols-3">
                    <div>
                        <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-stone-400">
                            바로가기
                        </p>
                        <div className="space-y-3">
                            <a href="#story" className="block transition hover:text-stone-950">소개</a>
                            <a href="#focus" className="block transition hover:text-stone-950">활동</a>
                            <a href="#join" className="block transition hover:text-stone-950">지원하기</a>
                        </div>
                    </div>
                    <div>
                        <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-stone-400">
                            소통 창구
                        </p>
                        <div className="space-y-3">
                            <a href="#" className="block transition hover:text-stone-950">인스타그램</a>
                            <a href="#" className="block transition hover:text-stone-950">GitHub</a>
                            <a href="#" className="block transition hover:text-stone-950">이메일 문의</a>
                        </div>
                    </div>
                    <div className="text-stone-400 mt-auto">

                        <p>© {new Date().getFullYear()} POSCAT</p>

                        <p>developed by @iojcde</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer