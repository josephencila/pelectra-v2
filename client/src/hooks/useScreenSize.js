import { useEffect, useState } from "react";

export const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResizeWindow = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
  
        window.addEventListener('resize', handleResizeWindow);

       
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, []);

    return screenSize;
};