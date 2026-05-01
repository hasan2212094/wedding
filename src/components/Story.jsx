export default function Story() {
  return (
    <section className="py-20 px-6 bg-[#faf7f2] text-center animate-fade scroll-smooth">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Kisah Kami</h2>

      <div className="w-16 h-1 bg-pink-400 mx-auto mb-10"></div>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Story 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/images/story1.webp"
            className="w-full md:w-1/2 h-[250px] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          />

          <div className="text-left md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Awal Bertemu</h3>
            <p className="text-gray-600 leading-relaxed">
              Kami pertama kali bertemu dalam sebuah momen yang sederhana, namun
              penuh makna. Dari pertemuan itu, tumbuh rasa nyaman yang perlahan
              membawa kami lebih dekat satu sama lain.
            </p>
          </div>
        </div>

        {/* Story 2 (ZIG-ZAG) */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="text-left md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Menjalin Hubungan</h3>
            <p className="text-gray-600 leading-relaxed">
              Hari demi hari kami lewati bersama, berbagi cerita, tawa, dan
              berbagai pengalaman yang mempererat hubungan kami. Dari situlah
              kami belajar untuk saling memahami dan melengkapi.
            </p>
          </div>

          <img
            src="/images/story2.webp"
            className="w-full md:w-1/2 h-[250px] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Story 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/images/story3.webp"
            className="w-full md:w-1/2 h-[250px] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          />

          <div className="text-left md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Menuju Pernikahan</h3>
            <p className="text-gray-600 leading-relaxed">
              Dengan penuh keyakinan dan doa, kami memutuskan untuk melangkah ke
              jenjang yang lebih serius. Kami percaya bahwa perjalanan ini
              adalah awal dari kisah indah yang akan kami jalani bersama
              selamanya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
