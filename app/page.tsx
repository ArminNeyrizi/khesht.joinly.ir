import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  HardHat,
  PenTool,
  Ruler,
  ShieldCheck,
  Users,
  Clock3,
  Award,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/course-card";

const courses = [
  {
    title: "بوتکمپ اجرای ساختمان",
    category: "اجرا",
    img: "/images/execution.webp",
    price: "۳۳,۶۰۰,۰۰۰",
    originalPrice: "۵۷,۶۰۰,۰۰۰",
    duration: "۹۶ ساعت",
    sessions: "۲۴ جلسه",
    slug: "execution",
  },
  {
    title: "نظارت و کنترل پروژه",
    category: "نظارت",
    img: "/images/supervision.webp",
    price: "۲۵,۲۰۰,۰۰۰",
    originalPrice: "۴۳,۲۰۰,۰۰۰",
    duration: "۷۲ ساعت",
    sessions: "۱۸ جلسه",
    slug: "supervision",
  },
  {
    title: "طراحی معماری و سازه",
    category: "طراحی",
    img: "/images/design.webp",
    price: "۲۵,۲۰۰,۰۰۰",
    originalPrice: "۴۳,۲۰۰,۰۰۰",
    duration: "۷۲ ساعت",
    sessions: "۱۸ جلسه",
    slug: "design",
  },
  {
    title: "نقشه‌کشی حرفه‌ای AutoCAD",
    category: "نقشه‌کشی",
    img: "/images/autocad.webp",
    price: "۱۶,۸۰۰,۰۰۰",
    originalPrice: "۲۸,۸۰۰,۰۰۰",
    duration: "۴۸ ساعت",
    sessions: "۱۲ جلسه",
    slug: "autocad",
  },
  {
    title: "ETABS کاربردی",
    category: "طراحی",
    img: "/images/etabs.webp",
    price: "۲۵,۲۰۰,۰۰۰",
    originalPrice: "۴۳,۲۰۰,۰۰۰",
    duration: "۷۲ ساعت",
    sessions: "۱۸ جلسه",
    slug: "etabs",
  },
  {
    title: "آموزش نرم‌افزار Revit General",
    category: "BIM",
    img: "/images/RevitGeneral.webp",
    price: "۹,۸۰۰,۰۰۰",
    originalPrice: "۱۶,۸۰۰,۰۰۰",
    duration: "۲۸ ساعت",
    sessions: "۷ جلسه",
    slug: "revit-general",
  },
  {
    title: "آموزش نرم‌افزار Revit Structure",
    category: "BIM",
    img: "/images/RevitStructure.webp",
    price: "۱۴,۰۰۰,۰۰۰",
    originalPrice: "۲۴,۰۰۰,۰۰۰",
    duration: "۴۰ ساعت",
    sessions: "۱۰ جلسه",
    slug: "revit-structure",
  },
  {
    title: "آشنایی با نرم‌افزار Robot Structure",
    category: "BIM",
    img: "/images/RobotStructure.webp",
    price: "۱۴,۰۰۰,۰۰۰",
    originalPrice: "۲۴,۰۰۰,۰۰۰",
    duration: "۴۰ ساعت",
    sessions: "۱۰ جلسه",
    slug: "robot-structure",
  },
  {
    title: "دوره آموزش Dynamo",
    category: "BIM",
    img: "/images/Dynamo.webp",
    price: "۷,۰۰۰,۰۰۰",
    originalPrice: "۱۲,۰۰۰,۰۰۰",
    duration: "۲۰ ساعت",
    sessions: "۵ جلسه",
    slug: "dynamo",
  },
  {
    title: "آموزش Revit MEP",
    category: "BIM",
    img: "/images/RevitMEP.webp",
    price: "۷,۰۰۰,۰۰۰",
    originalPrice: "۱۲,۰۰۰,۰۰۰",
    duration: "۲۰ ساعت",
    sessions: "۵ جلسه",
    slug: "revit-mep",
  },
  {
    title: "دوره آموزش Revit Architecture",
    category: "BIM",
    img: "/images/RevitArchitecture.webp",
    price: "۱۲,۶۰۰,۰۰۰",
    originalPrice: "۲۱,۶۰۰,۰۰۰",
    duration: "۳۶ ساعت",
    sessions: "۹ جلسه",
    slug: "revit-architecture",
  },
  {
    title: "آموزش کاربردی Navisworks",
    category: "BIM",
    img: "/images/NavisWork.webp",
    price: "۷,۰۰۰,۰۰۰",
    originalPrice: "۱۲,۰۰۰,۰۰۰",
    duration: "۲۰ ساعت",
    sessions: "۵ جلسه",
    slug: "navisworks",
  },
];

