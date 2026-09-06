const isEven = require("./modules/isEven");
const { logToFile, colorLog } = require("./modules/logger");

console.log("--- Testing isEven Module ---");
const nums = [4, 7, 0, -2, 15];

nums.forEach((num) => {
  const result = isEven(num);
  console.log(`${num} is ${result ? "Even" : "Odd"}`);
});

console.log("\n--- Testing Logger Module ---");
console.log("1. [Sync] Starting script...");
(async () => {
  console.log("2. [Async] File logging initiated...");
  try {
    await logToFile("appLogs.txt", "Application initialized.");
    console.log("4. [Async] File logging finished.");
  } catch (err) {
    console.error(colorLog("red", `Logging failed: ${err.message}`));
  }
})();

console.log("3. [Sync] Script reached the end of synchronous execution stack.");
