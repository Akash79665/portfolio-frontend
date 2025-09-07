// import React, { useEffect, useState } from "react";

// export default function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/projects"); 
//         if (!response.ok) throw new Error("Failed to fetch projects");
//         const data = await response.json();
//         setProjects(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   if (loading) {
//     return <div className="section flex items-center justify-center">Loading projects...</div>;
//   }

//   if (error) {
//     return <div className="section flex items-center justify-center text-red-500">Error: {error}</div>;
//   }

//   return (
//     <div className="section flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
//       <h1 className="text-4xl font-bold mb-6">My Projects</h1>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
//         {projects.map((project) => (
//           <div key={project._id} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
//             <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
//             <p className="mb-4">{project.description}</p>
//             {project.link && (
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-400 hover:underline"
//               >
//                 View Project
//               </a>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
