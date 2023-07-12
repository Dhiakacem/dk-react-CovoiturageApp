// Parent component
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ListItem from "../../components/ListItem/ListItem";
import "./List.css";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/Scrollbar/Scrollbar";

const List = () => {
  const handleFilterChange = (filterOption) => {
    // Handle filter change logic here
    console.log("Filter option selected: ", filterOption);
  };

  return (
    <>
      <Navbar />
      <div className="List">
        <SearchBar />
        <div className="covoiturage">
          <Sidebar handleFilterChange={handleFilterChange} />
          <br />
          <ListItem />
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </>
  );
};

export default List;
