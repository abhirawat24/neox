import React from 'react';

const Efficiency = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-lg shadow-lg">
      {/* Image Section */}
      <div className="md:w-[50%] w-full h-full flex justify-center md:justify-start mb-6 md:mb-0">
        <img
          src="https://cdn.prod.website-files.com/633ac0ec0a94952cd251fe1d/65266a5600aa8428c4c67964_20230929---Essential-Tips-for-Building-a-Successful-Career-Journey-as-a-Syrian-Refugee-3%20(1).webp"
          alt="img"
          className="w-[85%] md:w-[70%] h-auto object-cover transform transition-transform duration-300 hover:scale-110 rounded-lg shadow-md"
        />
      </div>
      
      {/* Text Section */}
      <div className="md:w-[50%] w-full p-6">
        <h2 className="text-3xl font-bold text-center md:text-left text-gray-800 mb-4">Why Us?</h2>
        <p className="text-lg text-gray-600 text-justify leading-relaxed">
          At Godrej, we understand how crucial it is to find the right talent to drive business success. Our platform simplifies the recruitment process, making it faster, more efficient, and tailored to meet your specific needs. With a user-friendly interface, an extensive pool of skilled professionals, and advanced search capabilities, we connect you with the best talent effortlessly. Whether you're a startup or an MNC, our holistic solution reduces hiring costs, saves time, and ensures optimal outcomes. Choose us for a smarter, more effective hiring process.
        </p>
      </div>
    </div>
  );
};

export default Efficiency;
