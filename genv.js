// Imports
var fs = require('fs');
var path = require('path');

// Set environmental variables from a JS(ON) file
function genv(userPath) {
    try {
        var configPath = path.join(
            path.dirname(require.main.filename),
            (userPath || 'config')
        );

        var config = require(configPath);

        for (var key in config) {
            process.env[key] = config[key];
        }

    } catch (e) {}
}

module.exports = genv;
