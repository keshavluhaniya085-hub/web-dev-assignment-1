const fs = require("fs/promises");
const path = require("path");
const { colorLog } = require("./modules/logger");

const filePath = path.join(__dirname, "test.txt");

async function runFileManager() {
  try {
    // 1. Create File
    console.log("Creating File...");
    await fs.writeFile(filePath, "Hello Node.js");
    console.log("File Created");

    // 2. Read File
    console.log("Reading File");
    let content = await fs.readFile(filePath, "utf8");
    console.log(content);

    // 3. Update File
    await fs.appendFile(filePath, "\nLearning FS Module");
    console.log("File Updated");

    // Read updated content
    content = await fs.readFile(filePath, "utf8");
    console.log(content);

    // 4. Delete File
    await fs.unlink(filePath);
    console.log("File Deleted");
  } catch (err) {
    console.error(colorLog("red", `File Operation Error: ${err.message}`));
  }
}

runFileManager();
