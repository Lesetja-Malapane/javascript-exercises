const convertToCelsius = function(temp) {
  const fahr = (temp - 32) * (5 / 9)
  return roundToOne(fahr);
};

const convertToFahrenheit = function(temp) {
  const cels = (temp * 9/5) + 32
  return roundToOne(cels);
};

function roundToOne(num) {
  return Math.round(num * 10) / 10
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
