
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "David Noel",
      quote:
        "Gain instant access to actionable data with a real-time dashboard. Track key metrics, monitor engagement, and optimize your lead generation strategy on the go. Make data-driven decisions with up-to-the-minute insights.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      quote:
        "The analytics platform transformed how we approach customer acquisition. With comprehensive reporting and intuitive visualizations, we've increased conversion rates by 37% in just three months.",
    },
    {
      id: 3,
      name: "Michael Chen",
      quote:
        "Implementation was seamless and the support team was exceptional. The platform's predictive analytics feature has helped us anticipate market trends and stay ahead of competitors.",
    },
  ];

  
  const circleColors = {
    main: "bg-[#15132F]",      
    secondary: "bg-[#18162E]", 
    tertiary: "bg-[#221F42]",  
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#221F42] text-white p-4">
      <div className="container p-10 py-20 w-full shadow-xl bg-[#1E1C3B] shadow-gray-900 rounded-lg">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Testimonial</h1>
          <p className="text-xl text-gray-300">Customer Success Stories</p>
        </div>

        <div className="relative">
          
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-transparent text-white/70 hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-transparent text-white/70 hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={48} />
          </button>

   
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-12 py-8">
        
            <div className="flex flex-col items-center ms-10">
              <div className="w-40 h-40 relative mb-4">
      
                <div
                  className={`absolute w-32 h-32 rounded-full ${circleColors.tertiary} opacity-90 right-12 top-`}
                ></div>
                <div
                  className={`absolute w-32 h-32 top-5 rounded-full ${circleColors.secondary} opacity-90 -left-1`}
                ></div>
 
                <div
                  className={`absolute h-36 w-36  rounded-full ${circleColors.main} right-0 bottom-0 flex items-center justify-center text-[18px] font-semibold`}
                >
                  {testimonials[currentIndex].name}
                </div>
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="text-xl leading-relaxed">"{testimonials[currentIndex].quote}"</p>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/30"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}