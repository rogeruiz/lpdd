import Image from 'next/image';
import React from "react";
import '../globals.css';





const teamMembers = [
  {
    name: "Jorge Viramontes",
    role: "Role",
    image: "/team-headshots/jorge-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/jorgealbertoviramontes/",
  },
  {
    name: "Gerardo Rodriguez",
    role: "Role",
    image: "/team-headshots/gerardo-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/geraxrodriguez/",
  },
  {
    name: "Natasha Koller",
    role: "Role",
    image: "/team-headshots/natasha-headshot.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Niza Cuéllar",
    role: "Role",
    image: "/team-headshots/niza-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/niza-cuellar-0a8234188/",
  },
  {
    name: "Mario Galeno",
    role: "Role",
    image: "/team-headshots/mario-headshot.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Francisco Gonzalez",
    role: "Superman",
    image: "/team-headshots/francisco-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/francisco-gonzalez-0906/",
  },
];

const AboutPage = () => {
  return (
    <section className="p-5 text-center">
      <h2 className="mb-5 text-3xl">Meet Our Team</h2>
      <div className="mx-auto grid w-full justify-center gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-80"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={350}
              height={350}
              className="rounded-lg"
            />
            <div className="w-full h-20 bg-lightblue-200 rounded-lg flex flex-col justify-center items-center mt-2">
              <div className="flex items-center">
                <h3 className="mr-2">{member.name}</h3>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src="/linkedin-icon.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="transition-transform duration-300"
                  />
                </a>
              </div>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPage;


/*
import Image from "next/image";
import React from "react";
import "../ui/styles/about.css";

const teamMembers = [
  {
    name: "Jorge Viramontes",
    role: "Role",
    image: "/team-headshots/jorge-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/jorgealbertoviramontes/",
  },
  {
    name: "Gerardo Rodriguez",
    role: "Role",
    image: "/team-headshots/gerardo-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/geraxrodriguez/",
  },
  {
    name: "Natasha Koller",
    role: "Role",
    image: "/team-headshots/natasha-headshot.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Niza Cuéllar",
    role: "Role",
    image: "/team-headshots/niza-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/niza-cuellar-0a8234188/",
  },
  {
    name: "Mario Galeno",
    role: "Role",
    image: "/team-headshots/mario-headshot.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Francisco Gonzalez",
    role: "Superman",
    image: "/team-headshots/francisco-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/francisco-gonzalez-0906/",
  },
];

const AboutPage = () => {
  return (
    <section className="p-5 text-center">
      <h2 className="mb-5 text-3xl">Meet Our Team</h2>
      <div className="mx-auto grid w-full justify-center gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-card">
            <img
              src={member.image}
              alt={member.name}
              className="team-member-image"
            />
            <div className="member-info">
              {/* Wrapper div for name and LinkedIn icon */
              /*
              <div className="name-and-linkedin">
                <h3>{member.name}</h3>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-icon"
                >
                  <img
                    src="src/app/ui/icons/linkedin-icon.svg"
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

export default AboutPage; */
