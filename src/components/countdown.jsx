import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-12-12T08:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <section className="py-20 text-center bg-white">
      <h2 className="text-3xl font-bold mb-6">Menuju Hari Bahagia</h2>

      <div className="flex justify-center gap-4 text-center">
        {[days, hours, minutes, seconds].map((item, i) => (
          <div key={i} className="bg-[#faf7f2] px-5 py-4 rounded-xl shadow">
            <p className="text-2xl font-bold">{item}</p>
            <p className="text-sm text-gray-500">
              {["Hari", "Jam", "Menit", "Detik"][i]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
