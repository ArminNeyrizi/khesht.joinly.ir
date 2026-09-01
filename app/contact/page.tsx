import {
  MapPin,
  Phone,
  Instagram,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#faf8f6]">
      <section className="container mx-auto px-4 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">

          {/* HEADER */}
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-[#8f211d]">
              تماس با خشت آکادمی
            </span>

            <h1 className="mt-3 text-4xl font-black leading-[1.4] md:text-5xl">
              برای شروع مسیرت با ما در ارتباط باش
            </h1>

            <p className="mt-5 text-base leading-8 text-neutral-500 md:text-lg">
              برای دریافت اطلاعات دوره‌ها، مشاوره انتخاب دوره و ثبت‌نام
              می‌توانید از طریق راه‌های ارتباطی زیر با خشت آکادمی در ارتباط
              باشید.
            </p>
          </div>

          {/* CONTACT CARDS */}
          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {/* PHONE */}
            <div className="rounded-3xl border border-[#e9e5e2] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft md:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5e9e7] text-[#8f211d]">
                <Phone size={25} />
              </div>

              <p className="mt-7 text-sm text-neutral-400">
                شماره تماس
              </p>

              <a
                href="tel:+989021354107"
                dir="rtl"
                className="mt-2 block text-2xl font-black tracking-wide text-neutral-900 transition hover:text-[#8f211d]"
              >
                09021354107
              </a>

              <p className="mt-4 text-sm leading-7 text-neutral-500">
                برای مشاوره، ثبت‌نام و دریافت اطلاعات دوره‌ها با ما تماس
                بگیرید.
              </p>
            </div>

            {/* ADDRESS */}
            <a
              href="https://www.google.com/maps/search/35.811383,+51.465657?entry=tts&g_ep=EgoyMDI2MDUxMy4wIPu8ASoASAFQAw%3D%3D&skid=9c12bf9e-388d-470b-8d0f-496cfa919418"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-[#e9e5e2] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft md:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5e9e7] text-[#8f211d]">
                <MapPin size={25} />
              </div>

              <p className="mt-7 text-sm text-neutral-400">
                آدرس خشت آکادمی
              </p>

              <h2 className="mt-2 text-xl font-black text-neutral-900">
                تهران، نیاوران، باهنر، قبل از سعیدی، پلاک ۶۲، واحد ۱۵  
              </h2>

              <p className="mt-3 text-sm leading-7 text-neutral-500">
                لطفا، قبل از مراجعه حضوری، ابتدا با ما در هماهنگ کنید.
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#8f211d]">
                باز کردن در Google Maps
                <ArrowLeft
                  size={16}
                  className="transition group-hover:-translate-x-1"
                />
              </div>
            </a>
          </div>

          {/* SOCIAL MEDIA */}
          <section className="mt-6 rounded-3xl border border-[#e9e5e2] bg-white p-7 md:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f5e9e7] text-[#8f211d]">
                <Instagram size={25} />
              </div>

              <div>
                <span className="text-sm text-neutral-400">
                  فضای مجازی
                </span>

                <h2 className="mt-1 text-2xl font-black">
                  خشت آکادمی را دنبال کنید
                </h2>

                <p className="mt-2 text-sm leading-7 text-neutral-500">
                  آموزش‌ها، نکات اجرایی و محتوای تخصصی صنعت ساختمان را در
                  صفحات اجتماعی خشت آکادمی دنبال کنید.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com/kheshtacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[#eeeae7] bg-[#faf8f6] p-4 transition hover:border-[#d9b4b0] hover:bg-[#f5e9e7]"
              >
                <div>
                  <span className="text-xs text-neutral-400">
                    Instagram
                  </span>

                  <p className="mt-1 font-bold">
                    @kheshtacademy
                  </p>
                </div>

                <ArrowLeft
                  size={17}
                  className="text-[#8f211d]"
                />
              </a>

              {/* TELEGRAM */}
              <a
                href="https://t.me/kheshtacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[#eeeae7] bg-[#faf8f6] p-4 transition hover:border-[#d9b4b0] hover:bg-[#f5e9e7]"
              >
                <div>
                  <span className="text-xs text-neutral-400">
                    Telegram
                  </span>

                  <p className="mt-1 font-bold">
                    کانال خشت آکادمی
                  </p>
                </div>

                <ArrowLeft
                  size={17}
                  className="text-[#8f211d]"
                />
              </a>

            </div>
          </section>

          {/* CTA */}
          <div className="mt-6 overflow-hidden rounded-3xl bg-[#0d0f10] p-7 text-white md:p-9">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-sm font-bold text-[#e88a84]">
                  دوره‌های خشت آکادمی
                </span>

                <h2 className="mt-2 text-2xl font-black">
                  هنوز نمی‌دانی کدام دوره مناسب توست؟
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  دوره‌ها را ببین و بر اساس مهارتی که نیاز داری انتخاب کن.
                </p>
              </div>

              <Link
                href="/courses"
                className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#8f211d] px-6 py-4 text-sm font-bold transition hover:bg-[#751914]"
              >
                مشاهده دوره‌ها
                <ArrowLeft size={17} />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}