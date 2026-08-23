"use client";

import { useMemo, useState } from "react";
import {
  Calculator,
  ChevronLeft,
  Building2,
  Ruler,
  Layers3,
  ArrowLeft,
} from "lucide-react";

type Tariff = {
  min: number;
  max: number | null;
  group: string;
  title: string;
  rate: number;
  design: number;
  supervision: number;
};

const TARIFFS: Tariff[] = [
  {
    min: 1,
    max: 2,
    group: "الف",
    title: "۱ تا ۲ طبقه",
    rate: 558780,
    design: 251451,
    supervision: 307329,
  },
  {
    min: 3,
    max: 5,
    group: "ب",
    title: "۳ تا ۵ طبقه",
    rate: 711174.5,
    design: 320028.5,
    supervision: 391146,
  },
  {
    min: 6,
    max: 7,
    group: "ج",
    title: "۶ تا ۷ طبقه",
    rate: 802611.3,
    design: 361175.1,
    supervision: 441436.2,
  },
  {
    min: 8,
    max: 10,
    group: "ج",
    title: "۸ تا ۱۰ طبقه",
    rate: 914367.3,
    design: 411465.3,
    supervision: 502902,
  },
  {
    min: 11,
    max: 12,
    group: "د",
    title: "۱۱ تا ۱۲ طبقه",
    rate: 1117560,
    design: 502902,
    supervision: 614658,
  },
  {
    min: 13,
    max: 15,
    group: "د",
    title: "۱۳ تا ۱۵ طبقه",
    rate: 1320752.7,
    design: 594338.7,
    supervision: 726414,
  },
  {
    min: 16,
    max: null,
    group: "ویژه",
    title: "۱۶ طبقه و بیشتر",
    rate: 1320752.7,
    design: 594338.7,
    supervision: 726414,
  },
];

