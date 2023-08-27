import React, {useEffect} from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Cover from "../components/AboutContent/Cover";


function About() {
  useEffect(() => {
    document.title = "About Us - Somali School"
  }, [])

  return (
    <>
      <Header />
       <Cover/>
      <Footer />
    </>
  );
}

export default About;
