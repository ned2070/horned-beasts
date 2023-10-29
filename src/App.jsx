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
  const [horns, setHorns] = useState("");

  function handleForm(event) {
    setHorns(event.target.value);
  }

  function handleShowSb(beastS) {
    setShowSb(!showSb);
    setShowSbModal(beastS);
    // Test if showSb flip is working
    // console.log(showSb);
  }

  return (
    <div>
      <Header />
      <label htmlFor="filter-form">
        Filter the beasts by their number of horns:{" "}
      </label>
      <select name="filter-form" id="filter-form" onChange={handleForm}>
        <option value="">All</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="100">100</option>
      </select>
      <Gallery beastS={beastS} horns={horns} handleShowSb={handleShowSb} />
      <Footer />
      {/* Show Selected Beast if shoeSb === true */}
      {showSb && (
        <SelectedBeast showSbModal={showSbModal} handleShowSb={handleShowSb} />
      )}
    </div>
  );
}
