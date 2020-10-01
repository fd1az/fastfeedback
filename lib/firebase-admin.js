import admin from 'firebase-admin';
import serviceAccount from '../../fastfeedbackd-firebase-adminsdk-xxwyt-7bc9a4de39.json';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://fastfeedbackd.firebaseio.com'
  });
}

const auth = admin.auth();
const db = admin.firestore();
export { auth, db };
