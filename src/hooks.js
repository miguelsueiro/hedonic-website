import React from 'react'
import { useLocation } from "react-router-dom";

export const useBodyVars = () => {
  let location = useLocation();
  React.useEffect(() => {
    const style = document.documentElement.style
    
    if(location.pathname.includes("/releases")) {
      style.setProperty('--bodyBg', 'var(--releasesBg)');
      style.setProperty('--bodyContent', 'var(--releasesContent)');
      style.setProperty('--bodyContentDimmed', 'var(--releasesContentDimmed)');
      style.setProperty('--c-border', 'var(--c-borderLight)');
    } else {
      style.removeProperty('--bodyBg');
      style.removeProperty('--bodyContent');
      style.removeProperty('--bodyContentDimmed');
      style.removeProperty('--c-border');
    }

    window.scrollTo(0, 0);
  }, [location]);
}