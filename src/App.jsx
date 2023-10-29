// styles
import "./App.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import SelectedBeast from "./components/SelectedBeast";

// Data
import beastS from "./assets/data";
import { useState } from "react";

export default App;

function App() {
  const [showSb, setShowSb] = useState(false);
  const [showSbModal, setShowSbModal] = useState({});

  function handleShowSb(beastS) {
    setShowSb(!showSb);
    setShowSbModal(beastS);
    // Test if showSb flip is working
    console.log(showSb);
  }

  return (
    <div>
      <Header />
      <Gallery beastS={beastS} handleShowSb={handleShowSb} />
      <Footer />

      {showSb && (
        <SelectedBeast showSbModal={showSbModal} handleShowSb={handleShowSb} />
      )}
    </div>
  );
}
