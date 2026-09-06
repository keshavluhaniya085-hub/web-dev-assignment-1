const isEven = require("./modules/isEven");
const logToFile = require("./modules/logger");

console.log("--- Testing isEven Module ---");
const nums = [4, 7, 0, -2, 15];

nums.forEach((num) => {
  const result = isEven(num);
  console.log(`${num} is ${result ? "Even" : "Odd"}`);
});

console.log("\n--- Testing Logger Module ---");
(async () => {
  try {
    await logToFile("appLogs.txt", "Application initialized successfully.");
    console.log("Log entry recorded to appLogs.txt");
  } catch (err) {
    console.error("Logging failed:", err.message);
  }
})();