function formatNumber(value: number) {
  return new Intl.NumberFormat("fa-IR", {
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

function formatMoney(value: number) {
  return `${formatNumber(value)} تومان`;
}

export default function EngineeringFeeCalculator() {
  const [area, setArea] = useState("");
  const [floors, setFloors] = useState("");

  const result = useMemo(() => {
    const numericArea = Number(area);
    const numericFloors = Number(floors);

    if (
      !numericArea ||
      numericArea <= 0 ||
      !numericFloors ||
      numericFloors <= 0
    ) {
      return null;
    }

    const tariff =
      TARIFFS.find(
        (item) =>
          numericFloors >= item.min &&
          (item.max === null ||
            numericFloors <= item.max),
      ) ?? null;

    if (!tariff) return null;

    const total = numericArea * tariff.rate;
    const design = numericArea * tariff.design;
    const supervision =
      numericArea * tariff.supervision;

    return {
      area: numericArea,
      floors: numericFloors,
      tariff,
      total,
      design,
      supervision,
    };
  }, [area, floors]);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#f7f7f7] text-neutral-800"
    >
      {/* HEADER */}

      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <a
              href="/"
              className="transition hover:text-[#a82d2a]"
            >
              خانه
            </a>

            <ChevronLeft size={13} />

            <a
              href="/tools"
              className="transition hover:text-[#a82d2a]"
            >
              ابزارها
            </a>

            <ChevronLeft size={13} />

            <span className="text-neutral-600">
              تعرفه نظام مهندسی ۱۴۰۵
            </span>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-extrabold text-neutral-900 md:text-3xl">
                محاسبه تعرفه نظام مهندسی ۱۴۰۵
              </h1>

              <p className="mt-2 text-sm text-neutral-500">
                برآورد هزینه خدمات مهندسی بر اساس
                زیربنا و تعداد طبقات
              </p>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-xl bg-[#fff5f5] px-4 py-3 text-xs font-bold text-[#a82d2a]">
              <Calculator size={17} />
              محاسبه‌گر آنلاین
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
          {/* CALCULATOR */}

          <div className="rounded-2xl border border-neutral-200 bg-white">
            <div className="border-b border-neutral-100 px-5 py-5 sm:px-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#20a9d0]/10 text-[#20a9d0]">
                  <Calculator size={20} />
                </div>

                <div>
                  <h2 className="font-extrabold text-neutral-900">
                    اطلاعات ساختمان
                  </h2>

                  <p className="mt-1 text-xs text-neutral-400">
                    اطلاعات پروژه را وارد کنید
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 p-5 sm:p-7">
              {/* AREA */}

              <div>
                <label className="mb-2 block text-sm font-bold text-neutral-700">
                  زیربنای کل ساختمان
                </label>

                <div className="relative">
                  <Ruler
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"
                  />

                  <input
                    type="number"
                    min="1"
                    value={area}
                    onChange={(e) =>
                      setArea(e.target.value)
                    }
                    placeholder="مثلاً ۱۲۰۰"
                    className="h-14 w-full rounded-xl border border-neutral-200 bg-white px-12 pl-16 text-sm outline-none transition placeholder:text-neutral-300 focus:border-[#20a9d0] focus:ring-4 focus:ring-[#20a9d0]/10"
                  />

                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xs text-neutral-400">
                    مترمربع
                  </span>
                </div>
              </div>

              {/* FLOORS */}

              <div>
                <label className="mb-2 block text-sm font-bold text-neutral-700">
                  تعداد طبقات
                </label>

                <div className="relative">
                  <Layers3
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"
                  />

                  <input
                    type="number"
                    min="1"
                    value={floors}
                    onChange={(e) =>
                      setFloors(e.target.value)
                    }
                    placeholder="مثلاً ۵"
                    className="h-14 w-full rounded-xl border border-neutral-200 bg-white px-12 pl-16 text-sm outline-none transition placeholder:text-neutral-300 focus:border-[#20a9d0] focus:ring-4 focus:ring-[#20a9d0]/10"
                  />

                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xs text-neutral-400">
                    طبقه
                  </span>
                </div>
              </div>

              {/* RESULT */}

              {result ? (
                <div className="overflow-hidden rounded-2xl border border-[#d8eef5]">
                  {/* RESULT HEADER */}

                  <div className="bg-[#20a9d0] px-5 py-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-white/75">
                          گروه ساختمانی
                        </p>

                        <p className="mt-1 text-lg font-extrabold">
                          گروه {result.tariff.group}
                        </p>
                      </div>

                      <div className="rounded-xl bg-white/15 px-3 py-2 text-xs">
                        {result.tariff.title}
                      </div>
                    </div>
                  </div>

                  {/* MAIN RESULT */}

                  <div className="p-5">
                    <p className="text-xs text-neutral-400">
                      برآورد کل تعرفه خدمات مهندسی
                    </p>

                    <p className="mt-2 text-2xl font-extrabold text-neutral-900 sm:text-3xl">
                      {formatMoney(result.total)}
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <ResultCard
                        title="طراحی"
                        value={formatMoney(
                          result.design,
                        )}
                      />

                      <ResultCard
                        title="نظارت"
                        value={formatMoney(
                          result.supervision,
                        )}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl bg-neutral-50 px-5 py-6 text-center">
                  <Building2
                    size={25}
                    className="mx-auto text-neutral-300"
                  />

                  <p className="mt-3 text-sm font-bold text-neutral-500">
                    زیربنا و تعداد طبقات را وارد کنید
                  </p>

                  <p className="mt-1 text-xs text-neutral-400">
                    مبلغ تقریبی تعرفه در همین بخش نمایش داده
                    می‌شود.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* SIDE INFO */}

          <aside className="space-y-5">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <div className="flex items-center gap-3">
                <Building2
                  size={20}
                  className="text-[#a82d2a]"
                />

                <h2 className="font-extrabold">
                  جدول تعرفه ۱۴۰۵
                </h2>
              </div>

              <div className="mt-5 space-y-2">
                {TARIFFS.map((item) => (
                  <div
                    key={item.title}
                    className={`flex items-center justify-between rounded-lg px-3 py-3 text-xs ${
                      result?.tariff.title ===
                      item.title
                        ? "bg-[#20a9d0]/10 text-[#1688aa]"
                        : "bg-neutral-50 text-neutral-600"
                    }`}
                  >
                    <span>
                      {item.title}
                    </span>

                    <strong>
                      {formatNumber(item.rate)}
                    </strong>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[11px] leading-6 text-neutral-400">
                ارقام فوق، نرخ پایه خدمات مهندسی چهار
                رشته هستند و برای برآورد اولیه استفاده
                می‌شوند.
              </p>
            </div>

            <div className="rounded-2xl border border-[#bde5f2] bg-[#eaf8fc] p-5">
              <div className="flex items-start gap-3">
                <Calculator
                  size={19}
                  className="mt-1 shrink-0 text-[#249fc4]"
                />

                <div>
                  <h3 className="font-extrabold text-neutral-800">
                    نحوه محاسبه
                  </h3>

                  <p className="mt-2 text-xs leading-7 text-neutral-600">
                    زیربنای کل × تعرفه هر مترمربع =
                    برآورد کل خدمات مهندسی
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <h3 className="font-extrabold text-neutral-800">
                مثال
              </h3>

              <p className="mt-3 text-xs leading-7 text-neutral-500">
                برای یک ساختمان ۱۲۰۰ مترمربعی با ۵
                طبقه، نرخ گروه «ب» اعمال می‌شود و مبلغ
                بر اساس زیربنای کل محاسبه خواهد شد.
              </p>

              <button
                type="button"
                onClick={() => {
                  setArea("1200");
                  setFloors("5");
                }}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 px-4 py-3 text-xs font-bold text-neutral-600 transition hover:border-[#20a9d0] hover:text-[#20a9d0]"
              >
                محاسبه مثال
                <ArrowLeft size={15} />
              </button>
            </div>
          </aside>
        </div>

        {/* DISCLAIMER */}

        <div className="mt-5 rounded-xl border border-neutral-200 bg-white px-5 py-4">
          <p className="text-xs leading-7 text-neutral-500">
            این ابزار برای <strong>برآورد اولیه</strong>{" "}
            طراحی شده است. مبلغ نهایی خدمات مهندسی ممکن
            است بر اساس استان، مصوبات هیئت‌های مربوط،
            شرایط پروژه و نحوه ارجاع کار متفاوت باشد.
          </p>
        </div>
      </section>
    </main>
  );
}

/* ========================================================= */
/* RESULT CARD */
/* ========================================================= */

function ResultCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-neutral-50 p-4">
      <p className="text-xs text-neutral-400">
        {title}
      </p>

      <p className="mt-2 text-sm font-extrabold text-neutral-800">
        {value}
      </p>
    </div>
  );
}