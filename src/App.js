import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Smallportion from "./components/Smallportion";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
   <>
    <Navbar />
    <Hero />
    <Analytics/>
    <Smallportion />
    <Cards />
    <Footer />
   </>
  );
}

export default App;
