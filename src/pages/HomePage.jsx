import { Home } from "lucide-react";
import WelcomeCard from "../components/HomePage/WelcomeCard";
import AnnouncementCard from "../components/HomePage/AnnouncementCard";

function HomePage() {
  return (
    <div className="w-full bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 border-b border-gray-300 pb-2">
        <Home className="w-12 h-12 text-red-700" />
        <h1 className="text-3xl font-bold text-gray-400 tracking-wide">
          Beranda
        </h1>
      </div>

      {/* 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WelcomeCard />
        <AnnouncementCard />
      </div>
    </div>
  );
}

export default HomePage;
