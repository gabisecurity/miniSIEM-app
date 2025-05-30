
import React from "react";

const FilterControls = ({ search, setSearch, severityFilter, setSeverityFilter }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
      <label className="text-sm font-semibold w-full sm:w-auto text-gray-800 dark:text-gray-200">
        Filtro por Severidade:
        <select
          value={severityFilter}
          onChange={(e) => setSeverityFilter(e.target.value)}
          className="block mt-1 px-4 py-2 border rounded bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
        >
          <option value="ALL">Todos</option>
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
          <option value="CRITICAL">CRITICAL</option>
        </select>
      </label>

      <div className="w-full flex justify-center">
  <input
    type="text"
    placeholder="Buscar por IP, hostname, mensagem..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="px-4 py-2 border rounded w-full max-w-md text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
  />
</div>

    </div>
  );
};

export default FilterControls;
