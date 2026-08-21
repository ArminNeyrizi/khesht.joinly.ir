import Link from "next/link";
const posts = [
  [
    "راهنمای انتخاب نرم‌افزار مناسب برای طراحی معماری",
    "طراحی",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "۱۰ اشتباه رایج در نظارت ساختمان",
    "نظارت",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "چک‌لیست اجرای کامل اسکلت بتنی",
    "اجرا",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "SAPS و ETABS؛ کدام را یاد بگیریم؟",
    "طراحی",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "۵ نکته برای مدیریت بهتر پروژه",
    "مدیریت پروژه",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "چطور وارد صنعت ساختمان شویم؟",
    "مسیر شغلی",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
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
