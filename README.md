# Zendesk messaging module for Titanium

Zendesk Android help: https://developer.zendesk.com/documentation/zendesk-web-widget-sdks/sdks/android/getting_started/


## Installation

* download and install the module
* add this to `app/platform/android/build.gradle`:
```
repositories {
  maven {
    url "https://zendesk.jfrog.io/artifactory/repo"
  }
}
```
* get a <a href="https://developer.zendesk.com/documentation/zendesk-web-widget-sdks/sdks/android/getting_started/#obtain-the-channel-key">Zendesk key</a>


## Example
```js
var zen = require("ti.zendesk");
zen.init("YOUR_KEY");
zen.addEventListener("ready", function() {
	zen.showMessaging();
})
zen.addEventListener("error", function(e) {
	console.log(e.error);
})
```
