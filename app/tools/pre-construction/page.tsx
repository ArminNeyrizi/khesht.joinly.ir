"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  Check,
  FileCheck2,
  FileText,
  RotateCcw,
} from "lucide-react";

type FormState = {
  // 1 — مدارک و مجوزها
  buildingPermit: string;
  approvedPlans: string;
  permitValidity: string;
  planPermitMatch: string;
  siteNotebook: string;
  projectSign: string;

  // 2 — شروع عملیات
  supervisorConfirmed: string;
  startReportSubmitted: string;
  demolitionDate: string;
  excavationDate: string;
  demolitionMethod: string;
  structureType: string;

  // 3 — ایمنی
  safetyMeasures: string;
  workerSafety: string;
  ppe: string;
  siteSafety: string;

  // 4 — درختان و معابر
  treeProtection: string;
  treesStatus: string;
  sidewalkProtection: string;
  streetProtection: string;

  // 5 — مجاورین و تأسیسات
  neighboringProperties: string;
  neighborCondition: string;
  utilityStatus: string;
  electricity: string;
  water: string;
  gas: string;

  // 6 — کارگاه
  siteFence: string;
  siteAccess: string;
  materialStorage: string;
  equipmentLocation: string;
  machineryAccess: string;

  // 7 — مسئولیت فنی
  buildingContractor: string;
  electricalContractor: string;
  mechanicalContractor: string;

  // 8 — خاکبرداری و گودبرداری
  excavationLimit: string;
  excavationDepth: string;
  stabilization: string;
  adjacentStructureProtection: string;

  // توضیحات
  description: string;
  finalDescription: string;
};

const initialForm: FormState = {
  buildingPermit: "",
  approvedPlans: "",
  permitValidity: "",
  planPermitMatch: "",
  siteNotebook: "",
  projectSign: "",

  supervisorConfirmed: "",
  startReportSubmitted: "",
  demolitionDate: "",
  excavationDate: "",
  demolitionMethod: "",
  structureType: "",

  safetyMeasures: "",
  workerSafety: "",
  ppe: "",
  siteSafety: "",

  treeProtection: "",
  treesStatus: "",
  sidewalkProtection: "",
  streetProtection: "",

  neighboringProperties: "",
  neighborCondition: "",
  utilityStatus: "",
  electricity: "",
  water: "",
  gas: "",

  siteFence: "",
  siteAccess: "",
  materialStorage: "",
  equipmentLocation: "",
  machineryAccess: "",

  buildingContractor: "",
  electricalContractor: "",
  mechanicalContractor: "",

  excavationLimit: "",
  excavationDepth: "",
  stabilization: "",
  adjacentStructureProtection: "",

  description: "",
  finalDescription: "",
};

const yesNoOptions = [
  "انتخاب نمایید",
  "بله",
  "خیر",
];

const statusOptions = [
  "انتخاب نمایید",
  "انجام شده",
  "انجام نشده",
  "نیاز به پیگیری",
];

