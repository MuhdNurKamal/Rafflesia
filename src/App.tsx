import { useState } from "react";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/Navbar";
import logo from "./logo.svg";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavBar />
      <div className="flex justify-center">
        <h1 className="font-bold text-2xl text-blue-900">
          React and Tailwind with Vitejs!
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
