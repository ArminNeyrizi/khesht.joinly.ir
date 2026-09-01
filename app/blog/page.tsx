import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  BookOpen,
  HardHat,
  ShieldCheck,
  PenTool,
  BriefcaseBusiness,
} from "lucide-react";

const posts = [
  {
    title: "راهنمای انتخاب نرم‌افزار مناسب برای طراحی معماری",
    category: "طراحی",
    image: "/images/man-design.avif",
    slug: "choosing-architecture-design-software",
    time: "۸ دقیقه",
    featured: true,
  },
  {
    title: "۱۰ اشتباه رایج در نظارت ساختمان",
    category: "نظارت",
    image: "/images/supervisors.avif",
    slug: "10-common-supervision-mistakes",
    time: "۱۰ دقیقه",
  },
  {
    title: "چک‌لیست اجرای کامل اسکلت بتنی",
    category: "اجرا",
    image: "/images/concrete.avif",
    slug: "concrete-frame-execution-checklist",
    time: "۱۲ دقیقه",
  },
  {
    title: "SAPS و ETABS؛ کدام را یاد بگیریم؟",
    category: "طراحی",
    image: "/images/designer-girl.avif",
    slug: "saps-vs-etabs",
    time: "۷ دقیقه",
  },
  {
    title: "۵ نکته برای مدیریت بهتر پروژه",
    category: "مدیریت پروژه",
    image: "/images/beautiful-cafe.avif",
    slug: "5-project-management-tips",
    time: "۶ دقیقه",
  },
  {
    title: "چطور وارد صنعت ساختمان شویم؟",
    category: "مسیر شغلی",
    image: "/images/modern-buildings.avif",
    slug: "how-to-enter-construction-industry",
    time: "۱۵ دقیقه",
  },
];

const categories = [
  {
    title: "اجرا",
    icon: HardHat,
    href: "#ejra",
  },
  {
    title: "نظارت",
    icon: ShieldCheck,
    href: "#nezarat",
  },
  {
    title: "طراحی",
    icon: PenTool,
    href: "#tarahi",
  },
  {
    title: "مدیریت پروژه",
    icon: BriefcaseBusiness,
    href: "#modiriat",
  },
  {
    title: "مسیر شغلی",
    icon: BookOpen,
    href: "#career",
  },
];

