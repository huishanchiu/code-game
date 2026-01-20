function calculate(n) {
  return ((n * 100 + 20 - 4) % 10) + 3;
}

// CommonJS for node
// module.exports = {
//   cal: calculate,
//   name: "hello",
// };

export default {
  cal: calculate,
  name: "hello",
};
