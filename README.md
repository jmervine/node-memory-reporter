# Memory Report

#### Install

```
npm install git+https://github.com/jmervine/node-memory-reporter.git
```

#### Usage

``` javascript
var reporter = require('memory-reporter');

/***
 *
 * reporter(
 *     [max check interval],
 *     [report wait interval],
 *     [gc wait interval]
 * );
 *
 */
reporter(); // defaults: 1000, 10000, 500
```

Parmas:

* `max check interval`: 1000ms default
  * interval between new max rss mem check.
* `report wait interval`: 10000ms default
  * interval between memory reports.
* `gc wait interval`: 500ms default
  * interval between garbage collections, only used if app is started with 
    `--expose-gc` (e.g. `node --expose-gc app.js`).
  

