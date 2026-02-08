import { useState } from "react";

export const useLiveStatus = () => {
  // Static version for GitHub Pages - no backend needed
  const [isLive] = useState(false);

  return { 
    isLive, 
    videoId: null, 
    title: null, 
    isLoading: false, 
    error: null, 
    refetch: () => Promise.resolve() 
  };
};
