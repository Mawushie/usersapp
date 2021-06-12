import firebase from "firebase"; //generic firebase(doesn't know which project to work with)

//telling firebase project to work with this particular project.
const firebaseConfig = {
    apiKey: "AIzaSyDkcFaVDT7a1_t6KlghCbDPdi4tW6LhNLk",
    authDomain: "userapp-98d97.firebaseapp.com",
    projectId: "userapp-98d97",
    storageBucket: "userapp-98d97.appspot.com",
    messagingSenderId: "772876279451",
    appId: "1:772876279451:web:2aa0de52274cfdeebdb03e"
  };

firebase.initializeApp(firebaseConfig); //telling firebase which project to work it

export default firebase; //exporting the firebase linked to the project