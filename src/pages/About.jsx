import React, {useEffect} from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Cover from "../components/AboutContent/Cover";
import Content from "../components/AboutContent/Content";


function About() {
  useEffect(() => {
    document.title = "About Us - Somali School"
  }, [])

  return (
    <>
      <Header />
       <Cover/>
       <Content/>
      <Footer />
    </>
  );
}

export default About;
