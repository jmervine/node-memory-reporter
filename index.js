'use strict';

/****
 * Adapted from @tjfontaine's example:
 * http://us-east.manta.joyent.com/tjfontaine/public/walmart.graphs/standalone.js
 */

module.exports = function reporter(check, wait, gcwait) {
    check = check || 1000;
    wait  = wait  || 10000;

    if (typeof gc === 'function') {
        gcwait = gcwait || 500;
        setInterval(gc, gcwait);
    }

    var max = 0;
    setInterval(function checkInterval() {
        var mem = process.memoryUsage();
        if (mem.rss > max) {
            max = mem.rss;
            console.log('[Memory Report] New max RSS: %d.', max);
        }
    }, check);

    setInterval(function memInfoInterval() {
        var mem = process.memoryUsage();
        console.log('[Memory Report] Current RSS: %d (Heap: %d total, %d used).',
                        mem.rss, mem.heapTotal, mem.heapUsed);
    }, wait);
};

