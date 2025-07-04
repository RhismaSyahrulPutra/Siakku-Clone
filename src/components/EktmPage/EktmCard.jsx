function EktmCard({ title, description, buttonText, onClick }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-6 flex flex-col justify-between">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">{title}</h2>
      <p className="text-gray-500 text-sm mb-4">{description}</p>
      <button
        onClick={onClick}
        className="self-start bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default EktmCard;
