import React from 'react';
const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center relative">
      <div className='animate-spin'>
      <div className='w-20 h-20 bg-red-600 rounded-full'>
          <div className='w-20 h-10 bg-white rounded-b-full absolute bottom-0'>
            <div className='w-20 h-4 bg-black translate-y-[-10%]'>
                <div className='bg-white w-4 h-4 rounded-full translate-x-[200%] border-2 border-black scale-200'>

                </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;