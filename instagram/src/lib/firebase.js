import FireBase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';
import env from '../../env.local.json';

const config = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId,
  appId: env.appId
};

const firebase = FireBase.initializeApp(config);
const { FieldValue } = FireBase.firestore;

// run this once only because store data in firebase only once
// seedDatabase(firebase);

export { firebase, FieldValue };
