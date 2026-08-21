import Link from "next/link";
import {
  ArrowLeft,
  Instagram,
  Send,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 bg-[#090a0b] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* BRAND */}
          <div>
            <Link href="/" className="inline-block">
              <div className="text-2xl font-black">
                خشت <span className="text-[#c83a32]">آکادمی</span>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-8 text-white/55">
              آموزش تخصصی و کاربردی برای ورود و رشد حرفه‌ای در صنعت ساختمان.
              از یادگیری مهارت تا تجربه واقعی پروژه.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition hover:border-[#8f211d] hover:bg-[#8f211d] hover:text-white"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition hover:border-[#8f211d] hover:bg-[#8f211d] hover:text-white"
              >
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* COURSES */}
          <div>
            <h3 className="text-sm font-extrabold">
              دوره‌ها
            </h3>

            <div className="mt-5 space-y-3">
              <FooterLink href="/courses/execution">
                اجرای ساختمان
              </FooterLink>

              <FooterLink href="/courses/supervision">
                نظارت
              </FooterLink>

              <FooterLink href="/courses/design">
                طراحی
              </FooterLink>

              <FooterLink href="/courses/autocad">
                نقشه‌کشی AutoCAD
              </FooterLink>

              <FooterLink href="/courses/revit-bim">
                Revit و BIM
              </FooterLink>

              <FooterLink href="/courses/etabs">
                ETABS
              </FooterLink>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-extrabold">
              دسترسی سریع
            </h3>

            <div className="mt-5 space-y-3">
              <FooterLink href="/courses">
                دوره‌های آموزشی
              </FooterLink>

              <FooterLink href="/blog">
                مقالات
              </FooterLink>

              <FooterLink href="/about">
                درباره آکادمی
              </FooterLink>

              <FooterLink href="/tools">
                ابزارهای مهندسی
              </FooterLink>

              <FooterLink href="/contact">
                پشتیبانی
              </FooterLink>

              <FooterLink href="/contact">
                ارتباط با ما
              </FooterLink>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-extrabold">
              ارتباط با ما
            </h3>

            <div className="mt-5 space-y-5">
              <ContactItem
                icon={<Phone size={17} />}
                title="تلفن"
                value="09021354107"
                href="tel:09021354107"
              />

              <ContactItem
                icon={<Mail size={17} />}
                title="ایمیل"
                value="info@khesht.co"
                href="mailto:info@khesht.co"
              />

              <ContactItem
                icon={<MapPin size={17} />}
                title="آدرس"
                value="تهران، نیاوران، باهنر، قبل سعیدی، پلاک ۶۲، واحد ۶"
              />
            </div>

            <Link
              href="/contact"
              className="mt-6 flex items-center justify-between rounded-xl bg-[#8f211d] px-5 py-4 text-sm font-bold transition hover:bg-[#751914]"
            >
              دریافت مشاوره
              <ArrowLeft size={17} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-5 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            تمامی حقوق برای خشت آکادمی محفوظ است.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="transition hover:text-white"
            >
              خشت آکادمی
            </Link>

            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------- */
/* FOOTER LINK */
/* -------------------------------- */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
    >
      <ArrowLeft
        size={13}
        className="translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
      />

      <span>{children}</span>
    </Link>
  );
}

/* -------------------------------- */
/* CONTACT ITEM */
/* -------------------------------- */

function ContactItem({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#c83a32]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs text-white/35">
          {title}
        </p>

        <p className="mt-1 text-sm leading-6 text-white/65">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block transition hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return content;
}