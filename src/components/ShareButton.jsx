import React, { useState } from 'react';
import { Link } from 'react-router';
import { bookmark, share } from '../assets';

const ShareButton = ({ url }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleShareClick = () => {
    setShowOptions(!showOptions);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  const handleFacebookShare = (url) => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookShareUrl, '_blank', 'noopener,noreferrer');
  };
  

  const handleInstagramShare = () => {
    const instagramLink = `https://www.instagram.com/?url=${encodeURIComponent(url)}`;
    window.open(instagramLink, '_blank');
  };

  return (
    <div>
      <div className='flex justify-end'>
              {/* <button  className='w-[230px] border-gray-400 border-3 px-3 py-2 text-2xl font-light rounded flex items-center gap-3'> <img src={bookmark} className='max-w-[20px]' alt="" /> Save for later</button> */}
              <button onClick={handleShareClick} className='w-[230px] border-gray-400 border-3 px-3 py-2 text-2xl font-light rounded flex items-center gap-3'> <img src={share} className='max-w-[30px]' />Share</button>
            </div>
      {showOptions && (
        <div className="share-options  absolute right-10 ">
          
<div className='flex flex-col items-baseline  border-1 bg-white shadow-lg mt-2   justify-baseline '>
          <button onClick={handleInstagramShare} className="py-4 w-full pr-[142px] pl-3 hover:bg-gray-100">
            Instagram
          </button>
          <button onClick={handleFacebookShare} className="py-4 w-full pr-[142px] pl-3 hover:bg-gray-100">
            Facebook
          </button>
<button onClick={handleCopyLink} className="py-4 w-full pr-[142px] pl-3 hover:bg-gray-100">
            Copy Link
          </button>
</div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
