
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Header,{HeaderPhone} from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Work from "./components/Work";

import { Toaster } from "react-hot-toast";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);
  return ratio < 2 ? (
    <>
          <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline /> 
      <Services/>
      <Contact/>
      <Toaster/>
    </>
  ): (
    <em id="customMessage">Please Change the ratio to View!</em>
  );
}

export default App;
