import React from "react";
import ContactCard from "./ContactCard";
import "./LeadershipTeam.css"

const LeadershipTeam = () => {
  return (
    <div className="content">
      <h2 className="margin-top">Leadership Team</h2>
      {/* Left Side */}
      <div className="half">
        <ContactCard name="Julian Weaver" title="R&D Lead" img="src/components/About/OfficerImages/julian-weaver.jpeg" styleClass="pfp-circle julian" linkedin="https://www.linkedin.com/in/julian-weaver">
          Julian Weaver is a apart of the class of 2025 and is a double major in Neuroscience and Computer Science, with a minor in Business. A founding member of the DMIC lab's neuro team, he plans to pursue a PhD focused on neuroimaging and invasive brain-computer interfaces. In his free time, he enjoys producing music and rock climbing.
        </ContactCard>
        <ContactCard name="Tony Chae" title="VP of Outreach" img="src/components/About/OfficerImages/tony_chae.jpg" styleClass="pfp-circle tony" linkedin="https://www.linkedin.com/in/tony-chae-3bb600249">
        Tony Chae is a part of the class of 2025 studying Electrical and Computer Engineering student with a minor in Philosophy interested in brains, minds and machines. In his free time, Tony practices meditation, enjoys reading, cooking, working out (including ice skating, Brazilian Jiu-Jitsu, and running), photography, and exploring nature.
        </ContactCard>
        <ContactCard name="Debarghya" title="VP of Finance" img="src/components/About/OfficerImages/Chaki.jpg" styleClass="pfp-circle debarghya" linkedin="https://www.linkedin.com/in/dchaki">
          Debarghya is a part of the class of 2026 studying Biomedical Engineering and also pursuing Computational Science and Engineering as well as Scientific Computation and Data Sciences. He works in the Dynamic Medical Engineering and Computing lab, with projects including machine learning based segmentation of echocardiograms and Identification of biomechanical material parameters of lung tissue derived from CT. He enjoys working and volunteering as an EMT as well as reading.
        </ContactCard>
      </div>

      {/* Right Side */}
      <div className="half">
        <ContactCard name="Alan Fletcher" title="Hardware Lead" img="src/components/About/OfficerImages/Alan_Fletcher.jpg" styleClass="pfp-circle alan" linkedin="https://www.linkedin.com/in/alan-fletcher01">
          Alan Fletcher is a part of the class of 2025 studying BME and is a member of the Longhorn Band. His prospective career is in clinical prosthetics/orthotics and is currently doing research in Dr. Fey's Systems for Augmenting Human Mechanics Lab.
        </ContactCard>
        <ContactCard name="Nathan Feldt" title="Software Lead" img="src/components/About/OfficerImages/Nathan_Feldt.jpg" styleClass="pfp-circle nathan" linkedin="https://www.linkedin.com/in/nathan-feldt-1b6573229">
          Nathan Feldt is a apart of the class of 2025 and is a Neuroscience and Math double Major. He is originally from Seattle but Austin is his second home. He loves to Golf, watch Texas Football, and do all things Neuroscience.
        </ContactCard>
        <ContactCard name="Jay Damodaran" title="VP of Membership" img="src/components/About/OfficerImages/Jay.png" styleClass="pfp-circle jay" linkedin="https://www.linkedin.com/in/jaydamobme">
          Jay Damodaran is a part of the class of 2027 and is studying biomedical engineering student with a minor in CS. He loves science and biology, and believes that neurotech provides a great opportunity to explore their intersection. He hopes to pursue a career as a data scientist, focused on analyzing biomedical datasets. In his free time, he likes to cook and go to the gym.
        </ContactCard>
        <ContactCard name="Vivek Beeram" title="Machine Learning Specialist" img="src/components/About/OfficerImages/Vivek_Beeram.jpg" styleClass="pfp-circle vivek" linkedin="https://www.linkedin.com/in/vivek-beeram-370852212">
          Vivek Beeram is a part of the class of 2025 studying neuroscience/Plan II and is interested in neural evolution and neural network architecture. He is excited to start building with this team and taking on cutting-edge BCI challenges. He enjoys climbing, exploring nature, and playing chess.
        </ContactCard>
      </div>
    </div>
  );
};

export default LeadershipTeam;