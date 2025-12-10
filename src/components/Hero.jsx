import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2,
      s: Math.random() * 0.8 + 0.2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255,255,255,0.7)";

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.s;
        if (star.y > height) star.y = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0f001a] px-6 pt-24">
      {/* PARTICLE CANVAS */}
      <canvas ref={canvasRef} className="particle-canvas"></canvas>

      {/* TEXT CONTENT */}
      <div className="relative z-10 text-center fade-in-up">
        <div className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-white/10 text-purple-300 border border-white/20 mb-6">
         smart systems, and next-gen experiences.
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 fade-in-up">
          We build scalable digital products
        </h1>

        <p className="text-lg md:text-xl text-purple-200 max-w-xl mx-auto fade-in-up">
         We also offer digital marketing, SEO, and graphic design services.
        </p>

        <div className="mt-6 fade-in-up flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary 500/20 hover:bg-blend-lighten transition cursor-pointer">
            Contact Us
          </button>
          <button className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition cursor-pointer">
            How it Works
          </button>
        </div>
      </div>

      {/* GLOWING SPHERE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full opacity-80 bg-purple-500/40 blur-3xl pulse-glow"></div>

      {/* ORBITING RINGS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[360px] h-[360px] border border-purple-400/30 rounded-full orbit-slow"></div>
        <div className="absolute top-0 left-0 w-[280px] h-[280px] border border-purple-300/30 rounded-full orbit-medium"></div>
        <div className="absolute top-0 left-0 w-[200px] h-[200px] border border-purple-200/20 rounded-full orbit-fast"></div>
      </div>

      {/* FLOATING CARDS */}
      <div className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 w-40 md:w-48 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg fade-in-up animate-float-slow">
        <p className="text-sm text-purple-200">Target Audience</p>
        <h3 className="text-lg font-bold text-white">Precision AI Targeting</h3>
      </div>

      <div className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 w-40 md:w-48 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg fade-in-up animate-float-fast">
        <p className="text-sm text-purple-200">Install App</p>
        <h3 className="text-lg font-bold text-white">One Click Setup</h3>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-[120%] w-36 md:w-44 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg fade-in-up animate-float-medium">
        <p className="text-sm text-purple-200">Revenue</p>
        <h3 className="text-lg font-bold text-white">+24% Growth</h3>
      </div>

      <div className="absolute bottom-20 right-1/2 translate-x-[120%] w-36 md:w-44 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg fade-in-up animate-float-medium">
        <p className="text-sm text-purple-200">Engagement</p>
        <h3 className="text-lg font-bold text-white">+42% Lift</h3>
      </div>

      <style jsx>{`
        .orbit-slow {
          animation: orbit 18s linear infinite;
        }
        .orbit-medium {
          animation: orbit 12s linear infinite;
        }
        .orbit-fast {
          animation: orbit 8s linear infinite;
        }
        @keyframes orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 1.2s ease forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 40px rgba(167, 139, 250, 0.4); }
          50% { box-shadow: 0 0 80px rgba(167, 139, 250, 0.8); }
        }

        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(10px); }
        }

        canvas.particle-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
