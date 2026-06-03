import Footer from "../components/Footer";

export default function About() {
  return (
    <div>

      {/* Hero Banner */}
      <section
        className="relative py-32 px-6 text-center text-white overflow-hidden"
        style={{ background: "blue" }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Faint watermark icons */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 text-white text-[260px] font-black select-none">
          ⚙
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">About Codercat</h1>
          <p className="text-lg text-blue-100 mb-8">
            Empowering learners with skills that build real careers
          </p>
          <a
            href="/courses"
            className="inline-block bg-green-400 hover:bg-green-300 text-black font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Explore Courses
          </a>
        </div>
      </section>

      {/* About Us — image + text */}
      <section className="py-16 px-6 bg-blue-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop"
              alt="About Drixcat"
              className="w-full rounded-2xl object-cover"
              style={{ maxHeight: "400px" }}
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <div className="border border-gray-100  rounded-2xl shadow-sm p-8 bg-white">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">About Us</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                At Codercat, our highest priority is to help students and professionals build job-oriented skills that open real career opportunities.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe that learning should not just be about gaining knowledge, but about applying it in the industry with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-blue-400">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-blue-700 text-2xl">💡</span>
              <h3 className="text-lg font-bold text-blue-900">Our Mission</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              To empower learners with practical, job-ready skills through industry-aligned training, hands-on projects, and expert mentorship, enabling them to launch and advance successful careers in technology.
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-blue-700 text-2xl">👁️</span>
              <h3 className="text-lg font-bold text-blue-900">Our Vision</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              To bridge the gap between education and employment by becoming the most trusted platform for skill-based learning and career transformation in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-6 bg-blue-400">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            What We Do
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Codercat is a registered IT training institute offering
            industry-relevant courses in emerging technologies,
            designed to help you build a successful tech career.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Full Stack Development",
              "Cloud Computing",
              "AI & ML",
              "Data Science",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl mb-4 text-blue-700">💻</div>
                <h3 className="text-lg font-semibold text-blue-900">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Codercat */}
      <section className="py-20 px-6 bg-blue-400">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-14">
            Why Choose Codercat?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Job-Oriented Training",
                desc: "Curriculum designed for real-world industry needs.",
                icon: "🎓",
              },
              {
                title: "Expert Trainers",
                desc: "Learn from certified professionals and industry leaders.",
                icon: "👨‍🏫",
              },
              {
                title: "Hands-On Projects",
                desc: "Build real projects to showcase your skills.",
                icon: "💻",
              },
              {
                title: "Recognized Certifications",
                desc: "Get certificates valued by employers.",
                icon: "⭐",
              },
              {
                title: "Placement Assistance",
                desc: "Guidance and support for job placements.",
                icon: "🏅",
              },
              {
                title: "Community Support",
                desc: "Join a vibrant community of learners and mentors.",
                icon: "👥",
              },
              {
                title: "Industry Partnerships",
                desc: "Collaborations with top tech companies.",
                icon: "🤝",
              },
              {
                title: "Flexible Learning",
                desc: "Self-paced and instructor-led options.",
                icon: "✔️",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl mb-4 text-blue-700">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Recognitions */}
      <section className="py-20 px-6 bg-blue-400">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-14">
            Our Achievements & Recognitions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: "Best EdTech Startup 2023",
                desc: "Awarded for innovation in job-oriented tech education.",
              },
              {
                icon: "📜",
                title: "ISO 9001:2015 Certified",
                desc: "Recognized for quality management and training standards.",
              },
              {
                icon: "📅",
                title: "1000+ Successful Placements",
                desc: "Proudly placed over 1000 students in top tech companies.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition duration-300"
              >
                <div className="text-6xl mb-5">{item.icon}</div>

                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accredited By */}
      <section className="py-20 px-6 bg-blue-400">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-16">
            We Are Accredited By
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              {
                name: "Technical Hub",
                logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
              },
              {
                name: "Anna University",
                logo: "https://upload.wikimedia.org/wikipedia/en/8/87/Anna_University_Logo.png",
              },
              {
                name: "Google Education",
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
              },
              {
                name: "Google Analytics",
                logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Google_Analytics_logo.svg",
              },
              {
                name: "IBM",
                logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
              },
              {
                name: "IIT",
                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Indian_Institute_of_Technology_Delhi_Logo.svg/1200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition flex items-center justify-center h-32"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADDED BANNER & FOOTER SECTION FROM SCREENSHOT --- */}
      
        {/* Join Us Banner */}
        <section
          className="relative py-20 px-6 text-center text-white overflow-hidden"
          style={{ background: "blue" }}
        >
          {/* Blue Grid Blueprint Background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">
              Join us on our mission to bridge the gap between skills and careers.
            </h2>
            
            <p className="text-sm text-gray-200 mb-6">
              Still have queries? Contact us at:{" "}
              <a href="mailto:info@drixcat.com" className="underline hover:text-white transition">info@codercat.com</a>
              {" "}|{" "}
              <a href="tel:+919953356262" className="underline hover:text-white transition">+91-9953356262</a>
            </p>

            <a
              href="/join"
              className="inline-block bg-green-400 hover:bg-green-300 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md mb-6"
            >
              Join Our Program
            </a>

            {/* Social Icons Placeholder */}
            <div className="flex justify-center gap-4 text-xl">
              <a href="#" className="hover:text-gray-300 transition">🔗</a>
              <a href="#" className="hover:text-gray-300 transition">📸</a>
            </div>
          </div>
        </section>

        {/* Mega Footer Info Links */}
        <Footer/>
      

    </div>
  );
}