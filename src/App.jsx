import "./App.css";
import { useState } from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import SelectedBeast from "./components/SelectedBeast";

// Data
import beastS from "./assets/data";

export default App;

function App() {
  // start off not showing SelectedBeast
  const [showSb, setShowSb] = useState(false);

  function handleShowSb() {
    // flips the Boolean value of showSb
    setShowSb(!showSb);
  }

  return (
    <div>
      <Header />

      <>
        <button onClick={handleShowSb}>Show/Hide Selected Beast</button>
        {/* Switches whether SelectedBeast is shown */}
        {/* If the first value is false the second isn't read */}
        {showSb && <SelectedBeast handleShowSb={handleShowSb} />}
      </>

      <Gallery beastS={beastS} />
      <Footer />
    </div>
  );
}
