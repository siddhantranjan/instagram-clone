import FireBase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAwqCSjVEDfAXf6N6NTSWX4sneY3-JDtQY',
  authDomain: 'instagram-clone-learn.firebaseapp.com',
  projectId: 'instagram-clone-learn',
  storageBucket: 'instagram-clone-learn.appspot.com',
  messagingSenderId: '682394923757',
  appId: '1:682394923757:web:22ee58310409e1190552e4'
};

const firebase = FireBase.initializeApp(config);
const { FieldValue } = FireBase.firestore;

// run this once only because store data in firebase only once
// seedDatabase(firebase);

export { firebase, FieldValue };
