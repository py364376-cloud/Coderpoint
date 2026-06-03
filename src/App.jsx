import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import About from './pages/About'

export default function App(){
return(
<>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/courses" element={<Courses />} />
<Route path="/contact" element={<Contact />} />
<Route path="/about" element={<About />} />
</Routes>
</>
)
}
