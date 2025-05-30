import React from "react";

function SummaryCards({ logs }) {
  const total = logs.length;
  const uniqueIPs = new Set(logs.map(log => log.source_ip)).size;
  const criticals = logs.filter(log => log.severity === "HIGH").length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
    <div className="bg-blue-600 p-4 rounded shadow">
      <h2 className="text-lg font-semibold text-white">Total de Eventos</h2>
      <p className="text-2xl font-bold text-white">{total}</p>
    </div>
    <div className="bg-yellow-500 p-4 rounded shadow">
      <h2 className="text-lg font-semibold text-white">IPs Únicos</h2>
      <p className="text-2xl font-bold text-white">{uniqueIPs}</p>
    </div>
    <div className="bg-red-600 p-4 rounded shadow">
      <h2 className="text-lg font-semibold text-white">Críticos (HIGH)</h2>
      <p className="text-2xl font-bold text-white">{criticals}</p>
    </div>
  </div>
  
  );
}

export default SummaryCards;
