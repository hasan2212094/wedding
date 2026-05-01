export default function Gallery() {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.webp",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.webp",
  ];

  return (
    <section className="py-20 px-6 bg-[#faf7f2] text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Galeri</h2>

      <div className="w-16 h-1 bg-pink-400 mx-auto mb-12"></div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-xl">
            <img
              src={img}
              className="w-full h-[200px] object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
