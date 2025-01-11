import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => 
  {

    //______ Scroll to the top of the page_____________//
      window.scrollTo(0, 0);
       
  },  [pathname]);

  return null;
};

export default ScrollToTop;
