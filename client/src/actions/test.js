var admin = require('firebase-admin');
var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

try {
  const data = {
    name: 'Alex',
    email: 'alex@gmail.com'
  };
  db.collection('clients')
    .doc('docN2')
    .set(data)
    .then(() => console.log('success!'));
} catch (error) {
  console.error(error);
}
