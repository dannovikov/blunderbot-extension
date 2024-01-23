This directory is exposed in the manifest.json as a "web accessible resource", so anything you put here can be accessed by the extension as local file storage as,

```chrome.runtime.getURL('images/kings/cool.png')```