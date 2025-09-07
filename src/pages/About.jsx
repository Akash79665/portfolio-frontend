// import { useEffect, useState } from "react";
// import axios from "../api/axios";
// import "../css/About.css";

// export default function About() {
//   const [about, setAbout] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAbout = async () => {
//       try {
//         const res = await axios.get("/about"); // Fetch bio info
//         setAbout(res.data);
//       } catch (err) {
//         console.error("Error fetching about info:", err);
//         setError("Failed to load About section. Please try again later.");
//       }
//     };
//     fetchAbout();
//   }, []);

//   if (error) return <p className="error-msg">{error}</p>;
//   if (!about) return <div className="loading">Loading About...</div>;

//   return (
//     <div className="about-container">
//       {/* Left side - Local Profile Image */}
//       <div className="about-left">
//         <img
//           src="/images/profile.jpg"
//           alt={about.name || "Profile"}
//           className="profile-img"
//         />
//       </div>

//       {/* Right side - Bio */}
//       <div className="about-right">
//         <h1>{about.name || "Your Name"}</h1>
//         <h3>{about.role || "Your Role"}</h3>
//         <p>{about.bio || "Your bio goes here..."}</p>

//         {/* Resume Buttons */}
//         <div className="resume-buttons">
//           {/* View Resume */}
//           <a
//             href="/resume/Akash_Turkhade_Resume.pdf"
//             target="_blank"
//             rel="noreferrer"
//             className="resume-btn view-btn"
//           >
//             View Resume
//           </a>

//           {/* Download Resume */}
//           <a
//             href="/resume/Akash_Turkhade_Resume.pdf"
//             download="Akash_Turkhade_Resume.pdf"
//             className="resume-btn download-btn"
//           >
//             Download Resume
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }



//For online deployment 

import { useEffect, useState } from "react";
import api from "../api/axios"; // use your axios instance
import "../css/About.css";

export default function About() {
  const [about, setAbout] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await api.get("/about"); // fetch bio info using axios instance
        setAbout(res.data);
      } catch (err) {
        console.error("Error fetching about info:", err);
        setError("Failed to load About section. Please try again later.");
      }
    };
    fetchAbout();
  }, []);

  if (error) return <p className="error-msg">{error}</p>;
  if (!about) return <div className="loading">Loading About...</div>;

  return (
    <div className="about-container">
      {/* Left side - Local Profile Image */}
      <div className="about-left">
        <img
          src="/images/profile.jpg"
          alt={about.name || "Profile"}
          className="profile-img"
        />
      </div>

      {/* Right side - Bio */}
      <div className="about-right">
        <h1>{about.name || "Your Name"}</h1>
        <h3>{about.role || "Your Role"}</h3>
        <p>{about.bio || "Your bio goes here..."}</p>

        {/* Resume Buttons */}
        <div className="resume-buttons">
          {/* View Resume */}
          <a
            href="/resume/Akash_Turkhade_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-btn view-btn"
          >
            View Resume
          </a>

          {/* Download Resume */}
          <a
            href="/resume/Akash_Turkhade_Resume.pdf"
            download="Akash_Turkhade_Resume.pdf"
            className="resume-btn download-btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
