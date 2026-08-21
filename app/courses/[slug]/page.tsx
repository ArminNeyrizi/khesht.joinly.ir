import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock,
  Users,
} from "lucide-react";

const courses = {
  execution: {
    title: "بوتکمپ اجرای ساختمان",
    category: "اجرا",
    image: "/images/execution.webp",
    duration: "۸ هفته",
    sessions: "۲۴ جلسه",
    students: "ظرفیت محدود",
    price: "۳,۹۰۰,۰۰۰",
    description:
      "آموزش عملی اجرای ساختمان از شروع پروژه تا مراحل نهایی، با تمرکز بر مهارت‌هایی که در پروژه واقعی به آن‌ها نیاز دارید.",
    features: [
      "آشنایی با فرآیند کامل اجرای ساختمان",
      "خواندن و بررسی نقشه‌های اجرایی",
      "شناخت مصالح و روش‌های اجرا",
      "اجرای فونداسیون و اسکلت",
      "اجرای دیوارچینی و نازک‌کاری",
      "آشنایی با کنترل کیفیت و خطاهای اجرایی",
    ],
  },

  supervision: {
    title: "نظارت و کنترل پروژه",
    category: "نظارت",
    image: "/images/supervision.webp",
    duration: "۶ هفته",
    sessions: "۱۸ جلسه",
    students: "ظرفیت محدود",
    price: "۲,۹۰۰,۰۰۰",
    description:
      "مسیر عملی یادگیری نظارت ساختمان برای ورود به پروژه‌های واقعی و آشنایی با فرآیند کنترل اجرای عملیات ساختمانی.",
    features: [
      "وظایف و مسئولیت‌های ناظر",
      "بررسی نقشه‌های اجرایی",
      "کنترل عملیات ساختمانی",
      "کنترل مصالح و کیفیت اجرا",
      "گزارش‌نویسی و مستندسازی",
      "بررسی خطاهای رایج در پروژه",
    ],
  },

  design: {
    title: "طراحی معماری و سازه",
    category: "طراحی",
    image: "/images/design.webp",
    duration: "۶ هفته",
    sessions: "۱۸ جلسه",
    students: "ظرفیت محدود",
    price: "۳,۵۰۰,۰۰۰",
    description:
      "آموزش فرآیند طراحی ساختمان با تمرکز بر مهارت‌های کاربردی، نرم‌افزارها و استانداردهای مورد نیاز بازار کار.",
    features: [
      "فرآیند طراحی ساختمان",
      "خواندن و تحلیل نقشه‌ها",
      "طراحی پلان",
      "اصول طراحی معماری",
      "هماهنگی نقشه‌های معماری و سازه",
      "آماده‌سازی پروژه برای ارائه",
    ],
  },

  autocad: {
    title: "نقشه‌کشی حرفه‌ای AutoCAD",
    category: "نقشه‌کشی",
    image: "/images/autocad.webp",
    duration: "۴ هفته",
    sessions: "۱۲ جلسه",
    students: "ظرفیت محدود",
    price: "۲,۲۰۰,۰۰۰",
    description:
      "یادگیری حرفه‌ای AutoCAD با تمرکز بر نقشه‌کشی ساختمان و مهارت‌هایی که مستقیماً در پروژه‌های واقعی استفاده می‌شوند.",
    features: [
      "آشنایی با محیط و ابزارهای AutoCAD",
      "ترسیم دقیق نقشه‌های ساختمانی",
      "لایه‌بندی حرفه‌ای",
      "اندازه‌گذاری و درج اطلاعات نقشه",
      "تهیه پلان، نما و مقاطع",
      "خروجی گرفتن و آماده‌سازی نقشه برای ارائه",
    ],
  },

  "revit-bim": {
    title: "Revit و BIM",
    category: "نقشه‌کشی",
    image: "/images/bim.webp",
    duration: "۴ هفته",
    sessions: "۱۲ جلسه",
    students: "ظرفیت محدود",
    price: "۲,۹۰۰,۰۰۰",
    description:
      "آموزش کاربردی Revit و مفاهیم BIM با تمرکز بر مدل‌سازی اطلاعات ساختمان، تهیه نقشه و هماهنگی بین بخش‌های مختلف پروژه.",
    features: [
      "آشنایی با محیط و ابزارهای Revit",
      "مدل‌سازی سه‌بعدی ساختمان",
      "مدل‌سازی دیوار، کف، سقف و اجزای ساختمان",
      "تهیه پلان، نما و مقاطع از مدل",
      "آشنایی با مفاهیم BIM",
      "هماهنگی مدل و نقشه‌های پروژه",
    ],
  },

  etabs: {
    title: "ETABS کاربردی",
    category: "طراحی",
    image: "/images/etabs.webp",
    duration: "۶ هفته",
    sessions: "۱۸ جلسه",
    students: "ظرفیت محدود",
    price: "۲,۵۰۰,۰۰۰",
    description:
      "آموزش کاربردی مدل‌سازی و تحلیل سازه با ETABS از ایجاد مدل اولیه تا تحلیل و بررسی نتایج.",
    features: [
      "ایجاد مدل سازه",
      "تعریف مصالح و مقاطع",
      "اعمال بارگذاری",
      "تحلیل سازه",
      "بررسی و تفسیر نتایج",
      "آشنایی با طراحی اعضای سازه",
    ],
  },
} as const;

