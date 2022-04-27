import { useEffect, useRef, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';
import RoundedSwitch from './components/RoudendedSwitch';
import './styles.css';
import useLocalStorage from 'use-local-storage'
import GoTop from './components/GoTop';

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const myRef = useRef(null)
  const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState("goTopHidden");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.addEventListener("scroll", handleVisibleButton);

  })

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  }


  const handleScrollUp = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 52) {
      return setshowGoTop("goTop");
    } else if (scrollPosition < 52) {
      return setshowGoTop("goTopHidden");
    }
  };

  return (
    <div ref={myRef}>
      <div className='bg-circle1'></div>
      <div className='bg-circle2'></div>
      <RoundedSwitch value={theme === 'dark' ? true : false} onChange={switchTheme} />
      <Header />
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <GoTop showGoTop={showGoTop} scrollUp={handleScrollUp} />
    </div>
  );
}

export default App;
