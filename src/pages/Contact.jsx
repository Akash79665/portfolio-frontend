// import { useEffect, useState } from "react";
// import axios from "../api/axios";
// import "../css/Contact.css";
// import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // ✅ icons

// export default function Contact() {
//   const [contact, setContact] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchContact = async () => {
//       try {
//         const res = await axios.get("/contact");
//         setContact(res.data);
//       } catch (err) {
//         console.error("Error fetching contact info:", err);
//         setError("Failed to load contact info. Please try again later.");
//       }
//     };
//     fetchContact();
//   }, []);

//   if (error) return <p className="error-msg">{error}</p>;
//   if (!contact) return <p className="loading">Loading Contact...</p>;

//   return (
//     <div className="contact-container">
//       <h1>Contact Me</h1>
//       <div className="contact-card">
//         <p>
//           <FaEnvelope className="icon contact-icon" />{" "}
//           <strong>Email:</strong>{" "}
//           <a href={`mailto:${contact.email}`} className="contact-link">
//             {contact.email}
//           </a>
//         </p>
//         <p>
//           <FaPhone className="icon contact-icon" />{" "}
//           <strong>Phone:</strong>{" "}
//           <a href={`tel:${contact.phone}`} className="contact-link">
//             {contact.phone}
//           </a>
//         </p>
//         <p>
//           <FaMapMarkerAlt className="icon contact-icon" />{" "}
//           <strong>Location:</strong> {contact.location}
//         </p>

//         <div className="social-links">
//           <a
//             href={contact.github || "https://github.com/Akash79665"}
//             target="_blank"
//             rel="noreferrer"
//             className="social-btn github"
//           >
//             <FaGithub className="icon" /> GitHub
//           </a>
//           <a
//             href={contact.linkedin || "https://www.linkedin.com/in/akashturkhade/"}
//             target="_blank"
//             rel="noreferrer"
//             className="social-btn linkedin"
//           >
//             <FaLinkedin className="icon" /> LinkedIn
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }



//For online deployment 


import { useEffect, useState } from "react";
import api from "../api/axios"; // ✅ use axios instance
import "../css/Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [contact, setContact] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await api.get("/contact"); // ✅ use axios instance
        setContact(res.data);
      } catch (err) {
        console.error("Error fetching contact info:", err);
        setError("Failed to load contact info. Please try again later.");
      }
    };
    fetchContact();
  }, []);

  if (error) return <p className="error-msg">{error}</p>;
  if (!contact) return <p className="loading">Loading Contact...</p>;

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-card">
        <p>
          <FaEnvelope className="icon contact-icon" />{" "}
          <strong>Email:</strong>{" "}
          <a href={`mailto:${contact.email}`} className="contact-link">
            {contact.email}
          </a>
        </p>
        <p>
          <FaPhone className="icon contact-icon" />{" "}
          <strong>Phone:</strong>{" "}
          <a href={`tel:${contact.phone}`} className="contact-link">
            {contact.phone}
          </a>
        </p>
        <p>
          <FaMapMarkerAlt className="icon contact-icon" />{" "}
          <strong>Location:</strong> {contact.location}
        </p>

        <div className="social-links">
          <a
            href={contact.github || "https://github.com/Akash79665"}
            target="_blank"
            rel="noreferrer"
            className="social-btn github"
          >
            <FaGithub className="icon" /> GitHub
          </a>
          <a
            href={contact.linkedin || "https://www.linkedin.com/in/akashturkhade/"}
            target="_blank"
            rel="noreferrer"
            className="social-btn linkedin"
          >
            <FaLinkedin className="icon" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
