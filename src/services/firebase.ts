import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAZlcqYWH9BG9m-I35t8iFGtBAVKEC4Mi0",
  authDomain: "nlw6--letmeask.firebaseapp.com",
  databaseURL: "https://nlw6--letmeask-default-rtdb.firebaseio.com",
  projectId: "nlw6--letmeask",
  storageBucket: "nlw6--letmeask.appspot.com",
  messagingSenderId: "973248988209",
  appId: "1:973248988209:web:c750e5fc77461d554ec110"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
