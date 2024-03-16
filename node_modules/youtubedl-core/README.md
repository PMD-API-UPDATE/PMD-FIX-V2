# sachibot-youtubedl

# Special credit goes to the original author or authors.

Yet another YouTube downloading module. Written with only Javascript and a node-friendly streaming interface. Based on node-ytdl-core. 

# Usage

```js
const fs = require('fs');
const ytdl = require('sachibot-youtubedl');

ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ')
  .pipe(fs.createWriteStream('video.mp4'));
```

# Install

```bash
npm install sachibot-youtubedl@latest
```

Or for Yarn users:
```bash
yarn add sachibot-youtubedl@latest
```


```bash
npm test
```
