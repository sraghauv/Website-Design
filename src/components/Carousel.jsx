import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import mainGif from "/src/assets/brain.gif";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselComponent = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      type: 'video',
      src: 'path_to_your_video1.mp4',
      thumbnail: mainGif,
      title: 'Neural Engineering',
      description: 'Advancing the frontiers of brain-computer interfaces'
    },
    {
      type: 'video',
      src: 'path_to_your_video2.mp4',
      thumbnail: mainGif,
      title: 'Student Competition',
      description: 'Participate in the NeuroTechX international competition'
    },
    {
      type: 'video',
      src: 'path_to_your_video3.mp4',
      thumbnail: mainGif,
      title: 'Join Our Community',
      description: 'Connect with professionals and like-minded peers'
    }
  ];

  const toggleFullscreen = (index) => {
    setActiveSlide(index);
    setIsFullscreen(!isFullscreen);
  };

  const carouselStyle = {
    '.carousel': {
      padding: '0 10%'
    },
    '.carousel-inner': {
      overflow: 'visible'
    },
    '.carousel-item': {
      transition: 'transform 0.6s ease-in-out'
    },
    '.carousel-control-prev, .carousel-control-next': {
      width: '10%',
      background: 'rgba(0, 0, 0, 0.3)',
      borderRadius: '0.5rem',
      margin: '0 1rem'
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
                className="relative w-full h-[400px] cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => toggleFullscreen(index)}
              >
                {slide.type === 'video' ? (
                  <>
                    <video
                      className="w-full h-full object-cover"
                      poster={slide.thumbnail}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <source src={slide.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 rounded-full w-16 h-16 flex items-center justify-center transition-transform hover:scale-110">
                      <svg viewBox="0 0 24 24" fill="white" width="48" height="48">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </>
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src={slide.thumbnail}
                    alt={slide.title}
                  />
                )}
              </div>
              <Carousel.Caption className="bg-black/50 rounded-lg p-3">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Fullscreen Video Player */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-xl p-2 z-10 hover:bg-white/10 rounded-full"
            onClick={() => setIsFullscreen(false)}
          >
            ✕
          </button>
          <video
            className="max-h-screen max-w-screen"
            controls
            autoPlay
            src={slides[activeSlide].src}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </>
  );
};

export default CarouselComponent;