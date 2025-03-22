
import { CreateCampaign, Home, About } from "./pages";
import React from 'react';
import { Route, Routes } from 'react-router';
import {useState} from 'react';
import { BrowserRouter as Router } from "react-router";
import { Sidebar, Navbar, Header } from './components';
import {Dashboard, Profile, CampaignDetails, AllCampaigns, CampaignJankari} from "./pages";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userCampaigns, setUserCampaigns] = useState([]);
  const [isLight, setIsLight] = useState(JSON.parse(localStorage.getItem('isLightMode')));
  const [isActive, setIsActive] = useState('dashboard');
  return (
    <main>
      <Router>
        <Header />
        <Routes>

        <Route path='/' element={<Home theme={[isLight, setIsLight]} activeState={[isActive, setIsActive]} />} />
        <Route path="/home" element={<Home setUserCampaigns={setUserCampaigns} searchQuery={searchQuery} />} />
        <Route path="/dashboard" element={<Dashboard theme={[isLight, setIsLight]} activeState={[isActive, setIsActive]} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/campaign-details" element={<CampaignJankari />} />
        <Route path="/all-campaigns" element={<AllCampaigns />} />
        </Routes>
      </Router>
  </main>
  );
}

export default App;
