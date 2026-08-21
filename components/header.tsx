import Link from "next/link";
import { UserRound } from "lucide-react";
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-[#8f211d] text-white font-black">
            خ
          </span>
          <span>
            <b className="block text-lg">خشت آکادمی</b>
            <small className="text-[9px] tracking-[3px] text-neutral-500">
              KHESHT ACADEMY
            </small>
          </span>
        </Link>
        <nav className="hidden gap-7 text-sm md:flex">
          <Link href="/">صفحه اصلی</Link>
          <Link href="/courses">دوره‌ها</Link>
          <Link href="/blog">مقالات</Link>
          <Link href="/about">درباره ما</Link>
          <Link href="/contact">تماس با ما</Link>
        </nav>
        <div className="flex gap-2">
          <Link
            href="/contact"
            className="hidden rounded-xl bg-[#8f211d] px-4 py-2 text-sm font-bold text-white sm:block"
          >
            مشاوره رایگان
          </Link>
          <Link
            href="/courses"
            className="grid h-10 w-10 place-items-center rounded-xl border"
          >
            <UserRound size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
}
