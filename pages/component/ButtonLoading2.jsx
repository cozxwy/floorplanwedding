import { useState } from 'react';

const ButtonLoading2 = () => {
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
     type="submit"
      onClick={handleClick}
      className={`flex items-center justify-center text-sm w-64 rounded-xl shadow py-3 px-2 text-white bg-indigo-600 ${
        isLoading ? 'opacity-50 cursor-not-allowed rounded-xl' : ''
      }`}
      disabled={isLoading}
    >
      {isLoading ? (isSuccess ? 'สำเร็จแล้ว' : 'กำลังส่งข้อมูล...') : 'ยืนยัน'}
    </button>
  );
};

export default ButtonLoading2;