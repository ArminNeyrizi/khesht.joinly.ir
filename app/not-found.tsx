import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Home,
  Wrench,
} from "lucide-react";

const suggestedTools = [
  {
    title: "محاسبه تراکم ساختمان",
    description:
      "محاسبه تراکم مجاز و تراکم واقعی پروژه بر اساس مساحت زمین و زیربناها.",
    href: "/tools/density",
  },
  {
    title: "چک‌لیست اقدامات پیش از شروع عملیات ساختمانی",
    description:
      "بررسی موارد مهم و ضروری قبل از شروع عملیات ساختمانی.",
    href: "/tools/pre-construction",
  },
];

export default function NotFound() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#faf8f6]"
    >
      {/* 404 Hero */}

      <section className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-14 pt-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-[430px]">
          <Image
            src="/images/tools-not-found.webp"
            alt="صفحه پیدا نشد"
            width={860}
            height={680}
            priority
            className="h-auto w-full"
          />
        </div>

        <div className="mt-2 text-center">
          <span className="text-sm font-bold text-[#8f211d]">
            خطای ۴۰۴
          </span>

          <h1 className="mt-3 text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            صفحه مورد نظر پیدا نشد
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-8 text-neutral-500 sm:text-base">
            آدرس وارد شده وجود ندارد یا ممکن است صفحه مورد نظر
            جابه‌جا شده باشد.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#8f211d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#741b18]"
          >
            <Home size={17} />
            بازگشت به خانه
          </Link>

          <Link
            href="/tools"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e2ddd9] bg-white px-5 py-3 text-sm font-bold text-neutral-700 transition hover:bg-neutral-50"
          >
            <Wrench size={17} />
            مشاهده ابزارها
          </Link>
        </div>
      </section>

      {/* Suggested Tools */}

      <section className="border-t border-[#e9e5e2] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-11 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-xl font-extrabold text-neutral-900">
              شاید این ابزارها به کارتان بیاید
            </h2>

            <p className="mt-2 text-sm text-neutral-500">
              ابزارهای موجود خشت آکادمی
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {suggestedTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-2xl border border-[#e9e5e2] bg-[#faf8f6] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#8f211d]">
                    ابزار خشت آکادمی
                  </span>

                  <ArrowLeft
                    size={18}
                    className="text-neutral-300 transition group-hover:-translate-x-1 group-hover:text-[#8f211d]"
                  />
                </div>

                <h3 className="mt-4 text-lg font-extrabold text-neutral-900">
                  {tool.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-neutral-500">
                  {tool.description}
                </p>

                <div className="mt-5 text-sm font-bold text-[#8f211d]">
                  استفاده از ابزار
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}