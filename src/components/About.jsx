import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative bg-gray-900 min-h-screen text-white overflow-hidden">
      {/* Floating Gradient Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="w-[200%] h-[200%] bg-linear-to-r from-indigo- via-purple-500 to-pink-500 opacity-20 rounded-full filter blur-3xl absolute"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          style={{ top: "-50%", left: "-50%" }}
        />
        <motion.div
          className="w-[150%] h-[150%] bg-linear-to-r from-pink-400 via-red-400 to-yellow-400 opacity-20 rounded-full filter blur-2xl absolute"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
          style={{ top: "-30%", left: "-20%" }}
        />
      </div>

      {/* ABOUT SECTION */}
      <section className="relative py-16 px-4 md:px-[8%] xl:px-[12%]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:items-center">
          {/* Left Content */}
          <div className="w-full lg:w-2/3">
            <span className="inline-block text-white-500 bg-primary px-3 py-2 font-semibold rounded-sm text-sm sm:text-base">
              Welcome To Antlinc
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 leading-tight">
              Empowering Businesses Through Intelligent Digital Solutions
            </h1>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
              {/* Mission */}
              <div>
                <h2 className="font-semibold text-xl sm:text-2xl text-white">Our Mission</h2>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  Merge technology, creativity, and strategy to create digital experiences that inspire and deliver measurable results.
                </p>
              </div>

              {/* Goal */}
              <div>
                <h2 className="font-semibold text-xl sm:text-2xl text-white">Our Goal</h2>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  Empower businesses with smart, scalable, and innovative digital solutions that drive growth and enhance UX.
                </p>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 mt-4 px-5 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md transition-all duration-300"
                >
                  <Icon icon="vaadin:plus" width="20" height="20" />
                  More About Us
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content (Animated SVG + Number) */}
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56">
              {/* Spinning circular text */}
              <svg
                viewBox="0 0 300 300"
                className={mounted ? "absolute inset-0 w-full h-full" : "hidden"}
                style={{ animation: "spin 20s linear infinite" }}
                aria-hidden
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                  />
                </defs>
                <text
                  fill="#fff"
                  fontSize="10"
                  fontWeight="600"
                  letterSpacing="3"
                >
                  <textPath href="#circlePath" startOffset="0">
                    Empowering Businesses with Smart Digital Solutions — Empowering Businesses with Smart Digital Solutions
                  </textPath>
                </text>
              </svg>

              {/* Center number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent"
                  style={{
                    WebkitTextStrokeWidth: "2px",
                    WebkitTextStrokeColor: "#fff",
                  }}
                >
                  7+
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline CSS for spinning animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}
