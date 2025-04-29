import React from "react";

const ConnectWalletHelp = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Learn How to Connect Your Wallet and Receive Funds
      </h1>

      <p className="mb-8 text-lg text-center">
        Setting up your wallet is the first step to receiving funds from your crowdfunding campaign.
        We use secure blockchain transactions powered by MetaMask.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Step 1: Install MetaMask</h2>
        <p className="mb-4">
          If you don't already have a MetaMask wallet, you need to create one. It’s free, secure, and easy to use.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Download MetaMask</strong>: Visit the official 
            <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">MetaMask Website</a> 
            and install the browser extension or mobile app.
          </li>
          <li><strong>Create a Wallet</strong>: Follow the instructions to create your wallet and secure your secret recovery phrase.</li>
          <li><strong>Backup Safely</strong>: Save your recovery phrase in a safe place. Never share it with anyone.</li>
        </ul>
        <p className="mt-4 italic text-sm">
          MetaMask is your gateway to receive blockchain-based funds securely.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Step 2: Connect Your Wallet</h2>
        <p className="mb-4">
          Once you have a MetaMask account:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Login to Your Account</strong>: Open MetaMask and login with your password.</li>
          <li><strong>Connect Wallet to Our Platform</strong>: Click on "Connect Wallet" on your dashboard. A MetaMask pop-up will appear to confirm the connection.</li>
          <li><strong>Authorize Connection</strong>: Accept the connection to link your wallet address with your crowdfunding campaign.</li>
        </ul>
        <p className="mt-4 italic text-sm">
          Your wallet address will be used to receive funds directly when the campaign is fulfilled.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Step 3: Receiving Funds</h2>
        <p className="mb-4">
          Once your campaign reaches its goal or ends successfully, the collected funds will be sent directly to your connected MetaMask wallet.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Transaction Notifications</strong>: You’ll receive a blockchain transaction receipt once funds are sent.</li>
          <li><strong>Withdraw or Use Funds</strong>: You can then use your crypto funds, swap to fiat, or keep them secure in your wallet.</li>
        </ul>
        <p className="mt-4 italic text-sm">
          Remember, blockchain transactions are fast, secure, and transparent.
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
        <p className="mb-4">
          Visit our <a href="#" className="text-blue-600 underline">Wallet Setup Guide</a> or reach out to our <a href="#" className="text-blue-600 underline">Support Team</a> for step-by-step assistance.
        </p>
        <p className="font-bold text-green-700">
          Get ready to unlock your crowdfunding success!
        </p>
      </section>
    </div>
  );
};

export default ConnectWalletHelp;
