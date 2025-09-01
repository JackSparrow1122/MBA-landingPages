import { useEffect } from 'react';

const NPFWidget = () => {
  useEffect(() => {
    // Create the script element for loading the widget
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);

    // Cleanup function to remove the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="npf_wgts"
      data-height="400px"  // Updated height
      data-w="ffa434467d9fc7db2062d18fe591f9ff"  // Updated widget ID for IGBS MBA
    ></div>
  );
};

export default NPFWidget;
