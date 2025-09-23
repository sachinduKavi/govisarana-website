
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  // Set your target date here
  const targetDate = new Date("2025-12-01T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-700 to-emerald-400 text-white p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        Govisarana Official Page Publication
      </h1>
      <p className="text-lg mb-8 text-center">
        We’re counting down to something exciting!
      </p>

      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-white/20 rounded-2xl p-6 shadow-md">
          <span className="block text-4xl font-bold">{timeLeft.days}</span>
          <span className="uppercase text-sm">Days</span>
        </div>
        <div className="bg-white/20 rounded-2xl p-6 shadow-md">
          <span className="block text-4xl font-bold">{timeLeft.hours}</span>
          <span className="uppercase text-sm">Hours</span>
        </div>
        <div className="bg-white/20 rounded-2xl p-6 shadow-md">
          <span className="block text-4xl font-bold">{timeLeft.minutes}</span>
          <span className="uppercase text-sm">Minutes</span>
        </div>
        <div className="bg-white/20 rounded-2xl p-6 shadow-md">
          <span className="block text-4xl font-bold">{timeLeft.seconds}</span>
          <span className="uppercase text-sm">Seconds</span>
        </div>
      </div>

      <footer className="mt-10 text-sm opacity-80">
        © {new Date().getFullYear()} Govisarana Initiative
      </footer>
    </main>
  );
}
