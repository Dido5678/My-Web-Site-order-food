import ReactDOM from "react-dom/client";
// import { createRoot } from 'react-dom/client';
import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Specialties from "./Pages/Specialties";
import Reservation from "./Pages/Reservation";
import Blog from "./Pages/Blog";
import SingleBlog from "./Pages/Single-Blog";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


export default function App() {
  
  return (
    <BrowserRouter>
      <Routes> 
          <Route path={'/'} element={<Home />} />
          <Route path={"menu"} element={<Menu />} />
          <Route path={"specialties"} element={<Specialties />} />
          <Route path={"reservation"} element={<Reservation />} />
          <Route path={"blog"} element={<Blog />} />
          <Route path={"single-blog"} element={<SingleBlog />} />
          <Route path={"about"} element={<About />} />
          <Route path={"contact"} element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
              











