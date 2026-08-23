import ToolUnavailable from "@/components/ToolUnavailable";

export default function UnknownToolPage() {
  return (
    <ToolUnavailable
      title="این ابزار پیدا نشد"
      description="ابزاری که به دنبال آن هستید وجود ندارد یا آدرس آن اشتباه است."
    />
  );
}