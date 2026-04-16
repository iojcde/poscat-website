import Image from "next/image";

const navigation = [
    { href: "#story", label: "소개" },
    { href: "#focus", label: "활동" },
    { href: "#news", label: "소식" },
];

export default function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-[20px] saturate-180 border-b border-stone-200/80">
            <div className="mx-auto flex items-center justify-between rounded-full px-4 max-w-300 py-2 md:px-6">
                <a href="#story" className="flex min-w-0 items-center gap-1">

                    <Image
                        src="/logo.webp"
                        alt="POSCAT logo"
                        width={64}
                        height={64}
                        className="h-8 w-8 object-cover"
                    />


                    <div className="min-w-0 mt-0.5">
                        <p className="text-[20px] font-extrabold leading-none tracking-[-0.05em] text-stone-950">
                            POSCAT
                        </p>
                        <p className="hidden text-[10px] uppercase tracking-[0.1em] text-stone-400 sm:block">
                            POSTECH 알고리즘 & AI 학술 동아리
                        </p>
                    </div>
                </a>

                <nav className="hidden items-center gap-1 rounded-full   p-1 lg:flex">
                    {navigation.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500 transition hover:bg-stone-100 hover:text-stone-950"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#join"
                    className="rounded-full bg-stone-950 px-4 py-2 text-xs font-medium text-white transition hover:bg-orange-500"
                >
                    가입하기
                </a>
            </div>
        </header>
    );
}