type CourseSlug = keyof typeof courses;

export function generateStaticParams() {
  return Object.keys(courses).map((slug) => ({
    slug,
  }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(slug in courses)) {
    notFound();
  }

  const course = courses[slug as CourseSlug];

  return (
    <main className="min-h-screen bg-[#faf8f6]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#090a0b] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>

        <div className="container relative mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 pt-6 text-xs text-white/50">
            <Link
              href="/"
              className="transition hover:text-white"
            >
              خانه
            </Link>

            <ArrowLeft size={13} />

            <Link
              href="/courses"
              className="transition hover:text-white"
            >
              دوره‌ها
            </Link>

            <ArrowLeft size={13} />

            <span className="text-white/80">
              {course.title}
            </span>
          </div>

          {/* HERO CONTENT */}
          <div className="grid min-h-[500px] items-center gap-12 py-14 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-[#8f211d]/20 px-4 py-2 text-xs font-bold text-[#e88a84]">
                {course.category}
              </span>

              <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.35] md:text-5xl">
                {course.title}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/65 md:text-lg">
                {course.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                  <Clock size={17} />
                  {course.duration}
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                  <BookOpen size={17} />
                  {course.sessions}
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                  <Users size={17} />
                  {course.students}
                </div>
              </div>

              <div className="mt-9 flex items-center gap-5">
                <div>
                  <p className="text-xs text-white/40">
                    شهریه دوره
                  </p>

                  <strong className="mt-1 block text-2xl text-white">
                    {course.price}
                    <span className="mr-1 text-sm font-normal text-white/50">
                      تومان
                    </span>
                  </strong>
                </div>

                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-xl bg-[#8f211d] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#751914]"
                >
                  ثبت‌نام در دوره
                  <ArrowLeft size={17} />
                </Link>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,.3)]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-[#8f211d] px-6 py-5 shadow-xl md:block">
                <p className="text-xs text-white/60">
                  خشت آکادمی
                </p>

                <p className="mt-1 font-extrabold">
                  آموزش برای ورود به صنعت
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* FEATURES */}
          <div className="rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-8">
            <div className="mb-8">
              <div className="mb-4 h-1 w-10 bg-[#8f211d]" />

              <h2 className="text-2xl font-extrabold">
                سرفصل‌ها و مهارت‌های دوره
              </h2>

              <p className="mt-2 text-sm leading-7 text-neutral-500">
                در این دوره روی مهارت‌هایی تمرکز می‌کنیم که در
                پروژه‌های واقعی صنعت ساختمان کاربرد دارند.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {course.features.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-3 rounded-xl border border-[#eeeae7] bg-[#faf8f6] p-4"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#8f211d]"
                  />

                  <span className="text-sm leading-6 text-neutral-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="h-fit rounded-2xl bg-[#0d0f10] p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,.15)]">
            <p className="text-xs text-white/50">
              ثبت‌نام دوره
            </p>

            <h2 className="mt-2 text-xl font-extrabold">
              {course.title}
            </h2>

            <div className="my-6 h-px bg-white/10" />

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-white/50">
                  مدت دوره
                </span>

                <span>{course.duration}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/50">
                  تعداد جلسات
                </span>

                <span>{course.sessions}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/50">
                  ظرفیت
                </span>

                <span>{course.students}</span>
              </div>
            </div>

            <div className="my-6 h-px bg-white/10" />

            <div>
              <p className="text-xs text-white/40">
                شهریه
              </p>

              <div className="mt-1 text-2xl font-extrabold">
                {course.price}
                <span className="mr-1 text-xs font-normal text-white/50">
                  تومان
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#8f211d] px-5 py-4 text-sm font-bold transition hover:bg-[#751914]"
            >
              درخواست ثبت‌نام
              <ArrowLeft size={17} />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}