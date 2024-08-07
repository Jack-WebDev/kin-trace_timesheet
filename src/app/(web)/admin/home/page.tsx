import { LayoutDashboard } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <p className="flex items-center gap-2 text-3xl">
          <LayoutDashboard size={30} /> Dashboard
        </p>
        <span className="text-xl">Coming Soon!</span>
      </div>
    </div>
  );
}
