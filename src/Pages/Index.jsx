// src/pages/Index.jsx
import React, { useState, useEffect, useMemo, lazy, Suspense } from "react";
import hero from "../assets/hero.mp4";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";

const MarqueeSlider = lazy(() => import("../components/MarqueeSlider"));
const TestimonialsSection = lazy(() => import("../components/TestimonialsSection"));

// Images
import project1 from "../assets/work_dashboard_management.png";
import project2 from "../assets/work_mobile_app.png";
import project3 from "../assets/work2.jpg";
import project4 from "../assets/work1.jpg";

import blog1 from "../assets/blog_01.jpg";
import blog2 from "../assets/blog_02.jpg";
import blog3 from "../assets/blog_03.jpg";

import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import Hero from "../components/Hero";
import Services from "../components/Sevice";
import AboutPage from "../components/About";

function Index() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = useMemo(
    () => [
      {
        id: 1,
        title: "Mobile App Development",
        icon: <Icon icon="mdi:cellphone-link" width="40" height="40" />,
        description: "User-friendly mobile applications tailored to your needs.",
      },
      {
        id: 2,
        title: "Web Development",
        icon: <Icon icon="mdi:web" width="40" height="40" />,
        description: "Responsive, engaging websites that enhance your presence.",
      },
      {
        id: 3,
        title: "UI/UX Design",
        icon: <Icon icon="mdi:palette" width="40" height="40" />,
        description: "Intuitive interfaces for an exceptional user experience.",
      },
      {
        id: 4,
        title: "Digital Marketing",
        icon: <Icon icon="mdi:bullhorn" width="40" height="40" />,
        description: "Boost brand visibility with comprehensive strategies.",
      },
      {
        id: 5,
        title: "SEO Services",
        icon: <Icon icon="mdi:magnify" width="40" height="40" />,
        description: "Improve website ranking with expert SEO services.",
      },
      {
        id: 6,
        title: "Graphic Design",
        icon: <Icon icon="mdi:brush" width="40" height="40" />,
        description: "Visually appealing designs for your brand.",
      },
    ],
    []
  );

  const projects = useMemo(
    () => [
      { id: 1, image: project1, category: "Desktop Application", title: "Inventory Application" },
      { id: 2, image: project2, category: "Mobile Application", title: "E-commerce Application" },
      { id: 3, image: project3, category: "Marketing", title: "Social Media Marketing" },
      { id: 4, image: project4, category: "Marketing", title: "Digital Marketing" },
    ],
    []
  );

  const blogs = useMemo(
    () => [
      {
        id: 1,
        date: "2025-01-16",
        category: "Business",
        title: "How Startups Can Build a Strong Digital Presence",
        description:
          "Stand out online with branding, UX design, SEO, and storytelling for scalable digital presence.",
        image: blog1,
      },
      {
        id: 2,
        date: "2025-02-12",
        category: "AI & Innovation",
        title: "AI Transforming Everyday Business Operations",
        description:
          "Automation and predictive analytics reshape business operations and decision-making.",
        image: blog2,
      },
      {
        id: 3,
        date: "2025-02-20",
        category: "Marketing",
        title: "The Power of Digital Storytelling",
        description:
          "Use emotional narratives, visuals, and messaging to build trust and boost engagement.",
        image: blog3,
      },
    ],
    []
  );

  const brands = useMemo(() => [brand1, brand2, brand3, brand4], []);

  return (
    <>
      {/* HERO */}
      {/* <section className="relative w-full min-h-[70vh] md:min-h-screen overflow-hidden">
        <video autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover">
          <source src={hero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4 sm:px-6 md:px-[8%] xl:px-[12%] flex flex-col justify-center min-h-[70vh] md:min-h-screen py-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-orange-500 to-blue-500 bg-clip-text text-transparent leading-tight mb-4">
            Welcome to Antlinc
            <br />
            <span className="block">Your Gateway to</span>
            <span className="block">Digital Innovation.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-lg md:max-w-2xl text-white/90 leading-relaxed">
            We build scalable digital products, smart systems, and next-gen experiences. We also offer digital marketing, SEO, and graphic design services.
          </p>
        </div>
      </section> */}
      <Hero />
      {/* ABOUT */}
      <section className="py-12 px-4 md:px-[8%] xl:px-[12%]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:items-center">
          <div className="w-full lg:w-2/3">
            <span className="inline-block text-secondary bg-white px-3 py-2 font-semibold rounded-sm text-sm sm:text-base">
              Welcome To Antlinc
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold my-5 leading-tight text-white">
              Empowering Businesses Through Intelligent Digital Solutions.
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-xl text-white">Our Mission</h3>
                <p className="text-gray-300 mt-2">
                  Merge technology, creativity, and strategy to create digital experiences that inspire and deliver measurable results.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-white">Our Goal</h3>
                <p className="text-gray-300 mt-2">
                  Empower businesses with smart, scalable, and innovative digital solutions that drive growth and enhance UX.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 mt-4 btn">
                  <Icon icon="vaadin:plus" width="20" height="20" />
                  <span>More About Us</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56">
              <svg
                viewBox="0 0 300 300"
                className={mounted ? "absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" : "hidden"}
                aria-hidden
              >
                <defs>
                  <path id="circlePath" d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0" />
                </defs>
                <text fill="#fff" fontSize="10" fontWeight="600" letterSpacing="3">
                  <textPath href="#circlePath" startOffset="0">
                    Empowering Businesses with Smart Digital Solutions — Empowering Businesses with Smart Digital Solutions
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent" style={{ WebkitTextStrokeWidth: "2px", WebkitTextStrokeColor: "#fff" }}>
                  7+
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-12 md:py-16 px-4 md:px-[8%] xl:px-[12%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <button
              key={service.id}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(1)}
              className={`w-full text-center group rounded-lg p-6 sm:p-8 flex flex-col items-center justify-start relative transition-transform duration-300 hover:-translate-y-1
                ${activeIndex === index ? "bg-gray-200 text-black" : "bg-white text-secondary"}`}
              aria-label={service.title}
            >
              <div className="pb-4">{service.icon}</div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-sm text-gray-600">{service.description}</p>
            </button>
          ))}

        </div>
      </section>
      

      {/* MARQUEE */}
      <Suspense fallback={<div className="text-white p-6">Loading marquee...</div>}>
        <MarqueeSlider />
      </Suspense>

      {/* PROJECTS */}
      <section className="py-12 md:py-16 px-4 md:px-[8%] xl:px-[12%]">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-6 gap-4">
          <div>
            <span className=" text-secondary bg-white px-3 py-2 font-semibold rounded-sm text-sm sm:text-base">
              Featured Projects
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-white">Projects Showcase</h2>
          </div>
          <Link to="/projects" className="btn inline-flex items-center gap-2 mt-2 lg:mt-0">
            <Icon icon="vaadin:plus" width="18" height="18" />
            <span>More Projects</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((item) => (
            <article key={item.id} className="border border-gray-300/20 rounded-lg overflow-hidden group">
              <div className="w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-4 sm:p-5">
                <Link to={`/projects/${item.id}`} className="block">
                  <span className="inline-block text-sm font-semibold px-2 py-1 border border-white/20 rounded-sm text-white">
                    {item.category}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-semibold mt-3 text-white">{item.title}</h3>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Suspense fallback={<div className="text-white p-6">Loading testimonials...</div>}>
        <TestimonialsSection />
      </Suspense>

      {/* CONTACT */}
      <section className="py-12 md:py-16 px-4 md:px-[8%] xl:px-[12%]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 relative">
          <div className="w-full lg:w-2/3">
            <span className=" text-secondary bg-white px-3 py-2 font-semibold rounded-sm text-sm sm:text-base">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 text-white">Send Us Your Bright Ideas</h2>
            <Link to="/contact" className="block text-white text-lg sm:text-2xl font-semibold mt-4">Info@antlinc.com</Link>
            <p className="text-white text-base mt-3">Abuja, Nigeria</p>
          </div>
          <div className="w-full lg:w-1/3 flex items-center justify-end">
            <ul className="hidden md:flex flex-wrap gap-4">
              {["facebook", "instagram", "twitter", "linkedin"].map((name) => (
                <li key={name}>
                  <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-full text-secondary bg-white hover:bg-white hover:text-secondary transition">
                    <Icon icon={
                      name === "facebook" ? "ri:facebook-fill" :
                      name === "instagram" ? "iconoir:instagram" :
                      name === "twitter" ? "ri:twitter-fill" :
                      "ri:linkedin-fill"
                    } width="20" height="20" />
                    <span className="capitalize hidden lg:inline">{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-12 md:py-16 px-4 md:px-[8%] xl:px-[12%]">
        <div className="max-w-6xl mx-auto mb-8">
          <span className=" text-secondary bg-white px-3 py-2 font-semibold rounded-sm text-sm sm:text-base">Blog Post</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-white max-w-3xl">Breaking down complex tech topics into simple, actionable insights.</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <article key={blog.id} className="group bg-transparent">
              <div className="overflow-hidden rounded-lg aspect-[16/10]">
                <img src={blog.image} alt={blog.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="pt-4">
                <p className="text-sm font-semibold">
                  <span className="bg-white text-secondary px-2 py-1 rounded-full mr-2 text-xs">{blog.date}</span>
                  <span className="text-white/90">{blog.category}</span>
                </p>
                <Link to={`/blog/${blog.id}`} className="block mt-2">
                  <h3 className="text-lg font-semibold text-white">{blog.title}</h3>
                </Link>
                <p className="text-sm text-gray-300 mt-2">{blog.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-12 md:py-16 px-4 md:px-[8%] xl:px-[12%]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <span className=" text-secondary bg-white px-3 py-2 font-semibold rounded-sm text-sm sm:text-base">Fantastic and Premium Clients</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-white">We Have Had the Pleasure of Working with Some Clients</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
            {brands.map((src, idx) => (
              <Link key={idx} to="#" className="brand-item flex items-center justify-center p-3 border border-gray-50/10 rounded-md bg-white/5 hover:bg-white/10 transition">
                <img src={src} alt={`brand-${idx}`} loading="lazy" className="max-h-12 object-contain" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
