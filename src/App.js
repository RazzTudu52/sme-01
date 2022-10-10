import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Page from './Page';
import FullTeam02 from './components/Team/FullTeam02';
import Team01 from './components/Team/Team01';
import ScrollToTop from "react-scroll-to-top";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
    <Routes> 

        <Route path="/index" element={<Page/>} />
        <Route path="batch2021" element={<FullTeam02 />} />
        <Route path="batch2020" element={<Team01 />} />
        <Route path="/*" element={<Page />} />

    </Routes>
    <ScrollToTop smooth={true} color='#fff' style={{backgroundColor: "#8FC04E"}} />
  </BrowserRouter>

    </>
  )
}

export default App
