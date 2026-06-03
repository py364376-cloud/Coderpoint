import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
    <section className="py-20 bg-blue-400">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Contact Form Box */}
        <div className="bg-[#f5f7fb] border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm mb-16">
          <h2 className="text-3xl font-bold text-[#00a859] mb-2">Contact Us</h2>
          <p className="text-gray-500 mb-8 text-sm">We'd love to hear from you! Get in touch with us.</p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Grid for Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  className="w-full bg-[#fcfdfe] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2">Email ID</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-[#fcfdfe] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition"
                />
              </div>
            </div>

            {/* Grid for Phone, Center, and Course */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  className="w-full bg-[#fcfdfe] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2">Center</label>
                <select className="w-full bg-[#fcfdfe] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:border-green-500 transition">
                  <option>Select a Center</option>
                  <option>Noida</option>
                  <option>Online / Remote</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2">Course Applied For</label>
                <select className="w-full bg-[#fcfdfe] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:border-green-500 transition">
                  <option>Select a course</option>
                  <option>Full Stack Development</option>
                  <option>Cloud Computing</option>
                  <option>AI & ML</option>
                  <option>Data Science</option>
                </select>
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-sm font-semibold text-gray-500 mb-2">How can we help you?</label>
              <textarea 
                rows="4" 
                placeholder="Type your message" 
                className="w-full bg-[#fcfdfe] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-[#00a859] hover:bg-[#00914e] text-white font-semibold py-3.5 rounded-xl transition shadow-md text-sm"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Our Presence Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#00a859]">Our Presence</h2>
        </div>

        {/* Office Addresses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Registered Office */}
          <div className="bg-[#f5f7fb] border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-700 text-center mb-6">Registered office address</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p><strong className="text-gray-800 font-semibold">Phone:</strong> +91-xxxxxxxxxx</p>
              <p><strong className="text-gray-800 font-semibold">WhatsApp:</strong> +91-xxxxxxxxxx</p>
              <p><strong className="text-gray-800 font-semibold">Email:</strong> <a href="mailto:info@coderpoint.com" className="text-blue-600 hover:underline">info@codecat.com</a></p>
              <p className="leading-relaxed">
                <strong className="text-gray-800 font-semibold">Address:</strong> 9/1 261, Vashundhra, Ghaziabad, Uttar Pradesh - 201012
              </p>
            </div>
          </div>

          {/* Card 2: Noida Office */}
          <div className="bg-[#f5f7fb] border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-700 text-center mb-6">Noida office address</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p><strong className="text-gray-800 font-semibold">Phone:</strong> +91-123456789</p>
              <p><strong className="text-gray-800 font-semibold">WhatsApp:</strong> +91-0987654321</p>
              <p><strong className="text-gray-800 font-semibold">Email:</strong> <a href="mailto:info@coderpoint.com" className="text-blue-600 hover:underline">info@codecat.com</a></p>
              <p className="leading-relaxed">
                <strong className="text-gray-800 font-semibold">Address:</strong> 1ST & 3RD FLOOR, BLOCK-B-40/B-3, SECTOR-1, NEAR LEMON TREE HOTEL, NOIDA - 201301
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section>
      <div className="d-flex flex-row  justify-center m-5 align-middle w-fit">
      <div className=" bg-black">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28058.596187488667!2d77.30707036705454!3d28.469771875056065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce74067df1525%3A0x2adb819b4c474f85!2sCrown%20Interiorz%20Mall!5e0!3m2!1sen!2sin!4v1779438544508!5m2!1sen!2sin"
    width="1500px"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
</div>
    </section>
    <Footer/>
        </div>
        
  );
}