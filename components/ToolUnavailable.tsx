import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calculator,
  ClipboardCheck,
} from "lucide-react";

type ToolUnavailableProps = {
  title?: string;
  description?: string;
};

const suggestedTools = [
  {
    title: "محاسبه تراکم ساختمان",
    description:
      "محاسبه تراکم مجاز و تراکم واقعی پروژه بر اساس مساحت زمین و زیربناها.",
    href: "/tools/density",
    icon: Calculator,
  },
  {
    title: "چک‌لیست اقدامات پیش از شروع عملیات ساختمانی",
    description:
      "بررسی موارد مهم و ضروری قبل از شروع عملیات ساختمانی.",
    href: "/tools/pre-construction",
    icon: ClipboardCheck,
  },
];

export default function ToolUnavailable({
  title = "این ابزار در حال توسعه است",
  description = "ابزار مورد نظر شما در حال حاضر در دسترس نیست یا هنوز در حال توسعه است.",
}: ToolUnavailableProps) {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#faf8f6]"
    >
      {/* Main */}

      <section className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-16 pt-14 sm:px-6 lg:px-8">
        {/* Illustration */}

        <div className="relative w-full max-w-[420px]">
          <Image
            src="/images/tools-not-found.webp"
            alt="ابزار مورد نظر پیدا نشد"
            width={840}
            height={680}
            priority
            className="h-auto w-full"
          />
        </div>

        {/* Text */}

        <div className="mt-2 max-w-xl text-center">
          <span className="text-sm font-bold text-[#8f211d]">
            ابزارهای خشت آکادمی
          </span>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            {title}
          </h1>

          <p className="mt-4 text-sm leading-8 text-neutral-500 sm:text-base">
            {description}
          </p>
        </div>

        {/* Back */}

        <Link
          href="/tools"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#8f211d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#741b18]"
        >
          مشاهده همه ابزارها
          <ArrowLeft size={17} />
        </Link>
      </section>

      {/* Suggested Tools */}

      <section className="border-t border-[#e9e5e2] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-7">
            <h2 className="text-xl font-extrabold text-neutral-900">
              ابزارهای پیشنهادی
            </h2>

            <p className="mt-2 text-sm text-neutral-500">
              می‌توانید از ابزارهای زیر استفاده کنید.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {suggestedTools.map((tool) => {
              const Icon = tool.icon;

              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-2xl border border-[#e9e5e2] bg-[#faf8f6] p-6 transition hover:-translate-y-1 hover:border-[#d8cfcb] hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0ee] text-[#8f211d]">
                      <Icon size={21} />
                    </div>

                    <ArrowLeft
                      size={18}
                      className="mt-1 text-neutral-300 transition group-hover:-translate-x-1 group-hover:text-[#8f211d]"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold text-neutral-900">
                    {tool.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-neutral-500">
                    {tool.description}
                  </p>

                  <div className="mt-5 text-sm font-bold text-[#8f211d]">
                    استفاده از ابزار
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}