import React, { useState } from 'react';
import { useContract } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const CreateTier = ({ campaignId }) => {
  const [tierAmount, setTierAmount] = useState('');
  const [tierReward, setTierReward] = useState('');
  const [loading, setLoading] = useState(false);

  const { contract } = useContract('0x7E0EcF65c99Cb2Fab59BFF83007c1B7Bab3f8536');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tierAmount || isNaN(tierAmount)) {
      alert('Please enter a valid amount.');
      return;
    }

    setLoading(true);

    try {
      const parsedAmount = ethers.utils.parseEther(tierAmount.toString());
      console.log('Parsed amount:', parsedAmount.toString());

      const data = await contract.call('addTier', [
        campaignId,
        parsedAmount,
        tierReward,
      ]);

      console.log('Tier added:', data);

      setTierAmount('');
      setTierReward('');
    } catch (error) {
      console.error('Error adding tier:', error);
      alert('Failed to create tier. See console for details.');
    }

    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">Add Campaign Tier</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Amount (ETH)</label>
          <input
            type="number"
            step="0.01"
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg"
            value={tierAmount}
            onChange={(e) => setTierAmount(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Reward Description</label>
          <textarea
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg"
            value={tierReward}
            onChange={(e) => setTierReward(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Tier'}
        </button>
      </form>
    </div>
  );
};

export default CreateTier;
