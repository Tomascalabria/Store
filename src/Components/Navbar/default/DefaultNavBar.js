import React, { useEffect, useState } from 'react';
import { DesktopNavBar } from './DesktopNavBar/DesktopNavBar';
import { MobileNavBar } from '../MobileNavBar/MobileNavBar';

export const DefaultNavBar = () => {
const [screenWidth, setScreenWidth] = useState(window.innerWidth);
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
setScreenWidth(window.innerWidth);
const handleResize = () => setScreenWidth(window.innerWidth);
window.addEventListener("resize", handleResize);
return () => window.removeEventListener("resize", handleResize);
}, []);

useEffect(() => {
setIsMobile(screenWidth < 700);
}, [screenWidth]);

return isMobile ? <MobileNavBar/> : <DesktopNavBar/>
};

