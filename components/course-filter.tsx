"use client";

import { useState } from "react";
import { CourseCard } from "@/components/course-card";

type Course = {
  title: string;
  category: string;
  img: string;
  price: string;
  originalPrice: string;
  duration: string;
  sessions: string;
  slug: string;
};

type CourseFilterProps = {
  courses: Course[];
};

const categories = [
  "همه",
  "اجرا",
  "نظارت",
  "طراحی",
  "نقشه‌کشی",
  "BIM",
];

export function CourseFilter({ courses }: CourseFilterProps) {
  const [activeCategory, setActiveCategory] = useState("همه");

  const filteredCourses =
    activeCategory === "همه"
      ? courses
      : courses.filter(
          (course) => course.category === activeCategory
        );

  return (
    <>
      {/* CATEGORY FILTER */}
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
                isActive
                  ? "bg-[#8f211d] text-white"
                  : "border border-[#e9e5e2] bg-white text-neutral-600 hover:border-[#8f211d] hover:text-[#8f211d]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* COURSES */}
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.slug}
            title={course.title}
            category={course.category}
            img={course.img}
            price={course.price}
            originalPrice={course.originalPrice}
            duration={course.duration}
            sessions={course.sessions}
            slug={course.slug}
          />
        ))}
      </div>

      {/* EMPTY STATE */}
      {filteredCourses.length === 0 && (
        <div className="mt-8 rounded-2xl border border-[#e9e5e2] bg-white p-10 text-center text-sm text-neutral-500">
          دوره‌ای در این دسته‌بندی پیدا نشد.
        </div>
      )}
    </>
  );
}