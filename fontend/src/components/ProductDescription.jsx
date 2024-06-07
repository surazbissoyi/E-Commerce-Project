import React, { useState } from 'react';

const ProductDescription = () => {
    const [activeTab, setActiveTab] = useState("Description"); // State for active tab

    const handleTabClick = (tab) => {
      setActiveTab(tab); // Function to handle tab selection
    };

    const renderContent = () => {
      switch (activeTab) {
        case "Description":
          return (
            <>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cum nostrum dolore repellat consequatur, amet fugit accusamus eveniet cupiditate voluptatum quos perferendis vitae, voluptatibus dolorem error eum enim vero excepturi sapiente ex repellendus veritatis, dolores odio labore? Quae velit consectetur vitae laboriosam placeat soluta, ad nesciunt quos veniam expedita vel reprehenderit rem dolor temporibus ratione.</p>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorem facilis magnam tenetur amet ipsum laborum voluptatibus aliquam, aliquid sunt optio corrupti consequuntur commodi, tempora est! Commodi, voluptatem.</p>
            </>
          );
        case "Care Guide":
          return (
            <>
              <p className='text-sm'>Care instructions: Hand wash with mild detergent. Do not bleach. Hang to dry. Iron at low temperature if needed.</p>
              <p className='text-sm'>Additional care tips: Avoid direct sunlight for prolonged periods. Store in a cool, dry place.</p>
            </>
          );
        case "Size Guide":
          return (
            <>
              <p className='text-sm'>Size S: Chest 34-36 inches, Waist 28-30 inches</p>
              <p className='text-sm'>Size M: Chest 38-40 inches, Waist 32-34 inches</p>
              <p className='text-sm'>Size L: Chest 42-44 inches, Waist 36-38 inches</p>
              <p className='text-sm'>Size XL: Chest 46-48 inches, Waist 40-42 inches</p>
            </>
          );
        default:
          return null;
      }
    };

    return (
      <div className='mt-20'>
        <div className='flex gap-3 mb-4'>
          <button 
            onClick={() => handleTabClick("Description")} // Added click handler to switch to Description
            className={`!rounded-none !text-xs !py-[6px] w-36 ${activeTab === "Description" ? "btn_dark_rounded" : "btn_dark_outline"}`}
          >
            Description
          </button>
          <button 
            onClick={() => handleTabClick("Care Guide")} // Added click handler to switch to Care Guide
            className={`!rounded-none !text-xs !py-[6px] w-36 ${activeTab === "Care Guide" ? "btn_dark_rounded" : "btn_dark_outline"}`}
          >
            Care Guide
          </button>
          <button 
            onClick={() => handleTabClick("Size Guide")} // Added click handler to switch to Size Guide
            className={`!rounded-none !text-xs !py-[6px] w-36 ${activeTab === "Size Guide" ? "btn_dark_rounded" : "btn_dark_outline"}`}
          >
            Size Guide
          </button>
        </div>
        <div className='flex flex-col pb-16'>
          {renderContent()} {/* Render content based on the active tab */}
        </div>
      </div>
    );
};

export default ProductDescription;
