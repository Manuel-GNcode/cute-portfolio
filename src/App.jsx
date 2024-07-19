// import { Suspense, lazy } from 'react';
{/* <Suspense fallback={<Loading />}>
        <Home />
      </Suspense> */}
      // const Home = lazy(() => import('../home/home'));
import { Loading } from './components/loading/loading';
import Home from '../home/home';
import { useState, useEffect } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const showLoading = sessionStorage.getItem('showLoad');

  useEffect(() => {
    const handleLoad = () => {
      if (!showLoading) {
        sessionStorage.setItem('showLoad', true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      } else {
        setIsLoading(false);
      }
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : <Home />}
    </>
  )
}

export default App;
