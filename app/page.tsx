'use client';

import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { toggleState } from "@/lib/redux/sitelock/sitelock-slice";

// Constants
const TARGET_DATE = new Date("2025-09-29T10:00:00").getTime();
const LAUNCH_DATE_INFO = "September 29, 2025 at 10:00 AM";
const SITE_DESCRIPTION = "Govisarana is a comprehensive digital website and mobile app developed by Nanosoft Solution (Pvt) Ltd.";

const WelcomePage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const rafIdRef = useRef<number | null>(null);
  const [countdown, setCountdown] = React.useState("");

  // Memoized format function
  const formatTime = useCallback((time: number): string => {
    return time.toString().padStart(2, "0");
  }, []);

  // Memoized countdown calculation
  const calculateCountdown = useCallback((distance: number): string => {
    if (distance <= 0) return "00:00:00:00";
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${formatTime(days)}:${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  }, [formatTime]);

  // Optimized countdown timer effect
  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const distance = TARGET_DATE - now;

      if (distance <= 0) {
        dispatch(toggleState(true));
        setCountdown("00:00:00:00");
        
        // Use setTimeout to avoid blocking the main thread
        setTimeout(() => {
          router.push("/home");
        }, 0);
        
        return;
      }

      setCountdown(calculateCountdown(distance));
      rafIdRef.current = requestAnimationFrame(updateCountdown);
    };

    // Initial state setup
    dispatch(toggleState(false));

    // Use requestAnimationFrame for smoother animations
    rafIdRef.current = requestAnimationFrame(updateCountdown);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [router, dispatch, calculateCountdown]);

  // Memoized FullScreenLayout component
  const FullScreenLayout = useMemo(() => 
    ({ children }: { children: React.ReactNode }) => (
      <div className="fixed inset-0 flex items-center justify-center text-white overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          preload="auto"
        >
          <source src="background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Static overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
          {children}
        </div>
      </div>
    ),
  []);

  // Memoized main content to prevent unnecessary re-renders
  const mainContent = useMemo(() => (
    <div className="flex flex-col items-center justify-center text-center h-full w-full">
      <img
        src='logo.png'
        alt="Logo"
        className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg mb-6"
        loading="eager"
      />
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-white/80 px-4">
        Govisarana Digital Platform
      </h1>
      
      {/* Countdown Timer */}
      <div className="mb-8">
        <p className="text-2xl md:text-3xl mb-4 text-white/80">Launching in:</p>
        <div 
          className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold text-white/90 tracking-widest"
          suppressHydrationWarning
        >
          {countdown || "Loading..."}
        </div>
      </div>

      {/* Launch Date Info */}
      <div className="mb-6 p-4 bg-blue-600/30 rounded-lg">
        <p className="text-lg md:text-xl text-white/80">
          Launch Date: {LAUNCH_DATE_INFO}
        </p>
      </div>

      <p className="text-white/70 mb-6 text-lg md:text-xl lg:text-2xl max-w-5xl px-4">
        {SITE_DESCRIPTION}
      </p>
      
      <div className="flex items-center justify-center mt-6">
        <img
          src='nanosoft-logo.png'
          alt="Nanosoft Logo"
          className="w-6 h-6 md:w-8 md:h-8 mr-3"
          loading="lazy"
        />
        <p className="text-white/90 text-lg md:text-2xl">
          Powered by Nanosoft Solution (Pvt) Ltd
        </p>
      </div>
    </div>
  ), [countdown]);

  return (
    <FullScreenLayout>
      {mainContent}
    </FullScreenLayout>
  );
};

export default React.memo(WelcomePage);