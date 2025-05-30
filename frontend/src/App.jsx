
import React, { useEffect, useState } from "react";
import FilterControls from "./components/FilterControls";
import SeverityChart from "./components/SeverityChart";
import SummaryCards from "./components/SummaryCards";

const App = () => {
  const [logs, setLogs] = useState([]);
  const [search, setSearch] = useState("");
  const [severityFilter, setSeverityFilter] = useState("ALL");

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await fetch("http://localhost:8000/events");
        const data = await res.json();
        setLogs(data);
      } catch (error) {
        console.error("Erro ao buscar logs:", error);
      }
    };

    fetchLogs();
    const interval = setInterval(fetchLogs, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredLogs = logs.filter(
    (log) =>
      (log.message.toLowerCase().includes(search.toLowerCase()) ||
        log.source_ip.toLowerCase().includes(search.toLowerCase()) ||
        log.hostname.toLowerCase().includes(search.toLowerCase())) &&
      (severityFilter === "ALL" || log.severity === severityFilter)
  );

  const exportLogs = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(filteredLogs, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "logs_export.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const criticalCount = filteredLogs.filter((log) => log.severity === "CRITICAL").length;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 text-gray-900 dark:text-white">
      <div className="flex justify-between items-center mb-6">
        <div className="text-black dark:text-white">
          <h1 className="text-4xl font-extrabold">MiniSIEM Dashboard</h1>
          {criticalCount > 0 && (
            <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 animate-pulse">
              {criticalCount} CRITICAL
            </span>
          )}
        </div>
        <button
          onClick={exportLogs}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Exportar JSON
        </button>
      </div>

      <FilterControls
        search={search}
        setSearch={setSearch}
        severityFilter={severityFilter}
        setSeverityFilter={setSeverityFilter}
      />
      <SummaryCards logs={filteredLogs} />
      <div className="h-64 mt-6">
        <SeverityChart logs={filteredLogs} />
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Eventos Recentes</h2>
        <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow rounded-lg">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white">
              <tr>
                <th className="p-2">Horário</th>
                <th className="p-2">Origem</th>
                <th className="p-2">Tipo</th>
                <th className="p-2">Mensagem</th>
                <th className="p-2">Host</th>
                <th className="p-2">Severidade</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-gray-300 dark:border-gray-700 ${
                    log.severity === "CRITICAL" ? "animate-pulse bg-red-50 dark:bg-red-900" : ""
                  }`}
                >
                  <td className="p-2">{new Date(log.timestamp).toLocaleString()}</td>
                  <td className="p-2">{log.source_ip}</td>
                  <td className="p-2">{log.event_type}</td>
                  <td className="p-2">{log.message}</td>
                  <td className="p-2">{log.hostname}</td>
                  <td className="p-2 font-bold text-center">{log.severity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
