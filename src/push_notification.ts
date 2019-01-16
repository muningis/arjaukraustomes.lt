import firebase from 'firebase'

const MESSAGING_SENDER_ID = "409962331977"

export const initializeFirebase = () => {
    firebase.initializeApp({
        messagingSenderId: MESSAGING_SENDER_ID
    })

    navigator.serviceWorker.register(
        "sw.js",
        { scope: "./" }
    )
}

export const askForPermissionToSendNotificationd = async () => {
    const messaging = firebase.messaging();
    try {
        await messaging.requestPermission();
    } catch (error) {}
    try {
        const token = await messaging.getToken();
        console.log(`token: ${token}`);
    } catch (error) {}
}
