import React from 'react';
import journeySteps from '../Our_JSON_Data/journeySteps.json'
export default function Section2() {
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 bg-black">
      <div className="max-w-5xl w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            My <span className="text-orange-500">Journey</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg px-4">
            The path that shaped me into the developer I am today
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 sm:space-y-12">
          {journeySteps.map((step, index) => (
            <div data-aos="zoom-in" data-aos-duration="2000" key={index} className="flex gap-4 sm:gap-6 group">
              {/* Left Side - Point and Line */}
              <div className="flex flex-col items-center flex-shrink-0">
                {/* Point/Dot */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-500 border-4 border-black ring-4 ring-orange-500/20 group-hover:scale-125 transition-transform duration-300 z-10"></div>
                
                {/* Vertical Line - Only show if not last item */}
                {index !== journeySteps.length - 1 && (
                  <div className="w-0.5 sm:w-1 h-[70px] sm:h-[90px] bg-linear-to-b from-orange-500 to-transparent mt-2"></div>
                )}
              </div>

              {/* Right Side - Content */}
              <div className="flex-1 pb-8 sm:pb-12">
                {/* Year/Stage Badge */}
                <div className="inline-block bg-orange-500/10 text-orange-500 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                  {step.year}
                </div>

                {/* Title with Underline */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white group-hover:text-orange-500 transition-colors duration-300">
                  {step.title}
                </h3>
                
                {/* Decorative Underline */}
                <div className="w-16 sm:w-20 h-1 bg-orange-500 mb-3 sm:mb-4 group-hover:w-24 sm:group-hover:w-32 transition-all duration-300"></div>

                {/* Description */}
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}