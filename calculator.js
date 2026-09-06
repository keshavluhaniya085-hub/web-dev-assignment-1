let [, , op, x, y] = process.argv;
op = op.toLowerCase();
x = Number(x);
y = Number(y);

if (isNaN(x) || isNaN(y) || !op) {
  console.log("Usage: node calculator.js <op> <val1> <val2>");
  process.exit(1);
}

const ops = {
  add: (x, y) => x + y,
  sub: (x, y) => x - y,
  mul: (x, y) => x * y,
  div: (x, y) => (y !== 0 ? x / y : "Error: Division by zero"),
  mod: (x, y) => (y !== 0 ? x % y : "Error: Division by zero"),
  pow: (x, y) => x ** y,
  min: (x, y) => Math.min(x, y),
  max: (x, y) => Math.max(x, y),
};

if (op in ops) {
  console.log(`Result: ${ops[op](x, y)}`);
} else {
  console.log("Error: operation not found");
}
