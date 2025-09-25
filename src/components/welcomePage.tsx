import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/a.jpg";
import bgVideo from "../assets/background.mp4";
import nanosoft from "../assets/nanosoft.jpg";

const WelcomePage = () => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (loading && progress < 100) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            if (timer) clearInterval(timer);
            return 100; // stop at 100
          }
          return prev + 5;
        });
      }, 400);
    }

    if (progress === 100) {
      // show content after small delay
      const contentTimer = setTimeout(() => setShowContent(true), 500);
      return () => clearTimeout(contentTimer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [loading, progress]);

  // -------- Main Content after loading --------
  if (showContent) {
    return (
      <div className="relative flex flex-col items-center justify-center min-h-screen text-white px4">
        <video autoPlay loop muted className="absolute w-full h-full object-cover">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-5 bg-white/5 p-8 sm:p-12 rounded-xl w-full max-w-5xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white/80">
            Govisarana Digital Platform
          </h1>
          <p className="text-white/70 mb-6 sm:text-lg">
            This is a digital platform providing seamless access to services and
            information for users via web and mobile applications.
          </p>
          <div className="relative z-10 p-3 sm:p-4 rounded-xl w-full max-w-4xl flex items-center justify-center mt-6 mx-auto">
            <img
              src={nanosoft}
              alt="Nanosoft Logo"
              className="w-8 h-8 sm:w-6 sm:h-6 mr-2 sm:mr-3"
            />
            <p className="text-white/90 text-2xl">
              Powered by Nanosoft Solution (Pvt) Ltd
            </p>
          </div>
        </div>
      </div>
    );
  }

  // -------- Initial Screen (Before Publish) --------
  if (!loading) {
    return (
      <div className="relative flex flex-col items-center justify-center min-h-screen text-white px-4">
        <video autoPlay loop muted className="absolute w-full h-full object-cover">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20"></div>

        <img
          src={logo}
          alt="Logo"
          className="w-40 h-40 rounded-full shadow-lg mb-4 z-10"
        />

        <div className="relative z-10 bg-white/5 p-8 sm:p-8 rounded-xl w-full max-w-5xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white/80">
            Govisarana Digital Platform
          </h1>
          <p className="text-white/70 mb-4 sm:text-lg">
            Govisarana is a comprehensive digital website and mobile app
            developed by Nanosoft Solution (Pvt) Ltd. It allows users to access
            services and information efficiently, providing a modern,
            interactive, and secure platform.
          </p>
          <button
            onClick={() => {
              setProgress(0); // reset progress if clicked again
              setLoading(true);
            }}
            className="font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-red-900/50 text-white/80 border border-red-500 hover:bg-red-800/50 transition"
          >
            PUBLISH
          </button>

          <div className="relative z-10 p-3 sm:p-4 rounded-xl w-full max-w-4xl flex items-center justify-center mt-6 mx-auto">
            <img
              src={nanosoft}
              alt="Nanosoft Logo"
              className="w-6 h-6 sm:w-6 sm:h-6 mr-2 sm:mr-3"
            />
            <p className="text-white/90 text-2xl">
              Powered by Nanosoft Solution (Pvt) Ltd
            </p>
          </div>
        </div>
      </div>
    );
  }

  // -------- Loading Screen --------
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white px-4">
      <video autoPlay loop muted className="absolute w-full h-full object-cover">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40"></div>

      <img
        src={logo}
        alt="Logo"
        className="w-40 h-40 rounded-full shadow-lg mb-6 animate-pulse z-10"
      />
      <h1 className="text-4xl font-extrabold mb-8 z-10 text-white/80">
        Publishing...
      </h1>

      {/* Progress Bar */}
      <div className="w-72 h-6 bg-white/20 rounded-lg overflow-hidden z-10">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>

      <p className="mt-4 text-3xl opacity-80 z-10 text-white/80">
        {progress}%
      </p>
    </div>
  );
};

export default WelcomePage;
