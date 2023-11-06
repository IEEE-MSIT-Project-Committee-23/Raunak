'use client'

import React ,{useEffect} from 'react'
import 'jquery';
// import 'popper.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const OwlCarousel = () => {
    useEffect(() => {
        $('.owl-carousel').owlCarousel({
            items: 3,       
            loop: true,        
            margin: 16,        
            autoplay:true,
            autoplayTimeout:2000,
        });
        $('.owl-carousel').trigger('play.owl.autoplay',[2000]);
    }, []);

  return (
    <div>
        <div className="owl-carousel my-6">
                <div className="item"><img src="./Gallery/img1.jpg" alt="Item 1" /></div>
                <div className="item"><img src="./Gallery/img2.jpg" alt="Item 2" /></div>
                <div className="item"><img src="./Gallery/img3.jpg" alt="Item 3" /></div>
                <div className="item"><img src="./Gallery/img4.jpg" alt="Item 4" /></div>
                <div className="item"><img src="./Gallery/img5.jpg" alt="Item 5" /></div>
                <div className="item"><img src="./Gallery/img6.jpg" alt="Item 6" /></div>
                <div className="item"><img src="./Gallery/img7.jpg" alt="Item 7" /></div>
                <div className="item"><img src="./Gallery/img8.jpg" alt="Item 8" /></div>
            </div>
    </div>
  )
}

export default OwlCarousel