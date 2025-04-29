import React from "react";
import Card from "../staticComponents/Card";
import { Instagram, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  return (
 <main >
  <section className="min-h-[300px] bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url("https://support.indiegogo.com/hc/theming_assets/01HZPB5NPFKB0M3V36J5PYD13D")'}}>
    <h1 className="text-center text-3xl ">How we may help you</h1>
  </section>
   <section className="w-full px-[200px] py-[100px] bg-[#F5F5F5] mx-auto my-15 flex flex-wrap gap-10">
    <Card 
    imgUrl="https://support.indiegogo.com/hc/theming_assets/01HZPB5M8GCKYCHPBQYHJYVMFH"
     title="Backers"
    description= "Find out how to evaluate and back crowdfunding campaigns, and manage your orders"
     link = "/explore/backer"
    />
    <Card 
    imgUrl="https://support.indiegogo.com/hc/theming_assets/01HZPB5KGBBAHW4Y9482SSQBFX"
     title="Campaigns"
    description= "Discover how to create, plan, and manage your crowdfunding campaign"
     link = "/explore/creators"
    />
    <Card 
    imgUrl="https://support.indiegogo.com/hc/theming_assets/01HZPB5M2SY6NSTF9P0MZZJPNZ"
     title="Payments"
    description= "Learn how to connect your bank account and receive funds from your crowdfunding campaign"
     link = "/explore/wallet"
    />
    <Card 
    imgUrl="https://support.indiegogo.com/hc/theming_assets/01HZPB5M2SY6NSTF9P0MZZJPNZ"
     title="Trust Operations"
    description= "Understand Blockfund's policies and how our Trust Operations team protects our customers"
     link = "/explore/trust-policies"
    />
    <Card 
    imgUrl="https://support.indiegogo.com/hc/theming_assets/01HZPB5KY08CKD5QXZWRDQBWWQ"
     title="Profile"
    description= "Build and customize your Blockfund profile"
     link = "/explore/profile-customization"
    />
   </section>

   <section className="min-h-[300px] bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url("https://support.indiegogo.com/hc/theming_assets/01HZPB5NPFKB0M3V36J5PYD13D")'}}>
   <div className="bg-white p-8 rounded-2xl max-w-xl mx-auto mt-10 text-center">
      <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
      <p className="text-gray-600 mb-6">Connect with us on your favorite platform:</p>
      <div className="flex justify-center gap-6">
        <a
          href="https://www.instagram.com/amanndeepkaurr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800 transition-transform duration-300 hover:scale-110"
        >
          <Instagram className="w-8 h-8" />
        </a>
        <a
          href="https://wa.me/8104348409"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-600 transition-transform duration-300 hover:scale-110"
        >
          <Phone className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/AmandeepGuggi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-transform duration-300 hover:scale-110"
        >
          <Linkedin className="w-8 h-8" />
        </a>
      </div>
    </div>
   </section>
 </main>
  );
}
