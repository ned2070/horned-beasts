import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

import beastS from "./assets/beastS";

function App() {
  return (
    <div>
      <Header />
      <Gallery beastS={beastS} />
      <Footer />
    </div>
  );
}

export default App;
