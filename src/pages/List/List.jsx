import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ListItem from "../../components/ListItem/ListItem";
import './List.css'
import Footer from "../../components/footer/Footer";

const List = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <div className="covoiturage" >
        <Sidebar />
        <br/>
        <ListItem />  
      </div>
      <Footer/>
    </>
  );
};

export default List;
