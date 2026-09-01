import { CourseFilter } from "@/components/course-filter";

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

  // BIM
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

export default function Courses() {
  return (
    <section className="container py-14">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold text-[#8f211d]">
          مسیر یادگیری
        </span>

        <h1 className="mt-3 text-4xl font-black">
          دوره‌های آموزشی
        </h1>

        <p className="mt-4 leading-8 text-neutral-500">
          دوره را بر اساس مهارتی که برای ورود یا رشد در صنعت ساختمان نیاز داری
          انتخاب کن.
        </p>
      </div>

      <CourseFilter courses={courses} />

    </section>
  );
}