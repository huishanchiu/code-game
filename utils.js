function calculate(n) {
  return ((n * 100 + 20 - 4) % 10) + 3;
}

module.exports = {
  cal: calculate,
  name: "hello",
};
