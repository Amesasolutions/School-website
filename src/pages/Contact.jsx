import React, {useEffect} from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Cover from "../components/ContactContent/Cover";

function Contact() {
  useEffect(() => {
    document.title = "Contact Us - Somali School"
  }, [])

  return (
    <>
      <Header />
      <Cover/>
      <Footer />
    </>
  );
}

export default Contact;
