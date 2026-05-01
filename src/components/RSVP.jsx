export default function RSVP() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Konfirmasi Kehadiran
      </h2>

      <div className="w-16 h-1 bg-pink-400 mx-auto mb-10"></div>

      <p className="text-gray-600 mb-8">
        Mohon konfirmasi kehadiran Anda melalui tombol di bawah ini
      </p>

      <a
        href="https://wa.me/6281234567890?text=Halo,%20saya%20akan%20hadir%20di%20acara%20pernikahan"
        target="_blank"
        className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        Konfirmasi via WhatsApp
      </a>
    </section>
  );
}
