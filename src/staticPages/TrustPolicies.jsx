import React from "react";

const TrustPolicies = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Understand Blockfund's Policies and Trust Operations
      </h1>

      <p className="mb-8 text-lg text-center">
        At Blockfund, the safety and success of our community are our top priorities.  
        Learn how we ensure a secure environment for both backers and campaign creators.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Core Policies</h2>
        <p className="mb-4">
          Blockfund operates under a set of policies designed to maintain transparency, fairness, and security across the platform:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Transparency Policy</strong>: All campaigns must clearly disclose project goals, funding needs, timelines, and potential risks.</li>
          <li><strong>Verification Requirements</strong>: Campaigns undergo verification checks to ensure legitimacy before being listed.</li>
          <li><strong>Use of Funds Policy</strong>: Campaign creators are expected to use collected funds for the stated purpose, promoting accountability and trust.</li>
          <li><strong>Refunds & Disputes Policy</strong>: In cases of clear fraud or misuse, our Trust Operations team may intervene to protect backers, subject to our Terms of Service.</li>
          <li><strong>Prohibited Activities</strong>: We do not allow fundraising for illegal activities, scams, or projects violating community standards.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How Our Trust Operations Team Works</h2>
        <p className="mb-4">
          Our dedicated Trust Operations team actively monitors the platform to detect suspicious activities and protect our users:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Campaign Review</strong>: Every campaign is reviewed before launch. Risk factors are flagged for additional screening if necessary.</li>
          <li><strong>Ongoing Monitoring</strong>: We continuously monitor campaigns even after funding starts to ensure compliance with platform rules.</li>
          <li><strong>Fraud Investigation</strong>: If a project is reported, our team investigates quickly and transparently, taking action if policies are violated.</li>
          <li><strong>Community Support</strong>: We empower users with clear reporting tools and responsive customer support in case of concerns.</li>
        </ul>
        <p className="mt-4 italic text-sm">
          Our mission is to foster a community built on trust, transparency, and impact.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
        <p className="mb-4">
          While we provide strong protections, we also encourage our users to stay informed:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Research Campaigns</strong>: Always review the project details carefully before backing any campaign.</li>
          <li><strong>Protect Your Wallet</strong>: Never share your MetaMask seed phrase or private keys with anyone.</li>
          <li><strong>Report Suspicious Activity</strong>: Help keep Blockfund safe by reporting campaigns that seem misleading or fraudulent.</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Have Questions?</h2>
        <p className="mb-4">
          Visit our <a href="#" className="text-blue-600 underline">Trust and Safety Center</a>  
          or reach out to our <a href="#" className="text-blue-600 underline">Support Team</a> to learn more about our safety measures.
        </p>
        <p className="font-bold text-green-700">
          Together, we can build a trusted crowdfunding ecosystem!
        </p>
      </section>
    </div>
  );
};

export default TrustPolicies;
