function BiodataTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="flex gap-4 mb-6">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            activeTab === tab
              ? "bg-red-700 text-white shadow"
              : "bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default BiodataTabs;
