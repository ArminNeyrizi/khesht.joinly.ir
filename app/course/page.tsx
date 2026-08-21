import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Clock, Users } from "lucide-react";
export default function Course() {
  return (
    <section className="container py-12">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
        <div>
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85"
            alt="بوتکمپ اجرای ساختمان"
            className="h-[480px] w-full rounded-[28px] object-cover"
          />
          <div className="mt-8">
            <span className="text-sm font-bold text-[#8f211d]">
              بوتکمپ تخصصی
            </span>
            <h1 className="mt-3 text-4xl font-black">بوتکمپ اجرای ساختمان</h1>
            <p className="mt-5 leading-8 text-neutral-500">
              از اصول اجرای ساختمان تا مدیریت کارگاه و کنترل کیفیت؛ با تمرکز روی
              پروژه‌های واقعی و مهارت‌های مورد نیاز بازار کار.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "پروژه عملی واقعی",
                "منتورینگ و پشتیبانی",
                "جزوه و محتوای کاربردی",
                "آمادگی برای بازار کار",
              ].map((x) => (
                <div className="flex gap-3 rounded-xl bg-[#faf8f6] p-4" key={x}>
                  <Check className="text-[#8f211d]" size={20} />
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <aside className="sticky top-28 rounded-3xl border bg-white p-7 shadow-soft">
          <h2 className="text-xl font-black">ثبت‌نام در دوره</h2>
          <div className="mt-7 flex justify-between border-b pb-5">
            <span className="text-neutral-500">شهریه</span>
            <b className="text-2xl text-[#8f211d]">۳,۹۰۰,۰۰۰ تومان</b>
          </div>
          <div className="grid grid-cols-2 gap-3 py-5 text-sm">
            <span className="flex items-center gap-2">
              <Clock size={17} /> ۹۶ ساعت
            </span>
            <span className="flex items-center gap-2">
              <Users size={17} /> ظرفیت محدود
            </span>
          </div>
          <Button asChild className="w-full" size="lg">
            <Link href="/contact">مشاوره و ثبت‌نام</Link>
          </Button>
          <p className="mt-4 text-center text-xs text-neutral-500">
            قبل از ثبت‌نام، شرایط دوره را با مشاور بررسی کن.
          </p>
        </aside>
      </div>
    </section>
  );
}
