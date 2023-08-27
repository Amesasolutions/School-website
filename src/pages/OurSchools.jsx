import React, {useEffect} from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Cover from "../components/OurSchoolsContent/Cover";

function OurSchools() {
  useEffect(() => {
    document.title = "Our Schools - Somali School"
  }, [])

  return (
    <>
      <Header />
      <Cover/>
      <Footer />
    </>
  );
}

export default OurSchools;
