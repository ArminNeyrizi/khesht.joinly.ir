import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  BriefcaseBusiness,
  GraduationCap,
  HardHat,
  Laptop,
  Target,
  TriangleAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "چطور وارد صنعت ساختمان شویم؟ راهنمای ورود به بازار کار ساختمان",

  description:
    "راهنمای کامل ورود به صنعت ساختمان برای دانشجویان و مهندسان عمران؛ از انتخاب مسیر شغلی و یادگیری مهارت‌های فنی تا کارآموزی، پروژه واقعی، رزومه و پیدا کردن اولین شغل.",

  keywords: [
    "چطور وارد صنعت ساختمان شویم",
    "ورود به صنعت ساختمان",
    "ورود به بازار کار ساختمان",
    "بازار کار مهندسی عمران",
    "مهارت های مهندس عمران",
    "چگونه مهندس عمران شویم",
    "کارآموزی عمران",
    "اولین پروژه مهندسی عمران",
    "مهارت های مورد نیاز مهندس عمران",
    "ورود به بازار کار عمران",
    "یادگیری اجرای ساختمان",
    "یادگیری نظارت ساختمان",
    "یادگیری طراحی سازه",
  ],

  alternates: {
    canonical:
      "https://kheshtacademy.ir/blog/how-to-enter-construction-industry",
  },

  openGraph: {
    title: "چطور وارد صنعت ساختمان شویم؟",
    description:
      "راهنمای عملی ورود به بازار کار ساختمان برای دانشجویان و مهندسان عمران.",
    url:
      "https://kheshtacademy.ir/blog/how-to-enter-construction-industry",
    type: "article",
    locale: "fa_IR",
    siteName: "خشت آکادمی",
    images: [
      {
        url: "https://kheshtacademy.ir/images/modern-buildings.avif",
        width: 1200,
        height: 630,
        alt: "ورود به صنعت ساختمان",
      },
    ],
  },
};

const paths = [
  {
    title: "اجرا",
    icon: HardHat,
    description:
      "اگر به کارگاه، عملیات اجرایی، مصالح، نیروهای اجرایی و حل مسئله در محل پروژه علاقه داری، مسیر اجرا می‌تواند انتخاب مناسبی باشد.",
    skills: [
      "شناخت مراحل اجرای ساختمان",
      "خواندن نقشه‌های اجرایی",
      "شناخت مصالح و روش‌های اجرا",
      "کنترل عملیات کارگاهی",
      "آشنایی با برنامه‌ریزی و مدیریت کارگاه",
    ],
  },

  {
    title: "نظارت",
    icon: Target,
    description:
      "در مسیر نظارت، تمرکز اصلی روی کنترل کیفیت اجرا، تطبیق عملیات با نقشه‌ها و مستندسازی وضعیت پروژه است.",
    skills: [
      "خواندن نقشه‌های معماری و سازه",
      "کنترل عملیات اجرایی",
      "شناخت خطاهای رایج کارگاهی",
      "گزارش‌نویسی",
      "کنترل مصالح و کیفیت اجرا",
    ],
  },

  {
    title: "طراحی",
    icon: Laptop,
    description:
      "اگر به محاسبات، تحلیل، طراحی و کار با نرم‌افزارهای مهندسی علاقه داری، مسیر طراحی معماری یا سازه می‌تواند مناسب‌تر باشد.",
    skills: [
      "اصول طراحی",
      "تحلیل سازه",
      "کار با نرم‌افزارهای تخصصی",
      "خواندن و تهیه نقشه",
      "کنترل و اصلاح مدل و محاسبات",
    ],
  },

  {
    title: "BIM",
    icon: BriefcaseBusiness,
    description:
      "این مسیر برای کسانی مناسب است که به مدل‌سازی، تهیه نقشه، هماهنگی بین رشته‌ها و کار با ابزارهای دیجیتال علاقه دارند.",
    skills: [
      "AutoCAD",
      "Revit",
      "مدل‌سازی BIM",
      "هماهنگی مدل‌ها",
      "تهیه نقشه از مدل",
    ],
  },
];

