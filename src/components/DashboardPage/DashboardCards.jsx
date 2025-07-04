import { BookOpen, BarChart, Clock } from "lucide-react";

function DashboardCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-6 flex items-center gap-4">
        <div className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
          <BookOpen className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h2 className="text-sm text-gray-400">Perolehan SKS</h2>
          <p className="text-2xl font-bold text-gray-700">0 SKS</p>
        </div>
      </div>

      <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-6 flex items-center gap-4">
        <div className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors">
          <BarChart className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <h2 className="text-sm text-gray-400">IPK</h2>
          <p className="text-2xl font-bold text-gray-700">0.00</p>
        </div>
      </div>

      <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-6 flex items-center gap-4">
        <div className="bg-yellow-100 p-3 rounded-full hover:bg-yellow-200 transition-colors">
          <Clock className="w-8 h-8 text-yellow-600" />
        </div>
        <div>
          <h2 className="text-sm text-gray-400">Lama Studi</h2>
          <p className="text-2xl font-bold text-gray-700">999 Semester</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;
