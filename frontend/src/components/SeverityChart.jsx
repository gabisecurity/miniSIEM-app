
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import dayjs from "dayjs";

const SeverityChart = ({ logs }) => {
  const groupedByMinute = {};

  logs.forEach((log) => {
    const minute = dayjs(log.timestamp).format("HH:mm");
    if (!groupedByMinute[minute]) {
      groupedByMinute[minute] = { minute, LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 0 };
    }
    groupedByMinute[minute][log.severity] += 1;
  });

  const chartData = Object.values(groupedByMinute).sort((a, b) =>
    a.minute.localeCompare(b.minute)
  );

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2 text-gray-700">Eventos por Minuto</h2>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="minute" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="LOW" stackId="a" fill="#4ade80" />
          <Bar dataKey="MEDIUM" stackId="a" fill="#facc15" />
          <Bar dataKey="HIGH" stackId="a" fill="#fb923c" />
          <Bar dataKey="CRITICAL" stackId="a" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SeverityChart;
