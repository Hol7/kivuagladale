import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <div className="w-full h-screen overflow-hidden">
            <video 
                className="w-full h-full object-cover" 
                src="https://g-ladalle.com/wp-content/uploads/2024/09/banniere-web-v5.mp4" 
                autoPlay 
                loop 
                muted 
            />
        </div>
    );
};

export default HeroSection;