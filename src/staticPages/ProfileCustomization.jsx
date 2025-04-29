import React from "react";

const ProfileCustomization = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Build and Customize Your Blockfund Profile
      </h1>

      <p className="mb-8 text-lg text-center">
        Your Blockfund profile represents you in the crowdfunding community!  
        Personalize it to showcase your projects, donations, and journey.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What You Can Do Right Now</h2>
        <p className="mb-4">
          While we're constantly evolving, here’s what you can currently set up:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Connect Your Wallet</strong>: Your profile is linked to your blockchain wallet address via MetaMask.</li>
          <li><strong>Customize Display Name</strong>: Choose a username that represents you across campaigns.</li>
          <li><strong>Profile Picture</strong>: Add a custom avatar or blockchain-themed image.</li>
          <li><strong>Bio Section</strong>: Share a little about your crowdfunding interests or past achievements.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How Rewards Are Sent</h2>
        <p className="mb-4">
          Currently, Blockfund uses your connected wallet address for all transactions, including campaign rewards.  
          No email or physical address is required at this stage.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Digital Rewards</strong>: NFTs, access tokens, and other blockchain-based rewards are automatically sent to your wallet.</li>
          <li><strong>Physical Rewards</strong>: For now, campaigns offering physical rewards may require backers to provide contact information manually after donation (via secured forms or direct communication).</li>
        </ul>
        <p className="mt-4 italic text-sm">
          We are working on secure systems to collect optional information like shipping addresses in future updates.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Coming Soon!</h2>
        <p className="mb-4">
          We plan to add features like:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Secure email linking for notifications and updates</li>
          <li>Optional address collection for physical rewards</li>
          <li>Social media linking to build your profile credibility</li>
        </ul>
        <p className="mt-4 italic text-sm">
          Stay tuned! Your crowdfunding journey with Blockfund is just getting started.
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Need Help Setting Up?</h2>
        <p className="mb-4">
          Visit our <a href="#" className="text-blue-600 underline">Profile Setup Guide</a>  
          or reach out to our <a href="#" className="text-blue-600 underline">Support Team</a> for any questions.
        </p>
        <p className="font-bold text-green-700">
          Create a profile that inspires and connects!
        </p>
      </section>
    </div>
  );
};

export default ProfileCustomization;
