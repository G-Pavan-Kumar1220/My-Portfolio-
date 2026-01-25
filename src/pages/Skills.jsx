import React from "react";
import { useNavigate } from "react-router-dom";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiPython } from "react-icons/si";
import { IoArrowBack } from "react-icons/io5";




function Skills() {
    const navigate = useNavigate()
    const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: "95%" },
  { name: "CSS", icon: <FaCss3Alt />, level: "90%" },
  { name: "JavaScript", icon: <FaJs />, level: "75%" },
  { name: "React", icon: <FaReact />, level: "80%" },
  { name: "Node.js", icon: <FaNodeJs />, level: "75%" },
  { name: "Express.js", icon: <SiExpress />, level: "70%" },
  { name: "MongoDB", icon: <SiMongodb />, level: "75%" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "85%" },
  { name: "Python", icon: <SiPython />, level: "80%" },

];

  function handeler(){
    navigate(-1)
  }
  return (
    <>
    <div className="back-btn">
            <div className="backArrow" onClick={handeler}><IoArrowBack/> Back</div>

        </div>
    <section  id="skills" className="px-2 py-10 bg-gray-50 ">
        
      <h2 className="text-4xl font-semibold text-gray-800 border-b-4 border-blue-500 inline-block mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3 text-xl font-bold text-gray-800">
              <span className="text-blue-600 text-2xl">{skill.icon}</span>
              {skill.name}
            </div>

            <div className="w-full bg-gray-200 h-3 rounded-lg mt-3 overflow-hidden">
              <div
                className="bg-blue-500 h-full transition-all duration-700"
                style={{ width: skill.level }}
              ></div>
            </div>

            <p className="text-right pt-2 text-gray-600 font-semibold">{skill.level}</p>
          </div>
        ))}

      </div>
    </section>
    </>
  );
}

export default Skills;
