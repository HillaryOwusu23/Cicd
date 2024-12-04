'use client';
import { BallTriangle } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <BallTriangle
        height="80"
        width="80"
        color="#3dd6a0"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};
export default Loading;
