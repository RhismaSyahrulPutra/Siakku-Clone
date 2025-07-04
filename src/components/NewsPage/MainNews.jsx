function MainNews({ berita }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden mb-8">
      <img
        src={berita.image}
        alt="Berita Utama"
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-700 mb-2">{berita.title}</h2>
        <p className="text-gray-600 text-sm">{berita.description}</p>
      </div>
    </div>
  );
}

export default MainNews;
