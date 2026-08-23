"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Calculator,
  CheckSquare,
  ChevronLeft,
  FileText,
  Search,
  Ruler,
  Percent,
  CalendarDays,
  Building2,
  Wallet,
  ClipboardList,
} from "lucide-react";

type Tool = {
  title: string;
  description: string;
  href: string;
  category: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
};

const tools: Tool[] = [
  {
    title: "محاسبه تعرفه نظام مهندسی ۱۴۰۵",
    description:
      "برآورد هزینه خدمات نظام مهندسی بر اساس زیربنا و تعداد طبقات ساختمان.",
    href: "/tools/engineering-fees-1405",
    category: "محاسبات مالی",
    icon: Calculator,
    iconBg: "bg-red-50",
    iconColor: "text-[#a82d2a]",
  },
  {
    title: "محاسبه تراکم ساختمان",
    description:
      "محاسبه تراکم مجاز و تراکم واقعی پروژه بر اساس مساحت زمین و زیربناها.",
    href: "/tools/density",
    category: "محاسبات فنی",
    icon: Percent,
    iconBg: "bg-blue-50",
    iconColor: "text-[#249fc4]",
  },
  {
    title: "چک‌لیست اقدامات پیش از شروع عملیات ساختمانی",
    description:
      "بررسی و کنترل موارد ضروری قبل از شروع عملیات ساختمانی پروژه.",
    href: "/tools/pre-construction",
    category: "مدیریت پروژه",
    icon: CheckSquare,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "محاسبه زیربنا و مساحت",
    description:
      "محاسبه سریع زیربنا، مساحت مفید و مشاعات ساختمان.",
    href: "/tools/area",
    category: "محاسبات فنی",
    icon: Ruler,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    title: "برنامه زمان‌بندی پروژه",
    description:
      "تنظیم و بررسی مراحل اصلی زمان‌بندی پروژه ساختمانی.",
    href: "/tools/project-schedule",
    category: "مدیریت پروژه",
    icon: CalendarDays,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "محاسبه مصالح ساختمانی",
    description:
      "برآورد اولیه مقدار مصالح مورد نیاز بر اساس اطلاعات پروژه.",
    href: "/tools/materials",
    category: "محاسبات فنی",
    icon: Building2,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    title: "محاسبه هزینه پروژه",
    description:
      "برآورد اولیه هزینه‌های اصلی اجرای پروژه ساختمانی.",
    href: "/tools/project-cost",
    category: "محاسبات مالی",
    icon: Wallet,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    title: "مدیریت مستندات پروژه",
    description:
      "ساماندهی و بررسی مدارک و مستندات مورد نیاز پروژه.",
    href: "/tools/documents",
    category: "مدیریت پروژه",
    icon: FileText,
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    title: "چک‌لیست‌های اجرایی ساختمان",
    description:
      "چک‌لیست‌های کاربردی برای کنترل کیفیت و اجرای صحیح عملیات.",
    href: "/tools/checklists",
    category: "مدیریت پروژه",
    icon: ClipboardList,
    iconBg: "bg-red-50",
    iconColor: "text-[#a82d2a]",
  },
];

