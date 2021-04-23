import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDb2ucrB9Q6PLEJryeWHzg0vMwriHaH0kg',
  authDomain: 'c---58.firebaseapp.com',
  databaseURL: 'https://c---58-default-rtdb.firebaseio.com',
  projectId: 'c---58',
  storageBucket: 'c---58.appspot.com',
  messagingSenderId: '481742341067',
  appId: '1:481742341067:web:2f602690fe980be3816c4e',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase.database()
