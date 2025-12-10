import { useState } from "react";
import { motion } from "framer-motion";

export default function Services({ services }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative py-20 px-4 md:px-[8%] xl:px-[12%] bg-gray-900 overflow-hidden">
      {/* Floating Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="w-[200%] h-[200%] bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 rounded-full filter blur-3xl absolute"
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

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative perspective"
            >
              <motion.button
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`
                  w-full h-full rounded-xl shadow-lg transition-transform duration-500 transform
                  ${
                    activeIndex === index
                      ? "scale-105 shadow-2xl"
                      : "hover:scale-105 hover:shadow-xl"
                  }
                  cursor-pointer flex flex-col items-center justify-center p-6 sm:p-8 relative
                `}
              >
                {/* Front */}
                <motion.div
                  className={`
                    absolute w-full h-full rounded-xl backface-hidden flex flex-col items-center justify-center
                    transition-all duration-500
                    ${activeIndex === index
                      ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                      : "bg-white text-gray-900"}
                  `}
                >
                  <motion.div
                    className="pb-4 text-4xl sm:text-5xl"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm sm:text-base text-center">
                    {service.description}
                  </p>
                </motion.div>

                {/* Back */}
                <motion.div
                  className={`
                    absolute w-full h-full rounded-xl backface-hidden rotate-y-180
                    flex items-center justify-center text-center p-6
                    bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white
                  `}
                >
                  <p className="text-sm sm:text-base">
                    {service.details || "More information about this service goes here."}
                  </p>
                </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
