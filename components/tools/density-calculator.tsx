"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Calculator,
  CheckCircle2,
  ChevronLeft,
  ClipboardList,
  Home,
  Info,
  Maximize2,
  Ruler,
  Scale,
  Trash2,
  TriangleAlert,
} from "lucide-react";

type Floor = {
  id: number;
  title: string;
  value: string;
};

const initialFloors: Floor[] = [
  { id: 1, title: "زیرزمین", value: "250" },
  { id: 2, title: "همکف", value: "200" },
  { id: 3, title: "طبقه ۱", value: "180" },
  { id: 4, title: "طبقه ۲", value: "180" },
  { id: 5, title: "طبقه ۳", value: "160" },
  { id: 6, title: "طبقه ۴", value: "160" },
];

export default function DensityCalculator() {
  const [landArea, setLandArea] = useState("500");
  const [allowedDensity, setAllowedDensity] = useState("200");
  const [floors, setFloors] = useState<Floor[]>(initialFloors);
  const [terrace, setTerrace] = useState("50");

  const calculation = useMemo(() => {
    const land = Number(landArea) || 0;
    const density = Number(allowedDensity) || 0;

    const floorArea = floors.reduce(
      (sum, floor) => sum + (Number(floor.value) || 0),
      0,
    );

    const terraceArea = Number(terrace) || 0;

    const totalArea = floorArea + terraceArea;

    const actualDensity = land > 0 ? (totalArea / land) * 100 : 0;

    const allowedBuiltArea = (land * density) / 100;

    const difference = totalArea - allowedBuiltArea;

    return {
      land,
      density,
      floorArea,
      terraceArea,
      totalArea,
      actualDensity,
      allowedBuiltArea,
      difference,
      exceeded: difference > 0,
    };
  }, [landArea, allowedDensity, floors, terrace]);

  function updateFloor(id: number, value: string) {
    setFloors((current) =>
      current.map((floor) => (floor.id === id ? { ...floor, value } : floor)),
    );
  }

  function clearForm() {
    setLandArea("");
    setAllowedDensity("");
    setTerrace("");
    setFloors(
      initialFloors.map((floor) => ({
        ...floor,
        value: "",
      })),
    );
  }

  function formatNumber(value: number) {
    return new Intl.NumberFormat("fa-IR").format(Math.round(value));
  }

  function formatPercent(value: number) {
    return new Intl.NumberFormat("fa-IR", {
      maximumFractionDigits: 1,
    }).format(value);
  }

  return (
    <main className="min-h-screen bg-[#faf8f6]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#090a0b] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>

        <div className="container relative mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 pt-6 text-xs text-white/55">
            <a href="/" className="transition hover:text-white">
              خانه
            </a>

            <ChevronLeft size={13} />

            <a href="/tools" className="transition hover:text-white">
              ابزارها
            </a>

            <ChevronLeft size={13} />

            <span className="text-white/80">محاسبه تراکم ساختمان</span>
          </div>

          <div className="grid min-h-[380px] grid-cols-1 items-center gap-10 py-12 lg:grid-cols-2">
            {/* Text */}
            <div className="order-2 lg:order-1">
              <div className="mb-5 h-1 w-12 bg-[#8f211d]" />

              <h1 className="text-4xl font-extrabold leading-[1.3] md:text-5xl">
                محاسبه تراکم
                <br />
                ساختمان
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/65 md:text-lg">
                با وارد کردن مشخصات زمین و زیربناها، تراکم ساختمانی مجاز و تراکم
                واقعی پروژه خود را به‌صورت دقیق محاسبه کنید.
              </p>
            </div>

            {/* Image */}
            <div className="order-1 flex h-[300px] items-end justify-center lg:order-2 lg:h-[380px]">
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src="/images/density-building.webp"
                  alt="محاسبه تراکم ساختمان"
                  className="h-full w-full object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid gap-5 lg:grid-cols-[1.08fr_.92fr]">
          {/* INPUT */}
          <div className="rounded-2xl border border-[#e9e5e2] bg-white p-6 shadow-[0_12px_40px_rgba(30,20,15,.05)] md:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold">اطلاعات ورودی</h2>

              <p className="mt-2 text-sm text-neutral-500">
                مشخصات زمین و زیربنای پروژه را وارد کنید.
              </p>
            </div>

            {/* Land */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-bold">
                مساحت کل زمین{" "}
                <span className="font-normal text-neutral-400">(مترمربع)</span>
              </label>

              <div className="relative">
                <Maximize2
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <input
                  type="number"
                  value={landArea}
                  onChange={(e) => setLandArea(e.target.value)}
                  className="w-full rounded-xl border border-[#ddd9d6] bg-white py-4 pl-4 pr-12 outline-none transition focus:border-[#8f211d] focus:ring-2 focus:ring-[#8f211d]/10"
                  placeholder="مثلاً 500"
                />
              </div>
            </div>

            {/* Density */}
            <div className="mb-8">
              <label className="mb-2 block text-sm font-bold">
                تراکم مجاز منطقه
              </label>

              <div className="relative">
                <Scale
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <input
                  type="number"
                  value={allowedDensity}
                  onChange={(e) => setAllowedDensity(e.target.value)}
                  className="w-full rounded-xl border border-[#ddd9d6] bg-white py-4 pl-12 pr-12 outline-none transition focus:border-[#8f211d] focus:ring-2 focus:ring-[#8f211d]/10"
                  placeholder="مثلاً 200"
                />

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-neutral-400">
                  %
                </span>
              </div>
            </div>

            {/* Floors */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-extrabold">
                  زیربناها{" "}
                  <span className="font-normal text-neutral-400">
                    (مترمربع)
                  </span>
                </h3>
              </div>

              <div className="space-y-3">
                {floors.map((floor) => (
                  <div key={floor.id} className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#e5e1de] bg-[#faf8f6]">
                      <Home size={17} className="text-[#8f211d]" />
                    </div>

                    <span className="w-20 shrink-0 text-sm text-neutral-600">
                      {floor.title}
                    </span>

                    <input
                      type="number"
                      value={floor.value}
                      onChange={(e) => updateFloor(floor.id, e.target.value)}
                      className="min-w-0 flex-1 rounded-xl border border-[#ddd9d6] px-4 py-3 outline-none transition focus:border-[#8f211d] focus:ring-2 focus:ring-[#8f211d]/10"
                      placeholder="0"
                    />
                  </div>
                ))}

                {/* Terrace */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#e5e1de] bg-[#faf8f6]">
                    <Ruler size={17} className="text-[#8f211d]" />
                  </div>

                  <span className="w-20 shrink-0 text-sm text-neutral-600">
                    تراس و روف‌گاردن
                  </span>

                  <input
                    type="number"
                    value={terrace}
                    onChange={(e) => setTerrace(e.target.value)}
                    className="min-w-0 flex-1 rounded-xl border border-[#ddd9d6] px-4 py-3 outline-none transition focus:border-[#8f211d] focus:ring-2 focus:ring-[#8f211d]/10"
                    placeholder="اختیاری"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={clearForm}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#ddd9d6] px-5 py-3.5 text-sm font-bold transition hover:bg-[#faf8f6]"
              >
                <Trash2 size={17} />
                پاک کردن
              </button>

              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#8f211d] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#751914]"
              >
                <Calculator size={18} />
                محاسبه تراکم
              </button>
            </div>
          </div>

          {/* RESULTS */}
          <div className="rounded-2xl bg-[#0d0f10] p-5 text-white shadow-[0_18px_50px_rgba(0,0,0,.15)] md:p-6">
            <h2 className="mb-5 text-2xl font-extrabold">نتایج محاسبه</h2>

            <div className="space-y-2">
              <ResultCard
                title="مساحت کل زمین"
                value={formatNumber(calculation.land)}
                unit="مترمربع"
                icon={<Maximize2 size={25} />}
              />

              <ResultCard
                title="تراکم مجاز"
                value={`${formatPercent(calculation.density)}%`}
                unit={`${formatNumber(calculation.allowedBuiltArea)} مترمربع`}
                icon={<Scale size={27} />}
              />

              <ResultCard
                title="زیربنای کل محاسباتی"
                value={formatNumber(calculation.totalArea)}
                unit="مترمربع"
                icon={<Ruler size={27} />}
              />

              <ResultCard
                title="تراکم واقعی"
                value={`${formatPercent(calculation.actualDensity)}%`}
                unit={`${formatNumber(calculation.totalArea)} ÷ ${formatNumber(
                  calculation.land,
                )}`}
                icon={
                  <div
                    className={
                      calculation.exceeded ? "text-[#c62828]" : "text-green-400"
                    }
                  >
                    <Calculator size={27} />
                  </div>
                }
                valueClassName={
                  calculation.exceeded ? "text-[#d9342b]" : "text-green-400"
                }
              />

              {/* Status */}
              <div
                className={`mt-2 rounded-xl border p-5 ${
                  calculation.exceeded
                    ? "border-[#8f211d] bg-[#651c19]"
                    : "border-green-900 bg-[#12301d]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="pt-1">
                    {calculation.exceeded ? (
                      <TriangleAlert size={30} className="text-[#ff4a40]" />
                    ) : (
                      <CheckCircle2 size={30} className="text-green-400" />
                    )}
                  </div>

                  <div>
                    <p className="text-xs text-white/60">وضعیت پروژه</p>

                    <h3 className="mt-1 text-xl font-extrabold">
                      {calculation.exceeded
                        ? "تجاوز از تراکم مجاز"
                        : "تراکم در محدوده مجاز"}
                    </h3>

                    <p className="mt-2 text-xs text-white/60">
                      {calculation.exceeded
                        ? `${formatNumber(
                            calculation.difference,
                          )} مترمربع بیشتر از زیربنای مجاز`
                        : `${formatNumber(
                            Math.abs(calculation.difference),
                          )} مترمربع ظرفیت باقی‌مانده`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Notice */}
              <div className="mt-3 flex gap-3 rounded-xl border border-white/10 p-4 text-xs leading-6 text-white/55">
                <Info size={18} className="mt-1 shrink-0" />

                <p>
                  این محاسبه بر اساس مقادیر واردشده انجام می‌شود و ممکن است برای
                  بررسی نهایی پروژه نیاز به بررسی ضوابط و مقررات شهری داشته
                  باشد.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <InfoCard
            icon={<ClipboardList size={42} />}
            title="نکات مهم در محاسبه تراکم"
            items={[
              "تراکم = زیربنای کل محاسباتی ÷ مساحت کل زمین × ۱۰۰",
              "زیرزمین‌هایی با ارتفاع مفید کمتر از ۲.۲۰ متر ممکن است در تراکم محاسبه نشوند.",
              "بالکن‌ها، انباری‌ها و پیش‌آمدگی‌ها ممکن است طبق ضوابط در تراکم محاسبه شوند.",
              "پارکینگ و تأسیسات نیز بسته به ضوابط پروژه بررسی می‌شوند.",
            ]}
          />

          <InfoCard
            icon={<Info size={42} />}
            title="تعاریف"
            items={[
              "تراکم مجاز: حداکثر نسبت زیربنای مجاز به مساحت زمین طبق ضوابط طرح تفصیلی منطقه.",
              "زیربنای محاسباتی: مجموع زیربناهای طبقات که در محاسبه تراکم منظور می‌شوند.",
            ]}
          />
        </div>

        {/* FORMULA */}
        <section className="mt-5 overflow-hidden rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-8">
          <h2 className="text-center text-2xl font-extrabold">
            فرمول محاسبه تراکم
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <FormulaBox>
              زیربنای کل محاسباتی
              <small>(مترمربع)</small>
            </FormulaBox>

            <span className="text-2xl text-neutral-400">÷</span>

            <FormulaBox>
              مساحت کل زمین
              <small>(مترمربع)</small>
            </FormulaBox>

            <span className="text-2xl text-neutral-400">×</span>

            <strong className="text-2xl">100</strong>

            <span className="text-2xl text-neutral-400">=</span>

            <div className="rounded-xl bg-[#8f211d] px-8 py-5 text-center text-white">
              <div className="font-extrabold">تراکم</div>

              <small>(درصد)</small>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

/* -------------------------------- */
/* COMPONENTS */
/* -------------------------------- */

function ResultCard({
  title,
  value,
  unit,
  icon,
  valueClassName = "text-white",
}: {
  title: string;
  value: string;
  unit: string;
  icon: React.ReactNode;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-[#151819] px-5 py-5">
      <div className="flex-1">
        <p className="text-xs text-white/60">{title}</p>

        <div className={`mt-1 text-3xl font-extrabold ${valueClassName}`}>
          {value}
        </div>

        <p className="mt-1 text-xs text-white/45">{unit}</p>
      </div>

      <div className="text-white/70">{icon}</div>
    </div>
  );
}

function InfoCard({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-8">
      <div className="flex gap-5">
        <div className="hidden shrink-0 text-neutral-200 md:block">{icon}</div>

        <div className="flex-1">
          <h2 className="text-xl font-extrabold">{title}</h2>

          <div className="mt-5 space-y-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 text-sm leading-7 text-neutral-600"
              >
                <CheckCircle2
                  size={18}
                  className="mt-1 shrink-0 text-[#8f211d]"
                />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FormulaBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-[190px] rounded-xl border border-[#e2dedb] bg-[#faf8f6] px-6 py-5 text-center font-bold">
      {children}
    </div>
  );
}
