function PrestasiCategory({ icon, title, items }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-sm font-semibold text-gray-700">{title}</h2>
      </div>
      <ul className="text-sm text-gray-600 space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default PrestasiCategory;
