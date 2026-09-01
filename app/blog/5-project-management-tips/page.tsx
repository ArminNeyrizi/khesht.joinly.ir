import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ClipboardList,
  CalendarDays,
  Wallet,
  Users,
  HardHat,
} from "lucide-react";

export const metadata: Metadata = {
  title: "۵ نکته برای مدیریت بهتر پروژه ساختمانی | خشت آکادمی",

  description:
    "۵ نکته کاربردی برای مدیریت بهتر پروژه ساختمانی؛ از برنامه‌ریزی و کنترل زمان و هزینه تا مدیریت نیروها، مصالح، ریسک‌ها و پیگیری پیشرفت پروژه.",

  keywords: [
    "مدیریت پروژه ساختمانی",
    "مدیریت پروژه ساختمان",
    "کنترل پروژه ساختمانی",
    "نکات مدیریت پروژه",
    "مدیریت پروژه عمرانی",
    "برنامه ریزی پروژه ساختمانی",
    "کنترل هزینه پروژه ساختمانی",
    "کنترل زمان پروژه",
    "مدیریت کارگاه ساختمانی",
    "مدیریت پروژه",
  ],

  alternates: {
    canonical:
      "https://kheshtacademy.ir/blog/5-project-management-tips",
  },

  openGraph: {
    title: "۵ نکته برای مدیریت بهتر پروژه ساختمانی",
    description:
      "راهنمای کاربردی مدیریت پروژه ساختمانی؛ از برنامه‌ریزی و کنترل زمان و هزینه تا مدیریت منابع و ریسک.",
    url:
      "https://kheshtacademy.ir/blog/5-project-management-tips",
    type: "article",
    locale: "fa_IR",
    siteName: "خشت آکادمی",
    images: [
      {
        url:
          "https://kheshtacademy.ir/images/beautiful-cafe.avif",
        alt: "مدیریت پروژه ساختمانی",
      },
    ],
  },
};

