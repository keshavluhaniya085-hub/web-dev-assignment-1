const isEven = (a) => {
  const parsedA = Number(a);
  return Number.isInteger(parsedA) && parsedA % 2 == 0;
};

module.exports = isEven;
