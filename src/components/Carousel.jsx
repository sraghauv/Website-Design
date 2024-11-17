import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import mainGif from "/src/assets/brain.gif";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselComponent = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      type: 'videoLink',
      url: 'https://youtu.be/zHFV1OunXrM?feature=shared',
      thumbnail: '/src/assets/BCIpong.jpg',
      title: 'Neural Engineering',
      description: 'Advancing the frontiers of brain-computer interfaces'
    },
    {
      type: 'image',
      src: '/src/assets/Slide2.jpg',
      title: 'Student Competition',
      description: 'Participate in the NeuroTechX international competition'
    },
    {
      type: 'image',
      src: '/src/assets/DrJordan.jpg',
      title: 'Join Our Community',
      description: 'Connect with professionals and like-minded peers'
    }
  ];

  const handleVideoClick = (url, e) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };

  const toggleFullscreen = (index) => {
    if (slides[index].type !== 'videoLink') {
      setActiveSlide(index);
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <>
      {/* Regular Carousel */}
      <div className={`relative w-full mt-20 ${isFullscreen ? 'hidden' : ''}`}>
        <style>
          {`
            .carousel-item:not(.active) {
              display: block;
              position: absolute;
              top: 0;
              opacity: 0.5;
              transform: scale(0.8);
              z-index: -1;
            }
            .carousel-item-prev {
              transform: translateX(-100%) scale(0.8);
            }
            .carousel-item-next {
              transform: translateX(100%) scale(0.8);
            }
            .carousel-control-prev,
            .carousel-control-next {
              width: 80px !important;
              height: 80px !important;
              top: 50% !important;
              transform: translateY(-50%) !important;
              background: rgba(0, 0, 0, 0.3) !important;
              border-radius: 50% !important;
              margin: 0 2rem !important;
              opacity: 0.7 !important;
              transition: all 0.3s ease !important;
            }
            .carousel-control-prev:hover,
            .carousel-control-next:hover {
              background: rgba(0, 0, 0, 0.6) !important;
              opacity: 1 !important;
              width: 85px !important;
              height: 85px !important;
            }
            .carousel-control-prev-icon,
            .carousel-control-next-icon {
              width: 40px !important;
              height: 40px !important;
              filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5)) !important;
            }
          `}
        </style>
        <Carousel
          className="w-full rounded-2xl overflow-hidden"
          interval={null}
          indicators={true}
          nextLabel=""
          prevLabel=""
        >
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div 
                className="relative w-full h-[600px] cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => toggleFullscreen(index)}
              >
                {slide.type === 'videoLink' ? (
                  <>
                    <img
                      className="w-full h-full object-cover"
                      src={slide.thumbnail}
                      alt={slide.title}
                    />
                    <div 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 rounded-full w-20 h-20 flex items-center justify-center transition-transform hover:scale-110"
                      onClick={(e) => handleVideoClick(slide.url, e)}
                    >
                      <svg viewBox="0 0 24 24" fill="white" className="w-14 h-14">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </>
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src={slide.src}
                    alt={slide.title}
                  />
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white p-6 rounded-b-2xl">
                <h3 className="text-2xl font-bold mb-3">{slide.title}</h3>
                <p className="text-lg">{slide.description}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Fullscreen Display */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-xl p-2 z-10 hover:bg-white/10 rounded-full"
            onClick={() => setIsFullscreen(false)}
          >
            ✕
          </button>
          <img
            className="max-h-screen max-w-screen object-contain"
            src={slides[activeSlide].src}
            alt={slides[activeSlide].title}
          />
        </div>
      )}
    </>
  );
};

export default CarouselComponent;