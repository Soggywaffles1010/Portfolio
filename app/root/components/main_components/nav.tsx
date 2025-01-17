'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { GiNightSky } from 'react-icons/gi';
import { AiOutlineSun } from 'react-icons/ai';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Box, Button } from '@mui/material';

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);

  const handleModeChange = () => {
    setIsNightMode(!isNightMode);
  };

  useEffect(() => {
    // Update global body class
    document.body.className = isNightMode ? 'night-mode' : 'day-mode';

    // Update navigation bar class
    const navElement = document.querySelector('nav');
    if (navElement) {
      navElement.className = isNightMode ? 'night-mode' : 'day-mode';
    }
  }, [isNightMode]);

  return (
    <nav className="w-full nav-whole">
      <div className="md:hidden flex justify-between items-center px-2">
         {/* Hamburger Icon (Mobile Menu Toggle) */}
         <div className=" items-center ">
        
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="focus:outline-none ml-4"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div className="flex md:hidden items-center">
        <Link href="/">
          <img
            src="https://res.cloudinary.com/dylfnlwdm/image/upload/v1737086365/Pink_Animated_Photo_Collage_Happy_Birthday_Pinterest_Pin_d2w7jf.png"
            alt="My logo"
            width="40"
            height="20"
            className="transition-transform transform hover:scale-150 ease-out duration-300"
          />
        </Link>
      </div>
       <div className="md:hidden flex items-center ">
       <button
          onClick={handleModeChange}
          className="focus:outline-none transition-transform transform hover:scale-125 ease-out duration-300"
        >
          {isNightMode ? (
            <GiNightSky className="text-2xl text-[#bdd9ed]" />
          ) : (
            <AiOutlineSun className="text-2xl text-[#1B4965]" />
          )}
        </button>
    </div>
    
      </div>












      <div className="flex justify-between items-center px-16">
        {/* Logo */}
        <div className="hidden md:flex items-center">
          <Link href="/">
            <img
              src="https://res.cloudinary.com/dylfnlwdm/image/upload/v1737086365/Pink_Animated_Photo_Collage_Happy_Birthday_Pinterest_Pin_d2w7jf.png"
              alt="My logo"
              width="40"
              height="20"
              className="transition-transform transform hover:scale-150 ease-out duration-300"
            />
          </Link>
        </div>

       


        {/* Desktop Navigation */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1,
            },
          }}
        >
          <ButtonGroup
            variant="text"
            aria-label="Basic button group"
            className="hidden md:flex gap-10 items-center"
          >
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Button 
                  sx={{
                    color: isNightMode ? '#bdd9ed' : '#1B4965', // Font color
                    borderColor: isNightMode ? '#bdd9ed' : '#1B4965', // Border color matches font
                    '&:hover': {  
                      borderColor: isNightMode ? '#bdd9ed' : '#1B4965',
                      fontWeight: 'bold',
                      
                    },
                  }}
                className="hover:font-semibold transition-transform transform hover:scale-110 ease-out duration-300 ">
                Projects
              </Button>
              {isDropdownOpen && (
                <div className="absolute z-10 top-full w-48 dropdown-nav shadow-lg rounded text-left">
                  <ul>
                    <li>
                      <Link
                        className="custom-button"
                        href="#projects"
                      >
                        UI/UX Designs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="custom-button"
                        href="#collaterals"
                      >
                        Graphic Designs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="custom-button"
                        href="#movies"
                      >
                        Videos
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Button 
                 sx={{
                  color: isNightMode ? '#bdd9ed' : '#1B4965', // Font color
                  borderColor: isNightMode ? '#bdd9ed' : '#1B4965', // Border color matches font
                  '&:hover': {  
                    borderColor: isNightMode ? '#bdd9ed' : '#1B4965',
                    fontWeight: 'bold',
                    
                  },
                }}
              className="hover:font-semibold  transition-transform transform hover:scale-110 ease-out duration-300">
              Contact me
            </Button>

            {/* Toggle for Day/Night Mode */}
            <FormControlLabel
              control={
                <Switch checked={isNightMode} onChange={handleModeChange} color="primary" />
              }
              label={
                isNightMode ? (
                  <GiNightSky className="text-2xl" />
                ) : (
                  <AiOutlineSun className="text-2xl" />
                )
              }
            />
          </ButtonGroup>
        </Box>
      </div>

      {/* Mobile Menu */}
     
      {isMobileMenuOpen && (
        <Box sx={{ display: 'flex', '& > *': { m: 1 } }}>
          <ButtonGroup orientation="vertical" aria-label="Vertical button group" variant="text">
            <Link href="#projects" className="block text-gray-300 hover:text-[#00FF00]">
              <Button
                sx={{
                  color: isNightMode ? '#bdd9ed' : '#1B4965',
                  borderColor: isNightMode ? '#bdd9ed' : '#1B4965',
                  '&:hover': {  
                    borderColor: isNightMode ? '#bdd9ed' : '#1B4965',
                    fontWeight: 'bold',
                  },
                }}
                className="hover:font-semibold  transition-transform transform hover:scale-110 ease-out duration-300"
              >
                UI/UX Designs
              </Button>
            </Link>
            <Link href="#collaterals" className="block text-gray-300 hover:text-[#00FF00]">
              <Button
                sx={{
                  color: isNightMode ? '#bdd9ed' : '#1B4965',
                  borderColor: isNightMode ? '#bdd9ed' : '#1B4965',
                  '&:hover': {  
                    borderColor: isNightMode ? '#bdd9ed' : '#1B4965',
                    fontWeight: 'bold',
                  },
                }}
                className="hover:font-semibold  transition-transform transform hover:scale-110 ease-out duration-300"
              >
                Graphic Designs
              </Button>
            </Link>
            <Link href="#movies" className="block text-gray-300 hover:text-[#00FF00]">
              <Button
                sx={{
                  color: isNightMode ? '#bdd9ed' : '#1B4965',
                  borderColor: isNightMode ? '#bdd9ed' : '#1B4965',
                  '&:hover': {  
                    borderColor: isNightMode ? '#bdd9ed' : '#1B4965',
                    fontWeight: 'bold',
                  },
                }}
                className="hover:font-semibold  transition-transform transform hover:scale-110 ease-out duration-300"
              >
                Videos
              </Button>
            </Link>
            <Link href="/contact" className="block text-gray-300 hover:text-[#00FF00]">
              <Button
                sx={{
                  color: isNightMode ? '#bdd9ed' : '#1B4965',
                  borderColor: isNightMode ? '#bdd9ed' : '#1B4965',
                  '&:hover': {  
                    borderColor: isNightMode ? '#bdd9ed' : '#1B4965',
                    fontWeight: 'bold',
                  },
                }}
                className="hover:font-semibold  transition-transform transform hover:scale-110 ease-out duration-300"
              >
                Contact Me
              </Button>
            </Link>
          </ButtonGroup>
        </Box>
      )}
    </nav>
  );
};

export default Nav;
