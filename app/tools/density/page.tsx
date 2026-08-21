import DensityCalculator from "@/components/tools/density-calculator";

export const metadata = {
  title: "محاسبه تراکم ساختمان | خشت آکادمی",
  description:
    "محاسبه تراکم مجاز و واقعی ساختمان بر اساس مساحت زمین و زیربنای طبقات",
};

export default function DensityPage() {
  return <DensityCalculator />;
}