import React from "react";
import mainGif from "/src/assets/brain.gif";
import SponsorsWidget from "./SponsorWidget";

const Home = () => {
  return (
    <div>
      <div className="h-screen bg-gray-100 flex flex-col items-center justify-center">
        {/* <img
        className="w-full h-full mt-16 scale-75" // Adjusts width, limits max width, and adds top margin
        src={mainGif}
        alt="Aesthetic overview"
      /> */}
        <div className="ml-28 mr-28 mb-10">
          <h1 className="text-4xl font-bold bg-secondary text-primary mb-4 rounded-2xl p-3">
            Welcome to Home Page
          </h1>
          <p className="text-lg bg-tertiary p-3 rounded-2xl">
            Welcome to Longhorn Neurotech, a student organization with a
            singular focus: facilitating your entry into the world of neural
            engineering. Our purpose is to provide you with the knowledge,
            experiences, and connections necessary for a successful career in
            academia or industry. Through active participation in the NeuroTechX
            (NTX) international undergraduate student competition, we offer a
            platform for you to sharpen your skills and collaborate with
            like-minded peers. This competition not only hones your abilities
            but also cultivates a sense of teamwork that is invaluable in the
            field. In addition to competition, we take education seriously. Our
            club is dedicated to creating and curating educational content that
            ensures a deep understanding of neural engineering concepts. We
            believe that a strong foundation is crucial for your growth in this
            complex field. Furthermore, we understand the significance of
            networking. Longhorn Neurotech provides opportunities to connect
            with guest speakers who are established professionals in neural
            engineering. Conferences and events organized by our club offer a
            chance to broaden your perspectives and create connections that may
            shape your future. In essence, Longhorn Neurotech is your stepping
            stone into the neural engineering domain. We invite you to join us
            in this journey of learning, collaborating, and networking, as we
            equip you with the tools to thrive in the exciting realm of neural
            engineering.
          </p>
        </div>
      </div>
      <SponsorsWidget />
    </div>
  );
};

export default Home;
