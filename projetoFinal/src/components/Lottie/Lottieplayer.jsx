import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/meteorShowerWhite.json'; 

const LottiePlayer = () => {
    return (
        <div className="background-container">
            <Lottie animationData={animationData} loop autoplay className="lottie-animation" />
        </div>
    );
};

export default LottiePlayer;
