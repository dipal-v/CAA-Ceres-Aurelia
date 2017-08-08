'use strict';

const config = require('./protractor.shared.conf.js').config;

config.baseUrl = 'http://ppwebtest01.inmarsat.com/caa-ceres-aurelia/';

exports.config = config;