const mistakes = [
  "یادگیری هم‌زمان چندین نرم‌افزار بدون تسلط واقعی روی هیچ‌کدام",
  "منتظر ماندن برای فارغ‌التحصیلی و بعد شروع کردن یادگیری مهارت عملی",
  "جمع کردن مدرک و گواهینامه بدون ساختن نمونه‌کار",
  "شروع از پروژه‌های بزرگ بدون داشتن تجربه پایه",
  "فقط تئوری خواندن و نرفتن به کارگاه",
  "نداشتن رزومه یا نمونه‌کار قابل ارائه",
  "تلاش برای یادگیری همه شاخه‌های صنعت ساختمان به‌صورت هم‌زمان",
  "بی‌توجهی به مهارت‌های ارتباطی و کار تیمی",
];

const roadmap = [
  {
    number: "۰۱",
    title: "یک مسیر مشخص انتخاب کن",
    text:
      "اول مشخص کن به کدام بخش صنعت ساختمان علاقه بیشتری داری. قرار نیست از همان ابتدا تصمیمی برای تمام دوران کاری‌ات بگیری؛ هدف این است که یک نقطه شروع مشخص داشته باشی.",
  },

  {
    number: "۰۲",
    title: "مهارت‌های پایه را یاد بگیر",
    text:
      "قبل از رفتن سراغ ابزارهای پیچیده، باید بتوانی نقشه بخوانی، اجزای ساختمان را بشناسی و با فرآیند کلی پروژه آشنا باشی.",
  },

  {
    number: "۰۳",
    title: "یک یا دو ابزار اصلی را یاد بگیر",
    text:
      "به‌جای اینکه چندین نرم‌افزار را سطحی یاد بگیری، ابزارهایی را انتخاب کن که مستقیماً با مسیر شغلی‌ات ارتباط دارند.",
  },

  {
    number: "۰۴",
    title: "با پروژه واقعی درگیر شو",
    text:
      "حتی اگر پروژه اول درآمد زیادی نداشته باشد، تجربه واقعی کارگاه، دفتر فنی یا دفتر طراحی معمولاً ارزش بیشتری از چند ساعت آموزش تئوری دارد.",
  },

  {
    number: "۰۵",
    title: "نمونه‌کار بساز",
    text:
      "کاری که انجام داده‌ای باید قابل نمایش باشد. یک پروژه تمرینی کامل، نقشه‌های ترسیم‌شده یا مدل BIM می‌تواند شروع خوبی برای ساختن نمونه‌کار باشد.",
  },

  {
    number: "۰۶",
    title: "برای اولین فرصت کاری اقدام کن",
    text:
      "بعد از اینکه حداقل مهارت پایه را به دست آوردی، منتظر کامل شدن مهارت‌ها نمان. برای کارآموزی، دستیاری، دفتر فنی یا موقعیت‌های ابتدایی اقدام کن.",
  },
];

