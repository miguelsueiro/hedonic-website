import React from 'react'
import { useLocation } from "react-router-dom";

export const useBodyVars = () => {
  let location = useLocation();
  React.useEffect(() => {
    const style = document.documentElement.style
    
    if(location.pathname.includes("/releases")) {
      style.setProperty('--bodyBg', 'var(--releasesBg)');
      style.setProperty('--bodyContent', 'var(--releasesContent)');
    } else {
      style.removeProperty('--bodyBg');
      style.removeProperty('--bodyContent');
    }

    window.scrollTo(0, 0);
  }, [location]);
}