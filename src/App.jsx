import React from "react";

import Brand from "./components/brand/Brand";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import "./App.css";

export default function App() {


  return (

    <div className ="App">

     <div className="gradient_bg">
      <Navbar />
      <Header />
      </div> 

      <Brand />

    </div>
  );
}