const mainSections = [
  {
    number: "۰۱",
    icon: ClipboardList,
    title: "قبل از اجرا، پروژه را به کارهای مشخص تقسیم کنید",
    intro:
      "یکی از اشتباهات رایج این است که پروژه را یک کار بزرگ و یکپارچه ببینیم. مثلاً گفته شود «ساختمان را اجرا کنیم» یا «طبقه اول را تمام کنیم». این عبارات برای مدیریت پروژه بیش از حد کلی هستند.",
    paragraphs: [
      "برای مدیریت بهتر، پروژه باید به فعالیت‌های کوچک‌تر و قابل اندازه‌گیری تقسیم شود. این کار باعث می‌شود مشخص باشد چه کاری، توسط چه کسی، با چه منابعی و در چه زمانی باید انجام شود.",
      "برای مثال، اجرای یک ساختمان را می‌توان به فعالیت‌هایی مثل تجهیز کارگاه، اجرای فونداسیون، آرماتوربندی، قالب‌بندی، بتن‌ریزی، اجرای ستون‌ها، اجرای تیرها و سقف، دیوارچینی و تأسیسات تقسیم کرد.",
      "هرکدام از این فعالیت‌ها نیز می‌توانند به فعالیت‌های کوچک‌تر تقسیم شوند. هرچه فعالیت‌ها دقیق‌تر تعریف شوند، کنترل پیشرفت پروژه ساده‌تر خواهد بود."
    ],
    checklist: [
      "لیست کامل فعالیت‌های پروژه تهیه شود.",
      "فعالیت‌های بزرگ به فعالیت‌های کوچک‌تر تقسیم شوند.",
      "برای هر فعالیت مسئول مشخص شود.",
      "مدت زمان موردنیاز هر فعالیت برآورد شود.",
      "وابستگی بین فعالیت‌ها مشخص شود.",
      "منابع موردنیاز هر فعالیت مشخص شود.",
      "فعالیت‌های قابل کنترل به‌عنوان نقاط پیگیری پروژه تعریف شوند.",
    ],
    example:
      "مثلاً به‌جای اینکه در برنامه بنویسید «اجرای فونداسیون»، آن را به تجهیز محل، آرماتوربندی، قالب‌بندی، نصب میلگردهای انتظار، کنترل نهایی و بتن‌ریزی تقسیم کنید.",
  },

  {
    number: "۰۲",
    icon: CalendarDays,
    title: "زمان‌بندی را واقعی بنویسید، نه خوش‌بینانه",
    intro:
      "برنامه زمانی زمانی ارزش دارد که بتوان از آن برای تصمیم‌گیری استفاده کرد. اگر مدت فعالیت‌ها بدون توجه به شرایط واقعی پروژه تعیین شود، برنامه خیلی زود از وضعیت واقعی فاصله می‌گیرد.",
    paragraphs: [
      "در یک پروژه ساختمانی فقط زمان اجرای مستقیم فعالیت مهم نیست. تأمین مصالح، آماده شدن جبهه کاری، هماهنگی نیروها، شرایط آب‌وهوا، تأخیر تأمین‌کننده و وابستگی فعالیت‌ها نیز روی زمان نهایی اثر می‌گذارند.",
      "برای همین، هنگام زمان‌بندی باید مشخص باشد هر فعالیت به چه فعالیت‌هایی وابسته است. برای مثال، بتن‌ریزی سقف بدون تکمیل قالب‌بندی، آرماتوربندی و کنترل‌های قبل از بتن‌ریزی قابل انجام نیست.",
      "همچنین نباید برنامه را فقط یک بار در ابتدای پروژه تهیه کرد و بعد کنار گذاشت. برنامه باید با پیشرفت واقعی پروژه مقایسه شود.",
    ],
    checklist: [
      "مدت هر فعالیت بر اساس شرایط واقعی پروژه تعیین شود.",
      "پیش‌نیاز هر فعالیت مشخص شود.",
      "تاریخ شروع و پایان فعالیت‌ها ثبت شود.",
      "فعالیت‌های حساس و مسیرهای مهم پروژه مشخص شوند.",
      "پیشرفت واقعی با برنامه مقایسه شود.",
      "علت تأخیر فعالیت‌های عقب‌افتاده ثبت شود.",
      "در صورت تغییر شرایط، برنامه اصلاح شود.",
    ],
    example:
      "اگر قرار بوده آرماتوربندی سقف سه روز طول بکشد اما در روز سوم فقط ۶۰٪ کار انجام شده، صرفاً تغییر تاریخ پایان کافی نیست؛ باید مشخص شود چرا عقب افتاده: کمبود نیرو، تأخیر میلگرد، مشکل نقشه یا آماده نبودن جبهه کاری.",
  },

  {
    number: "۰۳",
    icon: Wallet,
    title: "هزینه‌ها را از همان روز اول کنترل کنید",
    intro:
      "یکی از مشکلات رایج پروژه‌های ساختمانی این است که مدیر پروژه در پایان ماه متوجه می‌شود هزینه‌ها بیشتر از چیزی شده که انتظار داشته است. کنترل هزینه باید همزمان با اجرای پروژه انجام شود.",
    paragraphs: [
      "بودجه پروژه را می‌توان به بخش‌های مختلف مانند مصالح، نیروی انسانی، ماشین‌آلات، حمل‌ونقل، پیمانکاران جزء و هزینه‌های غیرمستقیم تقسیم کرد.",
      "ثبت هزینه به‌تنهایی کافی نیست. باید هزینه واقعی با هزینه برنامه‌ریزی‌شده مقایسه شود. اگر برای خرید میلگرد مبلغ مشخصی پیش‌بینی شده اما هزینه واقعی بیشتر شده، باید علت اختلاف مشخص شود.",
      "در پروژه‌های ساختمانی تغییر قیمت مصالح نیز می‌تواند روی هزینه نهایی اثر بگذارد. بنابراین بهتر است خریدها، مقادیر مصرف‌شده و موجودی مصالح مرتب کنترل شوند.",
    ],
    checklist: [
      "بودجه اولیه پروژه مشخص شود.",
      "هزینه‌ها بر اساس نوع هزینه دسته‌بندی شوند.",
      "خریدها و پرداخت‌ها ثبت شوند.",
      "مقادیر مصرف واقعی مصالح کنترل شوند.",
      "هزینه واقعی با بودجه مقایسه شود.",
      "انحراف هزینه‌ها بررسی شود.",
      "هزینه‌های پیش‌بینی‌نشده ثبت و تحلیل شوند.",
      "تعهدات مالی آینده پروژه نیز در نظر گرفته شوند.",
    ],
    example:
      "اگر برای اجرای یک بخش مقدار مشخصی میلگرد برآورد شده ولی مصرف واقعی بیشتر شده است، فقط مبلغ خرید اضافی را ثبت نکنید؛ ابتدا مشخص کنید علت افزایش مصرف چه بوده است. ممکن است مشکل از برآورد اولیه، پرت مصالح یا تغییر نقشه باشد.",
  },

  {
    number: "۰۴",
    icon: Users,
    title: "مسئولیت‌ها را واضح کنید",
    intro:
      "در پروژه‌ای که مشخص نیست هر کار بر عهده چه کسی است، معمولاً مشکلات بین افراد جابه‌جا می‌شوند و بعضی کارها اصلاً انجام نمی‌شوند.",
    paragraphs: [
      "مدیریت پروژه فقط برنامه‌ریزی زمان و هزینه نیست؛ هماهنگ کردن افرادی است که برای اجرای پروژه با یکدیگر کار می‌کنند.",
      "برای هر فعالیت باید مشخص باشد چه کسی مسئول انجام آن است و چه کسی باید نتیجه را تأیید یا کنترل کند. این موضوع به‌خصوص در پروژه‌هایی که چند پیمانکار جزء و گروه اجرایی همزمان فعالیت می‌کنند اهمیت دارد.",
      "همچنین ارتباط بین دفتر، کارگاه، پیمانکاران، ناظر و تأمین‌کنندگان باید مشخص باشد. اطلاعات مهم پروژه نباید فقط در مکالمات شفاهی باقی بماند.",
    ],
    checklist: [
      "مسئول هر فعالیت مشخص باشد.",
      "وظایف پیمانکاران جزء واضح باشد.",
      "مسئول خرید و تأمین مصالح مشخص باشد.",
      "مسئول کنترل کیفیت مشخص باشد.",
      "مسیر گزارش‌دهی مشخص باشد.",
      "تصمیم‌های مهم پروژه ثبت شوند.",
      "تغییرات و دستورکارهای مهم مستندسازی شوند.",
    ],
    example:
      "فرض کنید بتن‌ریزی فردا انجام می‌شود. باید مشخص باشد چه کسی سفارش بتن را پیگیری می‌کند، چه کسی قالب و آرماتور را کنترل می‌کند، چه کسی تجهیزات ویبره را آماده می‌کند و چه کسی اطلاعات بتن‌ریزی را ثبت می‌کند.",
  },

  {
    number: "۰۵",
    icon: HardHat,
    title: "هر روز پروژه را با واقعیت مقایسه کنید",
    intro:
      "برنامه زمانی و بودجه زمانی مفید هستند که دائماً با وضعیت واقعی پروژه مقایسه شوند. بدون این حلقه کنترل، مدیر پروژه ممکن است زمانی متوجه مشکل شود که اصلاح آن هزینه زیادی داشته باشد.",
    paragraphs: [
      "کنترل پروژه به معنی تهیه گزارش‌های طولانی نیست. در بسیاری از پروژه‌ها یک گزارش کوتاه و منظم می‌تواند اطلاعات مهمی درباره وضعیت پروژه ارائه کند.",
      "در گزارش روزانه یا هفتگی بهتر است حداقل مشخص باشد چه فعالیت‌هایی انجام شده‌اند، چه فعالیت‌هایی عقب هستند، چه منابعی مصرف شده‌اند و چه موانعی جلوی ادامه کار را گرفته‌اند.",
      "مهم‌تر از ثبت مشکل، اقدام بعدی است. اگر فعالیتی عقب افتاده، باید مشخص شود برای جبران آن چه کاری قرار است انجام شود.",
    ],
    checklist: [
      "پیشرفت واقعی پروژه ثبت شود.",
      "فعالیت‌های انجام‌شده مشخص شوند.",
      "فعالیت‌های عقب‌افتاده مشخص شوند.",
      "موانع اجرایی ثبت شوند.",
      "مصالح و منابع موردنیاز آینده بررسی شوند.",
      "هزینه‌های انجام‌شده ثبت شوند.",
      "اقدام اصلاحی برای مشکلات تعیین شود.",
      "گزارش‌ها در بازه‌های منظم بررسی شوند.",
    ],
    example:
      "اگر اجرای یک طبقه طبق برنامه باید در ۲۰ روز تمام شود اما بعد از ۱۰ روز فقط ۳۰٪ پیشرفت داشته، این عدد باید باعث بررسی شود. شاید نیاز به افزایش نیروی اجرایی باشد، شاید مصالح دیر رسیده باشند یا شاید برنامه اولیه واقع‌بینانه نبوده است.",
  },
];

