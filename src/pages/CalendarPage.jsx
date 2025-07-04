import { useState } from "react";
import { Calendar } from "lucide-react";
import CalendarTabs from "../components/CalendarPage/CalendarTabs";
import CalendarContent from "../components/CalendarPage/CalendarContent";
import { tabs, academicYears } from "../data/CalendarData";

function CalendarPage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-full bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 border-b border-gray-300 pb-2">
        <Calendar className="w-12 h-12 text-red-700" />
        <h1 className="text-3xl font-bold text-gray-400 tracking-wide">
          Kalender Akademik
        </h1>
      </div>

      {/* Tabs */}
      <CalendarTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Konten Kalender */}
      <CalendarContent activeTab={activeTab} academicYears={academicYears} />
    </div>
  );
}

export default CalendarPage;
