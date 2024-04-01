import React from 'react';

function Banner({ image, title, text }) {
    return (
        <div className="h-full w-full bg-cover" style={{ backgroundImage: `url(/home/banner.jpg)` }}>
            <div className="bg-black w-full h-full opacity-50 flex items-center p-10">
                <div className="lg:w-1/2 space-y-10">
                    <h1 className="text-white md:text-5xl text-xl  font-bold">{title}</h1>
                    <p className="text-white md:text-lg text-sm">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;