const dailyChecklist = [
  "امروز چه فعالیت‌هایی انجام شد؟",
  "پیشرفت واقعی هر فعالیت چقدر بود؟",
  "کدام فعالیت‌ها طبق برنامه پیش نرفتند؟",
  "دلیل عقب‌افتادگی چه بود؟",
  "چه مصالحی مصرف شد؟",
  "چه مصالحی برای روزهای آینده نیاز است؟",
  "چه نیروهایی در پروژه حضور داشتند؟",
  "آیا مانعی برای ادامه فعالیت‌ها وجود دارد؟",
  "آیا نقشه یا دستور جدیدی دریافت شده است؟",
  "برای رفع مشکلات امروز چه اقدامی باید انجام شود؟",
];

const commonMistakes = [
  "برنامه‌ریزی بدون بررسی ظرفیت واقعی نیروها و منابع",
  "ثبت نکردن تغییرات نقشه و تصمیم‌های مهم",
  "بی‌توجهی به خرید و تأمین به‌موقع مصالح",
  "کنترل نکردن هزینه‌ها تا پایان پروژه",
  "نداشتن مسئول مشخص برای هر فعالیت",
  "تمرکز فقط روی درصد پیشرفت و بی‌توجهی به علت عقب‌افتادگی",
  "تهیه گزارش‌های زیاد بدون اینکه از اطلاعات آن‌ها برای تصمیم‌گیری استفاده شود",
  "به‌روزرسانی نکردن برنامه بعد از تغییرات مهم پروژه",
];

