import React from 'react';
import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

import { Home, Dashboard, Profile, AllCampaigns, CreateCampaign, CampaignJankari, CampaignTypes} from './pages';
import Explore from './Explore';
import Contact from './staticPages/Contact';
import HowItWorks from './staticPages/HowItWorks';


const activeChain = {
  chainId: 11155111,
  rpc: ["https://rpc.ankr.com/eth_sepolia/0b1b7d3941e08df10b795fd099f4c3e00d3461a1ed58bcb3b3369ad3c793afb6"], 
  nativeCurrency: { name: "Sepolia ETH", symbol: "ETH", decimals: 18 },
  shortName: "sepolia",
  slug: "sepolia",
  testnet: true,
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/create-campaign',
        element: <CampaignTypes />,
      },
      {
        path: '/all-campaigns',
        element: <AllCampaigns />,
      },
      {
        path: '/campaign-details/:id',
        element: <CampaignJankari />,
      },
      {
        path: '/form',
        element: <CreateCampaign />,
      },
    ]
  },
  {
    path: '/explore',
    element: <Explore />,
    children: [
    
    {
      path: '/explore/learn',
      element: <HowItWorks />
    },
    {
      path: '/explore/contact',
      element: <Contact />
    },
  ]
  }
])


const root = createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider  supportedChains={[activeChain]} desiredChainId={11155111}> 
      <StateContextProvider>
       <RouterProvider router={router} />
      </StateContextProvider>
  </ThirdwebProvider> 
)