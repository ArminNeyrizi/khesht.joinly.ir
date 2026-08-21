import Link from "next/link";
const posts = [
  [
    "راهنمای انتخاب نرم‌افزار مناسب برای طراحی معماری",
    "طراحی",
    "/images/man-design.avif",
  ],
  [
    "۱۰ اشتباه رایج در نظارت ساختمان",
    "نظارت",
    "/images/supervisors.avif",
  ],
  [
    "چک‌لیست اجرای کامل اسکلت بتنی",
    "اجرا",
    "/images/concrete.avif",
  ],
  [
    "SAPS و ETABS؛ کدام را یاد بگیریم؟",
    "طراحی",
    "/images/designer-girl.avif",
  ],
  [
    "۵ نکته برای مدیریت بهتر پروژه",
    "مدیریت پروژه",
    "/images/beautiful-cafe.avif",
  ],
  [
    "چطور وارد صنعت ساختمان شویم؟",
    "مسیر شغلی",
    "/images/modern-buildings.avif",
  ],
];
export default function Blog() {
  return (
    <section className="container py-14">
      <div className="text-center">
        <span className="text-sm font-bold text-[#8f211d]">
          دانش صنعت ساختمان
        </span>
        <h1 className="mt-3 text-4xl font-black">مقالات آموزشی</h1>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p[0]} className="overflow-hidden rounded-2xl border">
            <img src={p[2]} alt="" className="h-52 w-full object-cover" />
            <div className="p-5">
              <span className="text-xs font-bold text-[#8f211d]">{p[1]}</span>
              <h2 className="mt-3 text-lg font-black leading-8">{p[0]}</h2>
              <p className="mt-3 text-sm text-neutral-500">
                یک مطلب کاربردی برای یادگیری بهتر و تصمیم‌گیری دقیق‌تر در پروژه.
              </p>
              <Link
                href="#"
                className="mt-5 inline-block text-sm font-bold text-[#8f211d]"
              >
                ادامه مطلب ←
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
