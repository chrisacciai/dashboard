import firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDHWTCk0IZOjkzYD0jCbc2MnORfTvkuGPc",
    authDomain: "dashbeta-1bdbc.firebaseapp.com",
    databaseURL: "https://dashbeta-1bdbc.firebaseio.com",
    projectId: "dashbeta-1bdbc",
    storageBucket: "",
    messagingSenderId: "986991454126"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
}
