export default class ServiceWorkerFactory {
    constructor() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/static/js/sw.js', { scope: "./static/js" });
        }
    }
}