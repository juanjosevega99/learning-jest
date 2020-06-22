const sports = ["swim", "bike", "run"];

const randomString = () => {
  const string = sports[Math.floor(Math.random() * sports.length)];
  return string;
};

module.exports = randomString;