export default function StartWorkReport() {
  const [openSections, setOpenSections] = useState<number[]>([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
  ]);

  const [form, setForm] = useState<FormState>(initialForm);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(
        "khesht-start-work-checklist",
      );

      if (saved) {
        const parsed = JSON.parse(saved);

        setForm({
          ...initialForm,
          ...parsed,
        });
      }
    } catch {
      // استفاده از اطلاعات اولیه
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        "khesht-start-work-checklist",
        JSON.stringify(form),
      );
    } catch {
      // Ignore storage errors
    }
  }, [form]);

  function toggleSection(id: number) {
    setOpenSections((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  function updateField(
    field: keyof FormState,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function resetChecklist() {
    const confirmed = window.confirm(
      "آیا از بازنشانی کامل چک‌لیست مطمئن هستید؟",
    );

    if (!confirmed) return;

    setForm(initialForm);

    setOpenSections([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
    ]);
  }

  const checklistFields = useMemo(
    () => [
      form.buildingPermit,
      form.approvedPlans,
      form.permitValidity,
      form.planPermitMatch,
      form.siteNotebook,
      form.projectSign,

      form.supervisorConfirmed,
      form.startReportSubmitted,
      form.demolitionDate,
      form.excavationDate,
      form.demolitionMethod,
      form.structureType,

      form.safetyMeasures,
      form.workerSafety,
      form.ppe,
      form.siteSafety,

      form.treeProtection,
      form.treesStatus,
      form.sidewalkProtection,
      form.streetProtection,

      form.neighboringProperties,
      form.neighborCondition,
      form.utilityStatus,
      form.electricity,
      form.water,
      form.gas,

      form.siteFence,
      form.siteAccess,
      form.materialStorage,
      form.equipmentLocation,
      form.machineryAccess,

      form.buildingContractor,
      form.electricalContractor,
      form.mechanicalContractor,

      form.excavationLimit,
      form.excavationDepth,
      form.stabilization,
      form.adjacentStructureProtection,

      form.description,
      form.finalDescription,
    ],
    [form],
  );

  const completedItems =
    checklistFields.filter(Boolean).length;

  const totalItems = checklistFields.length;

  const progress =
    totalItems > 0
      ? Math.round(
          (completedItems / totalItems) * 100,
        )
      : 0;

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#f7f7f7] text-neutral-800"
    >
      {/* HEADER */}

      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 pt-5 text-xs text-neutral-400">
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
              چک‌لیست شروع به کار
            </span>
          </div>

          <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-extrabold text-neutral-900 md:text-3xl">
                چک‌لیست شروع به کار
              </h1>

              <p className="mt-2 text-sm text-neutral-500">
                کنترل اقدامات و الزامات پیش از شروع عملیات ساختمانی
              </p>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-xl bg-[#fff5f5] px-4 py-3 text-xs text-[#a82d2a]">
              <FileText size={17} />

              <span>
                شروع عملیات ساختمانی
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* PROGRESS */}

        <div className="mb-5 rounded-xl border border-neutral-200 bg-white p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-sm font-extrabold text-neutral-800">
                پیشرفت چک‌لیست
              </h2>

              <p className="mt-1 text-xs text-neutral-400">
                {completedItems} مورد از {totalItems} مورد تکمیل شده
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-2 w-40 overflow-hidden rounded-full bg-neutral-100 sm:w-56">
                <div
                  className="h-full rounded-full bg-[#20a9d0] transition-all duration-300"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              <span className="text-sm font-extrabold text-[#20a9d0]">
                {progress}%
              </span>
            </div>
          </div>
        </div>

        {/* CHECKLIST */}

        <div className="space-y-4">
          {/* ================================================= */}
          {/* 1 — مدارک و مجوزها */}
          {/* ================================================= */}

          <ReportSection
            number={1}
            title="بررسی مدارک، مجوزها و مستندات پروژه"
            open={openSections.includes(1)}
            onToggle={() => toggleSection(1)}
          >
            <div className="divide-y divide-neutral-100">
              <ChecklistRow
                label="پروانه ساختمانی بررسی و کنترل شده است؟"
                completed={Boolean(form.buildingPermit)}
              >
                <SelectField
                  value={form.buildingPermit}
                  onChange={(value) =>
                    updateField(
                      "buildingPermit",
                      value,
                    )
                  }
                />
              </ChecklistRow>

              <ChecklistRow
                label="نقشه‌های مصوب پروژه در اختیار عوامل اجرایی قرار دارد؟"
                completed={Boolean(form.approvedPlans)}
              >
                <SelectField
                  value={form.approvedPlans}
                  onChange={(value) =>
                    updateField(
                      "approvedPlans",
                      value,
                    )
                  }
                />
              </ChecklistRow>

              <ChecklistRow
                label="اعتبار پروانه ساختمانی و مجوزهای مربوطه بررسی شده است؟"
                completed={Boolean(form.permitValidity)}
              >
                <SelectField
                  value={form.permitValidity}
                  onChange={(value) =>
                    updateField(
                      "permitValidity",
                      value,
                    )
                  }
                />
              </ChecklistRow>

              <ChecklistRow
                label="مشخصات پروژه با پروانه ساختمانی و نقشه‌های مصوب تطبیق داده شده است؟"
                completed={Boolean(form.planPermitMatch)}
              >
                <SelectField
                  value={form.planPermitMatch}
                  onChange={(value) =>
                    updateField(
                      "planPermitMatch",
                      value,
                    )
                  }
                />
              </ChecklistRow>

              <ChecklistRow
                label="زونکن / پرونده کارگاه برای نگهداری مدارک پروژه تهیه شده است؟"
                completed={Boolean(form.siteNotebook)}
              >
                <SelectField
                  value={form.siteNotebook}
                  onChange={(value) =>
                    updateField(
                      "siteNotebook",
                      value,
                    )
                  }
                  options={statusOptions}
                />
              </ChecklistRow>

              <ChecklistRow
                label="تابلو مشخصات پروژه مطابق الزامات در محل کارگاه نصب شده است؟"
                completed={Boolean(form.projectSign)}
              >
                <SelectField
                  value={form.projectSign}
                  onChange={(value) =>
                    updateField(
                      "projectSign",
                      value,
                    )
                  }
                  options={statusOptions}
                />
              </ChecklistRow>
            </div>
          </ReportSection>

          {/* ================================================= */}
          {/* 2 — شروع عملیات */}
          {/* ================================================= */}

          <ReportSection
            number={2}
            title="گزارش و اقدامات شروع عملیات ساختمانی"
            open={openSections.includes(2)}
            onToggle={() => toggleSection(2)}
          >
            <div className="divide-y divide-neutral-100">
              <ChecklistRow
                label="آیا مجری پروژه به روش قانونی معرفی شده است؟"
                completed={Boolean(
                  form.supervisorConfirmed,
                )}
              >
                <SelectField
                  value={form.supervisorConfirmed}
                  onChange={(value) =>
                    updateField(
                      "supervisorConfirmed",
                      value,
                    )
                  }
                />
              </ChecklistRow>

              <ChecklistRow
                label="گزارش شروع کار از سوی ناظر تنظیم شده است؟"
                completed={Boolean(
                  form.startReportSubmitted,
                )}
              >
                <SelectField
                  value={form.startReportSubmitted}
                  onChange={(value) =>
                    updateField(
                      "startReportSubmitted",
                      value,
                    )
                  }
                />
              </ChecklistRow>

              <ChecklistRow
                label="تاریخ شروع عملیات تخریب"
                completed={Boolean(
                  form.demolitionDate,
                )}
              >
                <DateInput
                  value={form.demolitionDate}
                  onChange={(value) =>
                    updateField(
                      "demolitionDate",
                      value,
                    )
                  }
                />
              </ChecklistRow>

              <ChecklistRow
                label="تاریخ شروع عملیات گودبرداری"
                completed={Boolean(
                  form.excavationDate,
                )}
              >
                <DateInput
                  value={form.excavationDate}
                  onChange={(value) =>
                    updateField(
                      "excavationDate",
                      value,
                    )
                  }
                />
              </ChecklistRow>

              <ChecklistRow
                label="روش تخریب"
                completed={Boolean(
                  form.demolitionMethod,
                )}
              >
                <SelectField
                  value={form.demolitionMethod}
                  onChange={(value) =>
                    updateField(
                      "demolitionMethod",
                      value,
                    )
                  }
                  options={[
                    "انتخاب نمایید",
                    "دستی",
                    "مکانیکی",
                    "ترکیبی",
                    "فاقد تخریب",
                  ]}
                />
              </ChecklistRow>

              <ChecklistRow
                label="نوع سازه"
                completed={Boolean(
                  form.structureType,
                )}
              >
                <SelectField
                  value={form.structureType}
                  onChange={(value) =>
                    updateField(
                      "structureType",
                      value,
                    )
                  }
                  options={[
                    "انتخاب نمایید",
                    "بتنی",
                    "فلزی",
                    "بنایی",
                    "سایر",
                  ]}
                />
              </ChecklistRow>
            </div>
          </ReportSection>

          {/* ================================================= */}
          {/* 3 — ایمنی */}
          {/* ================================================= */}

          <ReportSection
            number={3}
            title="ایمنی فردی و کارگاهی"
            open={openSections.includes(3)}
            onToggle={() => toggleSection(3)}
          >
            <div className="divide-y divide-neutral-100">
              <ChecklistRow
                label="تمهیدات ایمنی کارگاه و موارد اولیه لازم برای شروع عملیات فراهم شده است؟"
                completed={Boolean(
                  form.safetyMeasures,
                )}
              >
                <SelectField
                  value={form.safetyMeasures}
                  onChange={(value) =>
                    updateField(
                      "safetyMeasures",
                      value,
                    )
                  }
                  options={statusOptions}
                />
              </ChecklistRow>

              <ChecklistRow
                label="تمهیدات ایمنی کارگران مطابق آیین‌نامه‌های حفاظت فنی و ایمنی کارگاه‌های ساختمانی در نظر گرفته شده است؟"
                completed={Boolean(
                  form.workerSafety,
                )}
              >
                <SelectField
                  value={form.workerSafety}
                  onChange={(value) =>
                    updateField(
                      "workerSafety",
                      value,
                    )
                  }
                />
              </ChecklistRow>

              <ChecklistRow
                label="تجهیزات حفاظت فردی مورد نیاز کارگران تأمین شده است؟"
                completed={Boolean(form.ppe)}
              >
                <SelectField
                  value={form.ppe}
                  onChange={(value) =>
                    updateField("ppe", value)
                  }
                  options={statusOptions}
                />
              </ChecklistRow>

              <ChecklistRow
                label="ایمن‌سازی اولیه کارگاه پیش از شروع عملیات انجام شده است؟"
                completed={Boolean(
                  form.siteSafety,
                )}
              >
                <SelectField
                  value={form.siteSafety}
                  onChange={(value) =>
                    updateField(
                      "siteSafety",
                      value,
                    )
                  }
                  options={statusOptions}
                />
              </ChecklistRow>
            </div>
          </ReportSection>

          {/* ================================================= */}
          {/* 4 — درختان و معابر */}
          {/* ================================================= */}

          <ReportSection
            number={4}
            title="حفظ حریم درختان، معابر و فضای عمومی"
            open={openSections.includes(4)}
            onToggle={() => toggleSection(4)}
          >
            <div className="divide-y divide-neutral-100">
              <ChecklistRow
                label="تمهیدات لازم جهت حفظ حریم درختان و فضای سبز در نظر گرفته شده است؟"
                completed={Boolean(
                  form.treeProtection,
                )}
              >
                <SelectField
                  value={form.treeProtection}
                  onChange={(value) =>
                    updateField(
                      "treeProtection",
                      value,
                    )
                  }
                />
              </ChecklistRow>

              <ChecklistRow
                label="وضعیت درختان موجود در محدوده پروژه بررسی و مستندسازی شده است؟"
                completed={Boolean(
                  form.treesStatus,
                )}
              >
                <SelectField
                  value={form.treesStatus}
                  onChange={(value) =>
                    updateField(
                      "treesStatus",
                      value,
                    )
                  }
                  options={statusOptions}
                />
              </ChecklistRow>

              <ChecklistRow
                label="تمهیدات لازم برای حفظ و ایمن‌سازی پیاده‌رو مجاور انجام شده است؟"
                completed={Boolean(
                  form.sidewalkProtection,
                )}
              >
                <SelectField
                  value={form.sidewalkProtection}
                  onChange={(value) =>
                    updateField(
                      "sidewalkProtection",
                      value,
                    )
                  }
                  options={statusOptions}
                />
              </ChecklistRow>

              <ChecklistRow
                label="تمهیدات لازم برای حفظ ایمنی معبر و خیابان مجاور انجام شده است؟"
                completed={Boolean(
                  form.streetProtection,
                )}
              >
                <SelectField
                  value={form.streetProtection}
                  onChange={(value) =>
                    updateField(
                      "streetProtection",
                      value,
                    )
                  }
                  options={statusOptions}
                />
              </ChecklistRow>
            </div>
          </ReportSection>

          {/* ================================================= */}
          {/* 5 — مجاورین و تأسیسات */}
          {/* ================================================= */}

          <ReportSection
            number={5}
            title="بررسی مجاورین و تأسیسات موجود"
            open={openSections.includes(5)}
            onToggle={() => toggleSection(5)}
          >
            <div className="divide-y divide-neutral-100">
              <ChecklistRow
                label="وضعیت ساختمان‌ها و املاک مجاور بررسی شده است؟"
                completed={Boolean(
                  form.neighboringProperties,
                )}
              >
                <SelectField
                  value={form.neighboringProperties}
                  onChange={(value) =>
                    updateField(
                      "neighboringProperties",
                      value,
                    )
                  }
                  options={statusOptions}
                />
              </ChecklistRow>

              <ChecklistRow
                label="وضعیت مجاورین و آسیب‌پذیری آن‌ها قبل از شروع عملیات بررسی شده است؟"
                completed={Boolean(
                  form.neighborCondition,
                )}
              >
                <SelectField
                  value={form.neighborCondition}
                  onChange={(value) =>
                    updateField(
                      "neighborCondition",
                      value,
                    )
                  }
                  options={statusOptions}
                />
              </ChecklistRow>

              <ChecklistRow
                label="قطعه زمین از نظر آب، برق، گاز و سایر تأسیسات موجود بررسی شده است؟"
                completed={Boolean(
                  form.utilityStatus,
                )}
              >
                <SelectField
                  value={form.utilityStatus}
                  onChange={(value) =>
                    updateField(
                      "utilityStatus",
                      value,
                    )
                  }
                />
              </ChecklistRow>

              <ChecklistRow
                label="وضعیت تأسیسات برق موجود بررسی شده است؟"
                completed={Boolean(
                  form.electricity,
                )}
              >
                <SelectField
                  value={form.electricity}
                  onChange={(value) =>
                    updateField(
                      "electricity",
                      value,
                    )
                  }
                  options={statusOptions}
                />
              </ChecklistRow>

              <ChecklistRow
                label="وضعیت تأسیسات آب موجود بررسی شده است؟"
                completed={Boolean(form.water)}
              >
                <SelectField
                  value={form.water}
                  onChange={(value) =>
                    updateField("water", value)
                  }
                  options={statusOptions}
                />
              </ChecklistRow>

              <ChecklistRow
                label="وضعیت تأسیسات گاز موجود بررسی شده است؟"
                completed={Boolean(form.gas)}
              >
                <SelectField
                  value={form.gas}
                  onChange={(value) =>
                    updateField("gas", value)
                  }
                  options={statusOptions}
                />
              </ChecklistRow>
            </div>
          </ReportSection>

          {/* ================================================= */}
          {/* 6 — کارگاه */}
          {/* ================================================= */}

          <ReportSection
            number={6}
            title="آماده‌سازی و تجهیز کارگاه"
            open={openSections.includes(6)}
            onToggle={() => toggleSection(6)}
          >
            <div className="divide-y divide-neutral-100">
              <ChecklistRow
                label="حصارکشی و جداسازی محدوده کارگاه انجام شده است؟"
                completed={Boolean(
                  form.siteFence,
                )}
              >
                <SelectField
                  value={form.siteFence}
                  onChange={(value) =>
                    updateField(
                      "siteFence",
                      value,
                    )
                  }
                  options={statusOptions}
                />
              </ChecklistRow>

              <ChecklistRow
                label="مسیر ورود و خروج به کارگاه مشخص و ایمن شده است؟"
                completed={Boolean(
                  form.siteAccess,
                )}
              >
                <SelectField
                  value={form.siteAccess}
                  onChange={(value) =>
                    updateField(
                      "siteAccess",
                      value,
                    )
                  }
                  options={statusOptions}
                />
              </ChecklistRow>

              <ChecklistRow
                label="محل دپوی مصالح و تجهیزات مشخص شده است؟"
                completed={Boolean(
                  form.materialStorage,
                )}
              >
                <SelectField
                  value={form.materialStorage}
                  onChange={(value) =>
                    updateField(
                      "materialStorage",
                      value,
                    )
                  }
                  options={statusOptions}
                />
              </ChecklistRow>

              <ChecklistRow
                label="محل استقرار ماشین‌آلات و تجهیزات کارگاه مشخص شده است؟"
                completed={Boolean(
                  form.equipmentLocation,
                )}
              >
                <SelectField
                  value={form.equipmentLocation}
                  onChange={(value) =>
                    updateField(
                      "equipmentLocation",
                      value,
                    )
                  }
                  options={statusOptions}
                />
              </ChecklistRow>

              <ChecklistRow
                label="مسیر ورود و خروج ماشین‌آلات بررسی شده است؟"
                completed={Boolean(
                  form.machineryAccess,
                )}
              >
                <SelectField
                  value={form.machineryAccess}
                  onChange={(value) =>
                    updateField(
                      "machineryAccess",
                      value,
                    )
                  }
                  options={statusOptions}
                />
              </ChecklistRow>
            </div>
          </ReportSection>

          {/* ================================================= */}
          {/* 7 — مسئولیت فنی */}
          {/* ================================================= */}

          <ReportSection
            number={7}
            title="بیمه‌نامه ها و مسئولیت فنی کارگاه"
            open={openSections.includes(7)}
            onToggle={() => toggleSection(7)}
          >
            <div className="divide-y divide-neutral-100">
              <ChecklistRow
                label="بیمه نامه های مسئولیت مدنی کارگاه برای کارگران"
                completed={Boolean(
                  form.buildingContractor,
                )}
              >
                <SelectField
                  value={form.buildingContractor}
                  onChange={(value) =>
                    updateField(
                      "buildingContractor",
                      value,
                    )
                  }
                  options={[
                    "انتخاب نمایید",
                    "دارد",
                    "ندارد",
                  ]}
                />
              </ChecklistRow>

              <ChecklistRow
                label="بیمه نامه های مسئولیت مدنی کارگاه برای مهندسان ناظر"
                completed={Boolean(
                  form.electricalContractor,
                )}
              >
                <SelectField
                  value={form.electricalContractor}
                  onChange={(value) =>
                    updateField(
                      "electricalContractor",
                      value,
                    )
                  }
                  options={[
                    "انتخاب نمایید",
                    "دارد",
                    "ندارد",
                  ]}
                />
              </ChecklistRow>

              <ChecklistRow
                label="بیمه نامه های مسئولیت مدنی کارگاه برای ساختمان های مجاور"
                completed={Boolean(
                  form.mechanicalContractor,
                )}
              >
                <SelectField
                  value={form.mechanicalContractor}
                  onChange={(value) =>
                    updateField(
                      "mechanicalContractor",
                      value,
                    )
                  }
                  options={[
                    "انتخاب نمایید",
                    "دارد",
                    "ندارد",
                  ]}
                />
              </ChecklistRow>
            </div>
          </ReportSection>

          
        </div>

        {/* RESET ONLY */}

        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={resetChecklist}
            className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-bold text-neutral-600 transition hover:bg-neutral-50 hover:text-[#a82d2a]"
          >
            <RotateCcw size={16} />
            بازنشانی چک‌لیست
          </button>
        </div>
      </section>
    </main>
  );
}

/* ========================================================= */
/* REPORT SECTION */
/* ========================================================= */

function ReportSection({
  number,
  title,
  open,
  onToggle,
  children,
}: {
  number: number;
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`overflow-hidden rounded-xl border bg-white ${
        open
          ? "border-[#d5d5d5]"
          : "border-neutral-200"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex min-h-[58px] w-full items-center gap-3 bg-[#20a9d0] px-5 py-3.5 text-right text-white transition hover:bg-[#1d9fc4]"
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
          {open ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-extrabold md:text-base">
            {title}
          </h2>
        </div>

        <span className="shrink-0 text-xs text-white/80">
          {number}
        </span>
      </button>

      {open && (
        <div className="px-4 py-2 sm:px-6 md:px-8">
          {children}
        </div>
      )}
    </section>
  );
}

/* ========================================================= */
/* CHECKLIST ROW */
/* ========================================================= */

function ChecklistRow({
  label,
  completed,
  children,
}: {
  label: string;
  completed: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-3 py-5 md:grid-cols-[minmax(0,1fr)_360px] md:items-center md:gap-8">
      {/* LABEL */}

      <div className="flex min-w-0 items-start gap-3">
        <div
          className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
            completed
              ? "border-[#20a9d0] bg-[#20a9d0] text-white"
              : "border-neutral-300 bg-white"
          }`}
        >
          {completed && <Check size={13} />}
        </div>

        <label className="min-w-0 break-words text-sm leading-7 text-neutral-700">
          {label}
        </label>
      </div>

      {/* INPUT */}

      <div className="min-w-0 w-full">
        {children}
      </div>
    </div>
  );
}

/* ========================================================= */
/* SELECT */
/* ========================================================= */

function SelectField({
  value,
  onChange,
  options = yesNoOptions,
}: {
  value: string;
  onChange: (value: string) => void;
  options?: string[];
}) {
  return (
    <div className="relative w-full min-w-0">
      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="block h-12 w-full min-w-0 appearance-none rounded-lg border border-neutral-200 bg-white px-4 pl-10 text-sm text-neutral-600 outline-none transition focus:border-[#20a9d0] focus:ring-2 focus:ring-[#20a9d0]/10"
      >
        {options.map((option) => (
          <option
            key={option}
            value={
              option === "انتخاب نمایید"
                ? ""
                : option
            }
          >
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={17}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
      />
    </div>
  );
}

/* ========================================================= */
/* DATE INPUT */
/* ========================================================= */

function DateInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative w-full min-w-0">
      <CalendarDays
        size={16}
        className="pointer-events-none absolute right-4 top-1/2 z-10 -translate-y-1/2 text-neutral-400"
      />

      <input
        type="date"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        dir="ltr"
        className="block h-12 w-full min-w-0 rounded-lg border border-neutral-200 bg-white py-2 pl-4 pr-11 text-left text-sm text-neutral-600 outline-none transition focus:border-[#20a9d0] focus:ring-2 focus:ring-[#20a9d0]/10"
      />
    </div>
  );
}

/* ========================================================= */
/* TEXTAREA */
/* ========================================================= */

function Textarea({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      rows={4}
      placeholder={placeholder}
      className="block min-h-[110px] w-full min-w-0 resize-y rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm leading-7 text-neutral-700 outline-none transition placeholder:text-neutral-300 focus:border-[#20a9d0] focus:ring-2 focus:ring-[#20a9d0]/10"
    />
  );
}