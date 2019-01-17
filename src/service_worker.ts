export default class ServiceWorkerFactory {
    constructor() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js', { scope: "./" });
        }
    }
}