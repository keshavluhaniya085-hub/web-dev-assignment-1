const crypto = require("crypto");
const roll = () => crypto.randomInt(1, 7);
const writeToFile = require("./modules/logger");

(async () => {
  for (let i = 1; i < 7; i++) {
    const rollResult = roll();
    const msg = `Roll ${i}: ${rollResult}`;
    console.log(msg);
    await writeToFile("diceLogs.txt", `${msg}`);
  }
})();
