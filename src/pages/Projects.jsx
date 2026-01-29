import React from "react";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

const projects = [
  
  // {
  //   title: "ADD NOTES",
  //   description: "Task management notes",
  //   tech: ["React", "LocalStorage"],
  //   github: "https://github.com/G-Pavan-Kumar1220/add-notes",
  //   demo: "https://g-pavan-kumar1220.github.io/add-notes/"
  // },
  {
    title: "LAUNDRY SERVICE",
    description: "Online Laundry Service Use desktop",
    tech: ["html","CSS","JavaScript","Jquery","email.js"],
    github: "https://github.com/G-Pavan-Kumar1220/laundry-store-services-",
    demo: "https://laundryservice12.netlify.app/"
  },
  {
    title: "Task management web",
    description: "A Full Stack fully authonticated login protected routs add manage your tasks",
    tech: ["React","JSON","Node.js","Express.js","MongoDB"],
    github: "https://github.com/G-Pavan-Kumar1220/react---task-management---fronted-",
    demo: "https://frontendassignment111.netlify.app/"
  },
  {
    title: "Fetching Data From Api ",
    description: "A React.js based project that fetching data from the api and make in table format frontennd Assignment ",
    tech: ["React","JSON","APi","typeScript"],
    github: "https://github.com/G-Pavan-Kumar1220/React-data-table-displays-Chicago-API",
    demo: "https://transcendent-llama-bdb5ce.netlify.app/"
  },
];

function Projects() {
  return (
    <>
    {/* <div className="back-btn">
                <div className="backArrow" onClick={handeler}><IoArrowBack/> Back</div>
    
            </div> */}
    
    <section id="projects" className="px-10 py-20 bg-gray-50">
      <h2 className="text-4xl font-semibold text-gray-800 border-b-4 border-blue-500 inline-block mb-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-xl border border-gray-200 transition hover:scale-[1.03] hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
              >
                <FaGithub /> Code
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </div>
        ))}

      </div>
    </section>
    </>
  );
}

export default Projects;
