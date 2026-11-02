import useHeroIntro from "./hooks/useHeroIntro";
import useScrollEffects from "./hooks/useScrollEffects";
import useMarqueeSkew from "./hooks/useMarqueeSkew";
import usePointerEffects from "./hooks/usePointerEffects";
import useScrollRefresh from "./hooks/useScrollRefresh";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./App.module.css";

export default function App() {
  useHeroIntro();
  useScrollEffects();
  useMarqueeSkew();
  usePointerEffects();
  useScrollRefresh();
  return (
    <>
      <div className={styles.bar} data-a="bar" aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <Header />
      <main className={styles.main}>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