export default function ProjectManagementArticle() {
  return (
    <main className="min-h-screen bg-[#faf8f6]">
      {/* HERO */}
      <section className="bg-[#090a0b] text-white">
        <div className="container mx-auto px-4">
          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 pt-6 text-xs text-white/45">
            <Link
              href="/"
              className="transition hover:text-white"
            >
              خانه
            </Link>

            <ArrowRight size={13} />

            <Link
              href="/blog"
              className="transition hover:text-white"
            >
              مقالات
            </Link>

            <ArrowRight size={13} />

            <span className="text-white/70">
              مدیریت پروژه
            </span>
          </div>

          {/* HERO CONTENT */}
          <div className="mx-auto max-w-4xl py-14 text-center md:py-18">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#8f211d]/20 px-4 py-2 text-xs font-bold text-[#e88a84]">
              <ClipboardList size={14} />
              مدیریت پروژه
            </span>

            <h1 className="mt-6 text-3xl font-black leading-[1.5] md:text-5xl">
              ۵ نکته برای مدیریت بهتر پروژه ساختمانی
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              چطور زمان، هزینه، منابع و فعالیت‌های یک پروژه ساختمانی
              را بهتر کنترل کنیم و قبل از بزرگ شدن مشکلات، آن‌ها را
              شناسایی کنیم؟
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
                src="/images/beautiful-cafe.avif"
                alt="مدیریت پروژه ساختمانی"
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
              مدیریت پروژه ساختمانی یعنی چه؟
            </h2>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              مدیریت پروژه ساختمانی یعنی بتوانیم منابع، زمان، هزینه،
              نیروی انسانی و فعالیت‌های پروژه را طوری هماهنگ کنیم که
              پروژه مطابق اهداف تعیین‌شده پیش برود.
            </p>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              در یک پروژه واقعی، همه چیز طبق برنامه اولیه پیش نمی‌رود.
              ممکن است یک مصالح دیر برسد، یک پیمانکار عقب بیفتد،
              نقشه تغییر کند یا یک فعالیت بیشتر از زمان پیش‌بینی‌شده
              طول بکشد. مسئله اصلی این نیست که هیچ مشکلی اتفاق نیفتد؛
              مسئله این است که مشکل سریع شناسایی شود و برای آن تصمیم
              گرفته شود.
            </p>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              به همین دلیل مدیریت پروژه بیشتر از اینکه مجموعه‌ای از
              فرم‌ها و گزارش‌ها باشد، یک فرآیند دائمی برای
              <strong> برنامه‌ریزی، اجرا، اندازه‌گیری و اصلاح</strong>
              است.
            </p>
          </section>

          {/* IMPORTANT NOTE */}
          <section className="mt-8 flex gap-4 rounded-2xl border border-[#ead8d5] bg-[#fff8f7] p-6">
            <AlertTriangle
              size={22}
              className="mt-1 shrink-0 text-[#8f211d]"
            />

            <div>
              <h2 className="font-black">
                یک نکته مهم
              </h2>

              <p className="mt-2 text-sm leading-8 text-neutral-600">
                هدف مدیریت پروژه این نیست که برای هر موضوع یک فرم و
                گزارش جدید درست کنیم. اگر یک گزارش یا فرآیند به تصمیم
                بهتر کمک نمی‌کند، احتمالاً باید ساده‌تر شود یا اصلاً
                حذف شود.
              </p>
            </div>
          </section>

          {/* MAIN SECTIONS */}
          <div className="mt-10 space-y-7">
            {mainSections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.number}
                  className="rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-8"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5e9e7]">
                      <Icon
                        size={22}
                        className="text-[#8f211d]"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-black text-[#8f211d]">
                        نکته {section.number}
                      </span>

                      <h2 className="mt-2 text-xl font-black leading-9 md:text-2xl">
                        {section.title}
                      </h2>

                      <p className="mt-5 text-base leading-9 text-neutral-700">
                        {section.intro}
                      </p>

                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="mt-4 text-sm leading-8 text-neutral-600 md:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}

                      {/* CHECKLIST */}
                      <div className="mt-7">
                        <h3 className="mb-4 text-sm font-black text-[#8f211d]">
                          چک‌لیست اجرایی
                        </h3>

                        <div className="grid gap-3 md:grid-cols-2">
                          {section.checklist.map((item) => (
                            <div
                              key={item}
                              className="flex gap-3 rounded-xl border border-[#eeeae7] bg-[#faf8f6] p-3.5"
                            >
                              <CheckCircle2
                                size={18}
                                className="mt-1 shrink-0 text-[#8f211d]"
                              />

                              <span className="text-sm leading-7 text-neutral-700">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* EXAMPLE */}
                      <div className="mt-7 rounded-xl bg-[#171717] p-5 text-white">
                        <p className="text-xs font-bold text-[#e88a84]">
                          مثال در پروژه واقعی
                        </p>

                        <p className="mt-2 text-sm leading-8 text-white/70">
                          {section.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          {/* DAILY CHECKLIST */}
          <section className="mt-10 rounded-[24px] bg-[#0d0f10] p-6 text-white md:p-9">
            <div className="flex items-start gap-4">
              <ClipboardList
                size={27}
                className="mt-1 shrink-0 text-[#e88a84]"
              />

              <div>
                <h2 className="text-2xl font-black">
                  چک‌لیست روزانه مدیر پروژه
                </h2>

                <p className="mt-3 text-sm leading-8 text-white/55">
                  لازم نیست گزارش روزانه پیچیده باشد. همین چند سؤال
                  می‌تواند تصویر مناسبی از وضعیت پروژه ایجاد کند.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {dailyChecklist.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-bold">
                    {index + 1}
                  </span>

                  <span className="text-sm leading-7 text-white/75">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* COMMON MISTAKES */}
          <section className="mt-10 rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-8">
            <div className="mb-7">
              <div className="mb-4 h-1 w-10 bg-[#8f211d]" />

              <h2 className="text-2xl font-black">
                اشتباهات رایج در مدیریت پروژه ساختمانی
              </h2>

              <p className="mt-3 text-sm leading-8 text-neutral-500">
                بعضی مشکلات مدیریت پروژه از نبود ابزار ناشی نمی‌شوند؛
                از این ناشی می‌شوند که فرآیند مدیریت بیش از حد پیچیده
                یا ناقص طراحی شده است.
              </p>
            </div>

            <div className="space-y-4">
              {commonMistakes.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border-b border-[#eeeae7] pb-4 last:border-0 last:pb-0"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8f211d]" />

                  <p className="text-sm leading-8 text-neutral-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SIMPLE SYSTEM */}
          <section className="mt-10 rounded-2xl border border-[#e9e5e2] bg-white p-6 md:p-8">
            <h2 className="text-2xl font-black">
              یک سیستم ساده برای کنترل پروژه
            </h2>

            <p className="mt-5 text-base leading-9 text-neutral-700">
              اگر بخواهیم تمام مطالب این مقاله را به یک فرآیند ساده
              تبدیل کنیم، می‌توانیم مدیریت پروژه را در یک چرخه تکرارشونده
              قرار دهیم:
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-4">
              {[
                ["۱", "برنامه‌ریزی", "چه کاری باید انجام شود؟"],
                ["۲", "اجرا", "چه کاری در حال انجام است؟"],
                ["۳", "اندازه‌گیری", "چقدر از برنامه جلو رفته‌ایم؟"],
                ["۴", "اصلاح", "برای عقب‌افتادگی چه کاری انجام دهیم؟"],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-xl border border-[#eeeae7] bg-[#faf8f6] p-5"
                >
                  <span className="text-xs font-black text-[#8f211d]">
                    {number}
                  </span>

                  <h3 className="mt-3 font-black">
                    {title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-neutral-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-7 text-sm leading-8 text-neutral-600">
              این چرخه باید مرتب تکرار شود. اگر پروژه از برنامه عقب
              افتاد، فقط تاریخ پایان را تغییر ندهید؛ علت را پیدا کنید،
              اقدام اصلاحی تعریف کنید و دوباره وضعیت واقعی را اندازه‌گیری
              کنید.
            </p>
          </section>

          {/* CTA */}
          <section className="mt-10 overflow-hidden rounded-[24px] bg-[#8f211d] p-7 text-white md:p-10">
            <span className="text-xs font-bold text-white/60">
              آموزش مدیریت پروژه
            </span>

            <h2 className="mt-3 text-2xl font-black leading-9 md:text-3xl">
              مدیریت پروژه را در پروژه واقعی یاد بگیر
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-white/75">
              اگر می‌خواهی با فرآیند برنامه‌ریزی، کنترل زمان، مدیریت
              منابع و پیگیری پروژه‌های ساختمانی بیشتر آشنا شوی، دوره‌های
              آموزشی خشت آکادمی را ببین.
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