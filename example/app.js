import TiZendesk from 'ti.zendesk';

const isAndroid = Ti.Platform.osname === 'android';
const ANDROID_API_KEY = '';
const IOS_APP_KEY = '';
const IOS_CLIENT_KEY = '';
const IOS_URL = '';

TiZendesk.addEventListener('ready', () => {
    console.debug('READY!');

    TiZendesk.loginUser(); // optional: pass JWT string
	TiZendesk.showMessaging();
});

TiZendesk.addEventListener('error', event => {
	console.error('An error occurred:');
	console.error(event.error);
});

const window = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

const btn = Ti.UI.createButton({ title: 'Open messenger' });
btn.addEventListener('singletap', () => openMessenger());

window.add(btn);
window.open();

function openMessenger() {
    // Android only required an API key, iOS requires an app ID, client ID and Zendesk URL
    if (isAndroid) {
        TiZendesk.initialize(ANDROID_API_KEY);
    } else {
        TiZendesk.initialize({
            appId: IOS_APP_KEY,
            clientId: IOS_CLIENT_KEY,
            url: IOS_URL
        });
    }
}
