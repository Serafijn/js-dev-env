// This file isn't transpiled, so we must use CommonJS and ES5

// Register babel to transpile before tests run
require('@babel/register')()

// Disable webpack featues that mocha doesn't understand
require.extensions['.css'] = function() {}
