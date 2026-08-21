"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="container py-14">
      <div className="mx-auto max-w-4xl rounded-[28px] border bg-[#faf8f6] p-7 md:p-12">
        <div className="max-w-xl">
          <span className="text-sm font-bold text-[#8f211d]">تماس با ما</span>
          <h1 className="mt-3 text-4xl font-black">برای شروع مسیرت پیام بده</h1>
          <p className="mt-4 leading-8 text-neutral-500">
            اگر نمی‌دانی کدام دوره مناسب توست، اطلاعاتت را بفرست تا با تو تماس
            بگیریم.
          </p>
        </div>
        {sent ? (
          <div className="mt-10 rounded-2xl bg-white p-8 text-center font-bold text-[#8f211d]">
            درخواست شما ثبت شد.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-10 grid gap-4 md:grid-cols-2"
          >
            <input
              required
              placeholder="نام و نام خانوادگی"
              className="h-12 rounded-xl border bg-white px-4 outline-none focus:border-[#8f211d]"
            />
            <input
              required
              placeholder="شماره تماس"
              className="h-12 rounded-xl border bg-white px-4 outline-none focus:border-[#8f211d]"
            />
            <select className="h-12 rounded-xl border bg-white px-4 md:col-span-2">
              <option>دوره مورد نظر</option>
              <option>اجرای ساختمان</option>
              <option>نظارت</option>
              <option>طراحی</option>
              <option>نقشه‌کشی</option>
            </select>
            <textarea
              placeholder="توضیحات"
              className="min-h-32 rounded-xl border bg-white p-4 md:col-span-2"
            />
            <Button size="lg" className="md:col-span-2">
              ارسال درخواست
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
