import { useState, useRef } from "react";

import Hero from "./components/Hero";
import Story from "./components/Story";
import Event from "./components/Event";
import Gallery from "./components/Galery";
import RSVP from "./components/RSVP";
import Maps from "./components/Maps";
import Countdown from "./components/countdown"; // 🔥 fix case

import useScrollAnimation from "./hooks/useScrollAnimation";
import "./index.css";

function App() {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const audioRef = useRef(null);

  useScrollAnimation();

  return (
    <div className="font-sans max-w-[480px] mx-auto overflow-hidden">
      {/* 🎵 AUDIO (WAJIB DI LUAR COVER) */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/song.mp3" type="audio/mpeg" />
      </audio>

      {/* 🔒 COVER */}
      {!open && (
        <div
          className={`fixed inset-0 flex flex-col justify-center items-center text-center z-50 bg-cover bg-center px-4 transition-all duration-700 ${
            animate ? "opacity-0 scale-110" : "opacity-100"
          }`}
          style={{
            backgroundImage: "url('/images/backgroudcover.jpg')",
          }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* content */}
          <div className="relative z-10 text-white">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2 tracking-wide">
              Undangan Pernikahan
            </h1>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Raka & Sinta
            </h2>

            <button
              onClick={() => {
                setAnimate(true);

                // 🔥 play musik (tidak ke-block)
                setTimeout(() => {
                  audioRef.current?.play().catch(() => {});
                }, 100);

                setTimeout(() => setOpen(true), 800);
              }}
              className="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
            >
              Buka Undangan
            </button>
          </div>
        </div>
      )}

      {/* 📄 ISI UNDANGAN */}
      <div className={`${!open ? "hidden" : ""}`}>
        <Hero />
        <Story />
        <Event />
        <Countdown />
        <Gallery />
        <RSVP />
        <Maps />
      </div>

      {/* 🎵 FLOATING MUSIC BUTTON (OPTIONAL PREMIUM) */}
      {open && (
        <button
          onClick={() => {
            if (audioRef.current.paused) {
              audioRef.current.play();
            } else {
              audioRef.current.pause();
            }
          }}
          className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-full shadow-lg"
        >
          🎵
        </button>
      )}
    </div>
  );
}

export default App;
