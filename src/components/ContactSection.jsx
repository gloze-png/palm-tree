import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="relative py-16 px-4 md:px-[8%] xl:px-[12%] overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="w-[200%] h-[200%] bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 rounded-full filter blur-3xl absolute"
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

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 relative z-10 items-center">
        {/* Left Content */}
        <div className="w-full lg:w-2/3">
          <span className="text-indigo-500 bg-white px-3 py-2 font-semibold rounded-sm text-sm sm:text-base">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-white">
            Send Us Your Bright Ideas
          </h2>
          <Link
            to="/contact"
            className="block text-white text-lg sm:text-2xl font-semibold mt-4 underline hover:text-indigo-300 transition"
          >
            Info@antlinc.com
          </Link>
          <p className="text-white text-base mt-3">Abuja, Nigeria</p>
        </div>

        {/* Right Content - Social Links */}
        <div className="w-full lg:w-1/3 flex items-center justify-end">
          <ul className="hidden md:flex flex-wrap gap-4">
            {["facebook", "instagram", "twitter", "linkedin"].map((name) => (
              <li key={name}>
                <Link
                  to="/"
                  className="flex items-center gap-3 px-4 py-3 rounded-full text-secondary bg-white hover:bg-indigo-500 hover:text-white transition-all duration-300"
                >
                  <Icon
                    icon={
                      name === "facebook"
                        ? "ri:facebook-fill"
                        : name === "instagram"
                        ? "iconoir:instagram"
                        : name === "twitter"
                        ? "ri:twitter-fill"
                        : "ri:linkedin-fill"
                    }
                    width="20"
                    height="20"
                  />
                  <span className="capitalize hidden lg:inline">{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
