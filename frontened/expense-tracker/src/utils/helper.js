// helper.js

export const validateEmail = (email) => {
  // Basic email regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
