export default function Event() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Acara Pernikahan</h2>

      <div className="w-16 h-1 bg-pink-400 mx-auto mb-12"></div>

      {/* Container */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* AKAD */}
        <div className="bg-[#faf7f2] p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold mb-4">Akad Nikah</h3>

          <p className="text-gray-600 mb-2">Minggu, 12 Desember 2026</p>

          <p className="text-gray-600 mb-4">Pukul 08.00 WIB</p>

          <p className="text-gray-700 font-medium mb-6">
            Masjid Al-Hidayah
            <br />
            Jakarta Selatan
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            className="inline-block bg-black text-white px-5 py-2 rounded-full"
          >
            Lihat Lokasi
          </a>
        </div>

        {/* RESEPSI */}
        <div className="bg-[#faf7f2] p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold mb-4">Resepsi</h3>

          <p className="text-gray-600 mb-2">Minggu, 12 Desember 2026</p>

          <p className="text-gray-600 mb-4">Pukul 11.00 WIB</p>

          <p className="text-gray-700 font-medium mb-6">
            Gedung Serbaguna
            <br />
            Jakarta Selatan
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            className="inline-block bg-black text-white px-5 py-2 rounded-full"
          >
            Lihat Lokasi
          </a>
        </div>
      </div>
    </section>
  );
}
