import { Loader2 } from "lucide-react";

export default function LoadingDashboard() {
  return (
    <div className="w-full h-screen bg-gray-100 rounded-lg flex items-center justify-center mt-10">
      <Loader2 className="w-10 h-10 animate-spin" />
    </div>
  );
}
