'use client';
import React, { useState } from 'react';
import Movie2 from './movie2';
import Videocard from './videocard';
import Moviemobile from './moviemobile';
 

const Videoproject: React.FC = () => {
    const videoCards = [
        {
          category: 'Documentary',
          videos: [
            {
              src: 'https://www.youtube.com/embed/JpBKxfWFoH0',
              title: 'The true story behind the Israel-Palestine conflict',
              description: 'This video aims to provide a balanced overview of pivotal events and key turning points. Explore the origins of tensions between Israel and Palestine, the role of Hamas in Gaza, and the impact of recent attacks and war. Understand the broader context and the quest for peace in this ongoing strife.',
              link: { text: 'Learn More', href: 'https://www.youtube.com/embed/JpBKxfWFoH0' },
            },
            {
              src: 'https://www.youtube.com/embed/MYCD8KD2N0s',
              title: 'Gaza Hospital Explosion - Continuous battle Hamas vs IDF',
              description: 'In our latest deep-dive video, we explore the perplexing and tragic explosion at Al Ahli Arab hospital in Gaza, which claimed hundreds of lives.',
              link: { text: 'Watch Now', href: 'https://www.youtube.com/embed/MYCD8KD2N0s' },
            },
            {
                src: 'https://www.youtube.com/embed/S9pZzQqz5yQ',
                title: 'Decoding History: The Ukraine-Russia Conflict - An In-Depth Analysis',
                description: "Step into history's rollercoaster! Get ready for the wild ride as we uncover the fall of the Soviet Union and Ukraine's fight for freedom. Watch how Russia, Ukraine, and the world clashed, shaping our history books forever. Dive into the intense conflict, power struggles, and Putin's moves that changed the game. Brace for drama, resilience, and a nation's struggle for a place in the world! Don't miss this epic tale! Subscribe, like, and share for more on #Ukraine #Russia #WarHistory!",
                link: { text: 'Watch Now', href: 'https://www.youtube.com/embed/S9pZzQqz5yQ' },
                
              },
              
              {
                src: 'https://www.youtube.com/embed/_roY7D3uuTE',
                title: 'Ayuko Original Music Video-Silent Voices',
                description: 'Made using AI for the video clips, music is arranged using AI. This is the official music video of Ayukoshop.com',
                link: { text: 'Watch Now', href: 'https://www.youtube.com/embed/_roY7D3uuTE' },
              },
          ],
        },
        {
          category: 'Educational',
          videos: [
            {
              src: 'https://youtube.com/embed/_GbuHOXsMzw',
              title: 'Mathayog Pilot Presentation',
              description: 'Mathayog is an engaging and effective learning management system dedicated to helping students conquer the world of mathematics. It offers a platform for students of all ages to unlock the power of math and start their educational adventure.',
              link: { text: 'Watch Now', href: 'https://youtube.com/embed/_GbuHOXsMzw' },
            },
            {
              src: 'https://youtube.com/embed/2WaCfS78evs',
              title: 'Counting numbers to 1000 using blocks - Mathayog.com',
              description: "Counting numbers to 1000 using blocks is a fantastic way to visualize and understand large numbers. Mathayog.com offers engaging resources to help students grasp this concept. By using blocks, students can break down numbers into hundreds, tens, and ones, making it easier to comprehend and count up to 1000.",
              link: { text: 'Read More', href: 'https://youtube.com/embed/2WaCfS78evs' },
            },
            {
                src: 'https://youtube.com/embed/2WaCfS78evs',
                title: 'Finding the next numbers in a number sequence',
                description: 'Finding the next numbers in a sequence involves identifying the pattern or rule that the sequence follows.',
                link: { text: 'Watch Now', href: 'https://youtube.com/embed/2WaCfS78evs' },
              },
              {
                src: 'https://youtube.com/embed/2WaCfS78evs',
                title: 'Subtracting within 1,000 without regrouping using blocks',
                description: 'Mastering subtraction within 1,000 without regrouping using blocks! 🧮✨ Making math fun and visual, one block at a time. #MathMagic #LearningMadeEasy',
                link: { text: 'Watch Now', href: 'https://youtube.com/embed/2WaCfS78evs' },
              },
          ],
        },
        {
          category: 'Product Ads',
          videos: [
            {
              src: 'https://youtube.com/embed/kXq3k0HYShY',
              title: 'Luminous Sunscreen Mist Travel Hacks in maintaining that Luminous glow',
              description: 'Stay radiant on the go! 🌞✨ Discover travel hacks with Luminous Sunscreen Mist to keep that glow shining bright, no matter where your adventures take you. #GlowOnTheGo',
              link: { text: 'Watch Now', href: 'https://youtube.com/embed/kXq3k0HYShY' },
            },
            {
              src: 'https://youtube.com/embed/1-X40NK9K7c',
              title: 'Custom Cartoon/Disney Portrait Product Ads',
              description: 'Transform your favorite moments into magical memories with our Custom Cartoon/Disney Portraits! Perfect for gifts, home decor, or just a touch of whimsy in your life. ✨🎨 #DisneyMagic #CustomPortraits',
              link: { text: 'Watch Now', href: 'https://youtube.com/embed/1-X40NK9K7c' },
            },
            {
                src: 'https://www.youtube.com/embed/jxnaqq4VFAY',
                title: 'Ayuko Customized Anime Shoes',
                description: "Ayuko offers a fantastic range of customized anime shoes that let you wear your favorite characters and designs on your feet. Whether you're a fan of classic anime or the latest hits, Ayuko has something for everyone. Their shoes are not only stylish but also a great way to express your love for anime.",
                link: { text: 'Watch Now', href: 'https://www.youtube.com/embed/jxnaqq4VFAY' },
              },
              {
                src: 'https://www.youtube.com/embed/coOS0hviG8g',
                title: 'Moalboal Cebu Sardine Run-Cebu tours',
                description: "Explore Cebu's ecotourism, in this fun field trip with the family",
                link: { text: 'Watch Now', href: 'https://www.youtube.com/embed/coOS0hviG8g' },
              },
            
          ],
        },
        {
          category: 'Vlogs',
          videos: [
            {
              src: 'https://youtube.com/embed/2249U3Nawpk',
              title: 'The red thread of fate, in Wong Tai Sin temple in Hong Kong',
              description: 'Channeling our inner anime protagonists, we embarked on a journey to Wong Tai Sin Temple in HK. There, we tied the red thread of fate, sealing our destiny as a couple. Who knew love could be so... knotty? 😉❤️',
              link: { text: 'Watch Now', href: 'https://youtube.com/embed/2249U3Nawpk' },
            },
            {
              src: 'https://youtube.com/embed/0FooRtrJ2_4',
              title: 'A tourist\'s guide to Hong Kong/ free spots and more',
              description: 'Discover Hong Kong on a budget! From free attractions to hidden gems, this guide has everything you need for an unforgettable adventure without breaking the bank. 🏙️✨',
              link: { text: 'Watch Now', href: 'https://youtube.com/embed/0FooRtrJ2_4' },
            },
            {
                src: 'https://youtube.com/embed/E2AbKuJULzo',
                title: 'The Temple of Wong Tai Sin',
                description: 'xploring the mystical Temple of Wong Tai Sin, where wishes come true and destinies intertwine. A serene escape in the heart of Hong Kong. 🌟🏮',
                link: { text: 'Watch Now', href: 'https://youtube.com/embed/E2AbKuJULzo' },
              },
              {
                src: 'https://youtube.com/embed/9Gv3O_RJDDs',
                title: 'First Trail Run',
                description: 'Sharing my first ever trail run—what a roller coaster of emotions! Between the pain, exhaustion, and needing to take a dump three times (yes, three!), I also managed to lose both toenails. But hey, it was a blast, and I can\'t wait for the next one! 😂🏃‍♂️⛰️',
                link: { text: 'Watch Now', href: 'https://youtube.com/embed/9Gv3O_RJDDs' },
              },
          ],
        },
      ];
      
  
    const [currentCard, setCurrentCard] = useState({
      title: 'Video Edits',
      description: 'This section contains my most recent video projects ranging from shorts to long form content. Click play now to preview the videos. ',
      video: 'https://www.youtube.com/embed/S9pZzQqz5yQ',
      link: { text: 'Default Link', href: 'https://www.youtube.com/embed/S9pZzQqz5yQ' },
    });
  
    return (
      <div className="h-screen bg-black">
    
        <div className='h-[50%] block md:hidden'>
        <Moviemobile
  title={currentCard.title}
  description={currentCard.description}
  image={currentCard.video}  // The embed link from the current card
  link={currentCard.link}
/>

        </div>
        <div className='h-[50%] hidden md:block'>
        <Movie2
  title={currentCard.title}
  description={currentCard.description}
  image={currentCard.video}  // The embed link from the current card
  link={currentCard.link}
/>

        </div>
        
        <div className="translate-y-[10%] h-[50%]">
          <Videocard cards={videoCards} onHover={setCurrentCard} />
        </div>
      </div>
    );
  };
  
  export default Videoproject;