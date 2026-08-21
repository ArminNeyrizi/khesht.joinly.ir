import { CourseCard } from "@/components/course-card";
const courses = [
  [
    "بوتکمپ اجرای ساختمان",
    "اجرا",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80",
    "۳,۹۰۰,۰۰۰",
  ],
  [
    "نظارت و کنترل پروژه",
    "نظارت",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    "۲,۹۰۰,۰۰۰",
  ],
  [
    "طراحی معماری و سازه",
    "طراحی",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    "۳,۵۰۰,۰۰۰",
  ],
  [
    "نقشه‌کشی حرفه‌ای AutoCAD",
    "نقشه‌کشی",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80",
    "۲,۲۰۰,۰۰۰",
  ],
  [
    "Revit و BIM",
    "نقشه‌کشی",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    "۲,۹۰۰,۰۰۰",
  ],
  [
    "ETABS کاربردی",
    "طراحی",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
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
