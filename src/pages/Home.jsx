// import { useEffect, useState } from "react";
// import axios from "../api/axios"; 
// import "../css/Home.css";

// export default function Home() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await axios.get("/projects");
//         console.log("Projects fetched:", res.data);
//         setProjects(res.data);
//       } catch (err) {
//         console.error("Error fetching projects:", err);
//       }
//     };
//     fetchProjects();
//   }, []);

//   return (
//     <div className="home-container">
//       <h1>My Projects</h1>
//       <div className="projects-grid">
//         {projects.map((project, index) => {
          
//           const imageSrc =
//             project.imageUrl && project.imageUrl.startsWith("http")
//               ? project.imageUrl
//               : project.imageUrl || "/images/no-image.png";

//           return (
//             <div
//               key={project._id || index}
//               className="project-card show"
//               style={{ transitionDelay: `${index * 0.2}s` }}
//             >
//               <img
//                 src={imageSrc}
//                 alt={project.title || "Project"}
//                 className="project-image"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "/images/no-image.png";
//                 }}
//               />
//               <h2>{project.title}</h2>
//               <p>{project.description}</p>
//               <p>
//                 <strong>Tech:</strong>{" "}
//                 {project.techStack?.length
//                   ? project.techStack.join(", ")
//                   : "N/A"}
//               </p>
//               <div className="links">
//                 {project.githubLink && (
//                   <a href={project.githubLink} target="_blank" rel="noreferrer">
//                     GitHub
//                   </a>
//                 )}
//                 {project.demoLink && (
//                   <a href={project.demoLink} target="_blank" rel="noreferrer">
//                     Demo
//                   </a>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

/////////////////




// import { useEffect, useState } from "react";
// import axios from "../api/axios";
// import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
// import "../css/Home.css";

// export default function Home() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await axios.get("/projects");
//         setProjects(res.data);
//       } catch (err) {
//         console.error("Error fetching projects:", err);
//       }
//     };
//     fetchProjects();
//   }, []);

//   return (
//     <div className="home-container">
//       <h1>My Projects</h1>
//       <div className="projects-grid">
//         {projects.map((project, index) => {
//           const imageSrc =
//             project.imageUrl && project.imageUrl.startsWith("http")
//               ? project.imageUrl
//               : project.imageUrl || "/images/no-image.png";

//           // -------------------------
//           // Fixed bullet points logic
//           // -------------------------
//           const bulletPoints = (() => {
//             if (!project.description) return [];
//             if (Array.isArray(project.description)) return project.description;

//             // Replace literal '\n' or actual newlines with ". "
//             const cleanedDesc = project.description
//               .replace(/\\n/g, ". ")
//               .replace(/\n/g, ". ")
//               .trim();

//             // Split only on period followed by space (sentence endings)
//             return cleanedDesc
//               .split(/\. +/)
//               .map((d) => d.trim())
//               .filter((d) => d.length > 0);
//           })();

//           return (
//             <div key={project._id || index} className="project-card">
//               <div className="card-inner">
//                 {/* Front Side */}
//                 <div className="card-front">
//                   <img
//                     src={imageSrc}
//                     alt={project.title || "Project"}
//                     className="project-image"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = "/images/no-image.png";
//                     }}
//                   />
//                   <h2>{project.title}</h2>
//                 </div>

//                 {/* Back Side */}
//                 <div className="card-back">
//                   <h2>{project.title}</h2>

//                   {bulletPoints.length > 0 && (
//                     <ul className="project-desc">
//                       {bulletPoints.map((item, idx) => (
//                         <li key={idx}>
//                           <FaCheckCircle className="bullet-icon" /> {item}.
//                         </li>
//                       ))}
//                     </ul>
//                   )}

//                   {project.techStack && project.techStack.length > 0 && (
//                     <div className="tech-stack">
//                       {project.techStack.map((tech, idx) => (
//                         <span key={idx}>{tech}</span>
//                       ))}
//                     </div>
//                   )}

//                   <div className="links">
//                     {project.githubLink && (
//                       <a href={project.githubLink} target="_blank" rel="noreferrer">
//                         <FaGithub /> GitHub
//                       </a>
//                     )}
//                     {project.demoLink && (
//                       <a href={project.demoLink} target="_blank" rel="noreferrer">
//                         <FaExternalLinkAlt /> Live Demo
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }




// For online deployment


import { useEffect, useState } from "react";
import api from "../api/axios"; // ✅ use axios instance
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import "../css/Home.css";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get("/projects"); // ✅ use axios instance
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="home-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const imageSrc =
            project.imageUrl && project.imageUrl.startsWith("http")
              ? project.imageUrl
              : project.imageUrl || "/images/no-image.png";

          // -------------------------
          // Fixed bullet points logic
          // -------------------------
          const bulletPoints = (() => {
            if (!project.description) return [];
            if (Array.isArray(project.description)) return project.description;

            // Replace literal '\n' or actual newlines with ". "
            const cleanedDesc = project.description
              .replace(/\\n/g, ". ")
              .replace(/\n/g, ". ")
              .trim();

            // Split only on period followed by space (sentence endings)
            return cleanedDesc
              .split(/\. +/)
              .map((d) => d.trim())
              .filter((d) => d.length > 0);
          })();

          return (
            <div key={project._id || index} className="project-card">
              <div className="card-inner">
                {/* Front Side */}
                <div className="card-front">
                  <img
                    src={imageSrc}
                    alt={project.title || "Project"}
                    className="project-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/no-image.png";
                    }}
                  />
                  <h2>{project.title}</h2>
                </div>

                {/* Back Side */}
                <div className="card-back">
                  <h2>{project.title}</h2>

                  {bulletPoints.length > 0 && (
                    <ul className="project-desc">
                      {bulletPoints.map((item, idx) => (
                        <li key={idx}>
                          <FaCheckCircle className="bullet-icon" /> {item}.
                        </li>
                      ))}
                    </ul>
                  )}

                  {project.techStack && project.techStack.length > 0 && (
                    <div className="tech-stack">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx}>{tech}</span>
                      ))}
                    </div>
                  )}

                  <div className="links">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noreferrer">
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
