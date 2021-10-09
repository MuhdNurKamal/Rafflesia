import { useState } from "react";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/Navbar";
import logo from "./logo.svg";
import { RaffleReveal } from "./pages/RaffleReveal";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavBar />
      <RaffleReveal />
      <Footer />
    </div>
  );
}

export default App;
