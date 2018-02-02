let port = process.env.PORT || 3000;
let baseUrl = process.env.baseUrl || "http://localhost:" + port;
let config = {
  port: port,
  baseUrl: baseUrl
};

module.exports = config;
