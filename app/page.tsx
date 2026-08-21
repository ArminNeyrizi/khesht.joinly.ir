import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  HardHat,
  PenTool,
  Ruler,
  ShieldCheck,
  Users,
  Clock3,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/course-card";
const courses = [
  [
    "بوتکمپ اجرای ساختمان",
    "اجرا",
    "/images/execution.png",
    "۳,۹۰۰,۰۰۰",
  ],
  [
    "نظارت و کنترل پروژه",
    "نظارت",
    "/images/supervision.png",
    "۲,۹۰۰,۰۰۰",
  ],
  [
    "طراحی معماری و سازه",
    "طراحی",
    "/images/design.png",
    "۳,۵۰۰,۰۰۰",
  ],
];
export default function Home() {
  return (
    <div>
      <section className="container grid gap-10 py-12 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[28px] bg-neutral-900 shadow-soft">
            <img
              src="/images/hero-building.png"
              alt="ساختمان"
              className="h-[520px] w-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-6 right-6 left-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#8f211d]/95 p-5 text-white">
                <b>آموزش پروژه‌محور</b>
                <p className="mt-2 text-xs text-white/70">
                  یادگیری با سناریوهای واقعی صنعت
                </p>
              </div>
              <div className="rounded-2xl bg-white/95 p-5">
                <b>استاد متخصص</b>
                <p className="mt-2 text-xs text-neutral-500">
                  تجربه واقعی، نه فقط آموزش تئوری
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="inline-flex rounded-full border border-[#d9b4b0] px-4 py-2 text-sm font-bold text-[#8f211d]">
            آکادمی تخصصی صنعت ساختمان
          </span>
          <h1 className="mt-6 text-balance text-5xl font-black leading-[1.2] md:text-7xl">
            از یادگیری
            <br />
            <span className="text-[#8f211d]">تا کار واقعی</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-9 text-neutral-500">
            مهارت‌هایی یاد بگیر که در پروژه واقعی ساختمان به کار می‌آیند؛ از
            اجرا و نظارت تا طراحی و نقشه‌کشی.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/courses">
                مشاهده دوره‌ها <ArrowLeft size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">مشاوره رایگان</Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-5 border-t pt-8 sm:grid-cols-4">
            <Stat icon={<Users />} n="+۲۰۰۰" t="هنرجوی موفق" />
            <Stat icon={<Clock3 />} n="+۵۰۰۰" t="ساعت آموزش" />
            <Stat icon={<Award />} n="+۳۰" t="مدرس متخصص" />
            <Stat icon={<BookOpen />} n="+۵۰" t="دوره آموزشی" />
          </div>
        </div>
      </section>
      <section className="container py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-sm font-bold text-[#8f211d]">
              دوره‌های آموزشی
            </span>
            <h2 className="mt-2 text-3xl font-black">
              چه مهارتی می‌خواهی یاد بگیری؟
            </h2>
          </div>
          <Link href="/courses" className="text-sm font-bold text-[#8f211d]">
            مشاهده همه ←
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard
              key={c[0]}
              title={c[0]}
              category={c[1]}
              img={c[2]}
              price={c[3]}
            />
          ))}
        </div>
      </section>
      <section className="container py-10">
        <div className="grid-bg overflow-hidden rounded-[28px] border bg-[#faf8f6] p-8 md:p-12">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-[#8f211d]">
              بوتکمپ‌های تخصصی
            </span>
            <h2 className="mt-3 text-3xl font-black">
              برای ورود سریع‌تر به بازار کار آماده شو
            </h2>
            <p className="mt-4 leading-8 text-neutral-500">
              مسیر فشرده، پروژه‌محور و همراه با منتور؛ برای کسی که می‌خواهد
              سریع‌تر از آموزش به تجربه واقعی برسد.
            </p>
            <Button asChild className="mt-6">
              <Link href="/courses">مشاهده بوتکمپ‌ها</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="container py-16">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            [HardHat, "اجرای ساختمان", "کارگاه و مدیریت اجرا"],
            [ShieldCheck, "نظارت", "کنترل پروژه و کیفیت"],
            [PenTool, "طراحی", "طراحی معماری و سازه"],
            [Ruler, "نقشه‌کشی", "AutoCAD، Revit و BIM"],
          ].map(([I, t, d]) => {
            const Icon = I as any;
            return (
              <div key={t as string} className="rounded-2xl border p-6">
                <Icon className="text-[#8f211d]" />
                <h3 className="mt-5 font-black">{t as string}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  {d as string}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
function Stat({ icon, n, t }: { icon: React.ReactNode; n: string; t: string }) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-2 w-fit text-[#8f211d]">{icon}</div>
      <b className="block text-xl">{n}</b>
      <span className="text-xs text-neutral-500">{t}</span>
    </div>
  );
}
