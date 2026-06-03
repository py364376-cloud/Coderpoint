import Footer from "../components/Footer";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-200 p-4">
      <div className="flex w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl">

        {/* Left — Form Panel */}
        <div className="bg-white w-full md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-green-500 mb-1">Online Registration</h2>
            <p className="text-xs text-gray-400 mb-6">
              Register online today and take the first step towards success!
            </p>

            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Full Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 bg-gray-50"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Email ID</label>
                  <input
                    type="email"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 bg-gray-50"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91-xxxxxxxxxx"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 bg-gray-50"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Course Applied For</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300 bg-gray-50">
                    <option value="">Select a course</option>
                    <option>Python</option>
                    <option>Java</option>
                    <option>Web Full Stack</option>
                    <option>Data Science</option>
                    <option>Digital Marketing</option>
                    <option>Cloud Computing</option>
                    <option>App Development</option>
                  </select>
                </div>
              </div>

              {/* Current Address */}
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Current Address</label>
                <textarea
                  rows={2}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 bg-gray-50 resize-none"
                />
              </div>

              {/* Permanent Address */}
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Permanent Address</label>
                <textarea
                  rows={2}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 bg-gray-50 resize-none"
                />
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Training Mode</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300 bg-gray-50">
                    <option value="">Select Mode</option>
                    <option>Online</option>
                    <option>Offline</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Amount / Fees Paid</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 bg-gray-50"
                  />
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button className="mt-6 w-full bg-blue-400 hover:bg-blue-300 text-black font-semibold py-3 rounded-xl transition-colors text-sm">
              Next
            </button>

            <p className="text-center text-xs text-gray-400 mt-3">
              By submitting this form, you agree to our{" "}
              <a href="#" className="text-blue-500 underline">Terms &amp; Conditions</a>.
            </p>
          </div>

          {/* Online fee payment */}
          <div className="mt-6 text-center">
            <p className="text-sm font-semibold text-gray-700 mb-2">Online fee payment</p>
            <div className="flex justify-center gap-4 text-xs text-gray-500">
              {["Secure", "Safe", "Saral"].map((label) => (
                <span key={label} className="flex items-center gap-1">
                  <span className="text-green-500 font-bold">✔</span> {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Branding Panel */}
        <div
          className="hidden md:flex w-1/2 flex-col items-center justify-center text-white text-center p-8"
          style={{
            background: "linear-gradient(160deg, #2d5a3d 0%, #1a3a28 40%, #0f2218 30%)",
          }}
        >
          {/* X + CoderCAT logo */}
          <div className="mb-6">
            <div
              className="text-7xl font-black tracking-tighter leading-none"
              style={{
                background: "linear-gradient(180deg, #c0c0c0 0%, #808080 50%, #404040 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              C
            </div>
            <div className="flex items-center justify-center gap-0 text-3xl font-black tracking-widest mt-1">
              <span style={{ color: "#c0c0c0" }}>CODER</span>
              <span
                style={{
                  background: "linear-gradient(180deg, #c0c0c0 0%, #606060 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontStyle: "italic",
                }}
              >
                Point
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed font-medium">
            Empowering Learners,<br />Building Futures
          </p>
        </div>

      </div>
      
    
    </div>
    
  )
}