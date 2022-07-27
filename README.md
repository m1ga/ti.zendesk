# Zendesk Messaging module for Titanium

Use the native Zendesk iOS/Android SDK in Titanium!

Zendesk Android help: https://developer.zendesk.com/documentation/zendesk-web-widget-sdks/sdks/android/getting_started/

Zendesk iOS help: https://developer.zendesk.com/documentation/classic-web-widget-sdks/support-sdk/working-with-the-support-sdk/support-sdk-ios-qs/

## Installation

### Android

* Download and install the module
* Get an API key: https://developer.zendesk.com/documentation/zendesk-web-widget-sdks/sdks/android/getting_started/#obtain-the-channel-key
* Add this to `app/platform/android/build.gradle`:
```
repositories {
  maven {
    url "https://zendesk.jfrog.io/artifactory/repo"
  }
}
```

### iOS

* Get an app ID, client ID and Zendesk URL: https://support.zendesk.com/hc/en-us/articles/4408845951002#topic_v4n_vgt_cq

## APIs

- [x] `initialize(params)`
  - See the platform specific parameters in the below example
- [x] `showMessaging`
  - Shows the support messaging UI
- [x] loginUser(params)
  - Identify the user, either with no parameters to make them anonymous or a single JWT string parameter for unique identities

## Example
```js
import TiZendesk from 'ti.zendesk';

const isAndroid = OS_ANDROID || Ti.Platform.osname === 'android';

// Android only required an API key, iOS requires an app ID, client ID and Zendesk URL
if (isAndroid) {
  TiZendesk.initialize('<YOUR_API_KEY>');
} else {
  TiZendesk.initialize({
    appId: '<YOUR_APP_ID>',
    clientId: '<YOUR_CLIENT_ID>',
    url: '<YOUR_ZENDESK_URL>',
  });
}

TiZendesk.addEventListener('ready', () => {
  if (!isAndroid) {
    TiZendesk.loginUser(); // pass optional JWT
  }
	TiZendesk.showMessaging();
});

TiZendesk.addEventListener("error", event => {
	console.log(event.error);
});
```

## License

MIT

## Author

Michael Gangolf
