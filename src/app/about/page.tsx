import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "Jorge Viramontes",
    role: "Role not specified",
    image: "/team-headshots/jorge-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/jorgealbertoviramontes/",
  },
  {
    name: "Gerardo Rodriguez",
    role: "Role not specified",
    image: "/team-headshots/gerardo-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/geraxrodriguez/",
  },
  {
    name: "Natasha Koller",
    role: "Role not specified",
    image: "/team-headshots/natasha-headshot.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Niza Cuéllar",
    role: "Role not specified",
    image: "/team-headshots/niza-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/niza-cuellar-0a8234188/",
  },
  {
    name: "Mario Galeno",
    role: "Role not specified",
    image: "/team-headshots/mario-headshot.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Francisco Gonzalez",
    role: "Role not specified",
    image: "/team-headshots/francisco-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/francisco-gonzalez-0906/",
  },
];

const AboutPage = () => {
  return (
    <section className="mx-auto max-w-screen-lg p-5 text-center">
      <h2 className="mb-5 text-4xl">Meet Our Team</h2>
      <div className="mx-auto -mt-5 grid w-full justify-center gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex w-64 flex-col items-center">
            <Image
              src={member.image}
              alt={member.name}
              width={300} // Keep width consistent
              height={300} // Keep height consistent
              className="rounded-lg"
            />
            <div className="bg-lightblue-200 mt-1 flex h-20 w-full flex-col items-center justify-center rounded-lg">
              <div className="flex w-full items-center justify-between px-2">
                <h3 className="overflow-hidden whitespace-nowrap text-right">
                  {member.name}
                </h3>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src="/linkedin-icon.svg"
                    alt="LinkedIn"
                    width={20} // Keep icon size consistent
                    height={20} // Keep icon size consistent
                    className="transition-transform duration-300"
                  />
                </a>
              </div>
              <p className="mb-0 mt-1 text-left text-gray-500">{member.role}</p>{" "}
              {/* Aligning role text to left */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPage;
