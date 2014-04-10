'use strict';

var assert   = require('assert');
var reporter = require('./index');

var log      = console.log;
var calls    = 0;

console.log = function() {
    calls++;
};

function finish() {
    console.log = log;
    if (calls < 10 && calls > 20) {
        console.log('failed w/ %d calls', calls);
        process.exit(1);
    }

    console.log('pass w/ %d calls', calls);
    process.exit();
}

reporter(100, 100);
setTimeout(function() {
    finish();
}, 1000);

