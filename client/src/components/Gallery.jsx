'use client'


import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(()=>import("./OwlCarousel"),{ssr:false});

import React from 'react';

const Gallery = () => {
    

    return (
        <section className="w-full bg-black/50 text-center px-12 py-6" id="gallery">
            <h2 className="my-6 text-2xl font-bold text-white-800 md:mb-6 lg:text-3xl">Gallery</h2>
              <OwlCarousel/>
        </section>
    );
}

export default Gallery;
