export function Footer() {
  return (
    <footer className="mt-20 bg-[#171717] py-14 text-white">
      <div className="container grid gap-10 md:grid-cols-4">
        <div>
          <b className="text-xl">خشت آکادمی</b>
          <p className="mt-4 text-sm leading-7 text-neutral-400">
            آموزش تخصصی و کاربردی برای ورود و رشد حرفه‌ای در صنعت ساختمان.
          </p>
        </div>
        <div>
          <b>دوره‌ها</b>
          <div className="mt-4 space-y-3 text-sm text-neutral-400">
            <div>اجرای ساختمان</div>
            <div>نظارت</div>
            <div>طراحی</div>
            <div>نقشه‌کشی</div>
          </div>
        </div>
        <div>
          <b>دسترسی سریع</b>
          <div className="mt-4 space-y-3 text-sm text-neutral-400">
            <div>دوره‌های آموزشی</div>
            <div>مقالات</div>
            <div>درباره آکادمی</div>
            <div>پشتیبانی</div>
          </div>
        </div>
        <div>
          <b>ارتباط با ما</b>
          <div className="mt-4 space-y-3 text-sm text-neutral-400">
            <div>021-91098900</div>
            <div>info@khesht.academy</div>
            <div>تهران، نیاوران</div>
          </div>
        </div>
      </div>
      <div className="container mt-10 border-t border-white/10 pt-6 text-xs text-neutral-500">
        تمامی حقوق برای خشت آکادمی محفوظ است.
      </div>
    </footer>
  );
}
