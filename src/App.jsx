import { Loading } from './components/loading/loading';
import Home from './components/home/home';
import { useState, useEffect } from 'react';
import { RoteMobi } from './components/roteMobi/roteMobi';

function App() {
  const showLoading = sessionStorage.getItem('showLoad');
  const [isLoading, setIsLoading] = useState(showLoading?false: true);
  const [isMobile, setIsMobile] = useState({mobile: false, horizontal: null});

  function checkOrientation() {
    if (window.innerWidth < window.innerHeight) {
      setIsMobile({mobile: true, horizontal: false});
    } else {
      setIsMobile({mobile: true, horizontal: true})
    }
  }

  useEffect(() => {
    function isMobileDevice() {
      return /Mobi|Android/i.test(navigator.userAgent);
    }

    if (isMobileDevice()) {
      checkOrientation();
      window.addEventListener('resize', checkOrientation);
    } else {
      setIsMobile({mobile: false, horizontal: null});
    }
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      if (showLoading == null) {
        sessionStorage.setItem('showLoad', true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } else {
        setIsLoading(false);
      }
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [showLoading]);

  return (
    <>
    {isLoading && <Loading />}
    {isMobile.horizontal===false ? <RoteMobi /> : <Home />}
    </>
  )
}

export default App;
