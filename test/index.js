// Imports
var assert = require('assert');
var genv = require('../genv');

// Config
genv('config.json');

// Assert
assert(process.env.KEY1 === 'VALUE1');
assert(process.env.KEY2 === 'VALUE2');

// Finish
console.log('All tests passed');
