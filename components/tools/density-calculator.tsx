"use client";

import { useMemo, useState } from "react";
import {
  Calculator,
  CheckCircle2,
  ChevronLeft,
  Home,
  Info,
  Maximize2,
  Ruler,
  Scale,
  Trash2,
} from "lucide-react";

export default function DensityCalculator() {
  const [landLength, setLandLength] = useState("");
  const [landWidth, setLandWidth] = useState("");
  const [occupancy, setOccupancy] = useState("");
  const [density, setDensity] = useState("");

  const calculation = useMemo(() => {
    const length = Number(landLength) || 0;
    const width = Number(landWidth) || 0;
    const occupancyPercent = Number(occupancy) || 0;
    const densityPercent = Number(density) || 0;

    // مساحت زمین
    const landArea = length * width;

    // سطح اشغال
    const occupiedArea =
      landArea > 0 ? (landArea * occupancyPercent) / 100 : 0;

    // زیربنای کل
    const totalBuiltArea =
      landArea > 0 ? (landArea * densityPercent) / 100 : 0;

    // تعداد طبقات مجاز
    // همیشه به عدد صحیح و رو به بالا گرد می‌شود
    const floors =
      occupiedArea > 0 ? Math.ceil(totalBuiltArea / occupiedArea) : 0;

    /*
      درز انقطاع:
      تا ۴ طبقه: ۶ سانتی‌متر
      ۵ و ۶ طبقه: ۸ سانتی‌متر
      بیشتر از ۶ طبقه: ۱۰ سانتی‌متر
    */
    const separationJoint =
      floors <= 4
        ? 6
        : floors <= 6
          ? 8
          : 10;

    return {
      length,
      width,
      occupancyPercent,
      densityPercent,
      landArea,
      occupiedArea,
      totalBuiltArea,
      floors,
      separationJoint,
    };
  }, [landLength, landWidth, occupancy, density]);

  function clearForm() {
    setLandLength("");
    setLandWidth("");
    setOccupancy("");
    setDensity("");
  }

  function formatNumber(value: number) {
    return new Intl.NumberFormat("fa-IR", {
      maximumFractionDigits: 2,
    }).format(value);
  }

  function formatInteger(value: number) {
    return new Intl.NumberFormat("fa-IR", {
      maximumFractionDigits: 0,
    }).format(value);
  }

  return (
    <main className="min-h-screen bg-[#faf8f6]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#090a0b] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>

        <div className="container relative mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 pt-6 text-xs text-white/55">
            <a href="/" className="transition hover:text-white">
              خانه
            </a>

            <ChevronLeft size={13} />

            <a
              href="/tools"
              className="transition hover:text-white"
            >
              ابزارها
            </a>

            <ChevronLeft size={13} />

            <span className="text-white/80">
              محاسبه تراکم ساختمان
            </span>
          </div>

          {/* Hero */}
          <div className="grid min-h-[380px] grid-cols-1 items-center gap-10 py-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="mb-5 h-1 w-12 bg-[#8f211d]" />

              <h1 className="text-4xl font-extrabold leading-[1.3] md:text-5xl">
                محاسبه تراکم
                <br />
                ساختمان
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/65 md:text-lg">
                با وارد کردن مشخصات زمین و ضوابط ساختمانی،
                سطح اشغال، زیربنای کل و تعداد طبقات مجاز پروژه
                را محاسبه کنید.
              </p>
            </div>

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
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          {/* INPUT */}
          <div className="rounded-2xl border border-[#e9e5e2] bg-white p-6 shadow-[0_12px_40px_rgba(30,20,15,.05)] md:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold">
                اطلاعات ورودی
              </h2>

              <p className="mt-2 text-sm text-neutral-500">
                مشخصات زمین و ضوابط ساختمانی را وارد کنید.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* طول زمین */}
              <InputField
                label="طول زمین"
                unit="متر"
                value={landLength}
                onChange={setLandLength}
                placeholder="مثلاً 25"
                icon={<Ruler size={18} />}
              />

              {/* عرض زمین */}
              <InputField
                label="عرض زمین"
                unit="متر"
                value={landWidth}
                onChange={setLandWidth}
                placeholder="مثلاً 20"
                icon={<Maximize2 size={18} />}
              />

              {/* سطح اشغال */}
              <InputField
                label="ضریب سطح اشغال"
                unit="درصد"
                value={occupancy}
                onChange={setOccupancy}
                placeholder="مثلاً 60"
                icon={<Home size={18} />}
              />

              {/* تراکم */}
              <InputField
                label="تراکم"
                unit="درصد"
                value={density}
                onChange={setDensity}
                placeholder="مثلاً 240"
                icon={<Scale size={18} />}
              />
            </div>

            {/* Preview */}
            <div className="mt-8 rounded-xl bg-[#faf8f6] p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-500">
                  مساحت زمین
                </span>

                <strong className="text-lg">
                  {formatNumber(calculation.landArea)} مترمربع
                </strong>
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
            <h2 className="mb-5 text-2xl font-extrabold">
              نتایج محاسبه
            </h2>

            <div className="space-y-2">
              {/* سطح اشغال */}
              <ResultCard
                title="سطح اشغال"
                value={formatNumber(calculation.occupiedArea)}
                unit="مترمربع"
                icon={<Maximize2 size={27} />}
              />

              {/* زیربنا */}
              <ResultCard
                title="زیربنای کل"
                value={formatNumber(calculation.totalBuiltArea)}
                unit="مفید و غیر مفید — مترمربع"
                icon={<Home size={27} />}
              />

              {/* طبقات */}
              <ResultCard
                title="تعداد طبقات مجاز"
                value={formatInteger(calculation.floors)}
                unit="طبقه"
                icon={<Ruler size={27} />}
              />

              {/* درز انقطاع */}
              <ResultCard
                title="حدود درز انقطاع"
                value={formatInteger(calculation.separationJoint)}
                unit="سانتی‌متر"
                icon={<Scale size={27} />}
                valueClassName="text-[#d9342b]"
              />

              {/* Status */}
              <div className="mt-3 rounded-xl border border-[#8f211d] bg-[#651c19] p-5">
                <div className="flex items-start gap-4">
                  <div className="pt-1">
                    <CheckCircle2
                      size={28}
                      className="text-white"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-white/60">
                      وضعیت محاسبه
                    </p>

                    <h3 className="mt-1 text-lg font-extrabold">
                      محاسبه با موفقیت انجام شد
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-white/60">
                      نتایج بر اساس اطلاعات واردشده محاسبه شده‌اند.
                    </p>
                  </div>
                </div>
              </div>

              {/* Notice */}
              <div className="mt-3 flex gap-3 rounded-xl border border-white/10 p-4 text-xs leading-6 text-white/55">
                <Info size={18} className="mt-1 shrink-0" />

                <p>
                  برای محاسبه درز انقطاع، تا ۴ طبقه ۶ سانتی‌متر،
                  برای ۵ و ۶ طبقه ۸ سانتی‌متر و برای بیشتر از ۶
                  طبقه ۱۰ سانتی‌متر درنظر گرفته شده است.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DEFINITIONS */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <InfoCard
            title="نکات مهم در محاسبه تراکم"
            items={[
              "مساحت زمین از حاصل‌ضرب طول و عرض زمین به دست می‌آید.",
              "سطح اشغال از ضرب مساحت زمین در ضریب سطح اشغال محاسبه می‌شود.",
              "زیربنای کل از ضرب مساحت زمین در درصد تراکم به دست می‌آید.",
              "تعداد طبقات مجاز بر اساس نسبت زیربنای کل به سطح اشغال محاسبه می‌شود و به عدد صحیح رو به بالا گرد می‌شود.",
            ]}
          />

          <InfoCard
            title="تعاریف"
            items={[
              "سطح اشغال: حداکثر مساحت مجاز ساخت‌وساز در طبقه همکف نسبت به مساحت زمین.",
              "زیربنای کل: مجموع مساحت زیربناهایی که بر اساس درصد تراکم مجاز هستند.",
              "تعداد طبقات مجاز: نسبت زیربنای کل مجاز به سطح اشغال که برای نمایش به عدد صحیح رو به بالا گرد می‌شود.",
              "درز انقطاع: تا ۴ طبقه ۶ سانتی‌متر، برای ۵ و ۶ طبقه ۸ سانتی‌متر و برای بیشتر از ۶ طبقه ۱۰ سانتی‌متر.",
            ]}
          />
        </div>

        {/* FORMULA */}
        <section className="mt-5 overflow-hidden rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-8">
          <h2 className="text-center text-2xl font-extrabold">
            فرمول محاسبه
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <FormulaBox>
              <span>مساحت زمین</span>
              <small>طول × عرض</small>
            </FormulaBox>

            <FormulaBox>
              <span>سطح اشغال</span>
              <small>
                مساحت زمین × ضریب سطح اشغال ÷ ۱۰۰
              </small>
            </FormulaBox>

            <FormulaBox>
              <span>زیربنای کل</span>
              <small>
                مساحت زمین × تراکم ÷ ۱۰۰
              </small>
            </FormulaBox>
          </div>

          <div className="mt-5 flex justify-center">
            <div className="rounded-xl bg-[#8f211d] px-8 py-5 text-center text-white">
              <div className="font-extrabold">
                تعداد طبقات مجاز
              </div>

              <small>
                زیربنای کل ÷ سطح اشغال → گرد کردن رو به بالا
              </small>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

/* -------------------------------- */
/* INPUT COMPONENT */
/* -------------------------------- */

function InputField({
  label,
  unit,
  value,
  onChange,
  placeholder,
  icon,
}: {
  label: string;
  unit: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold">
        {label}{" "}
        <span className="font-normal text-neutral-400">
          ({unit})
        </span>
      </label>

      <div className="relative">
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
          {icon}
        </div>

        <input
          type="number"
          min="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-[#ddd9d6] bg-white py-4 pl-4 pr-12 outline-none transition focus:border-[#8f211d] focus:ring-2 focus:ring-[#8f211d]/10"
          placeholder={placeholder}
        />

        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-neutral-400">
          {unit}
        </span>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* RESULT CARD */
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
        <p className="text-xs text-white/60">
          {title}
        </p>

        <div
          className={`mt-1 text-3xl font-extrabold ${valueClassName}`}
        >
          {value}
        </div>

        <p className="mt-1 text-xs text-white/45">
          {unit}
        </p>
      </div>

      <div className="text-white/70">
        {icon}
      </div>
    </div>
  );
}

/* -------------------------------- */
/* INFO CARD */
/* -------------------------------- */

function InfoCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-8">
      <div className="flex gap-5">
        <div className="hidden shrink-0 text-neutral-200 md:block">
          <ClipboardIcon />
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-extrabold">
            {title}
          </h2>

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

/* -------------------------------- */
/* FORMULA BOX */
/* -------------------------------- */

function FormulaBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#e2dedb] bg-[#faf8f6] px-6 py-5 text-center">
      {children}
    </div>
  );
}

/* -------------------------------- */
/* ICON */
/* -------------------------------- */

function ClipboardIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V2h6v2" />
      <path d="M8 9h8" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </svg>
  );
}