export default function HowToEnterConstructionIndustry() {
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
              مسیر شغلی
            </span>
          </div>

          {/* TITLE */}
          <div className="mx-auto max-w-4xl py-14 text-center md:py-18">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#8f211d]/20 px-4 py-2 text-xs font-bold text-[#e88a84]">
              <BriefcaseBusiness size={14} />
              مسیر شغلی
            </span>

            <h1 className="mt-6 text-3xl font-black leading-[1.5] md:text-5xl">
              چطور وارد صنعت ساختمان شویم؟
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              راهنمای عملی برای دانشجویان و مهندسانی که می‌خواهند
              از یادگیری تئوری عبور کنند و وارد پروژه‌های واقعی صنعت
              ساختمان شوند.
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
                src="/images/modern-buildings.avif"
                alt="ورود به صنعت ساختمان و بازار کار مهندسی"
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
          <section className="rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-8">
            <h2 className="text-2xl font-black">
              ورود به صنعت ساختمان از کجا شروع می‌شود؟
            </h2>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              یکی از مشکلات رایج دانشجویان و فارغ‌التحصیلان رشته‌های
              عمران و معماری این است که بعد از چند سال تحصیل هنوز
              نمی‌دانند برای ورود به بازار کار باید از کجا شروع کنند.
            </p>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              دلیلش هم تا حدی مشخص است. دانشگاه معمولاً بخش مهمی از
              دانش تئوری را آموزش می‌دهد، اما کار در پروژه واقعی
              مهارت‌های دیگری می‌خواهد؛ از خواندن نقشه و شناخت مصالح
              گرفته تا ارتباط با عوامل پروژه، کنترل اجرا، کار با
              نرم‌افزارها و حل مسئله در شرایط واقعی.
            </p>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              بنابراین برای ورود به صنعت ساختمان لازم نیست همه چیز را
              بلد باشی. بهتر است یک مسیر مشخص انتخاب کنی، مهارت‌های
              پایه همان مسیر را یاد بگیری و خیلی زود خودت را درگیر
              پروژه واقعی کنی.
            </p>
          </section>

          {/* IMPORTANT NOTE */}
          <section className="mt-8 flex gap-4 rounded-2xl border border-[#ead8d5] bg-[#fff8f7] p-6">
            <TriangleAlert
              size={22}
              className="mt-1 shrink-0 text-[#8f211d]"
            />

            <div>
              <h2 className="font-black">
                لازم نیست از روز اول متخصص باشی
              </h2>

              <p className="mt-2 text-sm leading-8 text-neutral-600">
                هدف اولین تجربه کاری این نیست که تمام مسئولیت یک پروژه
                را به‌تنهایی انجام بدهی. هدف این است که با فرآیند واقعی
                کار آشنا شوی، اشتباهاتت را ببینی و فاصله بین دانش
                دانشگاهی و مهارت اجرایی را کم کنی.
              </p>
            </div>
          </section>

          {/* PATHS */}
          <section className="mt-12">
            <div className="mb-8">
              <div className="mb-4 h-1 w-10 bg-[#8f211d]" />

              <h2 className="text-2xl font-black">
                اول مسیر شغلی خودت را مشخص کن
              </h2>

              <p className="mt-3 text-sm leading-8 text-neutral-500">
                صنعت ساختمان فقط یک شغل یا یک مسیر ندارد. انتخاب مسیر
                اولیه باعث می‌شود یادگیری تو پراکنده نشود.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {paths.map((path) => {
                const Icon = path.icon;

                return (
                  <section
                    key={path.title}
                    className="rounded-2xl border border-[#e9e5e2] bg-white p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5e9e7] text-[#8f211d]">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 text-xl font-black">
                      {path.title}
                    </h3>

                    <p className="mt-3 text-sm leading-8 text-neutral-600">
                      {path.description}
                    </p>

                    <h4 className="mt-6 text-xs font-black text-[#8f211d]">
                      مهارت‌های پیشنهادی
                    </h4>

                    <div className="mt-3 space-y-2">
                      {path.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 text-sm text-neutral-700"
                        >
                          <CheckCircle2
                            size={16}
                            className="shrink-0 text-[#8f211d]"
                          />

                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </section>

          {/* ROADMAP */}
          <section className="mt-12 rounded-[24px] bg-white p-6 md:p-9 border border-[#e9e5e2]">
            <div className="mb-8">
              <div className="mb-4 h-1 w-10 bg-[#8f211d]" />

              <h2 className="text-2xl font-black">
                نقشه راه ورود به بازار کار ساختمان
              </h2>

              <p className="mt-3 text-sm leading-8 text-neutral-500">
                اگر نمی‌دانی دقیقاً چه کاری باید انجام دهی، می‌توانی
                مسیر زیر را به‌عنوان نقطه شروع در نظر بگیری.
              </p>
            </div>

            <div className="space-y-7">
              {roadmap.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5e9e7] text-sm font-black text-[#8f211d]">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-black">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-8 text-neutral-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section className="mt-12">
            <div className="mb-8">
              <div className="mb-4 h-1 w-10 bg-[#8f211d]" />

              <h2 className="text-2xl font-black">
                چه مهارت‌هایی برای ورود به صنعت ساختمان لازم است؟
              </h2>
            </div>

            <div className="space-y-5">
              <Skill
                number="۱"
                title="نقشه‌خوانی"
                text="بتوانی نقشه معماری، سازه و در صورت نیاز نقشه‌های تأسیسات را بخوانی و ارتباط بین آن‌ها را متوجه شوی."
              />

              <Skill
                number="۲"
                title="شناخت فرآیند ساخت"
                text="باید بدانی یک ساختمان از چه مراحلی عبور می‌کند و هر عملیات چه ارتباطی با عملیات قبل و بعد خود دارد."
              />

              <Skill
                number="۳"
                title="شناخت مصالح"
                text="حداقل باید مصالح اصلی ساختمان، کاربرد آن‌ها، روش صحیح استفاده و خطاهای رایج در مصرفشان را بشناسی."
              />

              <Skill
                number="۴"
                title="نرم‌افزارهای تخصصی"
                text="بسته به مسیر انتخابی، ابزارهایی مثل AutoCAD، Revit، ETABS، Robot یا Navisworks می‌توانند بخشی از مهارت حرفه‌ای تو باشند."
              />

              <Skill
                number="۵"
                title="حل مسئله"
                text="پروژه واقعی همیشه مطابق مثال‌های کتاب پیش نمی‌رود. باید بتوانی مسئله را تشخیص بدهی، اطلاعات لازم را پیدا کنی و راه‌حل مناسب را بررسی کنی."
              />

              <Skill
                number="۶"
                title="ارتباط و کار تیمی"
                text="در پروژه ساختمان با کارفرما، مهندس، پیمانکار، استادکار، تکنسین و نیروهای مختلف در ارتباط هستی. توانایی ارتباط مؤثر یک مهارت کاری واقعی است."
              />
            </div>
          </section>

          {/* UNIVERSITY VS REAL PROJECT */}
          <section className="mt-12 overflow-hidden rounded-[24px] bg-[#0d0f10] p-6 text-white md:p-9">
            <h2 className="text-2xl font-black">
              دانشگاه کافی است؟
            </h2>

            <p className="mt-5 text-sm leading-8 text-white/65">
              دانشگاه برای ساختن پایه علمی لازم است، اما معمولاً برای
              آماده شدن کامل جهت کار در پروژه کافی نیست. مثلاً ممکن است
              دانشجو تحلیل یک سازه را در درس دانشگاه یاد گرفته باشد،
              اما در پروژه واقعی با نقشه‌های اجرایی، هماهنگی بین رشته‌ها،
              تغییرات کارفرما، محدودیت‌های کارگاه و خطاهای اجرایی
              مواجه شود.
            </p>

            <p className="mt-4 text-sm leading-8 text-white/65">
              به همین دلیل بهتر است یادگیری دانشگاهی و تجربه پروژه‌ای
              هم‌زمان پیش بروند، نه اینکه یکی را تا پایان کامل کنی و
              بعد سراغ دیگری بروی.
            </p>

            <div className="mt-7 grid gap-3 md:grid-cols-2">
              {[
                "دانش تئوری",
                "تمرین نرم‌افزاری",
                "پروژه تمرینی",
                "بازدید و تجربه کارگاه",
                "کارآموزی",
                "نمونه‌کار",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-[#e88a84]"
                  />

                  <span className="text-sm text-white/75">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* FIRST JOB */}
          <section className="mt-12 rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5e9e7] text-[#8f211d]">
                <GraduationCap size={23} />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  برای اولین کار چه موقعیتی را انتخاب کنیم؟
                </h2>

                <p className="mt-4 text-sm leading-8 text-neutral-600">
                  اولین موقعیت کاری لزوماً نباید عنوان «مهندس پروژه»
                  یا حقوق بالا داشته باشد. در شروع کار، سرعت یادگیری و
                  میزان درگیری با پروژه می‌تواند از عنوان شغلی مهم‌تر
                  باشد.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-3 md:grid-cols-2">
              {[
                "کارآموزی کارگاه",
                "دستیار مهندس ناظر",
                "دستیار سرپرست کارگاه",
                "دفتر فنی",
                "نقشه‌کشی",
                "مدل‌سازی BIM",
                "دستیار طراح",
                "کنترل پروژه",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#eeeae7] bg-[#faf8f6] p-4 text-sm font-bold text-neutral-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* PORTFOLIO */}
          <section className="mt-12">
            <h2 className="text-2xl font-black">
              نمونه‌کار؛ چیزی که خیلی‌ها فراموش می‌کنند
            </h2>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              اگر به کارفرما یا یک شرکت بگویی «Revit بلدم»، اطلاعات
              محدودی به او داده‌ای. اما اگر یک پروژه مدل‌سازی‌شده داشته
              باشی و بتوانی توضیح بدهی چه کاری انجام داده‌ای، مهارتت
              قابل ارزیابی‌تر می‌شود.
            </p>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              نمونه‌کار لازم نیست حتماً یک پروژه واقعی چند میلیاردی
              باشد. می‌توانی یک پروژه تمرینی را از ابتدا تا انتها
              انجام بدهی و خروجی‌های آن را مرتب کنی.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {[
                ["طراحی", "پلان، مدل یا محاسبات یک پروژه مشخص"],
                ["اجرا", "گزارش مراحل اجرا و جزئیات کنترل پروژه"],
                ["BIM", "مدل Revit، شیت‌ها و خروجی‌های پروژه"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#e9e5e2] bg-white p-5"
                >
                  <h3 className="font-black text-[#8f211d]">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* MISTAKES */}
          <section className="mt-12 rounded-[24px] border border-[#ead8d5] bg-[#fff8f7] p-6 md:p-8">
            <div className="flex items-start gap-4">
              <TriangleAlert
                size={23}
                className="mt-1 shrink-0 text-[#8f211d]"
              />

              <div>
                <h2 className="text-2xl font-black">
                  اشتباهات رایج در شروع مسیر
                </h2>

                <p className="mt-3 text-sm leading-8 text-neutral-600">
                  چند مورد از اشتباهاتی که باعث می‌شوند مسیر یادگیری
                  طولانی‌تر و پراکنده‌تر شود:
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {mistakes.map((mistake) => (
                <div
                  key={mistake}
                  className="flex gap-3 rounded-xl border border-[#eadfdd] bg-white p-4"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8f211d]" />

                  <p className="text-sm leading-7 text-neutral-700">
                    {mistake}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 90 DAY PLAN */}
          <section className="mt-12 rounded-[24px] bg-white p-6 md:p-9 border border-[#e9e5e2]">
            <h2 className="text-2xl font-black">
              یک برنامه ساده ۹۰ روزه برای شروع
            </h2>

            <p className="mt-4 text-sm leading-8 text-neutral-600">
              اگر الان هیچ تجربه‌ای نداری، لازم نیست برنامه پیچیده‌ای
              بسازی. یک برنامه فشرده و قابل اجرا می‌تواند این‌طور باشد:
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <Plan
                title="روز ۱ تا ۳۰"
                items={[
                  "انتخاب مسیر",
                  "یادگیری مبانی",
                  "نقشه‌خوانی",
                  "شناخت اجزای ساختمان",
                ]}
              />

              <Plan
                title="روز ۳۱ تا ۶۰"
                items={[
                  "یادگیری ابزار اصلی",
                  "انجام پروژه تمرینی",
                  "ساخت نمونه‌کار",
                  "رفع نقاط ضعف",
                ]}
              />

              <Plan
                title="روز ۶۱ تا ۹۰"
                items={[
                  "پیدا کردن کارآموزی",
                  "ارسال رزومه",
                  "حضور در پروژه",
                  "یادگیری از افراد باتجربه",
                ]}
              />
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="text-2xl font-black">
              سوالات متداول درباره ورود به صنعت ساختمان
            </h2>

            <div className="mt-6 space-y-4">
              <Faq
                question="آیا برای ورود به صنعت ساختمان حتماً باید مدرک دانشگاهی داشته باشیم؟"
                answer="برای بعضی موقعیت‌های رسمی و مسئولیت‌های مهندسی، داشتن مدرک و صلاحیت‌های مربوط الزامی است. اما برای یادگیری مهارت، کارآموزی، برخی فعالیت‌های اجرایی، نقشه‌کشی یا یادگیری نرم‌افزار، می‌توان از قبل شروع کرد."
              />

              <Faq
                question="از اجرا شروع کنیم یا طراحی؟"
                answer="پاسخ یکسانی برای همه وجود ندارد. اگر به کارگاه و فرآیند ساخت علاقه داری، اجرا می‌تواند انتخاب مناسبی باشد. اگر به تحلیل، محاسبات و نرم‌افزار علاقه بیشتری داری، طراحی مسیر منطقی‌تری است."
              />

              <Faq
                question="برای شروع چند نرم‌افزار باید یاد بگیریم؟"
                answer="بهتر است با یک یا دو نرم‌افزار مرتبط با مسیر شغلی خودت شروع کنی و به سطح قابل استفاده برسی، نه اینکه چندین نرم‌افزار را هم‌زمان و سطحی یاد بگیری."
              />

              <Faq
                question="آیا بدون سابقه کاری می‌توان اولین پروژه را گرفت؟"
                answer="بله، اما معمولاً بهتر است با موقعیت‌های ابتدایی مثل کارآموزی، دستیاری یا پروژه‌های کوچک شروع شود. داشتن نمونه‌کار نیز می‌تواند نبود سابقه رسمی را تا حدی جبران کند."
              />

              <Faq
                question="بهترین راه یادگیری صنعت ساختمان چیست؟"
                answer="ترکیب آموزش پایه، تمرین، مشاهده پروژه واقعی و انجام کار عملی معمولاً از تکیه بر یک روش به‌تنهایی نتیجه بهتری دارد."
              />
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 overflow-hidden rounded-[24px] bg-[#8f211d] p-7 text-white md:p-10">
            <span className="text-xs font-bold text-white/60">
              خشت آکادمی
            </span>

            <h2 className="mt-3 text-2xl font-black leading-9 md:text-3xl">
              مسیرت را انتخاب کن و از آموزش به پروژه برس
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-white/75">
              در خشت آکادمی می‌توانی مهارت‌های مورد نیاز صنعت ساختمان
              را در مسیرهای اجرا، نظارت، طراحی، نقشه‌کشی و BIM یاد بگیری
              و با پروژه‌های تمرینی، فاصله بین آموزش و کار واقعی را کمتر
              کنی.
            </p>

            <Link
              href="/courses"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold !text-[#8f211d] transition hover:bg-neutral-100"
            >
              مشاهده دوره‌ها
              <ArrowRight size={17} />
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
}

/* -------------------------------- */
/* COMPONENTS */
/* -------------------------------- */

function Skill({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-[#e9e5e2] bg-white p-5 md:p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f5e9e7] text-sm font-black text-[#8f211d]">
        {number}
      </div>

      <div>
        <h3 className="font-black">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-8 text-neutral-600">
          {text}
        </p>
      </div>
    </div>
  );
}

function Plan({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-[#e9e5e2] bg-[#faf8f6] p-5">
      <h3 className="font-black !text-[#8f211d]">
        {title}
      </h3>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-sm text-neutral-700"
          >
            <CheckCircle2
              size={16}
              className="shrink-0 text-[#8f211d]"
            />

            <span>{item}</span>
          </div>
        ))}
      </div>
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
    <details className="group rounded-2xl border border-[#e9e5e2] bg-white p-5">
      <summary className="cursor-pointer list-none font-black leading-8">
        <div className="flex items-center justify-between gap-4">
          <span>{question}</span>

          <span className="text-xl !text-[#8f211d] transition group-open:rotate-45">
            +
          </span>
        </div>
      </summary>

      <p className="mt-4 border-t border-[#eeeae7] pt-4 text-sm leading-8 text-neutral-600">
        {answer}
      </p>
    </details>
  );
}