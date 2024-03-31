import React from 'react';
import Banner from '../Banner';
import bannerImage from '../../public/home/banner.jpg'; // Adjust the path as needed

function HomePage() {
    return (
        <Banner
            image={bannerImage}
            title="BONVO EXPORTS"
            text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}
        />
    );
}

export default HomePage;
