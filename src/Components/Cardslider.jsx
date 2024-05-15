import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Cardslider = () => {
  // Dummy card data
  const dummyCards = [
    { id: 1, name: 'John Doe', address: '123 Main St, City', phone: '123-456-7890', Interat: 'Company A', imageUrl: 'https://example.com/image1.jpg' },
    { id: 2, name: 'Jane Smith', address: '456 Elm St, Town', phone: '987-654-3210', Interat: 'Company B', imageUrl: 'https://example.com/image2.jpg' },
    { id: 3, name: 'Alex Johnson', address: '789 Oak St, Village', phone: '555-123-4567', Interat: 'Company C', imageUrl: 'https://example.com/image3.jpg' },
  ];

  // State to keep track of the active card index
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle moving to the next card
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === dummyCards.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to handle moving to the previous card
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? dummyCards.length - 1 : prevIndex - 1));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setActiveIndex(index),
  };

  return (
    <div className="slider row">
      <Slider {...settings}>
        {dummyCards.map((card) => (
          <div className="card-container fw-bold w-75 col" key={card.id}>
            <div className="card bg-white shadow-md flex rounded-lg  p-6 m-4">
              <div>
                <img
                  src={card.imageUrl}
                  alt={card.name}
                  height={80}
                  className="w-30 h-30 rounded-full border border-3 border-info mx-auto mb-4"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">{card.name}</h2>
                <p className="mb-2">{card.address}</p>
                <span>Mo. No. :- </span> <span className="mb-2">{card.phone}</span>
                <br />
                <span>Work At : - </span>
                <span className="mb-2">{card.Interat}</span>
                <p>{card.id}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default Cardslider;
