import { CourseCard } from "@/components/course-card";

const courses = [
  {
    title: "بوتکمپ اجرای ساختمان",
    category: "اجرا",
    img: "/images/execution.webp",
    price: "۳,۹۰۰,۰۰۰",
    slug: "execution",
  },
  {
    title: "نظارت و کنترل پروژه",
    category: "نظارت",
    img: "/images/supervision.webp",
    price: "۲,۹۰۰,۰۰۰",
    slug: "supervision",
  },
  {
    title: "طراحی معماری و سازه",
    category: "طراحی",
    img: "/images/design.webp",
    price: "۳,۵۰۰,۰۰۰",
    slug: "design",
  },
  {
    title: "نقشه‌کشی حرفه‌ای AutoCAD",
    category: "نقشه‌کشی",
    img: "/images/autocad.webp",
    price: "۲,۲۰۰,۰۰۰",
    slug: "autocad",
  },
  {
    title: "Revit و BIM",
    category: "نقشه‌کشی",
    img: "/images/bim.webp",
    price: "۲,۹۰۰,۰۰۰",
    slug: "revit-bim",
  },
  {
    title: "ETABS کاربردی",
    category: "طراحی",
    img: "/images/etabs.webp",
    price: "۲,۵۰۰,۰۰۰",
    slug: "etabs",
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

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.slug}
            title={course.title}
            category={course.category}
            img={course.img}
            price={course.price}
            slug={course.slug}
          />
        ))}
      </div>
    </section>
  );
}