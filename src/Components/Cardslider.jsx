import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cardslider = () => {
  // Dummy card data
  const dummyCards = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St, City",
      phone: "123-456-7890",
      Interat: "Axiom TechGuru Pvt. Ltd.",
      Description:
        "Axiom TechGuru is a leading technology company specializing in innovative solutions for businesses. With a focus on cutting-edge technology and strategic consulting, Axiom TechGuru helps organizations leverage digital transformation to achieve their goals. ",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_640.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Elm St, Town",
      phone: "987-654-3210",
      Interat: "Axiom TechGuru Pvt. Ltd.",
      Description:
      "Axiom TechGuru is a leading technology company specializing in innovative solutions for businesses. With a focus on cutting-edge technology and strategic consulting, Axiom TechGuru helps organizations leverage digital transformation to achieve their goals. ",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/03/03/08/25/rabbit-4031334_640.png",
    },
    {
      id: 3,
      name: "Alex Johnson",
      address: "789 Oak St, Village",
      phone: "555-123-4567",
      Interat: "Axiom TechGuru Pvt. Ltd.",
      Description:
      "Axiom TechGuru is a leading technology company specializing in innovative solutions for businesses. With a focus on cutting-edge technology and strategic consulting, Axiom TechGuru helps organizations leverage digital transformation to achieve their goals. ",
      imageUrl:
        "https://cdn.pixabay.com/photo/2023/10/23/14/37/bee-8336245_640.png",
    },
  ];

  // State to keep track of the active card index
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle moving to the next card
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === dummyCards.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle moving to the previous card
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? dummyCards.length - 1 : prevIndex - 1
    );
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
    <>
      {/* <div className="slider ">
        <Slider {...settings}>
          {dummyCards.map((card) => (
            <div className="card-container  fw-bold w-100 " key={card.id}>
              <div className="card bg-white  shadow-md flex rounded-lg  p-6 m-4">
                <div className="col-12 border border-2">
                  <img
                    src={card.imageUrl}
                    alt={card.name}
                    className="w-40 h-40 rounded-full border border-3 border-info mx-auto mb-4"
                  />
                </div>
                <div className="border border-2 col-12">
                  <h2 className="text-xl font-bold mb-2">{card.name}</h2>
                  <p className="mb-2">{card.address}</p>
                  <span>Mo. No. :- </span>{" "}
                  <span className="mb-2">{card.phone}</span>
                  <br />
                  <span>Work At : - </span>
                  <span className="mb-2">{card.Interat}</span>
                  <p>{card.id}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
      <div className="card     slider">
        <Slider {...settings}>
          {dummyCards.map((card) => (
            
            <div
              className="  container p-5  d-md-flex justify-evenly "
              key={card.id}
            >
              <div className="bg-white border border-3  w-full">
                <img
                  src={card.imageUrl}
                  alt={card.name}
                  className="  object-cover  shadow-xl  card-img  border-info mx-auto "
                />
              </div>
              <div className="bg-white fw-medium my-auto  w-full ">
                <div className="">
                  <h2 className="text-xl font-bold  mb-8">
                    <span>Intern No. :- </span>
                    {card.id}
                  </h2>
                  <h2 className="text-xl font-bold mb-2">
                    Intern Name :- {card.name}
                  </h2>
                  <p className="my-2">Add. :- {card.address}</p>
                  <span>Mo. No. :- </span>{" "}
                  <span className="my-2">{card.phone}</span>
                  <br />
                  <span>Work At : - </span>
                  <span className="my-2">{card.Interat}</span>
                  <br />
                  <span></span>
                  <span className="py-3">{card.Description}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Cardslider;
