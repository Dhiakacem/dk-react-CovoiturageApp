import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

const Search = () => {
  return (
    <div className="Search">
      <Navbar />
      <SocialLinks/> 
      <SearchBar />
      <div className="footer">
      <Footer />
      </div>
    </div>
  );
};

export default Search;
