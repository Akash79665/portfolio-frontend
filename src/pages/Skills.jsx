// import { useEffect, useState } from "react";
// import axios from "../api/axios";
// import "../css/Skills.css";

// export default function Skills() {
//   const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const res = await axios.get("/skills");
//         setSkills(res.data);
//       } catch (err) {
//         console.error("Error fetching skills:", err);
//       }
//     };
//     fetchSkills();
//   }, []);

//   return (
//     <div className="skills-container">
//       <h1>My Skills</h1>
//       <div className="skills-grid">
//         {skills.map((skill) => (
//           <div className="skill-card" key={skill._id}>
//             <div className="skill-header">
//               {skill.icon && (
//                 <img src={skill.icon} alt={skill.name} className="skill-icon" />
//               )}
//               <h3>{skill.name}</h3>
//             </div>
//             <p className="skill-info">
//               {skill.info ||
//                 `Experienced in ${skill.name}, with a ${skill.level} understanding and practical usage in real-world projects.`}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


//For online deployment 


import { useEffect, useState } from "react";
import api from "../api/axios"; // ✅ use axios instance
import "../css/Skills.css";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await api.get("/skills"); // ✅ use axios instance
        setSkills(res.data);
      } catch (err) {
        console.error("Error fetching skills:", err);
      }
    };
    fetchSkills();
  }, []);

  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill._id}>
            <div className="skill-header">
              {skill.icon && (
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
              )}
              <h3>{skill.name}</h3>
            </div>
            <p className="skill-info">
              {skill.info ||
                `Experienced in ${skill.name}, with a ${skill.level} understanding and practical usage in real-world projects.`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
