import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ListItem from "../../components/ListItem/ListItem";
import "./List.css";
import Footer from "../../components/footer/Footer";
import ScrollToTop from "react-scroll-to-top";

const List = () => {
  return (
    <>
      <Navbar />
      <div className="List">
        <SearchBar />
        <div className="covoiturage">
          <Sidebar />
          <br />
          <ListItem />
        </div>
      </div>
      <ScrollToTop smooth />
      <Footer />
    </>   
  );
};

export default List;
