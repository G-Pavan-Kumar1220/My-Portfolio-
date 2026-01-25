import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

function Details() {
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.github.com/users/G-Pavan-Kumar1220`)
      .then((res) => res.json())
      .then((data) => setAvatar(data.avatar_url));
  }, []);
  function handeler(){
    navigate(-1)
  }

  return (
   <>
   <div className="back-btn">
    <div className="backArrow" onClick={handeler}><IoArrowBack/> Back</div>
   
    </div>
    <section className="about" id="about">
      <div className="about-container">
        
        <img src={avatar} alt="profile" className="about-img" />

        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm <strong>Pavan Kumar</strong> — a MERN Stack Developer who loves
            building clean, modern, and user-friendly web applications. I enjoy
            transforming ideas into real products that are performant and visually
            appealing.
          </p>

          <p>
            I specialize in React, JavaScript, Node.js, Express and MongoDB, and I’m
            passionate about solving real-world challenges with efficient code and
            intuitive UI designs.
          </p>

         

          {/* <a href="#projects" className="btn">View My Work</a> */}
        </div>
      </div>
    </section>

   </>
  );
}


function Education() {
  return (
    
    <section id="education" className="px-10 py-20 bg-white">
      <h2 className="text-4xl font-semibold text-gray-800 border-b-4 border-blue-500 inline-block mb-8">
        Education
      </h2>

      <div className="overflow-x-auto">
  <table className="w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
    <thead className="bg-blue-500 text-white">
      <tr>
        <th className="py-3 px-6 text-left">Degree</th>
        <th className="py-3 px-6 text-left">Institution</th>
        <th className="py-3 px-6 text-left">Year</th>
        <th className="py-3 px-6 text-left">Grade</th>
      </tr>
    </thead>

    <tbody className="text-gray-700">

      <tr className="transition hover:bg-blue-100">
        <td className="py-3 px-6 font-medium">B.Tech (ECE)</td>
        <td className="py-3 px-6">Sree Dattha Institute Of Engineering and Science</td>
        <td className="py-3 px-6">2022 - 2026</td>
        <td className="py-3 px-6 font-semibold">7.3 CGPA</td>
      </tr>

      <tr className="transition hover:bg-blue-100">
        <td className="py-3 px-6 font-medium">Intermediate (MPC)</td>
        <td className="py-3 px-6">MVS Junior College</td>
        <td className="py-3 px-6">2020 - 2022</td>
        <td className="py-3 px-6 font-semibold">83%</td>
      </tr>

      <tr className="transition hover:bg-blue-100">
        <td className="py-3 px-6 font-medium">SSC (10th Standard)</td>
        <td className="py-3 px-6">Govt. High School</td>
        <td className="py-3 px-6">2020</td>
        <td className="py-3 px-6 font-semibold">10.0 GPA</td>
      </tr>

    </tbody>
  </table>
</div>

    </section>
  );
}

function About() {

    return(
        <>
        <Details/>
        <Education/>
        </>
        
    )
}
export default About;
