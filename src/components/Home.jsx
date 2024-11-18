import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SponsorsWidget from "./SponsorWidget";
import Carousel from "./Carousel";
import brainGif from "/src/assets/brain.gif";
import labImage from "/src/assets/lab.jpg";

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section with Brain GIF */}
      <div className="w-full h-[70vh] bg-black relative">
        {/* Container for centered content with max width */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-full max-w-6xl w-full mx-auto">
            <img
              src={brainGif}
              alt="Brain Animation"
              className="h-full w-auto object-contain mx-auto"
              style={{
                filter: 'brightness(0.9)'
              }}
            />
            {/* Gradient overlays for blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-30" />
          </div>
        </div>
        
        {/* Text overlay with larger text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Longhorn Neurotech
            </h1>
            <p className="text-xl md:text-2xl text-white font-regular">
              From Brainwaves to Breakthroughs 
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Who We Are
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg">
              Welcome to Longhorn Neurotech, a student organization with a
              singular focus: facilitating your entry into the world of neural
              engineering. Our purpose is to provide you with the knowledge,
              experiences, and connections necessary for a successful career in
              academia or industry. Through active participation in the NeuroTechX
              (NTX) international undergraduate student competition, we offer a
              platform for you to sharpen your skills and collaborate with
              like-minded peers.
            </p>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src={labImage}
              alt="Neurotech Lab"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-100 py-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            Our Mission
          </h2>
          <p className="text-lg bg-tertiary p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
            In addition to competition, we take education seriously. Our
            club is dedicated to creating and curating educational content that
            ensures a deep understanding of neural engineering concepts. We
            believe that a strong foundation is crucial for your growth in this
            complex field. Furthermore, we understand the significance of
            networking. Longhorn Neurotech provides opportunities to connect
            with guest speakers who are established professionals in neural
            engineering.
          </p>
        </motion.div>
      </div>

      {/* Projects Section */}
      <div className="bg-gray-50 py-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Our Projects
          </h2>
          <div className="mb-20">
            <Carousel />
          </div>
        </motion.div>
      </div>

      {/* Sponsors Section */}
      <SponsorsWidget />
    </div>
  );
};

export default Home;