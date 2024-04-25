import { useContext } from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { LightModeContext } from "./Context/ThemeContext";

function App() {
  const { lightMode } = useContext(LightModeContext);
  return (
    <main className="container-Global">
      <Header />
      <div className={`app ${lightMode && "light-theme"}`}>
        <Body />
      </div>
      <Footer />
    </main>
  );
}

export default App;
