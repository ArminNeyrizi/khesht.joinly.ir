import Link from "next/link";
import { Clock, Users } from "lucide-react";

type CourseCardProps = {
  title: string;
  category: string;
  img: string;
  price: string;
  slug: string;
};

export function CourseCard({
  title,
  category,
  img,
  price,
  slug,
}: CourseCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#e9e5e2] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <img
        src={img}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <span className="inline-block rounded-full bg-[#f5e9e7] px-3 py-1 text-xs font-bold text-[#8f211d]">
          {category}
        </span>

        <h3 className="mt-4 text-lg font-black">
          {title}
        </h3>

        <div className="mt-4 flex gap-5 text-xs text-neutral-500">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            ۲۴ ساعت
          </span>

          <span className="flex items-center gap-1">
            <Users size={14} />
            ظرفیت محدود
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <b className="text-[#8f211d]">
            {price} تومان
          </b>

          <Link
            href={`/courses/${slug}`}
            className="rounded-lg bg-[#171717] px-4 py-2 text-xs font-bold !text-white transition hover:bg-[#8f211d]"
          >
            مشاهده دوره
          </Link>
        </div>
      </div>
    </article>
  );
}