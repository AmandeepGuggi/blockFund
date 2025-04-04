
import { CreateCampaign, Home, About } from "./pages";
import React from 'react';
import { Route, Routes } from 'react-router';
import {useState} from 'react';
import { BrowserRouter as Router } from "react-router";
import { Sidebar, Navbar, Header } from './components';
import {Dashboard, Profile, CampaignDetails, AllCampaigns, CampaignJankari, CampaignTypes} from "./pages";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userCampaigns, setUserCampaigns] = useState([]);
  const [isActive, setIsActive] = useState('dashboard');
  return (
    <main>
      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Home setUserCampaigns={setUserCampaigns} searchQuery={searchQuery} />} />
        <Route path="/dashboard" element={<Dashboard activeState={[isActive, setIsActive]} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-campaign" element={<CampaignTypes />} />
        <Route path="/campaign-details" element={<CampaignJankari />} />
        <Route path="/all-campaigns" element={<AllCampaigns />} />
        <Route path="/form" element={<CreateCampaign />} />

        </Routes>
      </Router>
  </main>
  );
}

export default App;
