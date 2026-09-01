import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "۱۰ اشتباه رایج در نظارت ساختمان که هر ناظر باید بشناسد | خشت آکادمی",

  description:
    "۱۰ اشتباه رایج در نظارت ساختمان؛ از بررسی نکردن نقشه‌ها و کنترل مراحل اجرایی تا گزارش‌نویسی و مستندسازی ضعیف.",

  keywords: [
    "نظارت ساختمان",
    "اشتباهات رایج در نظارت ساختمان",
    "وظایف ناظر ساختمان",
    "کنترل اجرای ساختمان",
    "چک لیست نظارت ساختمان",
    "گزارش ناظر ساختمان",
  ],

  alternates: {
    canonical:
      "https://kheshtacademy.ir/blog/10-common-supervision-mistakes",
  },

  openGraph: {
    title: "۱۰ اشتباه رایج در نظارت ساختمان",
    description:
      "راهنمای کاربردی برای شناخت اشتباهات رایج در نظارت ساختمان.",
    url: "https://kheshtacademy.ir/blog/10-common-supervision-mistakes",
    type: "article",
    locale: "fa_IR",
    siteName: "خشت آکادمی",
    images: [
      {
        url: "https://kheshtacademy.ir/images/supervisors.avif",
        width: 1200,
        height: 630,
        alt: "۱۰ اشتباه رایج در نظارت ساختمان",
      },
    ],
  },
};

const mistakes = [
  {
    number: "۰۱",
    title: "شروع نظارت بدون بررسی کامل نقشه‌ها",
    text: "یکی از اشتباهات رایج این است که ناظر زمانی وارد بررسی جدی پروژه می‌شود که عملیات اجرایی شروع شده است.",
    detail:
      "قبل از شروع یا در ابتدای پروژه باید نقشه‌های معماری، سازه و تأسیسات مرتبط با مرحله اجرا بررسی شوند.",
  },
  {
    number: "۰۲",
    title: "توجه نکردن به آخرین نسخه نقشه‌ها",
    text: "نقشه‌های پروژه ممکن است در طول اجرا اصلاح یا به‌روزرسانی شوند.",
    detail:
      "برای نقشه‌های پروژه یک روش ساده کنترل نسخه داشته باشید و مشخص کنید کدام نسخه، آخرین نسخه قابل استفاده برای اجراست.",
  },
  {
    number: "۰۳",
    title: "کنترل نکردن عملیات قبل از پوشانده شدن",
    text: "بعضی قسمت‌های ساختمان بعد از اجرا دیگر به‌راحتی قابل بررسی نیستند.",
    detail:
      "آرماتوربندی و برخی تأسیسات باید قبل از پوشانده شدن کنترل شوند.",
  },
  {
    number: "۰۴",
    title: "کنترل نکردن ابعاد واقعی اجرا",
    text: "گاهی کنترل پروژه فقط به ظاهر کار محدود می‌شود.",
    detail:
      "ابعاد دیوارها، بازشوها، ارتفاع‌ها و سایر اندازه‌های مهم را با نقشه تطبیق دهید.",
  },
  {
    number: "۰۵",
    title: "کنترل نکردن هماهنگی بین نقشه‌ها",
    text: "ممکن است هر نقشه به‌صورت جداگانه درست باشد، اما بین معماری، سازه و تأسیسات تداخل وجود داشته باشد.",
    detail:
      "تداخل‌های احتمالی را قبل از اجرا شناسایی و برای رفع آن‌ها اقدام کنید.",
  },
  {
    number: "۰۶",
    title: "گزارش نکردن مغایرت‌ها به‌موقع",
    text: "عقب انداختن گزارش یک مغایرت می‌تواند باعث بزرگ‌تر شدن مشکل شود.",
    detail:
      "موارد مهم را به‌موقع ثبت، مستند و از مسیر رسمی پروژه پیگیری کنید.",
  },
  {
    number: "۰۷",
    title: "تکیه بیش از حد به تجربه شخصی",
    text: "تجربه کارگاهی ارزشمند است، اما نباید جایگزین نقشه و ضوابط پروژه شود.",
    detail:
      "تجربه را برای تشخیص مسئله استفاده کنید، اما تصمیم فنی را با مستندات پروژه تطبیق دهید.",
  },
  {
    number: "۰۸",
    title: "نداشتن چک‌لیست برای بازدیدهای کارگاهی",
    text: "بازدید بدون ساختار مشخص می‌تواند باعث فراموش شدن بعضی موارد مهم شود.",
    detail:
      "برای مراحل اصلی پروژه چک‌لیست داشته باشید و موارد کنترل‌شده را ثبت کنید.",
  },
  {
    number: "۰۹",
    title: "مستندسازی ضعیف بازدیدها",
    text: "ثبت گزارش فقط به نوشتن چند جمله محدود نمی‌شود.",
    detail:
      "تاریخ، محل، مرحله اجرا، موارد بررسی‌شده، مغایرت‌ها و مستندات تصویری را ثبت کنید.",
  },
  {
    number: "۱۰",
    title: "حل کردن همه مشکلات به‌صورت شفاهی",
    text: "موضوعات مهم پروژه نباید فقط به گفت‌وگوی شفاهی محدود شوند.",
    detail:
      "موارد مهم و قابل پیگیری را از مسیر رسمی پروژه ثبت و مستند کنید.",
  },
];

const checklist = [
  "آیا اجرای امروز با نقشه مطابقت دارد؟",
  "آیا مغایرتی بین اجرای واقعی و نقشه مشاهده کردم؟",
  "آیا مرحله‌ای وجود دارد که قبل از پوشانده شدن باید کنترل شود؟",
  "آیا بین نقشه‌های معماری، سازه و تأسیسات تداخلی وجود دارد؟",
  "آیا موردی نیاز به اصلاح یا پیگیری دارد؟",
  "آیا موارد مهم بازدید مستند شده‌اند؟",
];

