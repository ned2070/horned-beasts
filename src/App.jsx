import "./App.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

// Data
import beastS from "./assets/data";

export default App;

function App() {
  return (
    <div>
      <Header />
      <Gallery beastS={beastS} />
      <Footer />
    </div>
  );
}
