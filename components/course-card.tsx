import Link from "next/link";
import { Clock, Users } from "lucide-react";

type CourseCardProps = {
  title: string;
  category: string;
  img: string;
  price: string;
  originalPrice: string;
  duration: string;
  sessions: string;
  slug: string;
};

export function CourseCard({
  title,
  category,
  img,
  price,
  originalPrice,
  duration,
  sessions,
  slug,
}: CourseCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#e9e5e2] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      {/* IMAGE */}
      <img
        src={img}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        {/* CATEGORY */}
        <span className="inline-block rounded-full bg-[#f5e9e7] px-3 py-1 text-xs font-bold text-[#8f211d]">
          {category}
        </span>

        {/* TITLE */}
        <h3 className="mt-4 text-lg font-black">
          {title}
        </h3>

        {/* INFO */}
        <div className="mt-4 flex flex-wrap gap-5 text-xs text-neutral-500">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {duration}
          </span>

          <span className="flex items-center gap-1">
            <Users size={14} />
            {sessions}
          </span>
        </div>

        {/* PRICE */}
        <div className="mt-6 flex items-end justify-between gap-3">
          <div>
            <div className="text-xs text-neutral-400 line-through">
              {originalPrice} تومان
            </div>

            <div className="mt-1">
              <b className="text-lg text-[#8f211d]">
                {price}
              </b>

              <span className="mr-1 text-xs text-neutral-500">
                تومان
              </span>
            </div>

            <div className="mt-1 text-[10px] font-bold text-[#8f211d]">
              تخفیف تا پایان شهریور
            </div>
          </div>

          {/* BUTTON */}
          <Link
            href={`/courses/${slug}`}
            className="shrink-0 rounded-lg bg-[#171717] px-4 py-2 text-xs font-bold !text-white transition hover:bg-[#8f211d]"
          >
            مشاهده دوره
          </Link>
        </div>
      </div>
    </article>
  );
}