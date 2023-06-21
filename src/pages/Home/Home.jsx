import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import ImageText from "../../components/ImageText/ImageText";
import Featured from "../../components/Featured/Featured";
import Proprity from "../../components/Proprity/Proprity";
import Tags from "../../components/Tags/Tags";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <SocialLinks/> 
    <div className="homeContainer">
      <ImageText/>
      <Featured/>
      <Proprity/>
      <Tags/>
      <Footer />  
       
      </div>
    </div>
  );
};

export default Home;
