import React from 'react'
import Slider from 'react-slick'

import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings = {
        dots:true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        Responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slideToShow: 1,
                    slidesToScroll: 1,
                },  
            },
        ],
    };

  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porro pariatur ipsa maxime quas ab, nihil reprehenderit eum est quae tempore quo dolor facilis quasi voluptates delectus modi earum ut.
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt='ava01'/>
            <h6 className='mb-0 mt-3'>Sagynov Nursultan</h6>
            <p>Customer</p>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porro pariatur ipsa maxime quas ab, nihil reprehenderit eum est quae tempore quo dolor facilis quasi voluptates delectus modi earum ut.
            
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt='ava01'/>
            <h6 className='mb-0 mt-3'>Color Anastasia</h6>
            <p>Customer</p>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porro pariatur ipsa maxime quas ab, nihil reprehenderit eum est quae tempore quo dolor facilis quasi voluptates delectus modi earum ut.
    
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt='ava01'/>
            <h6 className='mb-0 mt-3'>Moscovskiy Misha</h6>
            <p>Customer</p>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porro pariatur ipsa maxime quas ab, nihil reprehenderit eum est quae tempore quo dolor facilis quasi voluptates delectus modi earum ut.
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt='ava01'/>
            <h6 className='mb-0 mt-3'>Sagynov Nursultan</h6>
            <p>Customer</p>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porro pariatur ipsa maxime quas ab, nihil reprehenderit eum est quae tempore quo dolor facilis quasi voluptates delectus modi earum ut.
            
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt='ava01'/>
            <h6 className='mb-0 mt-3'>Color Anastasia</h6>
            <p>Customer</p>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porro pariatur ipsa maxime quas ab, nihil reprehenderit eum est quae tempore quo dolor facilis quasi voluptates delectus modi earum ut.
    
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt='ava01'/>
            <h6 className='mb-0 mt-3'>Moscovskiy Misha</h6>
            <p>Customer</p>
        </div>
    </div>
    
  </Slider>
}

export default Testimonials