export default function SupervisionArticle() {
  return (
    <main className="min-h-screen bg-[#faf8f6]">
      {/* HERO */}
      <section className="bg-[#090a0b] text-white">
        <div className="container mx-auto px-4">
          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 pt-6 text-xs text-white/45">
            <Link href="/" className="hover:text-white">
              خانه
            </Link>

            <ArrowRight size={13} />

            <Link href="/blog" className="hover:text-white">
              مقالات
            </Link>

            <ArrowRight size={13} />

            <span className="text-white/70">
              نظارت
            </span>
          </div>

          {/* TITLE */}
          <div className="mx-auto max-w-4xl py-14 text-center">
            <span className="inline-flex rounded-full bg-[#8f211d]/20 px-4 py-2 text-xs font-bold text-[#e88a84]">
              نظارت ساختمان
            </span>

            <h1 className="mt-6 text-3xl font-black leading-[1.5] md:text-5xl">
              ۱۰ اشتباه رایج در نظارت ساختمان که هر ناظر باید بشناسد
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60">
              اشتباهاتی که در فرآیند بازدید، کنترل اجرا، گزارش‌نویسی و
              مستندسازی پروژه‌های ساختمانی زیاد تکرار می‌شوند.
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/40">
              <Clock size={15} />
              حدود ۷ دقیقه مطالعه
            </div>
          </div>

          {/* FEATURE IMAGE */}
          <div className="mx-auto max-w-5xl pb-10">
            <div className="overflow-hidden rounded-[24px] border border-white/10 shadow-2xl">
              <img
                src="/images/supervisors.avif"
                alt="نظارت بر اجرای ساختمان"
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
          <div className="rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-8">
            <p className="text-base leading-9 text-neutral-700 md:text-lg">
              نظارت ساختمان فقط بررسی چند مورد اجرایی در کارگاه نیست.
              ناظر باید بتواند نقشه‌ها را بخواند، اجرای کار را با نقشه و
              الزامات پروژه تطبیق دهد، مغایرت‌ها را به‌موقع تشخیص دهد و
              موارد لازم را مستند و پیگیری کند.
            </p>

            <p className="mt-5 text-base leading-9 text-neutral-700 md:text-lg">
              بخش زیادی از مشکلات نظارت، نه به دلیل پیچیدگی فنی، بلکه به
              دلیل چند اشتباه ساده و تکرارشونده اتفاق می‌افتد.
            </p>
          </div>

          {/* MISTAKES */}
          <div className="mt-10 space-y-5">
            {mistakes.map((mistake) => (
              <section
                key={mistake.number}
                className="rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-8"
              >
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5e9e7] text-sm font-black text-[#8f211d]">
                    {mistake.number}
                  </div>

                  <div>
                    <h2 className="text-xl font-black leading-8">
                      {mistake.title}
                    </h2>

                    <p className="mt-4 text-sm leading-8 text-neutral-600 md:text-base">
                      {mistake.text}
                    </p>

                    <div className="mt-5 rounded-xl bg-[#faf8f6] p-4">
                      <p className="text-sm leading-8 text-neutral-700">
                        <strong className="text-[#8f211d]">
                          راهکار:
                        </strong>{" "}
                        {mistake.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* PROCESS */}
          <section className="mt-10 rounded-2xl bg-[#0d0f10] p-6 text-white md:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck
                size={24}
                className="text-[#e88a84]"
              />

              <h2 className="text-2xl font-black">
                یک روش ساده برای کاهش اشتباهات نظارت
              </h2>
            </div>

            <p className="mt-4 text-sm leading-8 text-white/60">
              برای هر بازدید لازم نیست یک فرآیند پیچیده داشته باشید. یک
              روند ساده می‌تواند بسیاری از کنترل‌های مهم را پوشش دهد.
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-5">
              {[
                "بررسی نقشه",
                "کنترل اجرا",
                "کنترل قبل از پوشاندن",
                "ثبت مغایرت",
                "مستندسازی",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <span className="text-xs text-white/35">
                    مرحله {index + 1}
                  </span>

                  <p className="mt-2 text-sm font-bold">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CHECKLIST */}
          <section className="mt-10 rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-8">
            <div className="mb-7">
              <div className="mb-4 h-1 w-10 bg-[#8f211d]" />

              <h2 className="text-2xl font-black">
                چک‌لیست کوتاه بازدید ناظر ساختمان
              </h2>
            </div>

            <div className="space-y-3">
              {checklist.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-[#eeeae7] bg-[#faf8f6] p-4"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-[#8f211d]"
                  />

                  <span className="text-sm leading-7 text-neutral-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-10 overflow-hidden rounded-[24px] bg-[#8f211d] p-7 text-white md:p-10">
            <span className="text-xs font-bold text-white/60">
              دوره تخصصی خشت آکادمی
            </span>

            <h2 className="mt-3 text-2xl font-black leading-9 md:text-3xl">
              نظارت ساختمان را کاربردی یاد بگیر
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-white/75">
              با فرآیند کنترل پروژه، بررسی نقشه‌ها، بازدید کارگاهی و
              مهارت‌های موردنیاز نظارت ساختمان بیشتر آشنا شو.
            </p>

            <Link
              href="/courses/supervision"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold !text-[#8f211d] hover:bg-neutral-100"
            >
              مشاهده دوره نظارت و کنترل پروژه
              <ArrowRight size={17} />
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}