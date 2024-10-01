import Image from "next/image";
import React from "react";
import "../ui/styles/about.css";

const teamMembers = [
  {
    name: "Jorge Viramontes",
    role: "Role",
    image: "/profilepics/Frame 61.jpg",
    linkedin: "https://www.linkedin.com/in/jorgealbertoviramontes/",
  },
  {
    name: "Gerardo Rodriguez",
    role: "Role",
    image: "/profilepics/Frame 98.jpg",
    linkedin: "https://www.linkedin.com/in/geraxrodriguez/",
  },
  {
    name: "Natasha Koller",
    role: "Role",
    image: "/profilepics/Frame 60.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Niza Cuéllar",
    role: "Role",
    image: "/profilepics/Frame 62.jpg",
    linkedin: "https://www.linkedin.com/in/niza-cuellar-0a8234188/",
  },
  {
    name: "Mario Galeno",
    role: "Role",
    image: "/profilepics/Frame 64.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Francisco Gonzalez",
    role: "Superman",
    image: "/profilepics/Frame 63.jpg",
    linkedin: "https://www.linkedin.com/in/francisco-gonzalez-0906/",
  },
];

const AboutPage = () => {
  return (
    <section className="about-page">
      <h2 className="team-heading">Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-card">
            <img
              src={member.image}
              alt={member.name}
              className="team-member-image"
            />
            <div className="member-info">
              {/* Wrapper div for name and LinkedIn icon */}
              <div className="name-and-linkedin">
                <h3>{member.name}</h3>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-icon"
                >
                  <img
                    src="/profilepics/Frame 69.svg"
                    alt="LinkedIn"
                    className="linkedin-svg-icon"
                  />
                </a>
              </div>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPage;
