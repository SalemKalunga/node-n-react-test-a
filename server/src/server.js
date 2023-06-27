const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 8000;
const { loadData } = require("./models/planets.model");

const server = http.createServer(app);

async function getData() {
  await loadData();
  server.listen(PORT, () => console.log(`listening on port:${PORT}`));
}

getData();
