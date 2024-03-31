import React from 'react';

function Banner({ image, title, text }) {
    return (
        <div className="h-screen w-screen bg-cover" style={{ backgroundImage: `url(/home/banner.jpg)` }}>
            <div className="bg-black w-full h-full opacity-50 flex items-center p-10">
                <div className="w-1/2">
                    <h1 className="text-white md:text-5xl font-bold">{title}</h1>
                    <p className="text-white">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;
