import * as firebase from 'firebase';
import {setupUser} from '../actions/user';
const config = {
    apiKey: "AIzaSyBu9EnYbq4jftBo5NMEYly1TMmiUNJaRKI",
    authDomain: "extended-optics-127719.firebaseapp.com",
    databaseURL: "https://extended-optics-127719.firebaseio.com",
    projectId: "extended-optics-127719",
    storageBucket: "extended-optics-127719.appspot.com",
    messagingSenderId: "1096521417597"
};
firebase.initializeApp(config);
export default firebase;
