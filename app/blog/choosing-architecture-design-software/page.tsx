import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers3,
  Monitor,
  Ruler,
  TriangleAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "راهنمای انتخاب نرم‌افزار مناسب برای طراحی معماری | AutoCAD، Revit، SketchUp و 3ds Max",

  description:
    "راهنمای کامل انتخاب نرم‌افزار طراحی معماری؛ مقایسه AutoCAD، Revit، SketchUp، 3ds Max، Rhino و Lumion و بررسی کاربرد هرکدام برای طراحی، مدل‌سازی و ارائه پروژه.",

  keywords: [
    "نرم افزار طراحی معماری",
    "بهترین نرم افزار معماری",
    "نرم افزارهای معماری",
    "انتخاب نرم افزار معماری",
    "AutoCAD معماری",
    "Revit معماری",
    "SketchUp معماری",
    "3ds Max معماری",
    "Rhino معماری",
    "Lumion معماری",
    "نرم افزار BIM",
    "نرم افزار مدل سازی معماری",
  ],

  alternates: {
    canonical:
      "https://kheshtacademy.ir/blog/choosing-architecture-design-software",
  },

  openGraph: {
    title: "راهنمای انتخاب نرم‌افزار مناسب برای طراحی معماری",
    description:
      "مقایسه کاربردی نرم‌افزارهای مهم معماری و اینکه برای هر نوع پروژه و مهارت، کدام نرم‌افزار انتخاب مناسب‌تری است.",
    url: "https://kheshtacademy.ir/blog/choosing-architecture-design-software",
    type: "article",
    locale: "fa_IR",
    siteName: "خشت آکادمی",
    images: [
      {
        url: "https://kheshtacademy.ir/images/man-design.avif",
        width: 1200,
        height: 630,
        alt: "طراحی معماری و انتخاب نرم افزار مناسب",
      },
    ],
  },
};

const software = [
  {
    name: "AutoCAD",
    category: "ترسیم و نقشه‌کشی",
    bestFor:
      "ترسیم دوبعدی، نقشه‌های اجرایی، جزئیات و مستندسازی دقیق پروژه",
    level: "مناسب از سطح مقدماتی تا حرفه‌ای",
    strength:
      "کنترل بسیار خوب روی ترسیم دوبعدی و استانداردسازی نقشه‌ها",
    limitation:
      "مدل اطلاعاتی ساختمان و ارتباط خودکار بین پلان، نما و مقطع محدود است",
  },
  {
    name: "Revit",
    category: "BIM و مدل‌سازی اطلاعات ساختمان",
    bestFor:
      "مدل‌سازی ساختمان، تولید نقشه، هماهنگی معماری و سازه و مدیریت اطلاعات مدل",
    level: "مناسب برای مسیر حرفه‌ای",
    strength:
      "مدل اطلاعاتی یکپارچه و ارتباط بین اجزای مختلف پروژه",
    limitation:
      "یادگیری آن نسبت به ابزارهای ساده‌تر زمان بیشتری می‌خواهد",
  },
  {
    name: "SketchUp",
    category: "مدل‌سازی سه‌بعدی",
    bestFor:
      "ایده‌پردازی سریع، حجم‌سازی و ساخت مدل سه‌بعدی اولیه",
    level: "مناسب برای شروع مدل‌سازی سه‌بعدی",
    strength:
      "سرعت بالا در ساخت حجم و بررسی فرم",
    limitation:
      "برای مستندسازی کامل پروژه به‌تنهایی انتخاب مناسبی نیست",
  },
  {
    name: "3ds Max",
    category: "مدل‌سازی و ارائه",
    bestFor:
      "مدل‌سازی دقیق، رندرینگ و تولید تصاویر ارائه معماری",
    level: "مناسب برای کاربران متوسط و حرفه‌ای",
    strength:
      "امکانات گسترده برای مدل‌سازی و تولید تصاویر واقع‌گرایانه",
    limitation:
      "برای ترسیم نقشه‌های اجرایی و مدیریت اطلاعات ساختمان ابزار اصلی محسوب نمی‌شود",
  },
  {
    name: "Rhino",
    category: "مدل‌سازی پیشرفته",
    bestFor:
      "فرم‌های پیچیده، طراحی پارامتریک و پروژه‌های خاص معماری",
    level: "مناسب برای کاربران متوسط و حرفه‌ای",
    strength:
      "انعطاف بالا در مدل‌سازی فرم‌های پیچیده",
    limitation:
      "برای پروژه‌های معمول ساختمانی ممکن است بیش از نیاز شما باشد",
  },
  {
    name: "Lumion",
    category: "ارائه و Visualization",
    bestFor:
      "رندر، انیمیشن و ارائه سریع پروژه‌های معماری",
    level: "مناسب برای ارائه معماری",
    strength:
      "سرعت مناسب در تولید خروجی‌های بصری",
    limitation:
      "نرم‌افزار اصلی برای طراحی و مستندسازی پروژه نیست",
  },
];

