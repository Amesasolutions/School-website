import React, {useEffect} from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Cover from "../components/ContactContent/Cover";
import ContactForms from "../components/ContactContent/ContactForms";

function Contact() {
  useEffect(() => {
    document.title = "Contact Us - Somali School"
  }, [])

  return (
    <>
      <Header />
      <Cover/>
      <ContactForms/>
      <Footer />
    </>
  );
}

export default Contact;
