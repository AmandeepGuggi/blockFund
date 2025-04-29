import React from "react";

const HelpForBackers = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Help for Backers</h1>

      <p className="mb-8 text-lg text-center">
        Learn how to securely donate to projects via blockchain, verify campaigns, and explore your donation options.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Step 1: Verifying a Project</h2>
        <p className="mb-4">
          Before donating, always verify the project details. Since our platform runs on blockchain, all project information is transparent and securely recorded.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Review Project Details</strong>: Check campaign goals, descriptions, and provided media.</li>
          <li><strong>Confirm Authenticity</strong>: Look for proofs like documents, videos, or progress updates.</li>
          <li><strong>Check Project Status</strong>: Ensure the campaign is still Active.</li>
          <li><strong>Community Feedback</strong>: Read comments and reviews from other backers.</li>
        </ul>
        <p className="mt-4 italic text-sm">
          Always do your own research before donating. Blockchain transactions are irreversible.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Step 2: Donation Options</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Startup Campaign Donations (Reward-Based)</h3>
          <p className="mb-2">
            Some campaigns offer reward tiers for donations. You can select a tier to receive exclusive perks, early products, or NFTs in return.
          </p>
          <p className="font-medium text-green-600">✅ Support a project and get something back!</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">General Donations (Support-Only)</h3>
          <p className="mb-2">
            Simply donate any amount to support a project you believe in, without expecting a reward.
          </p>
          <p className="font-medium text-green-600">✅ Make a real impact just by contributing!</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Step 3: Making the Donation</h2>
        <ul className="list-decimal list-inside space-y-2">
          <li><strong>Connect Your Wallet</strong>: Use MetaMask or any supported crypto wallet.</li>
          <li><strong>Select Donation Type</strong>: Choose between a reward tier or a general donation.</li>
          <li><strong>Review Carefully</strong>: Double-check all details before confirming.</li>
          <li><strong>Confirm Transaction</strong>: Approve through your wallet and complete the process.</li>
          <li><strong>Transaction Recorded</strong>: Your donation is instantly and immutably recorded on blockchain.</li>
        </ul>
        <p className="mt-4 italic text-sm">
          Security Tip: Only donate via the official website. Always verify the URL before connecting your wallet.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Step 4: After Donation</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Transaction Receipt</strong>: Check your transaction anytime on blockchain explorers.</li>
          <li><strong>Reward Delivery</strong>: Creators will send rewards after campaign success (if applicable).</li>
          <li><strong>Stay Updated</strong>: Follow project updates and progress through your dashboard.</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
        <p className="mb-4">
          Visit our <a href="#" className="text-blue-600 underline">Help Center</a> or contact our <a href="#" className="text-blue-600 underline">Support Team</a> anytime.
        </p>
        <p className="font-bold text-green-700">
          Thank you for helping bring amazing ideas to life!
        </p>
      </section>
    </div>
  );
};

export default HelpForBackers;