const decisions = [
  {
    title: "اگر هدف شما نقشه‌کشی دوبعدی است",
    answer:
      "AutoCAD یکی از انتخاب‌های منطقی است. برای ترسیم پلان، نما، مقطع، دیتیل و نقشه‌های اجرایی همچنان کاربرد زیادی دارد.",
  },
  {
    title: "اگر می‌خواهید یک مدل اطلاعاتی از ساختمان بسازید",
    answer:
      "Revit انتخاب مناسب‌تری است. در Revit مدل سه‌بعدی فقط یک تصویر نیست؛ اجزای ساختمان دارای اطلاعات هستند و بسیاری از نقشه‌ها از همان مدل تولید می‌شوند.",
  },
  {
    title: "اگر می‌خواهید سریع حجم بزنید",
    answer:
      "SketchUp برای ایده‌پردازی و مدل‌سازی سریع گزینه مناسبی است و معمولاً برای بررسی فرم در مراحل اولیه بسیار کاربردی است.",
  },
  {
    title: "اگر هدف شما تولید رندر حرفه‌ای است",
    answer:
      "3ds Max در کنار موتورهای رندر و ابزارهای جانبی، برای تولید تصاویر با جزئیات بالا کاربرد دارد. Lumion نیز برای تولید سریع خروجی‌های معماری بسیار استفاده می‌شود.",
  },
  {
    title: "اگر پروژه فرم پیچیده دارد",
    answer:
      "Rhino و ابزارهای پارامتریک می‌توانند گزینه مناسب‌تری باشند؛ مخصوصاً زمانی که هندسه پروژه با روش‌های معمول به‌سختی قابل کنترل است.",
  },
];

const mistakes = [
  "انتخاب نرم‌افزار فقط بر اساس محبوبیت آن",
  "یادگیری چند نرم‌افزار بدون داشتن یک مسیر مشخص",
  "استفاده از نرم‌افزار رندرینگ به‌عنوان نرم‌افزار طراحی اصلی",
  "شروع Revit بدون درک درست از فرآیند مدل‌سازی و BIM",
  "تمرکز بیش از حد روی ابزارها و کمبود تمرین پروژه واقعی",
  "یادگیری دستورات زیاد بدون اینکه بدانیم هر ابزار در چه مرحله‌ای از پروژه استفاده می‌شود",
  "تلاش برای انجام تمام مراحل پروژه با یک نرم‌افزار",
];

const learningPath = [
  {
    step: "۱",
    title: "ترسیم و نقشه‌خوانی",
    text:
      "ابتدا باید بتوانید نقشه را بخوانید و ترسیم دقیق انجام دهید. AutoCAD در این مرحله می‌تواند پایه مناسبی ایجاد کند.",
  },
  {
    step: "۲",
    title: "مدل‌سازی ساختمان",
    text:
      "بعد از آشنایی با نقشه‌کشی، یادگیری Revit می‌تواند شما را وارد مدل‌سازی اطلاعاتی ساختمان و فرآیند BIM کند.",
  },
  {
    step: "۳",
    title: "مدل‌سازی و ارائه سه‌بعدی",
    text:
      "در صورت نیاز، SketchUp یا 3ds Max را برای مدل‌سازی و ارائه بصری پروژه اضافه کنید.",
  },
  {
    step: "۴",
    title: "رندر و ارائه حرفه‌ای",
    text:
      "در این مرحله می‌توانید ابزارهایی مانند Lumion یا موتورهای رندر مناسب را بر اساس نیاز پروژه انتخاب کنید.",
  },
];

