import {getApp, getApps, initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBq81BvZGbgJcYzVl-QMzeDtmzE2WcNiN0",
    authDomain: "resume-builder-12d7a.firebaseapp.com",
    projectId: "resume-builder-12d7a",
    storageBucket: "resume-builder-12d7a.appspot.com",
    messagingSenderId: "876339757964",
    appId: "1:876339757964:web:c7a351e9480e94861a8ca9"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export {auth, db};
  