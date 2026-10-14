import React, { useEffect } from 'react';

const TelegramWidget = ({ channelName }) => {
  useEffect(() => {
    console.log("Component mounted and useEffect triggered");
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-discussion', channelName);
    script.setAttribute('data-comments-limit', '10');
    document.body.appendChild(script);

    // Cleanup: Remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, [channelName]); // Re-run the effect if channelName changes

  return (
    <div>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
      {/* The script is being dynamically appended above, so you don't need it here */}
    </div>
  );
};

export default TelegramWidget;
