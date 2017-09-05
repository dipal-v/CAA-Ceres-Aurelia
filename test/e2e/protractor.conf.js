'use strict';

const config = require('./protractor.shared.conf.js').config;
const port = 19876;

config.baseUrl = `http://localhost:${port}/`;
config.port = port;

exports.config = config;
