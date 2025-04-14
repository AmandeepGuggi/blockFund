import React, { useState } from "react";
import { useContract } from "@thirdweb-dev/react";
import { ethers } from "ethers";

const DonateSection = ({ campaignId, tiers = [] }) => {
  const { contract } = useContract("0x7E0EcF65c99Cb2Fab59BFF83007c1B7Bab3f8536");

  const [donationAmount, setDonationAmount] = useState("");
  const [selectedTierIndex, setSelectedTierIndex] = useState(0);
  const [isDonating, setIsDonating] = useState(false);

  const handleDonate = async () => {
    if (!donationAmount || isNaN(donationAmount) || Number(donationAmount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    try {
      setIsDonating(true);

      await contract.call("donateToCampaign", [campaignId, selectedTierIndex], {
        value: ethers.utils.parseEther(donationAmount),
      });

      alert("🎉 Donation successful!");
      setDonationAmount("");
    } catch (err) {
      console.error(err);
      alert("❌ Donation failed.");
    } finally {
      setIsDonating(false);
    }
  };

  return (
    <div className="p-4  rounded-lg mx-aut bg-white">
      <h2 className="text-xl font-semibold mb-2">Donate to this Campaign</h2>

      <label className="block mb-1 font-medium">Amount (ETH):</label>
      <input
        type="number"
        step="0.001"
        min="0"
        value={donationAmount}
        onChange={(e) => setDonationAmount(e.target.value)}
        className="border rounded w-full p-2 mb-4"
        placeholder="e.g. 0.1"
      />

      {tiers.length > 0 && (
        <div className="mb-4">
          <label className="block font-medium mb-1">Select a Tier:</label>
          <select
            value={selectedTierIndex}
            onChange={(e) => setSelectedTierIndex(Number(e.target.value))}
            className="border rounded p-2 w-full"
          >
            {tiers.map((tier, index) => (
              <option key={index} value={index}>
                Tier {index + 1} — {tier.amountRequired} wei — {tier.reward}
              </option>
            ))}
          </select>
        </div>
      )}

      <button
        onClick={handleDonate}
        disabled={isDonating}
        className="bg-[#e50f75] text-white px-4 py-2 rounded hover:bg-pink-700"
      >
        {isDonating ? "Processing..." : "Donate"}
      </button>
    </div>
  );
};

export default DonateSection;
