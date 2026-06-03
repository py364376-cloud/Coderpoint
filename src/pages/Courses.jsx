import Footer from "../components/Footer";

export default function Courses(){
return(
<div>

{/* Tech Career Programs Hero */}
<section
  className="relative py-24 px-6 text-center text-white overflow-hidden"
  style={{ background: "#0d1f1a" }}
>
  {/* Subtle grid overlay */}
  <div
    className="absolute inset-0 pointer-events-none opacity-20"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}
  />

  <div className="relative z-10 max-w-2xl mx-auto">
    <h1 className="text-5xl font-extrabold mb-6 leading-tight">
      Tech Career Programs
    </h1>

    <ul className="text-left inline-block space-y-3 mb-6 text-gray-300">
      {[
        "Mentors from top global product companies",
        "A portfolio of real-world projects",
        "Globally recognized certifications",
      ].map((point) => (
        <li key={point} className="flex items-center gap-3">
          <span className="text-green-400 font-bold text-lg">✓</span>
          {point}
        </li>
      ))}
    </ul>

    <p className="text-sm text-gray-400 mb-8 font-medium tracking-wide">
      Online/Offline classes available
    </p>

    <a
      href="#courses-list"
      className="inline-block bg-green-400 hover:bg-green-300 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
    >
      Explore Programs
    </a>
  </div>
</section>

{/* Leading EdTech Platform */}
<section className="py-16 px-6 bg-blue-400 text-center">
  <h2 className="text-3xl font-bold text-white mb-4">Leading EdTech Platform</h2>
  <p className="text-gray-500 max-w-lg mx-auto mb-10 text-sm leading-relaxed">
    Drixcat empowers learners with industry-driven tech programs, hands-on mentorship,
    and globally recognized certifications to launch and accelerate your career.
  </p>

  <p className="font-semibold text-gray-700 mb-8">We Are Accredited By</p>

  <style>{`
    @keyframes scroll-accred {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .accred-track { animation: scroll-accred 28s linear infinite; }
    .accred-wrap:hover .accred-track { animation-play-state: paused; }
  `}</style>

  {[
    [
      { name: "AICTE Delhi",              logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/AICTE_Logo.png/120px-AICTE_Logo.png" },
      { name: "Anna University Chennai",  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Anna_University_Logo.png/120px-Anna_University_Logo.png" },
      { name: "Google for Education",     logo: "https://logo.clearbit.com/edu.google.com" },
      { name: "Google Analytics",         logo: "https://logo.clearbit.com/analytics.google.com" },
      { name: "IAF",                      logo: "https://logo.clearbit.com/iaf.nu" },
      { name: "IBM Certified",            logo: "https://logo.clearbit.com/ibm.com" },
      { name: "IIT Delhi",                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/120px-Indian_Institute_of_Technology_Delhi_Logo.svg.png" },
      { name: "IIT Kanpur",               logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/IIT_Kanpur_Logo.svg/120px-IIT_Kanpur_Logo.svg.png" },
      { name: "ISO",                      logo: "https://logo.clearbit.com/iso.org" },
    ],
    [
      { name: "Ministry of Corporate Affairs", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/60px-Emblem_of_India.svg.png" },
      { name: "Microsoft",                logo: "https://logo.clearbit.com/microsoft.com" },
      { name: "MSDE",                     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/60px-Emblem_of_India.svg.png" },
      { name: "NSDC",                     logo: "https://logo.clearbit.com/nsdcindia.org" },
      { name: "Diablo",                   logo: "https://logo.clearbit.com/diaabloinstitute.com" },
      { name: "CIIM",                     logo: "https://logo.clearbit.com/ciim.in" },
      { name: "Skill India",              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/60px-Emblem_of_India.svg.png" },
      { name: "SWAYAM Plus",              logo: "https://logo.clearbit.com/swayam.gov.in" },
    ],
  ].map((row, ri) => (
    <div key={ri} className="accred-wrap overflow-hidden mb-6">
      <div className="accred-track flex" style={{ width: "max-content" }}>
        {[...row, ...row].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center mx-4 px-5 py-3 bg-white border border-gray-100 rounded-xl shadow-sm"
            style={{ minWidth: "140px", height: "80px" }}
          >
            <img
              src={item.logo}
              alt={item.name}
              className="max-h-10 max-w-[110px] object-contain"
              onError={(e) => { e.target.style.display="none"; e.target.nextSibling.style.display="block"; }}
            />
            <span className="hidden text-xs font-semibold text-gray-600 text-center">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  ))}
</section>

<section id="courses-list" className="py-16 px-6 bg-blue-400">
  <h2 className="text-center text-3xl font-bold text-white mb-10">Explore Career Program</h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        name: "Python",
        count: "6 Courses",
        desc: "Master Python — the world's most versatile language! Build a solid foundation for AI, data science, web development, and automation through hands-on Projects.",
        img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&auto=format&fit=crop",
      },
      {
        name: "Java",
        count: "5 Courses",
        desc: "Learn Java — the core of enterprise and Android development! Get hands-on experience in OOP, app building, and real-world Projects.",
        img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop",
      },
      {
        name: "Web Development & Full Stack Development",
        count: "7 Courses",
        desc: "Become a full-stack developer! Build responsive websites and dynamic apps with modern tools.",
        img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&auto=format&fit=crop",
      },
      {
        name: "Programming",
        count: "4 Courses",
        desc: "Build a strong coding foundation! Learn programming concepts, logic, and algorithms through real-world exercises.",
        img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&auto=format&fit=crop",
      },
      {
        name: "App Development",
        count: "7 Courses",
        desc: "Create powerful mobile apps! Learn Android & iOS development, UI/UX design, and build real-world Projects.",
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop",
      },
      {
        name: "Digital Marketing",
        count: "3 Courses",
        desc: "Master online growth and brand visibility! Learn SEO, social media marketing, Google Ads, and analytics to boost conversions.",
        img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&auto=format&fit=crop",
      },
      {
        name: "ERP",
        count: "8 Courses",
        desc: "Learn how businesses run efficiently with ERP systems! Manage finance, HR, and supply chain using real-world tools.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop",
      },
      {
        name: "Software Testing",
        count: "2 Courses",
        desc: "Ensure top-quality software! Learn manual and automated testing, bug tracking, and QA best practices.",
        img: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=600&auto=format&fit=crop",
      },
      {
        name: "Graphic & Creative Design",
        count: "3 Courses",
        desc: "Bring ideas to life with stunning designs! Learn Photoshop, Illustrator, Canva, and create logos, banners, and digital art.",
        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop",
      },
      {
        name: "CAD Training",
        count: "8 Courses",
        desc: "Design with precision using CAD tools! Learn 2D drafting, 3D modeling, and engineering techniques for architecture and manufacturing.",
        img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop",
      },
      {
        name: "Network & Security",
        count: "7 Courses",
        desc: "Protect and manage networks like a pro! Learn networking, cybersecurity, firewalls, and protocols to secure systems.",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop",
      },
      {
        name: "Cloud Computing",
        count: "15 Courses",
        desc: "Unlock scalable cloud solutions! Learn AWS, Azure, Google Cloud, virtualization, and cloud deployment.",
        img: "https://images.unsplash.com/photo-1667984390527-850f63192709?w=600&auto=format&fit=crop",
      },
      {
        name: "Database & MIS",
        count: "3 Courses",
        desc: "Organize and analyze data efficiently! Learn SQL, database management, and MIS for data-driven decisions.",
        img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop",
      },
    ].map((course, i) => (
      <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
        <img src={course.img} alt={course.name} className="w-full h-44 object-cover" />
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-bold text-gray-900 mb-2">{course.name}</h3>
          <p className="text-sm text-gray-500 flex-1 mb-4">{course.desc}</p>
          <div className="flex items-center justify-between mt-auto">
            <button className="bg-green-400 hover:bg-green-300 text-black text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
              Know More
            </button>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              📖 {course.count}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Don't Know Which Program to Choose */}
<section className="py-16 px-6 bg-blue-400">
  <div className="max-w-4xl mx-auto text-center mb-10">
    <h2 className="text-3xl font-bold text-white mb-2">Don't Know Which Program to Choose?</h2>
    <p className="text-gray-600">Talk to Our Experts</p>
  </div>

  <div className="max-w-4xl mx-auto bg-gray-100 rounded-2xl p-8">
    {(() => {
      const inputCls = "w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300 mt-1";
      const labelCls = "block text-sm font-medium text-gray-600 mb-1";
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={labelCls}>Full Name</label>
              <input type="text" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Email</label>
              <input type="email" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Phone</label>
              <input type="tel" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Education Qualification</label>
              <input type="text" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Current Profile</label>
              <input type="text" placeholder="e.g., Student" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Year of Graduation</label>
              <input type="month" className={inputCls} />
            </div>
          </div>

          <div className="mb-8">
            <label className={labelCls}>Languages Spoken</label>
            <input type="text" className={inputCls} />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="bg-green-400 hover:bg-green-300 text-black font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              Send Request
            </button>
            <button
              type="button"
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              Reset
            </button>
          </div>
        </>
      );
    })()}
  </div>
</section>

{/* Our Achievements & Awards */}
<section className="py-16 px-6 bg-blue-400">
  <h2 className="text-center text-3xl font-bold text-green-500 mb-10">Our Achievements &amp; Awards</h2>
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        icon: "🏅",
        title: "Best EdTech Startup 2023",
        desc: "Recognized for innovation in tech education by EdTech India.",
      },
      {
        icon: "🌐",
        title: "Global Impact Award",
        desc: "Awarded for empowering 10,000+ students globally.",
      },
      {
        icon: "🤝",
        title: "Top Industry Collaboration",
        desc: "Partnered with 50+ leading tech companies for real-world projects.",
      },
    ].map((item, i) => (
      <div key={i} className="bg-gray-50 rounded-2xl p-8 text-center flex flex-col items-center">
        <span className="text-4xl mb-4 grayscale opacity-60">{item.icon}</span>
        <h3 className="font-semibold text-gray-800 mb-3">{item.title}</h3>
        <p className="text-sm text-gray-500">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

{/* Learn from Top Industry Experts */}
<section className="py-16 px-6 bg-gray-100 text-center">
  <h2 className="text-3xl font-bold text-green-500 mb-3">Learn from Top Industry Experts</h2>
  <p className="text-gray-500 max-w-xl mx-auto mb-10 text-sm leading-relaxed">
    Our mentors hail from the world's leading tech companies, bringing real-world experience and insights to help you succeed.
  </p>
  <div className="flex flex-wrap justify-center items-center gap-10">
    {[
      { name: "Google",        logo: "https://logo.clearbit.com/google.com" },
      { name: "Amazon",        logo: "https://logo.clearbit.com/amazon.com" },
      { name: "Microsoft",     logo: "https://logo.clearbit.com/microsoft.com" },
      { name: "Tech Mahindra", logo: "https://logo.clearbit.com/techmahindra.com" },
    ].map((co, i) => (
      <div key={i} className="flex items-center justify-center" style={{ height: "48px" }}>
        <img
          src={co.logo}
          alt={co.name}
          className="max-h-10 max-w-[140px] object-contain"
          onError={(e) => { e.target.style.display="none"; e.target.nextSibling.style.display="block"; }}
        />
        <span className="hidden text-lg font-bold text-gray-700">{co.name}</span>
      </div>
    ))}
  </div>
</section>

{/* Benefits of Career Programs */}
<section className="py-16 px-6 bg-white text-center">
  <h2 className="text-3xl font-bold text-green-500 mb-12">Benefits of Career Programs</h2>

  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-12 text-left">
    {[
      { icon: "🎓", text: "Globally recognized certifications" },
      { icon: "💼", text: "Job-ready skills & portfolio" },
      { icon: "🤝", text: "1:1 mentorship from industry experts" },
      { icon: "🌍", text: "Flexible online/offline learning" },
      { icon: "📈", text: "Career guidance & placement support" },
      { icon: "🔧", text: "Hands-on real-world projects" },
      { icon: "🏆", text: "Access to alumni network" },
      { icon: "📚", text: "Lifetime access to learning resources" },
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-4">
        <span className="text-3xl">{item.icon}</span>
        <span className="text-gray-600 text-base">{item.text}</span>
      </div>
    ))}
  </div>

  <a
    href="/courses"
    className="inline-block bg-green-400 hover:bg-green-300 text-black font-semibold px-10 py-3 rounded-full transition-colors text-base"
  >
    Join Our Program
  </a>
</section>

{/* Still Have Queries */}
<section className="py-16 px-6 text-center" style={{ background: "#0d1f1a" }}>
  <h2 className="text-3xl font-bold text-white mb-2">Still Have Queries?</h2>
  <p className="text-green-400 font-semibold mb-6">Contact Us</p>
  <div className="flex justify-center items-center gap-6 text-gray-300 mb-6">
    <span className="flex items-center gap-2">
      <span>📧</span>
      <a href="mailto:info@drixcat.com" className="hover:text-white transition-colors">info@codercat.com</a>
    </span>
    <span className="text-gray-600">|</span>
    <span className="flex items-center gap-2">
      <span>📱</span>
      <a href="tel:+919953356262" className="hover:text-white transition-colors">+91-9953356262</a>
    </span>
  </div>
  <div className="flex justify-center gap-4">
    <a href="#" className="border border-gray-600 rounded-lg p-2 hover:bg-white/10 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.98 0H13v2.18h.07C13.77 8.85 15.33 8 17.14 8 22.1 8 23 11.33 23 15.48V24h-5v-7.57c0-1.81-.03-4.13-2.52-4.13-2.52 0-2.9 1.97-2.9 4v7.7H7.98V8z"/>
      </svg>
    </a>
    <a href="#" className="border border-gray-600 rounded-lg p-2 hover:bg-white/10 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  </div>
</section>

{/* Footer */}
<Footer/>

</div>
)
}