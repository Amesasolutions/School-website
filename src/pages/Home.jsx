import React, {useEffect} from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/HomeContent/Hero";
import SecondHero from "../components/HomeContent/SecondHero";
import Divider from "../components/HomeContent/Divider";
import Carousel from "../components/HomeContent/Testimonials/Carousel";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Somali School"
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <SecondHero/>
      <Divider/>
      <Carousel/>
      <Footer />
    </>
  );
}
