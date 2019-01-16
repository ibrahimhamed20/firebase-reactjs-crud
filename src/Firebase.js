import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = { timestampsInSnapshots: true };
const config = {
     apiKey: "AIzaSyDWbDFgd_O8MKPn23BIdTBzvt4ELg0z0ys",
     authDomain: "djamware-7ed9f.firebaseapp.com",
     databaseURL: "https://djamware-7ed9f.firebaseio.com",
     projectId: "djamware-7ed9f",
     storageBucket: "djamware-7ed9f.appspot.com",
     messagingSenderId: "733531532081"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;