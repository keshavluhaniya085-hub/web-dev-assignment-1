const fs = require("fs/promises");
const path = require("path");
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
};

const colorLog = (color, text) => {
  return `${colors[color] || ""}${text}${colors.reset}`;
};

const logToFile = async (filename, message) => {
  const filePath = path.join(__dirname, "..", filename);
  const time = new Date().toLocaleTimeString();
  await fs.appendFile(filePath, `[${time}] ${message}\n`);
};

module.exports = { logToFile, colorLog };