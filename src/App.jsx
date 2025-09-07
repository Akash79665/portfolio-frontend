// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Skills from "./pages/Skills";
// import Contact from "./pages/Contact";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import "./App.css"; // make sure global CSS is loaded

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Navbar />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


////////////////////////////////



import { BrowserRouter as Router } from "react-router-dom";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
           <Banner />
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

