
import { CreateCampaign, Home, About } from "./pages";
import React from 'react';
import { Route, Routes } from 'react-router';
import {useState} from 'react';
import { BrowserRouter as Router } from "react-router";
import { Sidebar, Navbar, Header } from './components';
import {Dashboard, Profile, CampaignDetails, AllCampaigns} from "./pages";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userCampaigns, setUserCampaigns] = useState([]);
  const [isLight, setIsLight] = useState(JSON.parse(localStorage.getItem('isLightMode')));
  const [isActive, setIsActive] = useState('dashboard');
  return (
    // <Router>
    //   <Header />
    //   <Home />
    //   <Routes>
    //     {/* <Route path="/" element={<Home />} /> */}
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<CreateCampaign />} />
    //   </Routes>
    // </Router>
    <main>
    {/* <div className="sm:flex hidden mr-10 relative">
      <Sidebar theme={[isLight, setIsLight]} activeState={[isActive, setIsActive]} />
    </div> */}
    
      {/* <Navbar theme={[isLight, setIsLight]} userCampaigns={userCampaigns}  setSearchQuery={setSearchQuery} activeState={[isActive, setIsActive]} /> */}

      <Router>
        <Header />
        <Routes>

        <Route path='/' element={<Home theme={[isLight, setIsLight]} activeState={[isActive, setIsActive]} />} />
        <Route path="/home" element={<Home setUserCampaigns={setUserCampaigns} searchQuery={searchQuery} />} />
        <Route path="/dashboard" element={<Dashboard theme={[isLight, setIsLight]} activeState={[isActive, setIsActive]} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        <Route path="/all-campaigns" element={<AllCampaigns />} />
        </Routes>
      </Router>
  </main>
  );
}

export default App;
