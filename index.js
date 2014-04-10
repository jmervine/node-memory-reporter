'use strict';

/****
 * Adapted from @tjfontaine's example:
 * http://us-east.manta.joyent.com/tjfontaine/public/walmart.graphs/standalone.js
 */

var util = require('util');

module.exports = function reporter(options) {
    options        = options        || {};
    options.check  = options.check  || 1000;
    options.report = options.report || 10000;

    function report() {
        var message = util.format('[Memory Reporter ::%s] ', process.pid, util.format.apply(util, arguments));
        if (options.log) {
            var fs = require('fs');
            return fs.appendFile(options.log, message+'\n', 'utf8');
        }
        console.log(message);
    }

    if (typeof gc === 'function') {
        options.gc = options.gc || 500;
        setInterval(gc, options.gc);
    } else {
        report('Warning: with gc, these results will be far less useful, start node with \'--expose-gc\' to enable it.');
    }

    var max = 0;
    setInterval(function checkInterval() {
        var mem = process.memoryUsage();
        if (mem.rss > max) {
            max = mem.rss;
            report('New max RSS: %d.', max);
        }
    }, options.check);

    setInterval(function memInfoInterval() {
        var mem = process.memoryUsage();
        report('Current RSS: %d (Heap: %d total, %d used).',
                        mem.rss, mem.heapTotal, mem.heapUsed);
    }, options.report);
};

