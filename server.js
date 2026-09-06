const http = require("http");
const { colorLog } = require("./modules/logger");

const routes = {
  "/": "Welcome to Node Server",
  "/about": "About Page",
  "/contact": "Contact Page",
};

const server = http.createServer((req, res) => {
  const url = req.url.toLowerCase();

  console.log(
    `[${new Date().toLocaleTimeString()}] ${req.method} request to "${req.url}"`,
  );

  if (url in routes) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end(routes[url]);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log(colorLog("cyan", "Server running on port 3000!"));
});
