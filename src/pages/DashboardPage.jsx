import { PieChart, BookOpen, BarChart, Clock } from "lucide-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Bar,
  BarChart as ReBarChart,
} from "recharts";

// Components
import DashboardCards from "../components/DashboardPage/DashboardCards";
import DashboardCharts from "../components/DashboardPage/DashboardCharts";

// Data
import { ipkData, gradeData } from "../data/DashboardData";

function DashboardPage() {
  return (
    <div className="w-full bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 border-b border-gray-300 pb-2">
        <PieChart className="w-12 h-12 text-red-700" />
        <h1 className="text-3xl font-bold text-gray-400 tracking-wide">
          Dashboard
        </h1>
      </div>

      <DashboardCards />
      <DashboardCharts ipkData={ipkData} gradeData={gradeData} />
    </div>
  );
}

export default DashboardPage;
