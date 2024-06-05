import React, { forwardRef, useEffect, useRef } from "react";
import MainLayout from "../components/MainLayout";
import AboutSection from "./AboutSection";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import about from "../assets/about.jpg";

const AboutUs = forwardRef((props, sectionRef) => {
  const aboutSectionRef = useRef(null);

  const scrollToAboutSection = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const shouldScrollToAbout = window.location.hash === "#top";

  if (shouldScrollToAbout) {
    scrollToAboutSection();
  }

  const people = [
    {
      id: 1,
      name: "James Wilson",
      role: "Project Manager",
      imageUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Desalegn Teshome",
      role: "Supervision and Contract Administration Team Leader",
      imageUrl:
        "https://my-spring-blog-app.s3.eu-north-1.amazonaws.com/desu.jpg",
    },
    {
      id: 3,
      name: "Fikremaryam Negash",
      role: "Design Team Leader & Sanitary Eng.",
      imageUrl:
        "https://my-spring-blog-app.s3.eu-north-1.amazonaws.com/fikre+3.jpg",
    },
    {
      id: 4,
      name: "biniyam wondem",
      role: "Senior Architect",
      imageUrl:
        "https://my-spring-blog-app.s3.eu-north-1.amazonaws.com/biniyam.jpg",
    },
    {
      id: 5,
      name: "Fikradis Kifle",
      role: "Office Engineer",
      imageUrl:
        "https://my-spring-blog-app.s3.eu-north-1.amazonaws.com/fikr+2.jpg",
    },
    {
      id: 6,
      name: "Moges Marye",
      role: "Senior Electrical Eng.",
      imageUrl:
        "https://my-spring-blog-app.s3.eu-north-1.amazonaws.com/moges.jpg",
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
      <div
        ref={aboutSectionRef}
        className="animate-fadeIn relative w-full h-[200px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${about})`,
        }}
      >
        <div className="bg-primary bg-opacity-80 px-8 py-6 rounded-md">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-primary text-white">
            Learn more about us
          </h1>
        </div>
      </div>
      <AboutSection />
      <div className="relative">
        <div className="container mx-auto px-4 pb-8">
          <div className="relative z-10">
            <div
              ref={leadershipRef}
              className={`mb-5 md:mt-8 lg:mb-20 grid gap-x-8 gap-y-8 lg:gap-y-20 xl:grid-cols-3 transition-opacity duration-1000 ${
                isLeadershipVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-800">
                  Meet our leadership
                </h2>
                <p className="mt-2 text-base md:mt-4 font-lora leading-6 text-gray-600">
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
                        className="h-16 w-16 md:h-[100px] md:w-[100px] rounded-full object-cover"
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
});

export default AboutUs;
