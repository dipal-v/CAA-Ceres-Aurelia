'use strict';

const config = require('./protractor.shared.conf.js').config;

config.baseUrl = 'http://localhost:9000/';

exports.config = config;
