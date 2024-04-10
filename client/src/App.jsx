import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Description from "./components/Description/Description";

function App() {
  return (
    <main className="container-Global">
      <Header />
      <Body />
      <Description />
      <Footer />
    </main>
  );
}

export default App;
