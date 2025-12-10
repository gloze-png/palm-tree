// src/pages/Index.jsx
import React, { useState, useEffect, useMemo, lazy, Suspense } from "react";
import hero from "../assets/hero.mp4";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import "@splidejs/react-splide/css";

const MarqueeSlider = lazy(() => import("../components/MarqueeSlider"));
const TestimonialsSection = lazy(() =>
  import("../components/TestimonialsSection")
);

// Optionally import images normally (bundler will handle), but rely on <img loading="lazy" />
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

function Index() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [mounted, setMounted] = useState(false);

  // Delay mount-dependent animations (like spinning SVG) until after first render
  useEffect(() => {
    setMounted(true);
  }, []);

  const services = useMemo(
    () => [
      {
        id: 1,
        title: "Mobile App Development",
        icon: <Icon icon="mdi:cellphone-link" width="40" height="40" />,
        description:
          "We create user-friendly mobile applications tailored to your business needs.",
      },
      {
        id: 2,
        title: "Web Development",
        icon: <Icon icon="mdi:web" width="40" height="40" />,
        description:
          "Our team builds responsive and engaging websites to enhance your online presence.",
      },
      {
        id: 3,
        title: "UI/UX Design",
        icon: <Icon icon="mdi:palette" width="40" height="40" />,
        description:
          "We design intuitive interfaces that provide an exceptional user experience.",
      },
      {
        id: 4,
        title: "Digital Marketing",
        icon: <Icon icon="mdi:bullhorn" width="40" height="40" />,
        description:
          "Boost your brand's visibility with our comprehensive digital marketing strategies.",
      },
      {
        id: 5,
        title: "SEO Services",
        icon: <Icon icon="mdi:magnify" width="40" height="40" />,
        description:
          "Improve your website's ranking on search engines with our expert SEO services.",
      },
      {
        id: 6,
        title: "Graphic Design",
        icon: <Icon icon="mdi:brush" width="40" height="40" />,
        description:
          "Our creative graphic designers craft visually appealing designs for your brand.",
      },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        id: 1,
        image: project1,
        category: "Desktop Application",
        title: "Inventory Application",
      },
      {
        id: 2,
        image: project2,
        category: "Mobile Application",
        title: "E-commerce Application",
      },
      {
        id: 3,
        image: project3,
        category: "Marketing",
        title: "Social Media Marketing",
      },
      {
        id: 4, // changed to unique id
        image: project4,
        category: "Marketing",
        title: "Digital Marketing",
      },
    ],
    []
  );

  const blogs = useMemo(
    () => [
      {
        id: 1,
        date: "2025-01-16",
        category: "Business",
        title:
          "How Startups Can Build a Strong Digital Presence in a Crowded Market",
        description:
          "Standing out online requires more than a good product. Startups must strategically combine branding, UX design, SEO, and storytelling to connect with their audience. Here’s a guide to building a scalable digital presence from day one.",
        image: blog1,
      },
      {
        id: 2,
        date: "2025-02-12",
        category: "AI & Innovation",
        title:
          "How Artificial Intelligence Is Transforming Everyday Business Operations",
        description:
          "From automation to predictive analytics, AI is reshaping the way businesses operate. We explore practical AI use cases that are driving efficiency and helping companies make smarter decisions.",
        image: blog2,
      },
      {
        id: 3,
        date: "2025-02-20",
        category: "Marketing",
        title:
          "The Power of Digital Storytelling: Turning Brands Into Experiences",
        description:
          "Storytelling is the backbone of strong brand communication. Learn how businesses can use emotional narratives, visuals, and customer-centric messaging to build trust and boost engagement.",
        image: blog3,
      },
    ],
    []
  );

  const brands = useMemo(
    () => [brand1, brand2, brand3, brand4],
    []
  );

  return (
    <>
      {/* Hero */}
      <div className="h-screen w-full relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={hero} type="video/mp4" />
        </video>

        <div className="px-[2%] md:px-[8%] xl:px-[12%] text-white h-full flex-col justify-center relative z-10 mt-40 pt-20">
          <h3 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-orange-500 to-blue-500 bg-clip-text text-transparent gradient-animate mb-8">
            Welcome to Antlinc
            <br />
            <span className="block">Your Gateway to</span>
            <span className="block">Digital Innovation.</span>
          </h3>

          <p className="text-xl md:text-2xl max-w-2xl font-normal leading-relaxed">
            At Antlinc, we build scalable digital products, smart systems, and
            next-gen experiences that shape the future of technology. Not only
            software — we also offer digital marketing, SEO, and graphics design
            services.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="service grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 py-16 px-[2%] md:px-[8%] xl:px-[12%]">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`w-full text-center group rounded-lg p-10 flex flex-col items-center justify-center relative h-[450px] transition-all cursor-pointer hover:-translate-y-1 duration-300
              ${
                activeIndex === index
                  ? "bg-gray-200 text-black"
                  : "bg-white text-secondary"
              }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(1)}
          >
            <div className="pb-4">{service.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      {/* About */}
      <div className="about mt-20 px-[2%] md:px-[8%] xl:px-[12%] flex justify-between items-start lg:flex-row flex-col gap-10">
        <div className="about-content w-full lg:w-[60%]">
          <span className="text-white bg-secondary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Welcome To Antlinc
          </span>
          <h2 className="text-3xl sm:text-6xl font-semibold sm:max-w-3xl my-6 leading-tight text-white">
            Empowering Businesses Through Intelligent Digital Solutions.
          </h2>
          <ul className="flex xl:flex-nowrap flex-wrap gap-5 lg:gap-10">
            <li className="w-full xl:w-1/2">
              <span className="font-semibold text-2xl text-white">Our Mission</span>
              <p className="text-md sm:text-xl mt-2 text-gray-300">
                Our mission is to merge technology, creativity, and strategy to
                create digital experiences that inspire, transform, and deliver
                measurable results for our clients.
              </p>
            </li>
            <li className="w-full xl:w-1/2">
              <span className="font-semibold text-2xl text-white">Our Goal</span>
              <p className="text-md sm:text-xl my-2 text-gray-300">
                Our goal is to empower businesses with smart, scalable, and
                innovative digital solutions that drive measurable growth,
                enhance user experience, and position brands for long-term
                success.
              </p>
              <Link to="/about" className="btn rounded-sm">
                <Icon icon="vaadin:plus" width="30" height="30" />
                <span>More About Us</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-[40%] flex justify-center items-center">
          <div className="flex items-center justify-center w-[250px] h-[250px] relative no-border rounded-full ">
            <svg
              viewBox="0 0 300 300"
              className={
                mounted
                  ? "absolute w-full h-full animate-[spin_20s_linear_infinite]"
                  : "hidden"
              }
            >
              <defs>
                <path
                  id="circlePath"
                  d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                />
              </defs>
              <text
                fill="#fff"
                fontSize="14"
                fontWeight="600"
                letterSpacing="4"
              >
                <textPath href="#circlePath" startOffset="0">
                  Empowering Businesses with Smart Digital Solutions — Empowering Businesses with Smart Digital Solutions
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="text-6xl md:text-8xl font-bold text-transparent"
                style={{
                  WebkitTextStrokeWidth: "3px",
                  WebkitTextStrokeColor: "#fff",
                }}
              >
                7+
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Slider */}
      <Suspense
        fallback={<div className="text-white p-10">Loading marquee...</div>}
      >
        <MarqueeSlider />
      </Suspense>

      {/* Projects */}
      <div className="featured mt-20 px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="featured-content w-full flex flex-col lg:flex-row items-start lg:items-end justify-between mb-10">
          <div>
            <span className="text-white bg-secondary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
              Featured Projects
            </span>
            <h2 className="text-2xl sm:text-6xl font-semibold sm:max-w-3xl mt-5 leading-tight text-white">
              Projects Showcase
            </h2>
          </div>

          <Link
            to="/projects"
            className="btn rounded-sm flex items-center gap-2 mt-5 lg:mt-0 w-fit"
          >
            <Icon icon="vaadin:plus" width="30" height="30" />
            <span>More Projects</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 w-full">
          {projects.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300/20 p-5 cursor-pointer rounded-lg group"
            >
              <div className="h-[550px] w-full rounded-lg overflow-hidden mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <Link to={`/projects/${item.id}`}>
                <span className="text-white border border-gray-50/20 px-1 font-semibold text-lg rounded-sm">
                  {item.category}
                </span>
                <h3 className="text-white sm:text-4xl font-semibold mt-2 hover:text-5xl transition-all duration-300">
                  {item.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <Suspense
        fallback={<div className="text-white p-10">Loading testimonials...</div>}
      >
        <TestimonialsSection />
      </Suspense>

      {/* Contact / Get in Touch */}
      <div className="py-[8%]">
        <div className="contact py-[8%] md:px-[8%] xl:px-[12%] h-[800px] relative">
          <div className="team-content w-full lg:w-[60%] mb-10">
            <span className="text-white bg-secondary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-6xl font-semibold sm:max-w-3xl mt-5 leading-tight text-white">
              Send Us Your Bright Ideas
            </h2>
            <Link to="/contact" className="text-white text-5xl font-semibold">
              Info@antlinc.com
            </Link>
            <p className="text-white text-xl pt-5">Abuja, Nigeria</p>
          </div>
          <div className="contact-image">
            <ul className="text-white grid grid-cols-2 gap-10 absolute right-46 bottom-80 social-icons">
              {["facebook", "instagram", "twitter", "linkedin"].map((name) => (
                <li key={name}>
                  <Link
                    to="/"
                    className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-secondary flex gap-8 items-center"
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
                      width="44"
                      height="44"
                      className="text-white bg-secondary p-2 rounded-full"
                    />
                    <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="team-content w-full lg:w-[60%] mb-10">
          <span className="text-white bg-secondary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Blog Post
          </span>
          <h2 className="text-4xl md:text-5xl lgtext-6xl font-semibold sm:max-w-5xl mt-5 leading-tight text-white">
            Breaking down complex tech topics into simple, actionable insights.
          </h2>
        </div>
        <div className="blog-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="blog-item group flex flex-col text-white"
            >
              <div className="blog-image overflow-hidden rounded-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <div className="blog-content pt-5">
                <p className="text-lg font-semibold pb-2">
                  <span className="bg-white text-secondary px-3 py-1 rounded-full me-3">
                    {blog.date}
                  </span>
                  {blog.category}
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-xl font-semibold hover:text-3xl transition"
                >
                  {blog.title}
                </Link>
                <p className="text-md text-white mt-3">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="brand py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="brand-content w-full lg:w-[60%] mb-10">
          <span className="text-white bg-secondary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Fantastic and Premium Clients
          </span>
          <h2 className="text-4xl md:text-5xl lgtext-6xl font-semibold sm:max-w-5xl mt-5 leading-tight text-white">
            We Have Had the Pleasure of Working with Some Clients
          </h2>
        </div>
        <div className="brand-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {brands.map((src, idx) => (
            <Link
              key={idx}
              to=""
              className="brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center"
            >
              <img
                src={src}
                alt={`brand-${idx}`}
                loading="lazy"
                className="object-contain"
              />
              <span>View Website</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Index;
