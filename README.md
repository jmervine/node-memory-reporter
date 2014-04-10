# Memory Report

#### Install

```
npm install git+https://github.com/jmervine/node-memory-reporter.git
```

#### Usage

``` javascript
// require('memory-reporter')([max check interval], [report wait interval]);
require('memory-reporter')();
```

Parmas:

* max check interval: interval between new max rss mem check.
* report wait interval: interval between memory reports.

