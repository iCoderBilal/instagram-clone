import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/auth';

//here i want to import the Seedfile;

const config = {};
const fireBase = firebase.initializeApp(config);
const FieldValue = firebase.firestore;

//here i want to call seed file only once;
//seedDatabase(firebase)

export {fireBase, FieldValue};