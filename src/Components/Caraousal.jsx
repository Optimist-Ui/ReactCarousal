import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of doctor data (simulating data for multiple doctors)
  const doctors = [
    {
      name: "Dr. Hamaila Saeed",
      specialty: "General Physician",
      image: "/Toprated-1st.jpg",
      rating: "4.9 / 5",
    },

    {
      name: "Dr. Sam",
      specialty: "General Physician",
      image: "/Toprated-4.jpg",
      rating: "4.9 / 5",
    },
    {
      name: "Dr. Zoha",
      specialty: "General Physician",
      image: "/Toprated-3rd.jpg",
      rating: "4.9 / 5",
    },
  ];

  const numberOfVisibleCards = 3; // Set the number of visible cards
  const totalCards = doctors.length;

  // Duplicating doctors array for seamless transition
  const duplicatedDoctors = [...doctors, ...doctors]; // Double the array

  // Function to go to the next card in the carousel
  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === totalCards) {
        // Reset to 1st index when we reach the end of original items
        return 1;
      }
      return prevIndex + 1;
    });
  };

  // Function to go to the previous card in the carousel
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        // Jump to last index if at the beginning
        return totalCards - 1;
      }
      return prevIndex - 1;
    });
  };

  // Auto-slide effect (runs every 6 seconds)
  useEffect(() => {
    const autoSlide = setInterval(() => {
      goToNext(); // Automatically go to the next card
    }, 6000);

    return () => clearInterval(autoSlide); // Clean up the interval when the component unmounts
  }, [currentIndex]);

  return (
    <div className="bg-white px-[8vw] py-[8vh] flex items-center justify-center gap-8">
      <div className="max-w-[12vw]">
        <h1 className="text-[2vw] mb-10 leading-tight">
          Top Rated <br /> Doctors
        </h1>
        <p className="text-xl tracking-wider text-[#6a6969]">
          Browse from a list of PMDC certified doctors and <br /> choose the one
          that's right <br /> for you!
        </p>
      </div>

      <div className="flex items-center text-center justify-between gap-6 relative">
        {/* Left Icon */}
        <div
          className="bg-[#dfdcdc] rounded-[50%] cursor-pointer p-4"
          onClick={goToPrevious}
        >
          <FaChevronLeft size={20} />
        </div>

        {/* Doctor Cards - Showing 3 Cards */}
        <div className="flex overflow-hidden w-[50vw]">
          <div
            className="flex gap-6 py-12 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex % totalCards) * (100 / numberOfVisibleCards)
              }%)`,
              width: `${
                (100 / numberOfVisibleCards) * duplicatedDoctors.length
              }%`,
            }}
          >
            {duplicatedDoctors.map((doctor, index) => (
              <div
                key={index}
                className="rounded-3xl w-[20vw] px-6 pt-20 pr-28 shadow-lg bg-b text-start transition-opacity duration-500 ease-in-out"
              >
                <div className="relative flex justify-between items-center">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-[5vw] rounded-2xl absolute top-[-8rem]"
                  />
                  <div className="bg-cyan-500 text-white py-1 pl-3 px-2 rounded-tr-3xl absolute right-[-7rem] top-[-5rem] text-lg">
                    &#x2605; &nbsp;{doctor.rating}
                  </div>
                </div>
                <h1 className="text-2xl my-4">{doctor.name}</h1>
                <p className="my-4 text-[#6a6969] tracking-tighter pb-5">
                  {doctor.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Icon */}
        <div
          className="bg-[#dfdcdc] rounded-[50%] cursor-pointer p-4"
          onClick={goToNext}
        >
          <FaChevronRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
