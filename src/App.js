import Navbar from './components/navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Projects from './components/projects';
import Services from './components/services';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import Testimonials from './components/testimonials';
import Navbarx from './components/navbar';


function App() {
  return (
    <div>
      <Navbarx />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/testimonials' element={<Testimonials />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
