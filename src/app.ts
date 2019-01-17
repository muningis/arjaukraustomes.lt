const initializeServiceWorker = () => {
    navigator.serviceWorker.register(
        "sw.js",
        { scope: "./" }
    ).then(function (registration) {
        registration.unregister();
    })
}

initializeServiceWorker()
