'use client';
import React, { useState,  useEffect } from 'react'
import Image from 'next/image'
import { GrFormPrevious } from 'react-icons/gr';
import { MdNavigateNext } from 'react-icons/md';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const collaterals: React.FC =  () => {
  

  const toolLinks = [
    'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733908707/figma-2021-05-05_sd5km7.png',
    'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733908704/canva-logo-circle-freelogovectors.net_-400x400_gs7xtd.png',
    'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733908700/Adobe_Photoshop_CC_icon.svg_otvunw.png',
    'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733908698/Adobe_Illustrator_CC_icon.svg_gs9diq.png',
  ];
  
  // Function to randomize and select two tools
  const randomizeTools = () => {
    const shuffled = [...toolLinks].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2); // Select the first two items from shuffled
  };
  const images = [
    { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733901503/3_glwbhx.png', title: 'Instagram Ads', tools: randomizeTools() },
  
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733901500/1_2_n4yxln.png', title: 'School Paper Front page', tools: randomizeTools() },
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733901501/3_1_b1z2mu.png', title: 'School Paper News article', tools: randomizeTools() },
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733901505/5_shdeui.png', title: 'Event Promotion Flyer', tools: randomizeTools() },
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733901505/9_hnrflm.png', title: 'Magazine Center Fold' , tools: randomizeTools()},
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733901504/1_wmhi3x.png', title: 'Calendar', tools: randomizeTools() },
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733901505/8_nmbraz.png', title: 'Individual Sports Poster', tools: randomizeTools() },
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733901509/ukraine-russia_thumbnail-01_uw2xiv.png', title: 'Youtube Thumbnail' , tools: randomizeTools()},
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733901503/4_ikt0bm.png', title: 'Facebook Ad', tools: randomizeTools() },
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733903936/4_qzanxb.png', title: 'Brochure' , tools: randomizeTools()},
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733903936/5_tmop6w.png', title: 'Flyer' , tools: randomizeTools()},
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733903935/1_wimlxe.png', title: 'Another Brochure', tools: randomizeTools() },
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733904096/halloween_sale_Banner_version_3-0_pwacrc.png', title: 'Halloween Sale Banner' , tools: randomizeTools()},
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733904072/CUSTOMIZED_CARTOON_CANVAS_lehrnq.png', title: 'Landing Page Hero Banner' , tools: randomizeTools()},
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733904280/VERSION3_g0o7sd.png', title: 'Tiktok Banner ad', tools: randomizeTools() },
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733904295/halloween_sale_1920_x_1080_px_kqtywl.png', title: 'FB Reels Banner ad', tools: randomizeTools() },
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733904409/1_i0e10n.png', title: 'Product Promotional 1', tools: randomizeTools() },
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733904410/2_zltqo7.png', title: 'Product Promotional 2', tools: randomizeTools() },
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733904412/3_vx05vm.png', title: 'Product Promotional 3', tools: randomizeTools() },
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733904895/11_zfnhji.png', title: 'Lifestyle images', tools: randomizeTools() },
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733904876/3_g2xhhe.png', title: 'Lifestyle images 2' , tools: randomizeTools()},
  { src: 'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733904893/13_x5o8go.png', title: 'Lifestyle images 3' , tools: randomizeTools()},
  {src:'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733992356/467186569_1017704260370505_7013132198224799489_n_phdxgz.jpg', title: 'Sports Poster' , tools: randomizeTools()},


  {src:'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733994320/112-9421826-5928203-BG-rev2_kbhpgw.png', title: 'Bobs Burger Customized Cartoon' , tools: randomizeTools()},
  {src:'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733994318/180239_wbg_eisgl1.png' ,title: 'South Park Customized cartoon' , tools: randomizeTools()},

  {src:'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733994315/38592_ii8u6r.jpg' , title: 'Pet and Human cartoon Portrait' ,tools: randomizeTools()},

  {src:'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733994149/LINE_TEST_1-01_hxryzu.png' ,title: 'Line art' , tools: randomizeTools()},

  {src:'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733994121/PT32008_-_Pettoonies_Original_Pet_Art_-_1_OneColor_Canvas8x10in-01_opasa3.png' ,title: 'Pet Disney Cartoon' , tools: randomizeTools()},
  {src:'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733993011/mouthbeat3.2-01_pa6dt1.jpg' , title: "KDP Children's Book Illustration" ,tools: randomizeTools()},
  {src:'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733993007/page5-01_edrkgb.jpg' , title: "KDP Children's Book Illustration" ,tools: randomizeTools()},
  {src:'https://res.cloudinary.com/dylfnlwdm/image/upload/v1733993001/page6-01_msmafz.jpg' , title: "KDP Children's Book Illustration" ,tools: randomizeTools()},



     
  ];
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animationClass, setAnimationClass] = useState('scroll-animate-cardComplete');

  const handlePrevious = () => {
    
    setAnimationClass('scroll-animate-cardPrev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    
    setAnimationClass('scroll-animate-cardComplete');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
    
  }, [])

  return (
    <div className='h-screen flex flex-col justify-center  relative overflow-hidden'>
       <div className=' flex justify-center gap-10 w-full absolute z-10 text-center  font-semibold text-3xl my-10'>
      
        <div className='my-auto hidden md:block '>
        <button onClick={handlePrevious} className='px-4 py-4 hover:border-0 bg-blue-500 text-white rounded-full border bg-opacity-0 border-opacity-50 border-white hover:bg-blue-300 hover:text-black'>
          <GrFormPrevious />
        </button>
        </div>
          {images.map((image, index) => (
  <div
    key={index}
    className={`  gap-10 h-[100vh] relative flex flex-col w-full   ${index === currentIndex ? '' : 'hidden'} transition-opacity duration-500 ease-in-out`}
  >
    <div className="  h-[20vh] items-center text-center mt-32">
      <h1 className="font-semibold tracking-wider text-2xl md:text-4xl">{image.title}</h1>
    </div>

    <div
      className={`flex justify-center ${animationClass} rounded-md md:h-[60vh] h-[40vh]`}
      style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <Image
        src={image.src}
        alt="images"
        width={500} // Adjust this as needed to maintain aspect ratio
        height={500} // Adjust this as needed to maintain aspect ratio
        className="rounded-md"
        layout="intrinsic"
      />
    </div>
    <div className={`text-center md:h-[20vh] flex justify-center gap-8 h-[10vh] z-20 `}>
    <button onClick={handlePrevious} className="text-gray-400 hover:text-gray-200 disabled:opacity-50 md:hidden block ">
    <FaChevronLeft size={20} />
        </button>
    {(image.tools || []).map((tool, toolIndex) => (
        <img
          key={toolIndex}
          src={tool}
          alt={`Tool ${toolIndex + 1}`}
          style={{ width: '40px', height: '40px', margin: '5px' }}
        />
      ))}
        <button
                          className="text-gray-400 hover:text-gray-200 disabled:opacity-50 md:hidden block "
                          onClick={() => handleNext}
                         
                        >
                          <FaChevronRight size={20} />
                        </button>
    </div>
  </div>
))}
        <div className='my-auto hidden md:block'>
        <button onClick={handleNext} className='px-4 py-4 hover:border-0 bg-blue-500 text-white rounded-full border bg-opacity-0 border-opacity-50 border-white hover:bg-blue-300 hover:text-black'>
          <MdNavigateNext/>
        </button>
        </div>
          
      
      
      </div>
      
    
      <div className='flex justify-center flex-wrap max-w-screen relative opacity-80 overflow-hidden'>
   
        <div className='absolute w-full h-full bg-gradient-to-l from-black via-black to-transparent  translate-x-[700px]'></div>
        <div className='absolute w-full h-full bg-gradient-to-r from-black via-black to-transparent  -translate-x-[1000px]'></div>
<div className='absolute w-full h-full bg-gradient-to-r from-black via-black to-transparent  -translate-x-[1000px] opacity-70  '>





</div> 
 
{images.map((image, index) => (
          <Image key={index} src={image.src} width={150} height={150} alt='images' className='sm:hidden md:hidden hidden lg:block' />
        ))}
        
 


 
        
      
      
       
       
      </div>
 
    </div>
  )
}

export default collaterals