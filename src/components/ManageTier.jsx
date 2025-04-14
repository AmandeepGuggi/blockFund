import React, { useState } from 'react';
import { ethers } from 'ethers';
import contractABI from '../abi/Blockfunding.json'
import { useEffect } from 'react';

const contractAddress = '0x7E0EcF65c99Cb2Fab59BFF83007c1B7Bab3f8536'; // Replace with your actual address





const ManageTiers = ({ campaignId, currentAccount, campaignOwner }) => {
    const [contract, setContract] = useState(null);
    const [tiers, setTiers] = useState([]);
    const [reward, setReward] = useState('');
    const [amountRequired, setAmountRequired] = useState('');
  
    useEffect(() => {
      const loadContract = async () => {
        const instance = await getContract();
        setContract(instance);
      };
      loadContract();
    }, []);

const getContract = async () => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
    return contract;
  } else {
    alert("Please install MetaMask.");
    return null;
  }
};

const fetchTiers = async () => {
    if (!contract) return;
    const data = await contract.getTiers(campaignId);
    setTiers(data);
  };

  const handleAddTier = async () => {
    if (!contract) return;
    const tx = await contract.addTier(
      campaignId,
      ethers.utils.parseEther(amountRequired),
      reward
    );
    await tx.wait();
    setReward('');
    setAmountRequired('');
    fetchTiers();
}
useEffect(() => {
    if (contract) fetchTiers();
  }, [contract]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Manage Tiers</h2>

      {/* Only show input if user is the campaign creator */}
      {currentAccount === campaignOwner && (
        <>
          <input
            type="text"
            value={reward}
            onChange={(e) => setReward(e.target.value)}
            placeholder="Reward Description"
            className="border p-2 my-2 block"
          />
          <input
            type="number"
            value={amountRequired}
            onChange={(e) => setAmountRequired(e.target.value)}
            placeholder="Amount in ETH"
            className="border p-2 my-2 block"
          />
          <button
            onClick={handleAddTier}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Tier
          </button>
        </>
      )}

      {/* Show all tiers */}
      <ul className="mt-4">
        {tiers.map((tier, index) => (
          <li key={index} className="border p-2 my-2 rounded">
            Reward: {tier.reward} <br />
            Amount: {ethers.utils.formatEther(tier.amountRequired)} ETH <br />
            Donations: {tier.donationCount.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageTiers;
