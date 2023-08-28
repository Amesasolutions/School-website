import React, {useEffect} from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Cover from "../components/OurSchoolsContent/Cover";
import Contents from "../components/OurSchoolsContent/Contents";

function OurSchools() {
  useEffect(() => {
    document.title = "Our Schools - Somali School"
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

export default OurSchools;
