
    import React from 'react';
    import './App.css';
    import Header from './component/Header.js';
    import NavigationBar from './component/NavigationBar.js';
    import BgContainer from './component/BgContainer.js';
    import YoutubeVideoWithImage from './component/YoutubeVideoWithImage.js';
    import AboutText from './component/AboutText.js';
    import ProjectMangment from './component/projectMangment.js';
    import Ezilinepic from './component/Ezilinepic.js';
    import EzilineCard from './component/EzilineCard.js';
    import Footer from './component/Footer.js';
  
    // import {Routes,Route } from 'react-router-dom';






    const App = () =>  {
      return (
        <div className="App">
          <Header/>
        <NavigationBar/>
        <BgContainer/> 
        <YoutubeVideoWithImage/>
        <AboutText/>
        <ProjectMangment/>
        <Ezilinepic/>
        <EzilineCard/>
        <Footer/>
      
        
    
    {/*  Navigation Bar */}
        {/* <Routes>
          <Route path='/' element={}/>
          <Route path='/services' element={}/>
          <Route path='/portfolio' element={}/>
          <Route path='/eziupdates' element={}/>
          <Route path='/login' element={}/>
          <Route path="/contact" element={}/>
        </Routes> */}
        </div>
      );
    }

    export default App;
