export default function Maps() {
  return (
    <section className="py-20 px-6 bg-[#faf7f2] text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Lokasi Acara</h2>

      <div className="w-16 h-1 bg-pink-400 mx-auto mb-10"></div>

      {/* Map */}
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps?q=Jakarta&output=embed"
          className="w-full h-[300px] md:h-[400px]"
          loading="lazy"
        ></iframe>
      </div>

      {/* Button */}
      <a
        href="https://www.google.com/maps?q=Jakarta"
        target="_blank"
        className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition"
      >
        Buka di Google Maps
      </a>
    </section>
  );
}
