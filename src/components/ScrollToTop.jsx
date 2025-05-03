import React, { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
