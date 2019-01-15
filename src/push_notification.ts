import firebase from 'firebase'

const MESSAGING_SENDER_ID = "409962331977"

export const initializeFirebase = () => {
    firebase.initializeApp({
        messagingSenderId: MESSAGING_SENDER_ID
    })

    initializeServiceWorker()
}

export const initializeServiceWorker = async () => {
    if (navigator.serviceWorker.controller) {
        return
    }

    const registration = await navigator.serviceWorker.register(
        "sw.js",
        { scope: "./" }
    )
    firebase.messaging().useServiceWorker(registration)

}

export const askForPermissionToSendNotificationd = async () => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
    } catch (error) {}
}