export default function ArchitectureSoftwareGuidePage() {
  return (
    <main className="min-h-screen bg-[#faf8f6]">
      {/* HERO */}
      <section className="bg-[#090a0b] text-white">
        <div className="container mx-auto px-4">
          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 pt-6 text-xs text-white/45">
            <Link href="/" className="transition hover:text-white">
              خانه
            </Link>

            <ArrowRight size={13} />

            <Link href="/blog" className="transition hover:text-white">
              مقالات
            </Link>

            <ArrowRight size={13} />

            <span className="text-white/70">
              طراحی
            </span>
          </div>

          {/* TITLE */}
          <div className="mx-auto max-w-4xl py-14 text-center md:py-18">
            <span className="inline-flex rounded-full bg-[#8f211d]/20 px-4 py-2 text-xs font-bold text-[#e88a84]">
              طراحی
            </span>

            <h1 className="mt-6 text-3xl font-black leading-[1.5] md:text-5xl">
              راهنمای انتخاب نرم‌افزار مناسب برای طراحی معماری
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-9 text-white/60 md:text-lg">
              AutoCAD، Revit، SketchUp، 3ds Max، Rhino یا Lumion؟
              در این راهنما بررسی می‌کنیم هر نرم‌افزار دقیقاً برای چه
              کاری مناسب است و برای شروع یادگیری چه مسیری منطقی‌تر است.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-xs text-white/40">
              <span className="flex items-center gap-2">
                <Clock size={15} />
                حدود ۱۵ دقیقه مطالعه
              </span>

              <span className="h-1 w-1 rounded-full bg-white/30" />

              <span>
                خشت آکادمی
              </span>
            </div>
          </div>

          {/* IMAGE */}
          <div className="mx-auto max-w-5xl pb-10">
            <div className="overflow-hidden rounded-[24px] border border-white/10 shadow-2xl">
              <img
                src="/images/man-design.avif"
                alt="راهنمای انتخاب نرم افزار طراحی معماری"
                className="aspect-[1200/630] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          {/* INTRO */}
          <section className="rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-9">
            <h2 className="text-2xl font-black">
              برای طراحی معماری چه نرم‌افزاری یاد بگیریم؟
            </h2>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              یکی از اولین سؤال‌هایی که یک دانشجوی معماری، معمار تازه‌کار
              یا حتی کسی که قصد ورود به بازار کار ساختمان را دارد با آن
              مواجه می‌شود این است که «کدام نرم‌افزار معماری را یاد بگیرم؟»
            </p>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              پاسخ ساده‌ای مثل «Revit بهترین است» یا «اول AutoCAD را یاد
              بگیر» همیشه درست نیست. نرم‌افزار مناسب به کاری که قرار است
              انجام دهید بستگی دارد. نقشه‌کشی دوبعدی، مدل‌سازی سه‌بعدی،
              طراحی فرم، BIM، رندرینگ و تهیه نقشه‌های اجرایی نیازهای
              متفاوتی هستند.
            </p>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              بنابراین بهتر است به‌جای اینکه نرم‌افزارها را صرفاً بر اساس
              اسم یا محبوبیتشان مقایسه کنیم، اول مشخص کنیم در پروژه قرار
              است چه خروجی‌ای تولید کنیم.
            </p>
          </section>

          {/* QUICK ANSWER */}
          <section className="mt-8 rounded-2xl border border-[#ead8d5] bg-[#fff8f7] p-6 md:p-8">
            <div className="flex gap-4">
              <Layers3
                size={24}
                className="mt-1 shrink-0 text-[#8f211d]"
              />

              <div>
                <h2 className="text-xl font-black">
                  جواب کوتاه
                </h2>

                <p className="mt-3 text-sm leading-8 text-neutral-700">
                  برای نقشه‌کشی دوبعدی، AutoCAD؛ برای BIM و مدل‌سازی
                  اطلاعات ساختمان، Revit؛ برای مدل‌سازی سریع، SketchUp؛
                  برای مدل‌سازی و رندر حرفه‌ای، 3ds Max؛ برای فرم‌های
                  پیچیده، Rhino؛ و برای ارائه سریع معماری، ابزارهایی مثل
                  Lumion می‌توانند مناسب باشند.
                </p>
              </div>
            </div>
          </section>

          {/* SOFTWARE */}
          <section className="mt-10">
            <div className="mb-7">
              <div className="mb-4 h-1 w-10 bg-[#8f211d]" />

              <h2 className="text-2xl font-black">
                مهم‌ترین نرم‌افزارهای طراحی معماری
              </h2>

              <p className="mt-3 text-sm leading-8 text-neutral-500">
                هر نرم‌افزار برای یک بخش از فرآیند طراحی مناسب‌تر است.
              </p>
            </div>

            <div className="space-y-5">
              {software.map((item) => (
                <section
                  key={item.name}
                  className="rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-8"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-black">
                      {item.name}
                    </h3>

                    <span className="w-fit rounded-full bg-[#f5e9e7] px-3 py-1 text-xs font-bold text-[#8f211d]">
                      {item.category}
                    </span>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <InfoBox
                      title="مناسب برای"
                      text={item.bestFor}
                    />

                    <InfoBox
                      title="سطح پیشنهادی"
                      text={item.level}
                    />

                    <InfoBox
                      title="نقطه قوت"
                      text={item.strength}
                    />

                    <InfoBox
                      title="محدودیت"
                      text={item.limitation}
                    />
                  </div>
                </section>
              ))}
            </div>
          </section>

          {/* AUTOCAD */}
          <section className="mt-10 rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-9">
            <h2 className="text-2xl font-black">
              AutoCAD برای معماری چه کاربردی دارد؟
            </h2>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              AutoCAD بیشتر به‌عنوان یک ابزار قدرتمند برای ترسیم و
              مستندسازی دوبعدی شناخته می‌شود. در پروژه‌های معماری می‌توان
              از آن برای ترسیم پلان، نما، مقطع، دیتیل و بسیاری از نقشه‌های
              اجرایی استفاده کرد.
            </p>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              مزیت مهم AutoCAD این است که کنترل بسیار دقیقی روی خطوط،
              لایه‌ها، اندازه‌گذاری و ساختار نقشه در اختیار کاربر قرار
              می‌دهد. به همین دلیل یادگیری آن هنوز برای کسی که با نقشه‌های
              اجرایی سروکار دارد مفید است.
            </p>

            <h3 className="mt-7 text-lg font-black">
              چه زمانی AutoCAD انتخاب خوبی است؟
            </h3>

            <div className="mt-4 space-y-3">
              {[
                "وقتی تمرکز شما روی نقشه‌کشی دوبعدی است.",
                "وقتی باید نقشه‌های DWG را ویرایش یا تهیه کنید.",
                "وقتی با دفاتر فنی و نقشه‌های اجرایی سروکار دارید.",
                "وقتی هنوز اصول نقشه‌خوانی و ترسیم را به‌خوبی یاد نگرفته‌اید.",
              ].map((item) => (
                <CheckItem key={item} text={item} />
              ))}
            </div>
          </section>

          {/* REVIT */}
          <section className="mt-10 rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-9">
            <h2 className="text-2xl font-black">
              Revit برای معماری چه تفاوتی دارد؟
            </h2>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              Revit رویکرد متفاوتی نسبت به نرم‌افزارهای صرفاً دوبعدی دارد.
              در این محیط به‌جای اینکه پلان، نما و مقطع را کاملاً جدا از
              یکدیگر ترسیم کنید، ساختمان را به‌صورت یک مدل اطلاعاتی
              ایجاد می‌کنید.
            </p>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              برای مثال وقتی یک دیوار در مدل Revit تغییر می‌کند، اطلاعات
              مربوط به همان عنصر می‌تواند در نماها، مقاطع و سایر دیدهای
              مرتبط نیز به‌روزرسانی شود. همین ارتباط بین مدل و مستندات یکی
              از دلایلی است که Revit در فرآیند BIM کاربرد زیادی دارد.
            </p>

            <div className="mt-7 rounded-xl bg-[#faf8f6] p-5">
              <h3 className="font-black">
                اگر هدف شما ورود به BIM است
              </h3>

              <p className="mt-2 text-sm leading-8 text-neutral-600">
                یادگیری Revit می‌تواند یکی از پایه‌های اصلی مسیر شما باشد؛
                اما صرفاً یادگیری دستورات نرم‌افزار کافی نیست. باید
                هم‌زمان منطق مدل‌سازی، ساختار پروژه و نحوه استفاده از مدل
                در فرآیند واقعی ساختمان را نیز یاد بگیرید.
              </p>
            </div>
          </section>

          {/* SKETCHUP */}
          <section className="mt-10 rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-9">
            <h2 className="text-2xl font-black">
              SketchUp؛ سریع برای ایده‌پردازی
            </h2>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              SketchUp بیشتر زمانی مفید است که بخواهید یک ایده معماری را
              سریع به یک مدل سه‌بعدی تبدیل کنید. سادگی محیط و سرعت
              مدل‌سازی باعث شده برای مطالعات حجمی و بررسی فرم کاربرد زیادی
              داشته باشد.
            </p>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              اما اگر هدف شما تولید کامل مدارک اجرایی و مدیریت اطلاعات
              ساختمان باشد، معمولاً باید آن را در کنار ابزارهای دیگر دید،
              نه به‌عنوان تنها نرم‌افزار پروژه.
            </p>
          </section>

          {/* 3DS MAX */}
          <section className="mt-10 rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-9">
            <h2 className="text-2xl font-black">
              3ds Max؛ وقتی ارائه بصری مهم می‌شود
            </h2>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              3ds Max بیشتر در مرحله مدل‌سازی پیشرفته و ارائه بصری پروژه
              استفاده می‌شود. زمانی که هدف شما تولید تصاویر معماری با
              جزئیات زیاد، متریال‌های دقیق، نورپردازی و صحنه‌های
              واقع‌گرایانه باشد، این نرم‌افزار می‌تواند وارد فرآیند شود.
            </p>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              بنابراین اگر تازه وارد معماری شده‌اید، بهتر است یادگیری
              3ds Max را با این سؤال شروع نکنید که «چطور رندر بگیرم؟»
              ابتدا مشخص کنید مدل و اطلاعات پروژه قرار است از کجا تأمین
              شوند.
            </p>
          </section>

          {/* RHINO */}
          <section className="mt-10 rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-9">
            <h2 className="text-2xl font-black">
              Rhino؛ برای پروژه‌های فرم‌محور و پیچیده
            </h2>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              Rhino زمانی بیشتر خودش را نشان می‌دهد که پروژه از فرم‌های
              پیچیده، سطوح خاص یا هندسه‌هایی استفاده کند که با ابزارهای
              معمول مدل‌سازی به‌راحتی کنترل نمی‌شوند.
            </p>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              در پروژه‌های معمول ساختمانی ممکن است نیازی به آن نداشته
              باشید. بنابراین بهتر است آن را بر اساس نیاز پروژه یاد
              بگیرید، نه صرفاً به دلیل اینکه ابزار قدرتمندی است.
            </p>
          </section>

          {/* LUMION */}
          <section className="mt-10 rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-9">
            <h2 className="text-2xl font-black">
              Lumion؛ برای ارائه سریع پروژه
            </h2>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              Lumion بیشتر در بخش Visualization یا ارائه بصری پروژه
              کاربرد دارد. می‌توانید مدل معماری را وارد کنید، متریال،
              نور، محیط و عناصر مختلف را اضافه کنید و خروجی تصویری یا
              ویدیویی بگیرید.
            </p>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              نکته مهم این است که نرم‌افزارهای Visualization جایگزین
              نرم‌افزار طراحی یا BIM نیستند. آنها بیشتر برای تبدیل مدل
              پروژه به یک خروجی قابل ارائه استفاده می‌شوند.
            </p>
          </section>

          {/* COMPARISON */}
          <section className="mt-10">
            <div className="mb-7">
              <div className="mb-4 h-1 w-10 bg-[#8f211d]" />

              <h2 className="text-2xl font-black">
                بالاخره کدام نرم‌افزار را یاد بگیریم؟
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#e9e5e2] bg-white">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-right text-sm">
                  <thead className="bg-[#171717] text-white">
                    <tr>
                      <th className="p-4">هدف</th>
                      <th className="p-4">انتخاب پیشنهادی</th>
                      <th className="p-4">دلیل</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      [
                        "نقشه‌کشی دوبعدی",
                        "AutoCAD",
                        "ترسیم و مستندسازی دقیق",
                      ],
                      [
                        "BIM",
                        "Revit",
                        "مدل اطلاعاتی ساختمان",
                      ],
                      [
                        "مدل‌سازی سریع",
                        "SketchUp",
                        "سرعت بالا در حجم‌سازی",
                      ],
                      [
                        "رندر و مدل‌سازی",
                        "3ds Max",
                        "کنترل بالا روی مدل و صحنه",
                      ],
                      [
                        "فرم‌های پیچیده",
                        "Rhino",
                        "انعطاف در مدل‌سازی فرم",
                      ],
                      [
                        "ارائه سریع",
                        "Lumion",
                        "Visualization سریع",
                      ],
                    ].map(([goal, tool, reason]) => (
                      <tr
                        key={goal}
                        className="border-t border-[#eeeae7]"
                      >
                        <td className="p-4 font-bold">
                          {goal}
                        </td>

                        <td className="p-4 text-[#8f211d]">
                          {tool}
                        </td>

                        <td className="p-4 text-neutral-600">
                          {reason}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* DECISION */}
          <section className="mt-10">
            <div className="mb-7">
              <div className="mb-4 h-1 w-10 bg-[#8f211d]" />

              <h2 className="text-2xl font-black">
                انتخاب نرم‌افزار بر اساس هدف
              </h2>
            </div>

            <div className="space-y-4">
              {decisions.map((item) => (
                <section
                  key={item.title}
                  className="rounded-2xl border border-[#e9e5e2] bg-white p-6"
                >
                  <h3 className="text-lg font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-8 text-neutral-600">
                    {item.answer}
                  </p>
                </section>
              ))}
            </div>
          </section>

          {/* LEARNING PATH */}
          <section className="mt-10 rounded-[24px] bg-[#0d0f10] p-6 text-white md:p-9">
            <div className="flex gap-4">
              <Monitor
                size={25}
                className="mt-1 shrink-0 text-[#e88a84]"
              />

              <div>
                <h2 className="text-2xl font-black">
                  یک مسیر منطقی برای یادگیری نرم‌افزارهای معماری
                </h2>

                <p className="mt-3 text-sm leading-8 text-white/55">
                  لازم نیست همه نرم‌افزارها را هم‌زمان یاد بگیرید.
                  ابتدا یک مهارت اصلی را انتخاب کنید و بعد ابزارهای
                  مکمل را اضافه کنید.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {learningPath.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="text-sm font-black text-[#e88a84]">
                    مرحله {item.step}
                  </span>

                  <h3 className="mt-3 font-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-8 text-white/55">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* BIM */}
          <section className="mt-10 rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-9">
            <h2 className="text-2xl font-black">
              اگر قصد ورود به BIM را دارید
            </h2>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              اگر هدف شما فقط ترسیم نقشه نیست و می‌خواهید در فرآیند BIM
              فعالیت کنید، بهتر است مسیر یادگیری خود را صرفاً به یک
              نرم‌افزار محدود نکنید.
            </p>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              Revit می‌تواند نقطه شروع مناسبی برای مدل‌سازی اطلاعات
              ساختمان باشد. بعد از آن، بسته به حوزه کاری، ابزارهایی مانند
              Navisworks برای هماهنگی و بررسی مدل و Dynamo برای
              خودکارسازی برخی فرآیندها می‌توانند به مسیر شما اضافه شوند.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                ["Revit", "مدل‌سازی BIM"],
                ["Navisworks", "هماهنگی و بررسی مدل"],
                ["Dynamo", "اتوماسیون و پارامتریک"],
              ].map(([name, description]) => (
                <div
                  key={name}
                  className="rounded-xl bg-[#faf8f6] p-5"
                >
                  <b>{name}</b>

                  <p className="mt-2 text-xs leading-6 text-neutral-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* COMMON MISTAKES */}
          <section className="mt-10 rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-9">
            <div className="flex gap-4">
              <TriangleAlert
                size={24}
                className="mt-1 shrink-0 text-[#8f211d]"
              />

              <div>
                <h2 className="text-2xl font-black">
                  اشتباهات رایج هنگام انتخاب نرم‌افزار
                </h2>

                <p className="mt-3 text-sm leading-8 text-neutral-500">
                  انتخاب ابزار اشتباه می‌تواند باعث شود زمان زیادی را
                  صرف یادگیری چیزی کنید که فعلاً به آن نیاز ندارید.
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {mistakes.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl bg-[#faf8f6] p-4"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8f211d]" />

                  <p className="text-sm leading-7 text-neutral-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-10">
            <div className="mb-7">
              <div className="mb-4 h-1 w-10 bg-[#8f211d]" />

              <h2 className="text-2xl font-black">
                سوالات متداول درباره نرم‌افزارهای معماری
              </h2>
            </div>

            <div className="space-y-4">
              <Faq
                question="بهترین نرم‌افزار معماری کدام است؟"
                answer="یک نرم‌افزار را نمی‌توان برای همه پروژه‌ها بهترین دانست. انتخاب به هدف شما بستگی دارد. برای نقشه‌کشی دوبعدی AutoCAD، برای BIM و مدل‌سازی اطلاعات ساختمان Revit و برای ارائه سه‌بعدی ابزارهایی مانند 3ds Max و Lumion کاربرد دارند."
              />

              <Faq
                question="برای شروع معماری AutoCAD بهتر است یا Revit؟"
                answer="اگر هنوز با نقشه‌خوانی و ترسیم دوبعدی آشنا نیستید، AutoCAD می‌تواند پایه مناسبی ایجاد کند. اگر هدف مشخص شما ورود به BIM و مدل‌سازی اطلاعات ساختمان است، Revit مسیر مستقیم‌تری به این حوزه می‌دهد."
              />

              <Faq
                question="آیا برای یادگیری Revit باید AutoCAD بلد باشیم؟"
                answer="الزام مطلقی وجود ندارد، اما آشنایی با نقشه‌خوانی، پلان، نما، مقطع و اصول ترسیم معماری باعث می‌شود یادگیری Revit ساده‌تر و کاربردی‌تر شود."
              />

              <Faq
                question="آیا SketchUp برای طراحی معماری کافی است؟"
                answer="برای مدل‌سازی سریع و مطالعات حجمی می‌تواند بسیار مفید باشد، اما برای تمام نیازهای یک پروژه معماری، مخصوصاً مستندسازی کامل و BIM، معمولاً به ابزارهای دیگری نیز نیاز خواهید داشت."
              />

              <Faq
                question="برای ورود به BIM چه نرم‌افزارهایی را یاد بگیریم؟"
                answer="Revit یکی از نرم‌افزارهای اصلی برای شروع مسیر BIM است. بعد از آن می‌توانید بسته به حوزه کاری خود ابزارهایی مانند Navisworks و Dynamo را نیز یاد بگیرید."
              />
            </div>
          </section>

          {/* CTA */}
          <section className="mt-10 overflow-hidden rounded-[24px] bg-[#8f211d] p-7 text-white md:p-10">
            <span className="text-xs font-bold text-white/60">
              آموزش نرم‌افزارهای معماری و BIM
            </span>

            <h2 className="mt-3 text-2xl font-black leading-10 md:text-3xl">
              نرم‌افزار را بر اساس مسیر کاری‌ات یاد بگیر
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-white/75">
              در خشت آکادمی دوره‌های Revit، Revit Architecture، Revit
              Structure، Dynamo، Navisworks و سایر نرم‌افزارهای تخصصی
              صنعت ساختمان ارائه می‌شود.
            </p>

            <Link
              href="/courses"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold !text-[#8f211d] transition hover:bg-neutral-100"
            >
              مشاهده دوره‌های آموزشی
              <ArrowRight size={17} />
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}

function InfoBox({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl bg-[#faf8f6] p-4">
      <span className="text-xs font-bold text-[#8f211d]">
        {title}
      </span>

      <p className="mt-2 text-sm leading-7 text-neutral-600">
        {text}
      </p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3 rounded-xl bg-[#faf8f6] p-3.5">
      <CheckCircle2
        size={18}
        className="mt-1 shrink-0 text-[#8f211d]"
      />

      <span className="text-sm leading-7 text-neutral-700">
        {text}
      </span>
    </div>
  );
}

function Faq({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <section className="rounded-2xl border border-[#e9e5e2] bg-white p-6">
      <h3 className="text-base font-black">
        {question}
      </h3>

      <p className="mt-3 text-sm leading-8 text-neutral-600">
        {answer}
      </p>
    </section>
  );
}