import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Specialities = () => {
  const specialitiesData = [
    { name: "Dentist", image: "/Dentist.svg" },
    { name: "Ophthalmology", image: "/Ophthalmology.svg" },
    { name: "Neurology", image: "/Neurology.svg" },
    { name: "Cardiology", image: "/Cardiology.svg" },
    { name: "Neurology", image: "/Neurology2.svg" },
    { name: "Urology", image: "/Urology.svg" },
    { name: "Orthopedic", image: "/Orthopedic.svg" },
  ];

  // State to handle the visible range of items (6 items at a time)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the auto-play with a timer
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 1 second timer for autoplay
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  // Function to handle next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % specialitiesData.length);
  };

  // Function to handle previous button click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? specialitiesData.length - 1 : prevIndex - 1
    );
  };

  // Get the 6 visible items based on the currentIndex
  const visibleItems = [
    ...specialitiesData.slice(currentIndex, currentIndex + 6),
    ...specialitiesData.slice(
      0,
      Math.max(0, currentIndex + 6 - specialitiesData.length)
    ),
  ];

  return (
    <div className="bg-white w-[80%] flex flex-col justify-center py-[2vw] mb-4">
      <div className="flex justify-between mx-32 items-center text-center">
        <h1 className="font-semibold text-4xl my-10">Specialities</h1>
        <div className="flex items-center gap-4">
          <FaChevronLeft
            className="cursor-pointer bg-white shadow-lg text-[#787777]  rounded-full p-2 text-[2.8rem] hover:bg-blue-500 hover:text-white transition-all duration-300"
            onClick={handlePrev}
          />
          <FaChevronRight
            className="cursor-pointer bg-white shadow-lg text-[#787777] rounded-full p-2 text-[2.8rem] hover:bg-blue-500 hover:text-white transition-all duration-300"
            onClick={handleNext}
          />
        </div>
      </div>

      {/* Carousel content */}
      <div className="flex items-center justify-center gap-6  ">
        {visibleItems.map((speciality, index) => (
          <div
            key={index}
            className="border h-[10vw] w-[10vw] flex items-center flex-col text-center rounded-lg justify-center hover:shadow-2xl cursor-pointer transition-all duration-300"
          >
            <div className="hover:bg-blue-500 rounded-[50%] border p-4  duration-300  hover:scale-x-[-1]">
              <img
                src={speciality.image}
                alt={speciality.name}
                className="hover:scale-x-[-1] w-[2.5vw] hover:fill-white h-[2.5vw] duration-300"
              />
            </div>
            <h2 className="font-semibold mt-3 text-lg">{speciality.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialities;
