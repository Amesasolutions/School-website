import React, {useEffect} from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Cover from "../components/AboutContent/Cover";
import Contents from "../components/AboutContent/Contents";


function About() {
  useEffect(() => {
    document.title = "About Us - Somali School"
  }, [])

  return (
    <>
      <Header />
       <Cover/>
       <Contents/>
      <Footer />
    </>
  );
}

export default About;
