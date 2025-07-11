// utils.js
const Utils = {
    generateUniqueId: () => Date.now(),
  
    isValidEmail: (email) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  
    debounce: (func, delay = 300) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
      };
    }
  };
  