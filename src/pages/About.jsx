import React from "react";

const About = () => {
  return (
    <div>
      <section
        className="flex flex-col md:flex-col lg:flex-row h-screen  justify-center items-center"
        id="About"
      >
        <div className=" w-full h-[50%] md:w-full md:h-[50%] lg:h-[100%] lg:w-[50%] p-[20px] flex justify-center items-center flex-col">
          <div>
            <h1 className="text-[40px]  md:text-6xl lg:text-7xl flex items-start m-2 md:m-3 lg:m-4">
              About <span className="text-amber-300 font-bold"> Me</span>
            </h1>
          </div>
          <p
            className="text-sm md:text-[23px] lg:text-[25px] text-justify"
            data-aos="fade-up"
          >
            I'm a passionate
            <span className="font-semibold text-blue-600">
              {" "}
              MERN Stack Developer{" "}
            </span>
            currently interning at
            <span className="font-semibold"> Sofroniics </span>, where I’m
            gaining hands-on experience building modern full-stack web
            applications. I hold a Bachelor's degree in
            <span className="font-semibold"> Computer Science</span> from
            <span className="font-semibold"> GEMS College, Ramapuram</span>,
            where I developed a strong foundation in software development, data
            structures, and programming logic. I enjoy turning complex problems
            into simple, beautiful, and intuitive solutions. My current focus is
            on mastering React.js and Node.js, and I’m enthusiastic about
            building scalable web applications that make an impact. When I’m not
            coding, you’ll find me exploring new technologies, solving coding
            challenges, or contributing to team projects that help me grow as a
            developer.
          </p>
        </div>
        <div
          className=" w-full h-[50%] flex justify-center items-center md:w-full md:h-[50%] lg:h-[100%] lg:w-[50%] "
          data-aos="fade-right"
        >
          <img
            src="https://cdn.dribbble.com/users/1019864/screenshots/3079099/media/9e5055da2ee6c899aab9403ceb7d0dc3.gif"
            alt="coding gif"
            className="h-[270px] md:h-[400px] lg:h-[500px] rounded-3xl "
          />
        </div>
      </section>
    </div>
  );
};

export default About;
