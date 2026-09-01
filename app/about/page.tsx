import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  HardHat,
  MonitorCog,
  ShieldCheck,
} from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-[#faf8f6]">

      {/* HERO */}
      <section className="container mx-auto px-4 py-14 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">

          {/* TEXT */}
          <div className="order-2 lg:order-1">

            <span className="inline-flex rounded-full bg-[#f5e9e7] px-4 py-2 text-sm font-bold text-[#8f211d]">
              درباره خشت آکادمی
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.35] tracking-tight md:text-6xl">
              آموزش ساختمان،
              <br />
              <span className="text-[#8f211d]">
                کاملا عملی.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-9 text-neutral-600 md:text-lg">
              خشت آکادمی با هدف آموزش مهارت‌هایی شکل گرفته که بتوان از آن‌ها
              در پروژه‌های واقعی صنعت ساختمان استفاده کرد؛ نه صرفاً مطالبی
              برای حفظ کردن و گذراندن یک دوره.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-9 text-neutral-500">
              تمرکز ما روی حوزه‌هایی مثل اجرا، نظارت، طراحی، نقشه‌کشی و
              فناوری‌های جدید ساختمان است. در آموزش‌ها تلاش می‌کنیم مفاهیم
              را با مثال، نرم‌افزار و سناریوهای نزدیک به پروژه واقعی منتقل کنیم.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/courses"
                className="flex items-center gap-2 rounded-xl bg-[#8f211d] px-6 py-4 text-sm font-bold !text-white transition hover:bg-[#751914]"
              >
                مشاهده دوره‌ها
                <ArrowLeft size={17} />
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl border border-[#ded8d5] bg-white px-6 py-4 text-sm font-bold text-neutral-800 transition hover:border-[#8f211d] hover:text-[#8f211d]"
              >
                تماس با ما
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[32px] bg-neutral-900 shadow-[0_25px_70px_rgba(0,0,0,0.12)]">

              <img
                src="/images/modern-buildings.avif"
                alt="ساختمان‌های مدرن"
                className="aspect-[4/5] w-full object-cover"
              />

              
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-[#e9e5e2] bg-white">
        <div className="container mx-auto grid grid-cols-2 divide-x divide-[#e9e5e2] px-4 md:grid-cols-4">

          <Stat
            number="+۱۰"
            label="مدرس و متخصص"
          />

          <Stat
            number="+۵۰۰"
            label="ساعت آموزش"
          />

          <Stat
            number="+۱۵"
            label="دوره و آموزش"
          />

          <Stat
            number="۱"
            label="هدف؛ مهارت کاربردی"
          />

        </div>
      </section>

      {/* FOCUS */}
      <section className="container mx-auto px-4 py-16 md:py-20">

        <div className="max-w-2xl">
          <span className="text-sm font-bold text-[#8f211d]">
            رویکرد آموزشی
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            فقط نرم‌افزار یاد نمی‌گیری
          </h2>

          <p className="mt-4 leading-8 text-neutral-500">
            هدف این است که بدانید یک مهارت یا نرم‌افزار در پروژه کجا استفاده
            می‌شود و چطور باید از آن استفاده کرد.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <FocusCard
            icon={<HardHat size={23} />}
            title="نزدیک به پروژه"
            description="آموزش‌ها با مثال‌ها و مسائل نزدیک به فضای واقعی صنعت ساختمان ارائه می‌شوند."
          />

          <FocusCard
            icon={<MonitorCog size={23} />}
            title="مهارت نرم‌افزاری"
            description="از AutoCAD و Revit تا ابزارهای تخصصی طراحی، مدل‌سازی و مدیریت پروژه."
          />

          <FocusCard
            icon={<ShieldCheck size={23} />}
            title="مهارت حرفه‌ای"
            description="در کنار ابزار، روی فرآیند کار، کنترل، تصمیم‌گیری و خطاهای رایج پروژه تمرکز می‌کنیم."
          />

        </div>
      </section>

      {/* AREAS */}
      <section className="container mx-auto px-4 pb-16 md:pb-20">

        <div className="overflow-hidden rounded-[28px] bg-[#0d0f10] p-7 text-white md:p-10">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>
              <span className="text-sm font-bold text-[#e88a84]">
                حوزه‌های آموزشی
              </span>

              <h2 className="mt-3 text-3xl font-black">
                مسیر یادگیریت را از جایی شروع کن که نیاز داری
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-8 text-white/50">
                اجرا، نظارت، طراحی، نقشه‌کشی و BIM؛ آموزش‌ها را می‌توانی بر
                اساس مهارتی که برای کار یا پروژه‌ات نیاز داری انتخاب کنی.
              </p>
            </div>

            <Link
              href="/courses"
              className="flex w-fit shrink-0 items-center gap-2 rounded-xl bg-[#8f211d] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#751914]"
            >
              دیدن دوره‌ها
              <ArrowLeft size={17} />
            </Link>

          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "اجرای ساختمان",
              "نظارت",
              "طراحی",
              "نقشه‌کشی و BIM",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-bold"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="px-4 py-7 text-center md:py-9">
      <strong className="block text-2xl font-black text-[#8f211d] md:text-3xl">
        {number}
      </strong>

      <span className="mt-2 block text-xs text-neutral-500 md:text-sm">
        {label}
      </span>
    </div>
  );
}

function FocusCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-[#e9e5e2] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5e9e7] text-[#8f211d]">
        {icon}
      </div>

      <h3 className="mt-6 text-lg font-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-neutral-500">
        {description}
      </p>

    </div>
  );
}