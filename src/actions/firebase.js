import Firebase from 'firebase';




var config = {
  apiKey: "AIzaSyDcmWYBHPHPkUO9989yeQOt7XExyiIrVI0",
  authDomain: "czarownica-mhiho82.firebaseapp.com",
  databaseURL: "https://czarownica-mhiho82.firebaseio.com",
  projectId: "czarownica-mhiho82",
  storageBucket: "czarownica-mhiho82.appspot.com",
  messagingSenderId: "423322248265"
};

Firebase.initializeApp(config);
export const database = Firebase.database()
