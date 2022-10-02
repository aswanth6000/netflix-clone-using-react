import React from "react";
import { newUrl,actionUrl,comedy, documentry, animation } from "./constants/url";
import Banner from "./Components/banner/banner";
import Navbar from "./Components/navbar/navbar";
import Carrousal from "./Components/carrousal/carrousal";
import Footer from "./Components/footer/footer";

import './main.css'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Carrousal url={newUrl} title='New releases'/>
     <Carrousal url={actionUrl} title='Action' isSmall/>
     <Carrousal url={comedy} title='Documentary' isSmall/>
     <Carrousal url={documentry} title='Comedy' isSmall/>
     <Carrousal url={animation} title='Animation' />
     <Footer/>
     
    </div>
  );
}

export default App;
