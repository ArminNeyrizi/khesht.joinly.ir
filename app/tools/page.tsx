import Link from "next/link";

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f6]">
      <section className="container mx-auto px-4 py-16">
        <div className="mb-10">
          <span className="text-sm font-bold text-[#8f211d]">
            ابزارهای خشت آکادمی
          </span>

          <h1 className="mt-3 text-4xl font-extrabold">
            ابزارهای مهندسی ساختمان
          </h1>

          <p className="mt-4 max-w-2xl leading-8 text-neutral-500">
            ابزارهای کاربردی برای محاسبات و بررسی پروژه‌های ساختمانی.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/tools/density"
            className="rounded-2xl border border-[#e9e5e2] bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft"
          >
            <h2 className="text-xl font-extrabold">
              محاسبه تراکم ساختمان
            </h2>

            <p className="mt-3 text-sm leading-7 text-neutral-500">
              محاسبه تراکم مجاز و تراکم واقعی پروژه بر اساس مساحت زمین و
              زیربناها.
            </p>

            <div className="mt-6 font-bold text-[#8f211d]">
              استفاده از ابزار ←
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}