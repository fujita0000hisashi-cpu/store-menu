import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { About } from "./components/About";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";

export default function App() {
  return(
    <>
      <Header />
      <main className="mainj">
        <Menu />
        <About />
        <Location />
      </main>
      <Footer />
    </>
  );
}
