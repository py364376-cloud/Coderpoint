// import Footer from '../components/Footer';
// import PartnerCompanies from '../components/PartnerCompanies'
// import RatingSection from '../components/RatingSection'
import { useState, useEffect } from "react";
import Footer from '../components/Footer';
import PartnerCompanies from '../components/PartnerCompanies';
import RatingSection from '../components/RatingSection';
import { Link } from "react-router-dom";

function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count.toLocaleString()}+</>;
}
export default function Home(){
  const [loadingText, setLoadingText] = useState("Loading");

useEffect(() => {
  const interval = setInterval(() => {
    setLoadingText(prev =>
      prev.length >= 10 ? "Loading" : prev + "."
    );
  }, 300);

  return () => clearInterval(interval);
}, []);
return(
  
<div>
  {/* <section className="h-screen w-full bg-cover bg-center flex items-center"> */}
    {/* <section
  className="h-screen bg-cover bg-center flex items-center relative overflow-hidden"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop')",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>

  <div className="relative z-10  w-full h-full flex items-center">
    <div className="max-w-7xl mx-auto px-6 text-white">

      <span className="bg-green-500/20 border border-green-400 text-green-300 px-5 py-2 rounded-full">
        🚀 {loadingText}
      </span>

      <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
        Build Your Future With
        <span className="block text-green-400">
          Coding & AI Skills
        </span>
      </h1>

      <p className="mt-6 text-xl text-gray-300 max-w-2xl">
        Learn from industry experts, work on real projects and
        get placement assistance.
      </p>

      <div className="flex flex-wrap gap-5 mt-10">

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:scale-105 transition">
          <h2 className="text-5xl font-bold text-green-400">
            <Counter end={100} />
          </h2>
          <p className="text-gray-300 mt-2">Courses</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:scale-105 transition">
          <h2 className="text-5xl font-bold text-green-400">
            <Counter end={48000} />
          </h2>
          <p className="text-gray-300 mt-2">Students</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:scale-105 transition">
          <h2 className="text-5xl font-bold text-green-400">
            <Counter end={95} />
          </h2>
          <p className="text-gray-300 mt-2">Placement %</p>
        </div>

      </div>

      <div className="mt-10 flex flex-wrap gap-4">

        <a
          href="/courses"
          className="bg-green-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
        >
          Explore Courses
        </a>

        <a
          href="/login"
          className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
        >
          Register Now
        </a>

      </div>

    </div>
  </div>
</section> */}
  {/* </section> */}
{/* <section className="h-screen bg-cover bg-center flex items-center"
style={{
backgroundImage:"url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop')"
}}>
<div className="bg-black/70 w-full h-full flex items-center">
<div className="max-w-7xl mx-auto px-6 text-white">
<h1 className="text-7xl font-bold text-green-400 max-w-4xl">
Learn Technologies From Top Experts
</h1>

<p className="mt-6 text-2xl">
Industry level training with live projects & placement support.
</p>

<div className="flex gap-5 mt-10">
<div className="bg-white text-black p-6 rounded-2xl">
<h2 className="text-4xl font-bold">100+</h2>
<p>Courses</p>
</div>

<div className="bg-white text-black p-6 rounded-2xl">
<h2 className="text-4xl font-bold">48,000+</h2>
<p>Students</p>
</div>
</div>
</div>
</div>
</section> */}

<section
  className="min-h-screen bg-cover bg-center flex items-center relative overflow-hidden"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop')",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>

  <div className="relative z-10 w-full py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">

      {/* Loading Badge */}
      <span className="inline-block bg-green-500/20 border border-green-400 text-green-300 px-4 py-2 rounded-full text-sm sm:text-base">
        🚀 {loadingText}
      </span>

      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
        Build Your Future With
        <span className="block text-green-400">
          Coding & AI Skills
        </span>
      </h1>

      {/* Paragraph */}
      <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
        Learn from industry experts, work on real projects and
        get placement assistance.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-8 rounded-3xl hover:scale-105 transition">
          <h2 className="text-3xl sm:text-5xl font-bold text-green-400">
            <Counter end={100} />
          </h2>
          <p className="text-gray-300 mt-2">Courses</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-8 rounded-3xl hover:scale-105 transition">
          <h2 className="text-3xl sm:text-5xl font-bold text-green-400">
            <Counter end={48000} />
          </h2>
          <p className="text-gray-300 mt-2">Students</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-8 rounded-3xl hover:scale-105 transition">
          <h2 className="text-3xl sm:text-5xl font-bold text-green-400">
            <Counter end={95} />
          </h2>
          <p className="text-gray-300 mt-2">Placement %</p>
        </div>

      </div>

      {/* Buttons */}
      {/* <div className="mt-10 flex flex-col sm:flex-row gap-4">

        <a
          href="/courses"
          className="text-center bg-green-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:scale-105 transition"
        >
          Explore Courses
        </a>

        <a
          href="/login"
          className="text-center border border-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:text-black transition"
        >
          Register Now
        </a>

      </div> */}
     <div className="mt-10 flex flex-col sm:flex-row gap-4">

  <Link
    to="/courses"
    className="text-center bg-green-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:scale-105 transition"
  >
    Explore Courses
  </Link>

  <Link
    to="/login"
    className="text-center border border-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:text-black transition"
  >
    Register Now
  </Link>

</div>

    </div>
  </div>
</section>




<RatingSection />
<PartnerCompanies />

{/* Popular Courses */}
<section className="py-16 px-6 bg-blue-400">
  <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">Popular Courses</h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        title: "Data Analytics Using Python (Professional) + AI",
        desc: "Learn to analyze, visualize, and interpret data using Python, with AI tools for advanced insights. This course is ideal for data-driven decision-making roles.",
        duration: "6 months",
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&auto=format&fit=crop",
      },
      {
        title: "Data Science Using Python (Professional) + AI",
        desc: "A complete data science program with Python and AI applications. Learn the full data science workflow, from data collection to model deployment.",
        duration: "6 months",
        img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop",
      },
      {
        title: "Web Full Stack with Node.js",
        desc: "Complete full-stack development course focusing on Node.js backend and frontend technologies. Covers building modern web applications.",
        duration: "6 months",
        img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&auto=format&fit=crop",
      },
      {
        title: "Java Expert",
        desc: "An advanced Java course designed to strengthen your Java knowledge and prepare you for professional development roles.",
        duration: "6 months",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop",
      },
      {
        title: "AWS Certified DevOps Engineer",
        desc: "Advanced course on implementing DevOps practices on AWS cloud for automation, CI/CD, and monitoring.",
        duration: "2 months",
        img: "https://images.unsplash.com/photo-1667984390527-850f63192709?w=600&auto=format&fit=crop",
      },
      {
        title: "Advanced Digital Marketing",
        desc: "Advanced course for students who want to specialize in digital marketing and learn strategies to increase ROI, engagement, and conversions.",
        duration: "5 months",
        img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&auto=format&fit=crop",
      },
    ].map((course, i) => (
      <div key={i} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-44 object-cover"
        />
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
          <p className="text-sm text-gray-500 flex-1 mb-4">{course.desc}</p>
          <div className="flex items-center justify-between mt-auto">
            <a
              href="/courses"
              className="bg-green-400 hover:bg-green-300 text-black text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
            >
              Explore
            </a>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              🕐 {course.duration}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="text-center mt-10">
    <a
      href="/courses"
      className="text-gray-800 font-semibold hover:text-green-500 transition-colors inline-flex items-center gap-1"
    >
      Browse More Courses <span>›</span>
    </a>
  </div>
</section>

{/* Our Alumni */}
<section className="py-16 px-6 bg-blue-400">
  <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">Our Alumni</h2>

  {(() => {
    const alumni = [
      [
        { name: "Aarav Sharma",  batch: "Batch of 2021", role: "Java Expert",        img: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Priya Singh",   batch: "Batch of 2020", role: "Digital Marketing",  img: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Rahul Verma",   batch: "Batch of 2022", role: "MERN Stack",         img: "https://randomuser.me/api/portraits/men/56.jpg" },
      ],
      [
        { name: "Sneha Kapoor",  batch: "Batch of 2021", role: "Data Science",       img: "https://randomuser.me/api/portraits/women/68.jpg" },
        { name: "Arjun Mehta",   batch: "Batch of 2023", role: "DevOps Engineer",    img: "https://randomuser.me/api/portraits/men/71.jpg" },
        { name: "Kavya Nair",    batch: "Batch of 2022", role: "UI/UX Designer",     img: "https://randomuser.me/api/portraits/women/12.jpg" },
      ],
    ];

    return (
      <>
        <style>{`
          .alumni-slide { display: none; }
          .alumni-slide.active { display: flex; }
        `}</style>

        <div id="alumni-slider">
          {alumni.map((group, gi) => (
            <div
              key={gi}
              id={`alumni-group-${gi}`}
              className={`alumni-slide flex-wrap justify-center gap-6 mb-8 ${gi === 0 ? "active" : ""}`}
            >
              {group.map((person, pi) => (
                <div
                  key={pi}
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col items-center px-10 py-8 text-center"
                  style={{ minWidth: "260px", maxWidth: "300px" }}
                >
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-24 h-24 rounded-full object-cover mb-5 border-4 border-blue-50"
                  />
                  <p className="text-lg font-semibold text-gray-900">{person.name}</p>
                  <p className="text-sm text-gray-400 mt-1">{person.batch}</p>
                  <p className="text-sm text-gray-600 mt-1">{person.role}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-2">
          {alumni.map((_, gi) => (
            <button
              key={gi}
              id={`alumni-dot-${gi}`}
              onClick={() => {
                alumni.forEach((_, idx) => {
                  const slide = document.getElementById(`alumni-group-${idx}`);
                  const dot   = document.getElementById(`alumni-dot-${idx}`);
                  if (slide) slide.classList.toggle("active", idx === gi);
                  if (dot)   dot.className = `w-3 h-3 rounded-full transition-colors ${idx === gi ? "bg-blue-600" : "bg-gray-300"}`;
                });
              }}
              className={`w-3 h-3 rounded-full transition-colors ${gi === 0 ? "bg-blue-600" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </>
    );
  })()}
</section>

{/* Where Our Students Are Making an Impact */}
<section className="py-16 px-6 bg-blue-400">
  <h2 className="text-center text-2xl font-semibold text-gray-800 mb-10">
    Where Our Students Are Making an Impact
  </h2>

  {/* Marquee rows */}
  <style>{`
    @keyframes marquee-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes marquee-right {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    .marquee-left { animation: marquee-left 30s linear infinite; }
    .marquee-right { animation: marquee-right 30s linear infinite; }
    .marquee-wrap { overflow: hidden; }
    .marquee-wrap:hover .marquee-left,
    .marquee-wrap:hover .marquee-right { animation-play-state: paused; }
  `}</style>

  {/* Row 1 — scrolls left */}
  {[
    [
      { name: "Broadcast", logo: "https://logo.clearbit.com/broadcast.com" },
      { name: "Fiserv", logo: "https://logo.clearbit.com/fiserv.com" },
      { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
      { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
      { name: "Aspire", logo: "https://logo.clearbit.com/aspiresys.com" },
      { name: "Capgemini", logo: "https://logo.clearbit.com/capgemini.com" },
      { name: "Carat Lane", logo: "https://logo.clearbit.com/caratlane.com" },
      { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
    ],
    [
      { name: "JLL", logo: "https://logo.clearbit.com/jll.com" },
      { name: "Justdial", logo: "https://logo.clearbit.com/justdial.com" },
      { name: "Klenty", logo: "https://logo.clearbit.com/klenty.com" },
      { name: "L&T", logo: "https://logo.clearbit.com/larsentoubro.com" },
      { name: "Lenovo", logo: "https://logo.clearbit.com/lenovo.com" },
      { name: "Grappus", logo: "https://logo.clearbit.com/grappus.com" },
      { name: "HCL", logo: "https://logo.clearbit.com/hcltech.com" },
      { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
    ],
    [
      { name: "Tech Mahindra", logo: "https://logo.clearbit.com/techmahindra.com" },
      { name: "Thoughtworks", logo: "https://logo.clearbit.com/thoughtworks.com" },
      { name: "Virtusa", logo: "https://logo.clearbit.com/virtusa.com" },
      { name: "Zoho", logo: "https://logo.clearbit.com/zoho.com" },
      { name: "PayPal", logo: "https://logo.clearbit.com/paypal.com" },
      { name: "Siemens", logo: "https://logo.clearbit.com/siemens.com" },
      { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
      { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
    ],
  ].map((row, rowIdx) => (
    <div key={rowIdx} className="marquee-wrap mb-4">
      <div
        className={rowIdx % 2 === 0 ? "flex marquee-left" : "flex marquee-right"}
        style={{ width: "max-content" }}
      >
        {[...row, ...row].map((company, i) => (
          <div
            key={i}
            className="flex items-center justify-center bg-white border border-gray-100 rounded-xl shadow-sm mx-2 px-6 py-4"
            style={{ minWidth: "160px", height: "72px" }}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="max-h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <span className="hidden text-sm font-semibold text-gray-600">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  ))}
</section>

{/* Accreditations & Partnerships */}
<section className="py-16 px-6 bg-blue-400">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-3">
      Our Accreditations &amp; Partnerships
    </h2>
    <p className="text-gray-500 mb-12">
      We are proudly associated and recognized by leading organizations.
    </p>

    <div className="marquee-wrap">
      <div className="flex marquee-left" style={{ width: "max-content" }}>
        {[
          { name: "Google for Education", logo: "https://logo.clearbit.com/edu.google.com" },
          { name: "Google Analytics", logo: "https://logo.clearbit.com/analytics.google.com" },
          { name: "IAF", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/IAF_logo.svg/120px-IAF_logo.svg.png" },
          { name: "IBM Certified", logo: "https://logo.clearbit.com/ibm.com" },
          { name: "IIT Delhi", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/120px-Indian_Institute_of_Technology_Delhi_Logo.svg.png" },
          { name: "IIT Kanpur", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/IIT_Kanpur_Logo.svg/120px-IIT_Kanpur_Logo.svg.png" },
          { name: "ISO", logo: "https://logo.clearbit.com/iso.org" },
          { name: "Ministry of Corporate Affairs", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/60px-Emblem_of_India.svg.png" },
          { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
          { name: "MSDE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/60px-Emblem_of_India.svg.png" },
        ].concat([
          { name: "Google for Education", logo: "https://logo.clearbit.com/edu.google.com" },
          { name: "Google Analytics", logo: "https://logo.clearbit.com/analytics.google.com" },
          { name: "IAF", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/IAF_logo.svg/120px-IAF_logo.svg.png" },
          { name: "IBM Certified", logo: "https://logo.clearbit.com/ibm.com" },
          { name: "IIT Delhi", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/120px-Indian_Institute_of_Technology_Delhi_Logo.svg.png" },
          { name: "IIT Kanpur", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/IIT_Kanpur_Logo.svg/120px-IIT_Kanpur_Logo.svg.png" },
          { name: "ISO", logo: "https://logo.clearbit.com/iso.org" },
          { name: "Ministry of Corporate Affairs", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/60px-Emblem_of_India.svg.png" },
          { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
          { name: "MSDE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/60px-Emblem_of_India.svg.png" },
        ]).map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl shadow-sm mx-3 px-6 py-5"
            style={{ minWidth: "140px", height: "90px" }}
          >
            <img
              src={item.logo}
              alt={item.name}
              className="max-h-10 max-w-[110px] object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <span className="hidden text-xs font-semibold text-gray-600 text-center">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* CTA Section */}
<section
  className="relative py-24 px-6 text-center text-white overflow-hidden"
  style={{
    background: "linear-gradient(135deg, #1a2a6c 0%, #2d4bbf 50%, #1a2a6c 100%)",
  }}
>
  {/* Grid overlay */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  />
  <div className="relative z-10 max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold mb-6">
      Join us on our mission to bridge the gap between skills and careers.
    </h2>
    <p className="text-lg mb-2 text-blue-200">Still have queries? Contact us at:</p>
    <div className="flex justify-center gap-6 mb-8 text-blue-300">
      <a href="mailto:info@codercat.com" className="underline hover:text-white transition-colors">
        info@Codercat.com
      </a>
      <span className="text-blue-400">|</span>
      <a href="tel:+919953356262" className="underline hover:text-white transition-colors">
        +91-9616774091
      </a>
    </div>
    <a
      href="#"
      className="inline-block bg-green-400 hover:bg-green-300 text-black font-semibold px-10 py-4 rounded-full text-lg transition-colors mb-8"
    >
      Join Our Program
    </a>
    <div className="flex justify-center gap-5 mt-2">
      {/* LinkedIn */}
      <a href="#" className="border border-blue-300 rounded-lg p-2 hover:bg-white/10 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.98 0H13v2.18h.07C13.77 8.85 15.33 8 17.14 8 22.1 8 23 11.33 23 15.48V24h-5v-7.57c0-1.81-.03-4.13-2.52-4.13-2.52 0-2.9 1.97-2.9 4v7.7H7.98V8z"/>
        </svg>
      </a>
      {/* Instagram */}
      <a href="#" className="border border-blue-300 rounded-lg p-2 hover:bg-white/10 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 1.999 2.029.643 3.385.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.571 3.667 1.927 5.023 1.356 1.356 3.168 1.842 5.023 1.927C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.667-.571 5.023-1.927 1.356-1.356 1.842-3.168 1.927-5.023C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.085-1.855-.571-3.667-1.927-5.023C20.645.643 18.833.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8a4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      </a>
    </div>
  </div>
</section>

{/* Footer */}
<Footer/>

</div>
)
}