export default function Blog() {
  const featuredPost = posts.find((post) => post.featured);
  const otherPosts = posts.filter((post) => !post.featured);

  return (
    <main className="min-h-screen bg-[#faf8f6]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#090a0b] !text-white">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="grid min-h-[430px] items-center gap-12 py-16 lg:grid-cols-[1fr_420px]">

            {/* TEXT */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#8f211d]/50 bg-[#8f211d]/10 px-4 py-2 text-xs font-bold text-[#e88a84]">
                <BookOpen size={14} />
                دانش صنعت ساختمان
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.4] md:text-6xl">
                با خواندن،
                <br />
                <span className="text-[#e88a84]">
                  بهتر تصمیم بگیر.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-9 !text-white/55 md:text-lg">
                مطالب کاربردی خشت آکادمی درباره اجرا، نظارت، طراحی،
                مدیریت پروژه و مسیر شغلی در صنعت ساختمان.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#articles"
                  className="flex items-center gap-2 rounded-xl bg-[#8f211d] px-5 py-3.5 text-sm font-bold transition hover:bg-[#751914]"
                >
                  مطالعه مقالات
                  <ArrowLeft size={17} />
                </a>

                <Link
                  href="/courses"
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-bold transition hover:bg-white/10"
                >
                  مشاهده دوره‌ها
                </Link>
              </div>
            </div>

            {/* HERO STAT */}
            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7">

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#8f211d]/20 blur-3xl" />

                <p className="text-xs font-bold !text-white/40">
                  موضوعات آموزشی
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    ["اجرا", "نکات کارگاهی و اجرای ساختمان"],
                    ["نظارت", "کنترل کیفیت و خطاهای اجرایی"],
                    ["طراحی", "نرم‌افزار و فرآیند طراحی"],
                    ["مسیر شغلی", "ورود به بازار کار ساختمان"],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <p className="font-black">{title}</p>
                      <p className="mt-1 text-xs leading-6 !text-white/40">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex gap-3 overflow-x-auto pb-2">

          <a
            href="#articles"
            className="flex shrink-0 items-center gap-2 rounded-xl bg-[#171717] px-4 py-3 text-xs font-bold !text-white"
          >
            همه مقالات
          </a>

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <a
                key={category.title}
                href={category.href}
                className="flex shrink-0 items-center gap-2 rounded-xl border border-[#e5e1de] bg-white px-4 py-3 text-xs font-bold text-neutral-600 transition hover:border-[#8f211d] hover:text-[#8f211d]"
              >
                <Icon size={15} />
                {category.title}
              </a>
            );
          })}
        </div>
      </section>

      {/* FEATURED */}
      {featuredPost && (
        <section className="container mx-auto px-4 py-8">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <span className="text-xs font-bold text-[#8f211d]">
                پیشنهاد مطالعه
              </span>

              <h2 className="mt-2 text-2xl font-black">
                مقاله منتخب
              </h2>
            </div>
          </div>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block overflow-hidden rounded-[28px] bg-[#171717] !text-white shadow-sm transition duration-300 hover:shadow-xl"
          >
            <div className="grid lg:grid-cols-2">

              <div className="relative overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 lg:h-[390px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <span className="absolute right-5 top-5 rounded-full bg-[#8f211d] px-3 py-1.5 text-xs font-bold">
                  {featuredPost.category}
                </span>
              </div>

              <div className="flex flex-col justify-center p-7 md:p-10">

                <div className="flex items-center gap-2 text-xs text-white/40">
                  <Clock size={14} />
                  {featuredPost.time} مطالعه
                </div>

                <h3 className="mt-5 text-2xl font-black leading-[1.6] md:text-3xl">
                  {featuredPost.title}
                </h3>

                <p className="mt-5 text-sm leading-8 text-white/50">
                  انتخاب ابزار مناسب یکی از تصمیم‌های مهم در فرآیند
                  طراحی است. در این مقاله تفاوت نرم‌افزارهای مختلف
                  و معیارهایی که قبل از انتخاب باید بررسی کنی را
                  مرور می‌کنیم.
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm font-bold text-[#e88a84]">
                  مطالعه مقاله
                  <ArrowLeft
                    size={17}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                </div>

              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ARTICLES */}
      <section
        id="articles"
        className="container mx-auto px-4 py-12 md:py-16"
      >
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-xs font-bold text-[#8f211d]">
              مطالب آموزشی
            </span>

            <h2 className="mt-2 text-2xl font-black md:text-3xl">
              جدیدترین مقالات
            </h2>
          </div>

          <span className="hidden text-xs text-neutral-400 sm:block">
            {posts.length} مقاله
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {otherPosts.map((post) => (
            <article
              key={post.slug}
              id={getCategoryId(post.category)}
              className="group overflow-hidden rounded-2xl border border-[#e9e5e2] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,.08)]"
            >
              {/* IMAGE */}
              <Link
                href={`/blog/${post.slug}`}
                className="block overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                  <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-[#8f211d] shadow-sm">
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* CONTENT */}
              <div className="p-5">

                <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                  <Clock size={13} />
                  {post.time} مطالعه
                </div>

                <h3 className="mt-3 text-lg font-black leading-8">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition hover:text-[#8f211d]"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  یک مطلب کاربردی برای یادگیری بهتر و تصمیم‌گیری
                  دقیق‌تر در پروژه.
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#8f211d]"
                >
                  ادامه مطلب
                  <ArrowLeft
                    size={16}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                </Link>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LEARNING CTA */}
      <section className="container mx-auto px-4 pb-16">
        <div className="relative overflow-hidden rounded-[28px] bg-[#8f211d] p-7 text-white md:p-10">

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">

            <div className="max-w-2xl">
              <span className="text-xs font-bold text-white/60">
                آموزش تخصصی
              </span>

              <h2 className="mt-2 text-2xl font-black leading-9 md:text-3xl">
                فقط درباره صنعت ساختمان نخوان؛ یادش بگیر.
              </h2>

              <p className="mt-3 text-sm leading-8 text-white/70">
                اگر می‌خواهی مهارت‌های اجرا، نظارت، طراحی یا BIM را
                به‌صورت عملی یاد بگیری، دوره‌های خشت آکادمی را ببین.
              </p>
            </div>

            <Link
              href="/courses"
              className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold !text-[#8f211d] transition hover:bg-neutral-100"
            >
              مشاهده دوره‌ها
              <ArrowLeft size={17} />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}

/* CATEGORY ANCHORS */

function getCategoryId(category: string) {
  switch (category) {
    case "اجرا":
      return "ejra";

    case "نظارت":
      return "nezarat";

    case "طراحی":
      return "tarahi";

    case "مدیریت پروژه":
      return "modiriat";

    case "مسیر شغلی":
      return "career";

    default:
      return undefined;
  }
}