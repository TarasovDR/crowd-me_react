import { useState, useEffect } from 'react';

const useCurrentPosition = () => {
  const [position, setPosition] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return position;
};

export default useCurrentPosition;
