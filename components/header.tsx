import Link from "next/link";
import {
  ArrowLeft,
  Phone,
} from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="container mx-auto flex h-[76px] items-center justify-between px-4">

        {/* LOGO */}
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <div className="relative">
            <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-[#8f211d] shadow-sm transition duration-300 group-hover:scale-105 group-hover:rotate-1">
              <img
                src="/images/logo.webp"
                alt="خشت آکادمی"
                className="h-full w-full object-cover"
              />
            </div>

          </div>

          <div className="leading-none">
            <b className="block text-[17px] font-black text-[#171717]">
              خشت آکادمی
            </b>

            <span className="mt-1.5 block text-[8px] font-medium tracking-[3px] text-neutral-400">
              KHESHT ACADEMY
            </span>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-1 rounded-2xl border border-black/5 bg-[#faf8f6] p-1 md:flex">

          <NavItem href="/" label="صفحه اصلی" />

          <NavItem href="/courses" label="دوره‌ها" />

          <NavItem href="/blog" label="مقالات" />

          <NavItem href="/about" label="درباره ما" />

          <NavItem href="/contact" label="تماس با ما" />

        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">

          {/* PHONE */}
          <a
            href="tel:+989021354107"
            className="hidden h-10 items-center gap-2 rounded-xl border border-[#e9e5e2] px-3 text-sm font-bold text-neutral-700 transition hover:border-[#d9b4b0] hover:bg-[#f5e9e7] hover:text-[#8f211d] lg:flex"
          >
            <Phone size={16} />

            <span dir="ltr">
              0902 135 4107
            </span>
          </a>

          {/* CTA */}
          <Link
            href="/contact"
            className="group flex h-10 items-center gap-2 rounded-xl bg-[#8f211d] px-4 text-sm font-bold !text-white shadow-sm transition duration-300 hover:bg-[#751914] hover:shadow-md"
          >
            مشاوره رایگان

            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </Link>

        </div>
      </div>
    </header>
  );
}


/* NAV ITEM */

function NavItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-600 transition duration-200 hover:bg-white hover:text-[#8f211d] hover:shadow-sm"
    >
      {label}
    </Link>
  );
}