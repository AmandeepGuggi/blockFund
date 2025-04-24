import React from "react";
import { motion } from "framer-motion";
import { useScrollToHash } from "../hooks/useScrollToHash";
import { diagram } from "../assets";

const Section = ({ title, children }) => (
  <section className="py-16 px-6 md:px-20  mx-auto">
    <h2 className="text-4xl font-bold text-[#E50F74] mb-6">{title}</h2>
    <div className="text-lg text-gray-700 leading-relaxed space-y-4">
      {children}
    </div>
  </section>
);

export default function Crowdfunding() {
    useScrollToHash()
  return (
    <main className="bg-white text-gray-900">
      <header className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Understanding Crowdfunding</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Discover how people around the world are using crowdfunding to bring their ideas to life.
        </p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Section  title="What is Crowdfunding?">
          <p>
            Crowdfunding is a way of raising money to finance projects or ventures by collecting small amounts of capital from a large number of people, typically via the Internet.
          </p>
          <p>
            This innovative approach empowers creators, entrepreneurs, and communities by bypassing traditional funding methods and going straight to the people who believe in their vision.
          </p>
         
        </Section>

        <Section id="how-it-works" title="How it Works">
          <p>
            A project creator sets up a campaign detailing the purpose, goal amount, deadline, and rewards (if any). Interested supporters, or backers, browse through campaigns and choose to contribute.
          </p>
          <p>
            Once the campaign reaches its goal within the given deadline, the funds are transferred to the creator to start working on the project. If the goal isn't reached, depending on the platform, the money may be refunded.
          </p>
          <div className="max-w-[600px] mx-auto bg-amber-500">
          <img
        src={diagram} width="full"
        alt="Crowdfunding process diagram"
        className="w-full rounded-2xl shadow mb-8"
      />
          </div>
        </Section>

        <Section title="Education Center">
          <p>
            Our education center offers resources to help you understand the ins and outs of crowdfunding. Learn how to craft compelling campaigns, market them effectively, and build a loyal community.
          </p>
          <p>
            Whether you’re a beginner or an experienced creator, we provide articles, video tutorials, and guides that can make your crowdfunding journey successful.
          </p>
        </Section>
       

      </motion.div>

      <footer className="bg-[#E50F74] text-white py-10 text-center mt-10">
        <p className="text-lg">&copy; 2025 Blockfunding. All rights reserved.</p>
      </footer>
    </main>
  );
} 




// import React from "react";
// import { ExternalLink } from "lucide-react";

// export default function Crowdfunding() {
//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10">
//       <h1 className="text-4xl font-bold mb-6 text-center">What is Crowdfunding & How It Works</h1>
     

//       <div className="mb-8">
//         <div className="p-6">
//           <h2 className="text-2xl font-semibold mb-4">What is Crowdfunding?</h2>
//           <p className="text-gray-700 text-base">
//             Crowdfunding is a method of raising money from a large number of people,
//             typically via the internet. Instead of seeking a few large investments,
//             a campaign gathers smaller contributions from many individuals. This
//             allows creators, entrepreneurs, and organizations to fund their projects,
//             products, or ventures by appealing directly to the public.
//           </p>
//         </div>
//       </div>

//       <div className="mb-8">
//         <div className="p-6">
//           <h2 className="text-2xl font-semibold mb-4">How Does It Work?</h2>
//           <p className="text-gray-700 text-base mb-4">
//             The crowdfunding process usually follows these steps:
//           </p>
//           <table className="w-full table-auto border border-gray-300 rounded-xl overflow-hidden text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-4 py-2 text-left">Step</th>
//                 <th className="px-4 py-2 text-left">Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-t">
//                 <td className="px-4 py-2 font-medium">1. Campaign Creation</td>
//                 <td className="px-4 py-2">The creator defines the project, funding goal, deadline, and adds media like images or videos.</td>
//               </tr>
//               <tr className="border-t">
//                 <td className="px-4 py-2 font-medium">2. Promotion</td>
//                 <td className="px-4 py-2">The campaign is shared through social media, email, and personal networks to attract backers.</td>
//               </tr>
//               <tr className="border-t">
//                 <td className="px-4 py-2 font-medium">3. Contributions</td>
//                 <td className="px-4 py-2">People contribute small amounts in exchange for rewards or just to support the cause.</td>
//               </tr>
//               <tr className="border-t">
//                 <td className="px-4 py-2 font-medium">4. Goal Reached or Not</td>
//                 <td className="px-4 py-2">If the goal is reached, the creator receives the funds. If not, funds may be returned based on platform rules.</td>
//               </tr>
//               <tr className="border-t">
//                 <td className="px-4 py-2 font-medium">5. Project Delivery</td>
//                 <td className="px-4 py-2">The creator builds or delivers what was promised using the raised funds.</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Learn More</h2>
//         <ul className="list-disc list-inside text-blue-600 space-y-2">
//           <li>
//             <a href="https://www.investopedia.com/terms/c/crowdfunding.asp" target="_blank" rel="noopener noreferrer" className="hover:underline">
//               Investopedia: Crowdfunding <ExternalLink className="inline w-4 h-4 ml-1" />
//             </a>
//           </li>
//           <li>
//             <a href="https://www.kickstarter.com/help/handbook" target="_blank" rel="noopener noreferrer" className="hover:underline">
//               Kickstarter Handbook <ExternalLink className="inline w-4 h-4 ml-1" />
//             </a>
//           </li>
//           <li>
//             <a href="https://www.indiegogo.com/learn/how-it-works" target="_blank" rel="noopener noreferrer" className="hover:underline">
//               Indiegogo: How It Works <ExternalLink className="inline w-4 h-4 ml-1" />
//             </a>
//           </li>
//         </ul>
//       </div>

//       <div className="text-center">
//         <button className="text-lg px-6 py-3 rounded-2xl shadow-md">
//           Start Your Campaign
//         </button>
//       </div>
//     </div>
//   );
// }
