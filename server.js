const http = require("http");

const routes = {
  "/": "Welcome to Node JS Server",
  "/about": "About",
  "/contact": "Contact",
};

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url in routes) {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(routes[url]);
  }
  else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Route not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000!");
});