const categories = [
  "همه ابزارها",
  "محاسبات مالی",
  "محاسبات فنی",
  "مدیریت پروژه",
  "طراحی و معماری",
  "حقوق و قراردادها",
];

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] =
    useState("همه ابزارها");

  const [search, setSearch] = useState("");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory =
        activeCategory === "همه ابزارها" ||
        tool.category === activeCategory;

      const searchValue = search.trim().toLowerCase();

      const matchesSearch =
        !searchValue ||
        tool.title.toLowerCase().includes(searchValue) ||
        tool.description.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#fafafa] text-neutral-800"
    >
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}

          <div className="flex items-center gap-2 pt-6 text-xs text-neutral-400">
            <Link
              href="/"
              className="transition hover:text-[#a82d2a]"
            >
              خانه
            </Link>

            <ChevronLeft size={13} />

            <span className="text-neutral-600">
              ابزارها
            </span>
          </div>

          <div className="grid items-center gap-10 py-12 lg:grid-cols-[1fr_420px] lg:py-16">
            {/* Text */}

            <div className="order-1">
              <span className="inline-flex rounded-full bg-[#fff3f2] px-4 py-2 text-xs font-bold text-[#a82d2a]">
                ابزارهای خشت آکادمی
              </span>

              <h1 className="mt-5 text-3xl font-extrabold leading-tight text-neutral-900 md:text-5xl">
                ابزارهای کاربردی
                <br />
                مهندسی ساختمان
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-neutral-500 md:text-base">
                مجموعه‌ای از ابزارهای رایگان برای محاسبات،
                بررسی پروژه و کارهای روزمره مهندسان و فعالان
                صنعت ساختمان.
              </p>

              {/* Search */}

              <div className="relative mt-7 max-w-2xl">
                <Search
                  size={19}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="جستجو در ابزارها..."
                  className="h-14 w-full rounded-2xl border border-neutral-200 bg-white px-12 text-sm shadow-sm outline-none transition placeholder:text-neutral-400 focus:border-[#a82d2a] focus:ring-4 focus:ring-[#a82d2a]/5"
                />
              </div>
            </div>

            {/* Illustration */}

            <div className="order-2 hidden lg:flex">
              <div className="relative flex h-[280px] w-full items-center justify-center overflow-hidden rounded-[32px] bg-[#faf4f2]">
                <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-[#ead8d5]" />

                <div className="absolute bottom-8 left-10 h-24 w-24 rounded-full bg-[#f1e4df]" />

                <div className="relative z-10 w-[260px] rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="h-3 w-24 rounded-full bg-neutral-200" />
                    <Calculator
                      size={22}
                      className="text-[#a82d2a]"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map(
                      (item) => (
                        <div
                          key={item}
                          className="h-10 rounded-lg bg-neutral-50"
                        />
                      ),
                    )}
                  </div>

                  <div className="mt-4 h-10 rounded-lg bg-[#a82d2a]" />
                </div>

                <div className="absolute bottom-5 right-8 rounded-xl border border-neutral-200 bg-white p-3 shadow-lg">
                  <Ruler
                    size={28}
                    className="text-[#249fc4]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* CATEGORIES */}
      {/* ================================================= */}

      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => {
            const active =
              activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-bold transition ${
                  active
                    ? "border-[#a82d2a] bg-[#a82d2a] text-white"
                    : "border-neutral-200 bg-white text-neutral-600 hover:border-[#a82d2a] hover:text-[#a82d2a]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* ================================================= */}
      {/* TOOLS */}
      {/* ================================================= */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        {filteredTools.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => {
              const Icon = tool.icon;

              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-2xl border border-neutral-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
                >
                  {/* Icon */}

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${tool.iconBg}`}
                  >
                    <Icon
                      size={26}
                      className={tool.iconColor}
                    />
                  </div>

                  {/* Category */}

                  <div className="mt-5 text-[11px] font-bold text-neutral-400">
                    {tool.category}
                  </div>

                  {/* Title */}

                  <h2 className="mt-2 text-lg font-extrabold leading-8 text-neutral-900">
                    {tool.title}
                  </h2>

                  {/* Description */}

                  <p className="mt-3 min-h-[56px] text-sm leading-7 text-neutral-500">
                    {tool.description}
                  </p>

                  {/* Link */}

                  <div className="mt-6 flex items-center gap-1 text-sm font-bold text-[#a82d2a] transition group-hover:gap-2">
                    استفاده از ابزار
                    <span>←</span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-16 text-center">
            <Search
              size={32}
              className="mx-auto text-neutral-300"
            />

            <h2 className="mt-4 font-extrabold">
              ابزاری پیدا نشد
            </h2>

            <p className="mt-2 text-sm text-neutral-500">
              عبارت جستجو یا دسته‌بندی را تغییر دهید.
            </p>
          </div>
        )}
      </section>

      {/* ================================================= */}
      {/* SUGGEST TOOL */}
      {/* ================================================= */}

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#f0d7d5] bg-[#fff6f5] p-6 text-center sm:flex-row sm:text-right">
          <div>
            <h2 className="text-base font-extrabold text-neutral-900">
              ابزار مورد نظرتان را پیدا نکردید؟
            </h2>

            <p className="mt-2 text-sm leading-7 text-neutral-500">
              اگر ابزار خاصی برای کارهای مهندسی نیاز دارید،
              پیشنهادتان را برای ما ارسال کنید.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 rounded-xl border border-[#a82d2a] bg-white px-5 py-3 text-sm font-bold text-[#a82d2a] transition hover:bg-[#a82d2a] hover:text-white"
          >
            پیشنهاد ابزار
          </Link>
        </div>
      </section>

      {/* ================================================= */}
      {/* BENEFITS */}
      {/* ================================================= */}

      <section className="border-t border-neutral-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
          <Benefit
            icon={Calculator}
            title="کاملاً رایگان"
            description="ابزارها بدون نیاز به پرداخت قابل استفاده هستند."
          />

          <Benefit
            icon={Ruler}
            title="سریع و آسان"
            description="نتیجه محاسبات را با چند ورودی ساده دریافت کنید."
          />

          <Benefit
            icon={Building2}
            title="مخصوص صنعت ساختمان"
            description="ابزارها با نیازهای مهندسان و پروژه‌های ساختمانی طراحی شده‌اند."
          />

          <Benefit
            icon={CheckSquare}
            title="قابل استفاده در پروژه"
            description="برای بررسی‌ها و محاسبات روزمره پروژه از ابزارها استفاده کنید."
          />
        </div>
      </section>
    </main>
  );
}

/* ========================================================= */
/* BENEFIT */
/* ========================================================= */

function Benefit({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-50">
        <Icon
          size={21}
          className="text-[#a82d2a]"
        />
      </div>

      <div>
        <h3 className="text-sm font-extrabold text-neutral-900">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-6 text-neutral-500">
          {description}
        </p>
      </div>
    </div>
  );
}