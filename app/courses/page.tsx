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
  [
    "نقشه‌کشی حرفه‌ای AutoCAD",
    "نقشه‌کشی",
    "/images/autocad.png",
    "۲,۲۰۰,۰۰۰",
  ],
  [
    "Revit و BIM",
    "نقشه‌کشی",
    "/images/bim.png",
    "۲,۹۰۰,۰۰۰",
  ],
  [
    "ETABS کاربردی",
    "طراحی",
    "/images/etabs.png",
    "۲,۵۰۰,۰۰۰",
  ],
];
export default function Courses() {
  return (
    <section className="container py-14">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold text-[#8f211d]">مسیر یادگیری</span>
        <h1 className="mt-3 text-4xl font-black">دوره‌های آموزشی</h1>
        <p className="mt-4 leading-8 text-neutral-500">
          دوره را بر اساس مهارتی که برای ورود یا رشد در صنعت ساختمان نیاز داری
          انتخاب کن.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
  );
}
