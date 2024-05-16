import React from "react";
import MainLayout from "../components/MainLayout";
import AboutSection from "./AboutSection";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const AboutUs = () => {
  const people = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Co-Founder / CTO",
      imageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Chief Architect",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Lead Engineer",
      imageUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Sarah Brown",
      role: "Design Director",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Project Manager",
      imageUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [aboutRef, isAboutVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  const [leadershipRef, isLeadershipVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <MainLayout>
      <div className="relative">
        <div className="container mx-auto px-4 pb-8 md:py-8">
          <div className="relative z-10">
            <AboutSection />
            <div
              ref={leadershipRef}
              className={`mt-3 md:mt-8 lg:mb-20 grid gap-x-8 gap-y-8 lg:gap-y-20 xl:grid-cols-3 transition-opacity duration-1000 ${
                isLeadershipVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-800">
                  Meet our leadership
                </h2>
                <p className="mt-2 md:mt-4 text-md font-lora leading-8 text-gray-600">
                  At Spring Consulting Architects and Engineers, our leadership
                  team embodies a wealth of experience, expertise, and passion
                  for innovation. Meet the individuals driving our company
                  forward:
                </p>
              </div>
              <ul
                role="list"
                className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
              >
                {people.map((person) => (
                  <li key={person.id}>
                    <div className="flex items-center gap-x-6">
                      <img
                        className="h-16 w-16 rounded-full object-cover"
                        src={person.imageUrl}
                        alt=""
                      />
                      <div>
                        <h3 className="text-base font-mono font-semibold leading-7 tracking-tight text-gray-900">
                          {person.name}
                        </h3>
                        <p className="text-sm font-lora font-semibold leading-6 text-indigo-600">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="absolute inset-0 bg-white z-0"></div>
          <div
            className="absolute inset-x-0 bottom-0 z-0 h-3/4"
            style={{
              background: `linear-gradient(to bottom, #FFFFFF, #C9E4A4)`,
            }}
          ></div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutUs;