const featuredCourses = [
  courses[0],
  courses[1],
  courses[5],
  courses[6],
];

const bimCourses = courses.filter((course) => course.category === "BIM");

const categories = [
  {
    icon: HardHat,
    title: "اجرا",
    description: "اجرای ساختمان، کارگاه و کنترل عملیات",
    href: "/courses",
  },
  {
    icon: ShieldCheck,
    title: "نظارت",
    description: "کنترل کیفیت، نقشه‌ها و عملیات اجرایی",
    href: "/courses",
  },
  {
    icon: PenTool,
    title: "طراحی",
    description: "طراحی معماری و سازه با ابزارهای تخصصی",
    href: "/courses",
  },
  {
    icon: Ruler,
    title: "BIM",
    description: "Revit، Navisworks، Dynamo و ابزارهای BIM",
    href: "/courses",
  },
];

const blogPosts = [
  {
    title: "۱۰ اشتباه رایج در نظارت ساختمان",
    category: "نظارت",
    image: "/images/supervisors.avif",
    slug: "10-common-supervision-mistakes",
  },
  {
    title: "چک‌لیست اجرای کامل اسکلت بتنی",
    category: "اجرا",
    image: "/images/concrete.avif",
    slug: "concrete-frame-execution-checklist",
  },
  {
    title: "چطور وارد صنعت ساختمان شویم؟",
    category: "مسیر شغلی",
    image: "/images/modern-buildings.avif",
    slug: "how-to-enter-construction-industry",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f6]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#090a0b] text-white">

        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:42px_42px]" />
        </div>

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#8f211d]/20 blur-[100px]" />

        <div className="container relative mx-auto px-4">

          <div className="grid min-h-[680px] items-center gap-12 py-14 lg:grid-cols-[1.05fr_.95fr]">

            {/* TEXT */}

            <div className="order-1">

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white/70">
                <span className="h-2 w-2 rounded-full bg-[#8f211d]" />
                آکادمی تخصصی صنعت ساختمان
              </div>

              <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.35] tracking-tight md:text-7xl">
                مهارت های عملی
                <br />
                <span className="text-[#d85c55]">
                  برای بازار کار
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-9 text-white/55 md:text-lg">
                اجرا، نظارت، طراحی و BIM را با تمرکز روی مهارت‌هایی
                یاد بگیر که در پروژه‌های واقعی صنعت ساختمان استفاده
                می‌شوند.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <Button
                  asChild
                  size="lg"
                  className="bg-[#8f211d] hover:bg-[#751914]"
                >
                  <Link href="/courses">
                    مشاهده دوره‌ها
                    <ArrowLeft size={18} />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/contact">
                    مشاوره رایگان
                  </Link>
                </Button>

              </div>

              {/* STATS */}

              <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 border-t border-white/10 pt-7 sm:grid-cols-4">

                <HeroStat
                  icon={<Users />}
                  value="+۳۵۰۰"
                  label="هنرجو"
                />

                <HeroStat
                  icon={<Clock3 />}
                  value="+۵۰۰"
                  label="ساعت آموزش"
                />

                <HeroStat
                  icon={<Award />}
                  value="+۱۰"
                  label="مدرس"
                />

                <HeroStat
                  icon={<BookOpen />}
                  value="+۱۰"
                  label="دوره"
                />

              </div>

            </div>

            {/* IMAGE */}

            <div className="order-2">

              <div className="relative mx-auto max-w-xl">

                <div className="absolute -inset-5 rounded-[40px] bg-[#8f211d]/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-neutral-900 shadow-[0_30px_100px_rgba(0,0,0,.4)]">

                  <img
                    src="/images/hero-building.webp"
                    alt="آموزش صنعت ساختمان در خشت آکادمی"
                    className="h-[430px] w-full object-cover opacity-80 md:h-[540px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  {/* Floating card */}

                  <div className="absolute bottom-5 right-5 left-5">

                    <div className="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl">

                      <div className="flex items-center justify-between">

                        <div>
                          <p className="text-xs text-white/40">
                            مسیر یادگیری
                          </p>

                          <p className="mt-1 font-black">
                            از آموزش تا بازار کار
                          </p>
                        </div>

                        <Link
                          href="/courses"
                          className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#8f211d] transition hover:bg-[#751914]"
                        >
                          <ArrowLeft size={20} />

                        </Link>

                      </div>

                      <div className="mt-5 grid grid-cols-4 gap-2">

                        {["اجرا", "نظارت", "طراحی", "BIM"].map(
                          (item) => (
                            <div
                              key={item}
                              className="rounded-lg bg-white/5 py-2 text-center text-[11px] text-white/60"
                            >
                              {item}
                            </div>
                          )
                        )}

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          CATEGORIES
      ========================================================= */}

      <section className="container mx-auto px-4 py-16">

        <div className="mb-8">

          <span className="text-sm font-bold text-[#8f211d]">
            مسیرهای یادگیری
          </span>

          <h2 className="mt-2 text-3xl font-black">
            از کجا می‌خوای شروع کنی؟
          </h2>

        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => {

            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className="group rounded-2xl border border-[#e6e1de] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d4b2af] hover:shadow-[0_20px_50px_rgba(0,0,0,.07)]"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5e9e7] text-[#8f211d]">
                    <Icon size={21} />
                  </div>

                  <ArrowLeft
                    size={17}
                    className="text-neutral-300 transition group-hover:-translate-x-1 group-hover:text-[#8f211d]"
                  />

                </div>

                <h3 className="mt-6 font-black">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-neutral-500">
                  {category.description}
                </p>

              </Link>
            );

          })}

        </div>

      </section>

      {/* =========================================================
          FEATURED COURSES
      ========================================================= */}

      <section className="container mx-auto px-4 py-12">

        <div className="mb-8 flex items-end justify-between">

          <div>
            <span className="text-sm font-bold text-[#8f211d]">
              دوره‌های منتخب
            </span>

            <h2 className="mt-2 text-3xl font-black">
              از اینجا شروع کن
            </h2>
          </div>

          <Link
            href="/courses"
            className="hidden items-center gap-2 text-sm font-bold text-[#8f211d] sm:flex"
          >
            مشاهده همه دوره‌ها
            <ArrowLeft size={16} />
          </Link>

        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {featuredCourses.map((course) => (
            <CourseCard
              key={course.slug}
              title={course.title}
              category={course.category}
              img={course.img}
              price={course.price}
              originalPrice={course.originalPrice}
              duration={course.duration}
              sessions={course.sessions}
              slug={course.slug}
            />
          ))}

        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/courses"
            className="flex items-center justify-center gap-2 rounded-xl border bg-white px-5 py-4 text-sm font-bold text-[#8f211d]"
          >
            مشاهده همه دوره‌ها
            <ArrowLeft size={16} />
          </Link>
        </div>

      </section>

      {/* =========================================================
          BIM
      ========================================================= */}

      <section className="container mx-auto px-4 py-16">

        <div className="relative overflow-hidden rounded-[32px] bg-[#111213] text-white">

          <div className="absolute inset-0 opacity-[0.05]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] bg-[size:30px_30px]" />
          </div>

          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#8f211d]/20 blur-[100px]" />

          <div className="relative grid gap-10 p-7 md:p-10 lg:grid-cols-[.8fr_1.2fr] lg:p-12">

            <div>

              <span className="inline-flex rounded-full bg-[#8f211d]/20 px-3 py-1.5 text-xs font-bold text-[#e88a84]">
                BIM
              </span>

              <h2 className="mt-5 text-3xl font-black leading-[1.5] md:text-4xl">
                مسیر یادگیری
                <br />
                <span className="text-[#d85c55]">
                  BIM و Revit
                </span>
              </h2>

              <p className="mt-5 text-sm leading-8 text-white/50">
                از Revit General و Structure تا Dynamo،
                Robot، MEP و Navisworks؛ ابزارهای مورد نیاز
                برای ورود جدی‌تر به فرآیند BIM.
              </p>

              <Link
                href="/courses"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#8f211d] px-5 py-3.5 text-sm font-bold transition hover:bg-[#751914]"
              >
                مشاهده دوره‌های BIM
                <ArrowLeft size={17} />
              </Link>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {bimCourses.slice(0, 4).map((course) => (

                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
                >

                  <img
                    src={course.img}
                    alt={course.title}
                    className="h-20 w-20 rounded-xl object-cover"
                  />

                  <div className="min-w-0">

                    <p className="text-xs text-white/40">
                      {course.duration}
                    </p>

                    <h3 className="mt-1 truncate text-sm font-bold">
                      {course.title}
                    </h3>

                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#d85c55]">
                      مشاهده
                      <ArrowLeft
                        size={13}
                        className="transition group-hover:-translate-x-1"
                      />
                    </span>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          WHY KHESHT
      ========================================================= */}

      <section className="container mx-auto px-4 py-12">

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          <div>

            <span className="text-sm font-bold text-[#8f211d]">
              چرا خشت آکادمی؟
            </span>

            <h2 className="mt-3 text-3xl font-black leading-[1.5] md:text-4xl">
              فقط نرم‌افزار یاد نمی‌گیری.
              <br />
              <span className="text-[#8f211d]">
                مهارت واقعی بدست میاری.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-neutral-500">
              هدف دوره‌ها این نیست که فقط با چند ابزار و دستور
              نرم‌افزاری آشنا شوی. تمرکز روی فرآیندهایی است که
              در پروژه‌های واقعی ساختمان با آن‌ها مواجه می‌شوی.
            </p>

          </div>

          <div className="grid gap-3 sm:grid-cols-2">

            {[
              "آموزش پروژه‌محور",
              "تمرکز روی مهارت کاربردی",
              "محتوای متناسب با صنعت ساختمان",
              "مسیرهای آموزشی تخصصی",
              "یادگیری نرم‌افزارهای تخصصی",
              "پشتیبانی و مشاوره آموزشی",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-[#e7e2df] bg-white p-4"
              >

                <CheckCircle2
                  size={18}
                  className="shrink-0 text-[#8f211d]"
                />

                <span className="text-sm font-medium">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          BLOG
      ========================================================= */}

      <section className="container mx-auto px-4 py-16">

        <div className="mb-8 flex items-end justify-between">

          <div>

            <span className="text-sm font-bold text-[#8f211d]">
              دانش صنعت ساختمان
            </span>

            <h2 className="mt-2 text-3xl font-black">
              وبلاگ خشت آکادمی
            </h2>

          </div>

          <Link
            href="/blog"
            className="hidden items-center gap-2 text-sm font-bold text-[#8f211d] sm:flex"
          >
            مشاهده همه مقالات
            <ArrowLeft size={16} />
          </Link>

        </div>

        <div className="grid gap-5 md:grid-cols-3">

          {blogPosts.map((post) => (

            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-[#e7e2df] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,.07)]"
            >

              <div className="overflow-hidden">

                <img
                  src={post.image}
                  alt={post.title}
                  className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-5">

                <span className="text-xs font-bold text-[#8f211d]">
                  {post.category}
                </span>

                <h3 className="mt-3 text-lg font-black leading-8">
                  {post.title}
                </h3>

                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#8f211d]">
                  مطالعه مقاله
                  <ArrowLeft
                    size={16}
                    className="transition group-hover:-translate-x-1"
                  />
                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="container mx-auto px-4 pb-16">

        <div className="relative overflow-hidden rounded-[32px] bg-[#8f211d] p-8 text-white md:p-12">

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div className="max-w-2xl">

              <p className="text-xs font-bold text-white/60">
                مسیر یادگیری خودت را انتخاب کن
              </p>

              <h2 className="mt-3 text-3xl font-black leading-[1.5] md:text-4xl">
                آماده‌ای یاد بگیری؟
              </h2>

              <p className="mt-4 text-sm leading-8 text-white/70">
                دوره‌ها را ببین و بر اساس مسیر شغلی و مهارتی
                مورد نظرت انتخاب کن.
              </p>

            </div>

            <Link
              href="/courses"
              className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-black !text-[#8f211d] transition hover:bg-neutral-100"
            >
              مشاهده دوره‌ها
              <ArrowLeft size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

function HeroStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">

      <div className="text-[#d85c55]">
        {icon}
      </div>

      <div>
        <b className="block text-sm md:text-base">
          {value}
        </b>

        <span className="text-[10px] text-white/35 md:text-xs">
          {label}
        </span>
      </div>

    </div>
  );
}