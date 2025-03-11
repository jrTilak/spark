import { useState, useEffect } from "react";

/**
 *  Hook to simulate loading state for a given time
 */
const useMockLoading = (loadingTime: number = 2000) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);

    return () => clearTimeout(timer);
  }, [loadingTime]);

  return isLoading;
};

export default useMockLoading;
