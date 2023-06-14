import { useState } from 'react';

const LoadingButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    // Simulate an asynchronous request
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${
        isLoading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={isLoading}
    >
      {isLoading ? (isSuccess ? 'Success' : 'Loading...') : 'Submit'}
    </button>
  );
};

export default LoadingButton;