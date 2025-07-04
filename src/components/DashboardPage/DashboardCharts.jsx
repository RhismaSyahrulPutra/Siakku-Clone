// src/components/DashboardPage/DashboardCharts.jsx
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

function DashboardCharts({ ipkData, gradeData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Line Chart */}
      <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-6 tracking-wide text-gray-700">
          Perkembangan IPK
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={ipkData}
            margin={{ top: 20, right: 10, bottom: 20, left: 5 }}
          >
            <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 5" />
            <XAxis
              dataKey="semester"
              label={{
                value: "Semester",
                position: "insideBottom",
                dy: 18,
                style: { fontSize: "0.875rem", fill: "#4B5563" },
              }}
            />
            <YAxis
              domain={[0, 4]}
              label={{
                value: "Indeks Prestasi",
                angle: -90,
                position: "insideLeft",
                dy: 55,
                style: { fontSize: "0.875rem", fill: "#4B5563" },
              }}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="ipk"
              stroke="#eab308"
              strokeWidth={2}
              isAnimationActive={true}
              animationDuration={1000}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-6 tracking-wide text-gray-700">
          Distribusi Nilai
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <ReBarChart
            data={gradeData}
            margin={{ top: 20, right: 10, bottom: 20, left: 5 }}
          >
            <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 5" />
            <XAxis
              dataKey="grade"
              interval={0}
              label={{
                value: "Nilai",
                position: "insideBottom",
                dy: 18,
                style: { fontSize: "0.875rem", fill: "#4B5563" },
              }}
            />
            <YAxis
              allowDecimals={false}
              label={{
                value: "Jumlah",
                angle: -90,
                position: "insideLeft",
                dy: 20,
                style: { fontSize: "0.875rem", fill: "#4B5563" },
              }}
            />
            <Tooltip />
            <Bar
              dataKey="jumlah"
              fill="#eab308"
              isAnimationActive={true}
              animationDuration={1000}
            />
          </ReBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DashboardCharts;
