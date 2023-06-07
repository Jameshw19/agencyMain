import Image from "next/image";
import { teamData } from "../../data/teamData";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section__header--hr"></div>
        <h2>About.</h2>
        <h4 className="text-uppercase">Meet the team</h4>
        <div className="about-us__container">
          {teamData.map((member, index) => (
            <div key={index} className="about-us__img--figure">
              <Image className="about-us__img" src={member.image} alt="about" />
              <div className="about-us__name">{member.name}</div>
              <div className="about-us__role">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
