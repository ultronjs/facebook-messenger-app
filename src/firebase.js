import firebase from "firebase";

const firebaseApp =  firebase.initializeApp({  
        apiKey: "AIzaSyByBfVvqI1Fc_8E3FErmWI-ugPiVbm4c_8",
        authDomain: "facebook-messenger-sb.firebaseapp.com",
        projectId: "facebook-messenger-sb",
        storageBucket: "facebook-messenger-sb.appspot.com",
        messagingSenderId: "855498561450",
        appId: "1:855498561450:web:d87ae6a92940bd8c3dbdd3",
        measurementId: "G-X77Z141V4G"
});

const db = firebaseApp.firestore();


export default db;
