// src/utils/titleUtils.js

export const updatePageTitle = (section) => {
  const titles = {
    'home': 'Home - Akash Turkhade',
    'about': 'About - Akash Turkhade', 
    'skills': 'Skills - Akash Turkhade',
    'contact': 'Contact - Akash Turkhade',
    'projects': 'Projects - Akash Turkhade'
  };
  
  const title = titles[section] || 'Akash Turkhade - Portfolio';
  document.title = title;
};

// Auto-update title based on URL hash
export const initTitleUpdater = () => {
  const updateFromHash = () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    updatePageTitle(hash);
  };
  
  // Update on hash change
  window.addEventListener('hashchange', updateFromHash);
  
  // Update on initial load
  updateFromHash();
  
  // Cleanup function
  return () => {
    window.removeEventListener('hashchange', updateFromHash);
  };
};

// Manual title update for specific sections
export const setTitle = (section) => {
  updatePageTitle(section);
};