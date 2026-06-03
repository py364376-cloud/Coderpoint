
import Home from "../pages/Home";
import { useNavigate } from "react-router-dom";


export default function Footer(){
  const navigate = useNavigate();
return(
    <footer className="bg-[#0f1724] text-gray-300 py-14 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Brand */}
    <div>
      <h3 className="text-white text-2xl font-bold mb-3">Coderpoint</h3>
      <p className="text-sm text-gray-400 max-w-xs">
        Empowering learners, connecting mentors, and building futures together.
      </p>
    </div>

   <div>
  <h4 className="text-white font-semibold underline mb-4">
    Quick Links
  </h4>

  <ul className="space-y-2 text-sm">
    {[
      ["/", "Home"],
      ["/courses", "Courses"],
      ["/contact", "Contact"],
      ["/about", "About"],
    ].map(([path, label]) => (
      <li key={path}>
        <button
          onClick={() => navigate(path)}
          className="hover:text-blue-400 transition"
        >
          {label}
        </button>
      </li>
    ))}
  </ul>
</div>
    {/* Follow Us & Addresses */}
    <div>
      <h4 className="text-white font-semibold underline mb-4">Follow Us</h4>
      <div className="flex gap-4 mb-6">
        {/* Facebook */}
        <a href="#" className="hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.991 22 12z"/>
          </svg>
        </a>
        {/* LinkedIn */}
        <a href="#" className="hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.98 0H13v2.18h.07C13.77 8.85 15.33 8 17.14 8 22.1 8 23 11.33 23 15.48V24h-5v-7.57c0-1.81-.03-4.13-2.52-4.13-2.52 0-2.9 1.97-2.9 4v7.7H7.98V8z"/>
          </svg>
        </a>
        {/* Instagram */}
        <a href="#" className="hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 1.999 2.029.643 3.385.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.571 3.667 1.927 5.023 1.356 1.356 3.168 1.842 5.023 1.927C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.667-.571 5.023-1.927 1.356-1.356 1.842-3.168 1.927-5.023C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.085-1.855-.571-3.667-1.927-5.023C20.645.643 18.833.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8a4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
          </svg>
        </a>
      </div>

      <div className="text-xs text-gray-400 space-y-3">
        <div>
          <p className="text-white text-sm font-semibold">Gurugram Office:</p>
          <p>1ST &amp; 3RD FLOOR, BLOCK-B-40/B-3, SECTOR-1,<br />NEAR Aravali, Gurugram - 678904</p>
        </div>
        <div>
          <p className="text-white text-sm font-semibold">Registered Office:</p>
          <p>9/1 261, Azamgarh, Uttar Pradesh - 232757</p>
        </div>
        <div className="space-y-1 pt-1">
          <p>👤 <a href="mailto:hr@drixcat.com" className="hover:text-white transition-colors">hr@codercat.com</a></p>
          <p>🏢 <a href="mailto:corporate@drixcat.com" className="hover:text-white transition-colors">corporate@codercat.com</a></p>
          <p>ℹ️ <a href="mailto:info@drixcat.com" className="hover:text-white transition-colors">info@codercat.com</a></p>
          <p>📞 <a href="tel:+919953356262" className="hover:text-white transition-colors">+91-5678906543</a></p>
        </div>
      </div>
    </div>
  </div>
</footer>

)
}