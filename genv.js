'use strict';

// Modules
let fs   = require('fs');
let path = require('path');

// Set environmental variables from a JS(ON) file
function genv(userPath) {
    try {
        let configPath = path.join(
            path.dirname(require.main.filename),
            (userPath || 'config')
        );

        let config = require(configPath);

        for (let key in config) {
            process.env[key] = config[key];
        }

    } catch (e) {}
}

module.exports = genv;
