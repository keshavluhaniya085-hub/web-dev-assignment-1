const fs = require('fs/promises');
const path = require('path');

const logToFile = async (filename, message) => {
  const filePath = path.join(__dirname, '..', filename);
  const time = new Date().toLocaleTimeString();
  await fs.appendFile(filePath, `[${time}] ${message}\n`);
};

module.exports = logToFile;