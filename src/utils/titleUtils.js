// src/utils/titleUtils.js

export const updatePageTitle = (section) => {
  const titles = {
    home: "Home - Akash Turkhade",
    about: "About - Akash Turkhade",
    skills: "Skills - Akash Turkhade",
    contact: "Contact - Akash Turkhade",
    projects: "Projects - Akash Turkhade",
  };

  const title = titles[section] || "Akash Turkhade - Portfolio";
  document.title = title;
};

export const initTitleUpdater = () => {
  const updateFromHash = () => {
    // get current hash or default to home
    const hash = window.location.hash.replace("#", "") || "home";
    updatePageTitle(hash);
  };

  // update when hash changes
  window.addEventListener("hashchange", updateFromHash);

  // also update when page loads
  updateFromHash();

  // cleanup
  return () => {
    window.removeEventListener("hashchange", updateFromHash);
  };
};
