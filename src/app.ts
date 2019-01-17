const initializeServiceWorker = () => {
    navigator.serviceWorker.register(
        "sw.js",
        { scope: "./" }
    )
}

initializeServiceWorker()
