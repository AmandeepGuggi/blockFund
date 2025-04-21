import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ethers } from 'ethers';
import axios from 'axios';

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader, Uploader } from '../components';

const categories = [
  {
    main: "TECH & INNOVATION",
    subCategories: [
      "Audio", "Camera Gear", "Education", "Energy & Green Tech", "Fashion & Wearables",
      "Food & Beverages", "Health & Fitness", "Home", "Phones & Accessories",
      "Productivity", "Transportation", "Travel & Outdoors", "Other Innovative Products"
    ],
  },
  {
    main: "CREATIVE WORKS",
    subCategories: [
      "Art", "Comics", "Dance & Theatre", "Film", "Music", "Photography",
      "Podcasts, Blogs & Vlogs", "Web Series & TV Shows"
    ],
  },
  {
    main: "COMMUNITY PROJECTS",
    subCategories: [
      "Culture", "Environment", "Human Rights", "Wellness", "Medical Assistance",
      "Disaster Relief", "Animal Welfare", "Other Community Projects"
    ],
  },
];

const CreateCampaign = () => {
  const navigate = useNavigate();
  const { address } = useStateContext();

  const {createCampaign} = useStateContext();

  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    mediaFiles: [],
    videoURL: '',
    category: '',
    subCategory: '',
    workProof: '',
    keywords: '',
  });

 
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isPhotosUploading, setIsPhotosUploading] = useState(false);



  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSelect = (main, sub) => {
    setSelectedCategory(main);
    setSelectedSubcategory(sub);
    setForm((prevForm) => ({
      ...prevForm,
      category: main,
      subCategory: sub,
    }));
    setIsOpen(false);
  };

  const uploadWorkProof = async () => {
    if (!file) return '';
    try {
      const fileData = new FormData();
      fileData.append("file", file);
      setIsUploading(true);
  
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", fileData, {
        headers: {
          pinata_api_key: "18d90f8a5912026d3d56",
          pinata_secret_api_key: "a5d5eee8014d4c7a88efb34edcbd9f947bbfc8a9760463cc38cece12ca89b5e6 ",
          "Content-Type": "multipart/form-data",
        },
      });
  
      const url = `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
      console.log("Work Proof Uploaded:", url);
      return url;
    } catch (err) {
      console.error("Work Proof Upload Failed:", err);
      return '';
    } finally {
      setIsUploading(false);
    }
  };
  

  const uploadMediaFiles = async () => {
    if (!media.length) return [];
    try {
      setIsPhotosUploading(true);
      const uploadedUrls = [];
  
      for (let i = 0; i < media.length; i++) {
        const fileData = new FormData();
        fileData.append("file", media[i]);
  
        const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", fileData, {
          headers: {
            pinata_api_key: import.meta.env.VITE_PINATA_API_KEY,
            pinata_secret_api_key: import.meta.env.VITE_PINATA_SECRET_KEY,
            "Content-Type": "multipart/form-data",
          },
        });
  
        const fileUrl = `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
        uploadedUrls.push(fileUrl);
      }
  
      console.log("Media Files Uploaded:", uploadedUrls);
      return uploadedUrls;
    } catch (err) {
      console.error("Media Upload Failed:", err);
      return [];
    } finally {
      setIsPhotosUploading(false);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!address) return alert("Connect your wallet first.");
    setIsLoading(true);
  
    const uploadedWorkProof = await uploadWorkProof();
    const uploadedMedia = await uploadMediaFiles();
  
    const finalForm = {
      ...form,
      workProof: uploadedWorkProof,
      mediaFiles: uploadedMedia,
    };
  
    console.log("Final Form Data:", finalForm);
  
    // Later:
    await createCampaign({...finalForm, target: ethers.utils.parseUnits(finalForm.target, 18)});
  
    setIsLoading(false);
    navigate('/all-campaigns');
  };
  
  return (
    <div className="flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      {isUploading && <Uploader />}
      <div className="camp-title flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="camp-title font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Start a Campaign
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
     

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            tagDescription="Campaign holder's name"
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormField
            labelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            tagDescription="What is the title of your campaign?"
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
        </div>

        <FormField
          labelName="Story *"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          tagDescription="Write a brief, interactive story about your project. "
          handleChange={(e) => handleFormFieldChange('description', e)}
        />

        <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <img src={money} alt="money" className="w-[40px] h-[40px] object-contain" />
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">We will do our best to reach 100% of the raised amount.</h4>
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Goal *"
            placeholder="ETH 0.50"
            tagDescription="Enter the total amount you aim to raise for your project"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          <FormField
            labelName="End Date *"
            placeholder="End Date"
            tagDescription="Select the ending date for your project or fundraising campaign"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
          />
        </div>

       
        
        <FormField
          labelName="Campaign Video URL *"
          placeholder="Place Video URL of your campaign"
          inputType="url"
          value={form.videoURL}
          tagDescription="Got a YouTube video demo of your project? Drop the link here!"
          handleChange={(e) => handleFormFieldChange('videoURL', e)}
          className="mb-[0px]"
        />

    <div className="relative  w-full  mt-5">
          {/* Select Category Button */}
          <button
          type='button'
            onClick={() => {
              setIsOpen(!isOpen)
            }}
            className="w-full px-4 py-3.5  border rounded-md flex justify-between items-center"
          >
            <p>
              {selectedCategory && selectedSubcategory
                ? `${selectedCategory} - ${selectedSubcategory} `
                : "Select Category"}
            </p>
            <span>{isOpen ? "▲" : "▼"}</span>
          </button>

            {/* Dropdown Content */}
            {isOpen && (
            <div className="absolute left-0 mt-2 w-full bg-white border shadow-lg p-4 grid grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-2">{category.main}</h3>
                  {category.subCategories.map((sub, subIndex) => (
                    <button type='button'
                      key={subIndex}
                      className="block py-1 text-gray-600 hover:bg-gray-100 w-full text-left px-2 rounded"
                      onClick={() => handleSelect(category.main, sub)}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Work Proof Upload */}
        <FormField
          labelName="Proof of Work *"
          inputType="file"
          tagDescription="Upload government authorized certificate or any official proof"
          handleChange={(e) => setFile(e.target.files[0])}
        />

        {/* Media Upload */}
        <FormField
          labelName="Photos of your Project *"
          inputType="file"
          multiple
          accept="image/*,video/*"
          tagDescription="Please upload photos/videos showcasing your project."
          handleChange={(e) => setMedia([...e.target.files])}
        />

         <FormField
            labelName="keywords "
            placeholder="Enter some keywords seprated by coma"
            tagDescription="Used for filtering or search but not shown to users directly."
            inputType="text"
            value={form.keywords}
            handleChange={(e) => handleFormFieldChange('keywords', e)}
          />

<p className=" bg-red-400 px-4 py-2 flex mt-[20px]
           mb-0  text-center" style={{ display: address ? "none" : "block" }}  >
          ⚠️ Please connect your wallet to create a campaign.</p>


        <CustomButton
          btnType="submit"
          title={isUploading || isPhotosUploading ? "Uploading..." : "Submit Campaign"}
          styles="bg-[#1dc071]"
        />
      </form>
    </div>
  );
};

export default CreateCampaign;
