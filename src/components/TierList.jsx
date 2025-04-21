

// import React, { useEffect, useState } from 'react';
// import { useContract, useAddress } from '@thirdweb-dev/react';
// import { ethers } from 'ethers';

// const TierList = ({ campaignId, url}) => {
// //   const { contract } = useContract('0x7E0EcF65c99Cb2Fab59BFF83007c1B7Bab3f8536'); // Replace with actual contract address
//   const { contract } = useContract('0x575f48Ad91Fe6B56c973D652a61fF4C04af8ef0a'); // Replace with actual contract address
//   const [tiers, setTiers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [donatingIndex, setDonatingIndex] = useState(null);
//   const [campaignOwner, setCampaignOwner] = useState('');
//   const [actionIndex, setActionIndex] = useState(null);
//   const address = useAddress();

//   // Fetch campaign tiers when the component loads
//   useEffect(() => {
//     const fetchTiers = async () => {
//       try {
//         const data = await contract.call('getTiers', [campaignId]);
//         const allCampaigns = await contract.call('getCampaigns');
//         const owner = allCampaigns[campaignId].owner;
//         setTiers(data);
//         setCampaignOwner(owner);
//       } catch (error) {
//         console.error('Error fetching tiers/campaign info:', error);
//       }
//     };

//     if (contract && campaignId) {
//       fetchTiers();
//     }
//   }, [contract, campaignId]);

//   // Handle donation logic
//   const handleDonate = async (tierAmount, index) => {
//     try {
//         setActionIndex(index);
//       setLoading(true);

//       // Call the smart contract to donate to the campaign at the selected tier
//       await contract.call('donateToCampaign', [campaignId, index], {
//         value: amount,
//       });

//       alert('Donation successful!');
//     } catch (error) {
//       console.error('Donation failed:', error);
//       alert('Something went wrong during donation.');
//     } finally {
//       setLoading(false);
//       setActionIndex(null);
//     }
//   };

//   const handleDelete = async (index) => {
//     try {
//       setActionIndex(index);
//       setLoading(true);

//       await contract.call('deleteTier', [campaignId, index]);

//       alert('Tier deleted!');
//       // Refresh tiers
//       const updated = await contract.call('getTiers', [campaignId]);
//       setTiers(updated);
//     } catch (err) {
//       console.error('Delete failed:', err);
//       alert('Failed to delete tier.');
//     } finally {
//       setLoading(false);
//       setActionIndex(null);
//     }
//   };

//   if (loading) return <p>Processing your donation...</p>;

//   return (
//     <div className="mt-6 space-y-4 mx-4">
//       <h2 className="text-xl font-semibold">Available Tiers</h2>
//       {tiers.length === 0 ? (
//         <p className="text-gray-500">No tiers added yet.</p>
//       ) : (
//         tiers.map((tier, index) => {
//           const amountInEth = ethers.utils.formatEther(tier.amountRequired);
//           const isOwner = address === campaignOwner;
//           return (
//             <div
//               key={index}
//               className="border hover:shadow-2xl border-gray-300 p-4  shadow-sm"
//             >
//                 <div className='w-full'>
//                 <img src={url} className='max-h-[100px] w-full object-cover' alt="" />
//                 </div>
//               <p className="text-lg font-bold">{amountInEth} ETH</p>
//               <p className="text-gray-700">{tier.reward}</p>
//              <div className='flex justify-between'>
//              <button
//                 onClick={() => handleDonate(tier.amountRequired, index)}
//                 disabled={donatingIndex === index}
//                 className="mt-2 px-4 py-2 bg-[#e50f75] text-white rounded 
//                  hover:bg-white hover:border-2 hover:text-black"
//               >
//                 {donatingIndex === index ? 'Donating...' : 'Donate'}
//               </button>
//               {isOwner && (
//                   <button
//                     onClick={() => handleDelete(index)}
//                     disabled={loading && actionIndex === index}
//                     className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//                   >
//                     {loading && actionIndex === index ? 'Deleting...' : 'Delete'}
//                   </button>
//                 )}
//              </div>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default TierList;



import React, { useEffect, useState } from 'react';
import { useContract, useAddress } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const TierList = ({ campaignId, url }) => {
  const { contract } = useContract('0x575f48Ad91Fe6B56c973D652a61fF4C04af8ef0a');
  const userAddress = useAddress();

  const [tiers, setTiers] = useState([]);
  const [campaignOwner, setCampaignOwner] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch tiers and campaign info
  const fetchTiers = async () => {
    try {
      const tierData = await contract.call('getTiers', [campaignId]);
      setTiers(tierData);

      const campaigns = await contract.call('getCampaigns');
      const campaign = campaigns[campaignId];
      setCampaignOwner(campaign.owner);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (contract && campaignId !== undefined) {
      fetchTiers();
    }
  }, [contract, campaignId]);

  // Donate to tier
  const handleDonate = async (tierIndex, amount) => {
    try {
      const tx = await contract.call('donateToCampaign', [campaignId, tierIndex], {
        value: amount,
      });
      console.log('Donation successful:', tx);
      fetchTiers(); // Refresh data
    } catch (error) {
      console.error('Donation failed:', error);
    }
  };

  // Delete tier (creator only)
  const handleDelete = async (tierIndex) => {
    try {
      await contract.call('deleteTier', [campaignId, tierIndex]);
      fetchTiers(); // Refresh data
    } catch (error) {
      console.error('Error deleting tier:', error);
    }
  };

  if (loading) return <p>Loading tiers...</p>;

  return (
    <div className="mt-6 space-y-4 mx-4">
      <h3 className="text-xl font-semibold">Choose Perks to donate</h3>
      {tiers.length === 0 ? (
        <p className="text-gray-500">No tiers available for this campaign.</p>
      ) : (
        <ul className="space-y-4">
          {tiers.map((tier, index) => {
            const ethAmount = tier.amountRequired;
            const formatted = ethers.utils.formatEther(ethAmount);

            return (
              <li key={index} className="border hover:shadow-2xl border-gray-300 p-4  shadow-sm">
                 <div className='w-full'>
                 <img src={url} className='max-h-[100px] w-full object-cover' alt="" />
                </div>
                <div>
                  <p className="text-lg font-bold"><strong>Amount:</strong> {formatted} ETH</p>
                  <p className="text-gray-700 whitespace-pre-line"  ><strong>Reward:</strong> {tier.reward}</p>
                  <p className='my-3'><strong>Backers:</strong> {tier.donationCount.toString()}</p>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() => handleDonate(index, ethAmount)}
                    className="mt-2 px-4 py-2 bg-[#e50f75] text-white rounded 
                  hover:bg-white hover:border-2 hover:text-black"
                  >
                    Donate
                  </button>

                  {userAddress === campaignOwner && (
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TierList;
