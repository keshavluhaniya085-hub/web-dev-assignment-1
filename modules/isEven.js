const isEven = (a) => {
  const parsedA = parseInt(a, 10);
  return Number.isInteger(parsedA) && parsedA % 2 == 0;
};

module.exports = isEven;
