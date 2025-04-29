import React from "react";

const HelpForCreators = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Discover How to Create, Plan, and Manage Your Crowdfunding Campaign
      </h1>

      <p className="mb-8 text-lg text-center">
        Learn the step-by-step process to successfully launch, run, and manage your campaign on our blockchain-powered platform.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Step 1: Creating Your Campaign</h2>
        <p className="mb-4">
          Setting up your campaign is simple and transparent, thanks to blockchain integration. Here’s what you need:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Connect Your Wallet</strong>: Use MetaMask or any supported crypto wallet to get started.</li>
          <li><strong>Fill Campaign Details</strong>: Enter a catchy title, a compelling description, your target funding goal, and deadline.</li>
          <li><strong>Upload Media</strong>: Add images, videos, or documents to build trust and excitement among potential backers.</li>
          <li><strong>Set Rewards (Optional)</strong>: If offering tiered rewards, define clear contribution levels and the rewards backers will receive.</li>
        </ul>
        <p className="mt-4 italic text-sm">
          A clear and professional campaign page increases trust and donations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Step 2: Planning for Success</h2>
        <p className="mb-4">
          Successful campaigns are well-planned. Make sure you:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Set Realistic Goals</strong>: Only ask for the amount you genuinely need — realistic goals encourage more backers.</li>
          <li><strong>Define a Timeline</strong>: Communicate how long your project will take and when backers can expect updates or rewards.</li>
          <li><strong>Prepare Marketing Material</strong>: Use social media, email newsletters, and communities to spread the word before launch.</li>
          <li><strong>Build Early Trust</strong>: Share your story, passion, and plans clearly — people love to support real people with real dreams!</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Step 3: Managing Your Campaign</h2>
        <p className="mb-4">
          Once live, active management is key to maintaining momentum:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Post Regular Updates</strong>: Keep your backers informed with progress updates, challenges, and milestones.</li>
          <li><strong>Respond to Comments</strong>: Engage with your backers — answering questions shows commitment and builds trust.</li>
          <li><strong>Monitor Donations</strong>: Track the status of your campaign through your dashboard. Celebrate milestones and acknowledge major supporters if possible!</li>
          <li><strong>Adjust Strategies if Needed</strong>: If traction slows, boost marketing efforts or remind your community with new incentives.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Step 4: Completing and Fulfilling Your Campaign</h2>
        <p className="mb-4">
          After your campaign ends:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Deliver Rewards (if any)</strong>: Fulfill promised rewards within the stated timeline.</li>
          <li><strong>Submit Work Proof</strong>: If required, submit updates or proofs showcasing how funds were used.</li>
          <li><strong>Thank Your Backers</strong>: Always acknowledge those who made your success possible — it leaves a lasting impression!</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
        <p className="mb-4">
          Explore our <a href="#" className="text-blue-600 underline">Creator Help Center</a> or contact our <a href="#" className="text-blue-600 underline">Support Team</a> for guidance at any step.
        </p>
        <p className="font-bold text-green-700">
          Your idea deserves to shine. Let's build it together!
        </p>
      </section>
    </div>
  );
};

export default HelpForCreators;
