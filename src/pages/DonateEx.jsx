import React from "react";
import { useAddress } from "@thirdweb-dev/react";
import { ethers } from "ethers";

const CampaignTiersSection = ({ tiers, campaignId, campaignOwner, donateToTier }) => {
  const userAddress = useAddress();

  const isOwner = userAddress?.toLowerCase() === campaignOwner?.toLowerCase();

  const handleDonate = async (tierIndex, amountRequired) => {
    try {
      await donateToTier(campaignId, tierIndex, amountRequired);
    } catch (error) {
      console.error("Donation failed:", error);
    }
  };

  return (
    <div className="space-y-4">
      {tiers && tiers.map((tier, index) => (
        <div key={index} className="border p-4 rounded-md shadow-md bg-white">
          <h4 className="text-lg font-semibold">Reward: {tier.reward}</h4>
          <p>Amount Required: {ethers.utils.formatEther(tier.amountRequired)} ETH</p>
          <p>Donations: {tier.donationCount.toString()}</p>

          {isOwner ? (
            <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
              Edit Tier
            </button>
          ) : (
            <button
              className="mt-2 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={() => handleDonate(index, tier.amountRequired)}
            >
              Donate
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CampaignTiersSection;
