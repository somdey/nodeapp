"use strict";
let config = {
  port: process.env.PORT || 3000,
  getBaseUrl: function() {
    return process.env.baseUrl || `http://localhost:${this.port}`;
  }
};

module.exports = config;
