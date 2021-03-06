import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Featuredgames from "./components/Featuredgames";
import Stadiapro from "./components/Stadiapro";
import Stadiaprogames from "./components/Stadiaprogames";
import Stadiastore from "./components/Stadiastore";
import Stadiastoregames from "./components/Stadiastoregames";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Featuredgames />
      <Stadiapro />
      <Stadiaprogames />
      <Stadiastore />
      <Stadiastoregames />
      <Footer />
    </div>
  );
}

export default App;
