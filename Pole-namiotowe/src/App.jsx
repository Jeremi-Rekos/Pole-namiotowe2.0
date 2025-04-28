import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Oferta from "./pages/Oferta";
import Cennik from "./pages/Cennik";
import Galeria from "./pages/Galeria";
import Atrakcje from "./pages/Atrakcje";
import Kontakt from "./pages/Kontakt";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Preloader from "./components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    AOS.init({
      duration: 800,
      once: true,
    });
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Preloader />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/oferta" element={<Oferta />} />
        <Route path="/cennik" element={<Cennik />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/atrakcje" element={<Atrakcje />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
