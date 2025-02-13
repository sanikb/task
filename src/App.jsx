// eslint-disable-next-line no-unused-vars
import React from 'react';
import './components/navbar.css';
import './components/Footer.css';
import './components/Sales.css';
import './components/Keyfeatures.css'
import './components/HumanCapital.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sales from './components/Sales';
import HumanCapital from './components/HumanCapital';

import managtool from './assets/managementtool.png';
import salesimg from './assets/saleimg.png';
import Keyfeatures from './components/Keyfeatures';



function App() {
  return (
    <>
      <Navbar />
      <HumanCapital />
    

      <Keyfeatures/>

      <Sales
        img={managtool}
        title="Transform Your Sales Stratergy With Our Innovative"
        description="Customer Relationship Management Tool"
       
      />
      <Sales
        img={salesimg}
        title="Unlock the Full Potential of Your Sales Force With"
        linkText="UPONLY One's"
      />

      
   
      <Footer />
    </>
  );
}

export default App;
