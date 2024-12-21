'use client';

import React from 'react';
import Image from 'next/image';

const Socialproofs = () => {
  // Cloudinary image URLs
  const imageUrls = [
    'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733902380/Asset_9_lghaad.png',
    'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733902380/Asset_10_am3zbr.png',
    'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733902380/Asset_11_hjjosc.png',
    'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733902380/Asset_7_ybyd3v.png',
    'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733902379/Asset_4_v7zjjq.png',
    'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733902380/Asset_8_kpxlkp.png',
    'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733902379/Asset_5_nh1ra1.png',
    'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733902379/Asset_3_du6d3v.png',
    'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733902379/Asset_2_ooww6u.png',
    'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733902379/Asset_6_lidaxv.png',
    'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733902379/Asset_1_gmxome.png',
    'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733902678/LOGO_OFFICIAL_kpncbh.svg',
  ];

  return (
    <div className="w-full ">
      <div className="flex flex-col gap-6">
        {/* Scrolling Wrapper */}
        <div className="flex items-center gap-10 md:gap-20 sm:gap-2 overflow-x-auto animate-scroll-text whitespace-nowrap scrollbar-hide">
          {imageUrls.map((url, i) => (
            <Image
              key={i}
              src={url}
              alt={`Asset ${i + 1}`}
              width={120} // Adjust base width for mobile
              height={120} // Adjust base height for mobile
              className=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socialproofs;
