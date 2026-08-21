export default function About() {
  return (
    <section className="container py-14">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <img
          src="/images/modern-buildings.avif"
          alt="خشت آکادمی"
          className="h-[480px] w-full rounded-[28px] object-cover"
        />
        <div>
          <span className="text-sm font-bold text-[#8f211d]">درباره ما</span>
          <h1 className="mt-3 text-4xl font-black">خشت آکادمی</h1>
          <p className="mt-6 leading-9 text-neutral-500">
            خشت آکادمی برای آموزش مهارت‌های واقعی صنعت ساختمان ساخته شده است؛
            آموزش‌هایی که از پروژه، نرم‌افزار و تجربه متخصصان شروع می‌شوند و به
            بازار کار می‌رسند.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              ["+۲۰۰۰", "هنرجوی موفق"],
              ["+۵۰۰۰", "ساعت آموزش"],
              ["+۳۰", "مدرس متخصص"],
              ["+۵۰", "دوره آموزشی"],
            ].map((x) => (
              <div className="rounded-2xl border p-5" key={x[1]}>
                <b className="text-2xl text-[#8f211d]">{x[0]}</b>
                <div className="mt-2 text-sm text-neutral-500">{x[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
