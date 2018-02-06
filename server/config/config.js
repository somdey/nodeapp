"use strict";
let port = process.env.PORT || 3000;
let config = {
  port: port,
  getBaseUrl: function() {
    return process.env.baseUrl || `http://localhost:${this.port}`;
  }
};

module.exports = config;
