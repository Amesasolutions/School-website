import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/HomeContent/Hero";
import SecondHero from "../components/HomeContent/SecondHero";
import Divider from "../components/HomeContent/Divider";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SecondHero/>
      <Divider/>
      <Footer />
    </>
  );
}
