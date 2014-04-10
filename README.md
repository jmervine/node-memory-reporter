# Memory Report

#### Install

```
npm install git+https://github.com/jmervine/node-memory-report.git
```

#### Usage

``` javascript
// require('memory-report')([max check interval], [report wait interval]);
require('memory-report')();
```

Parmas:

* max check interval: interval between new max rss mem check.
* report wait interval: interval between memory reports.

