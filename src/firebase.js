import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBcrIfvSf8b11gKEZN_RGe2MqC2jN9yP1U',
	authDomain: 'clone-75566.firebaseapp.com',
	databaseURL: 'https://clone-75566.firebaseio.com',
	projectId: 'clone-75566',
	storageBucket: 'clone-75566.appspot.com',
	messagingSenderId: '952148823359',
	appId: '1:952148823359:web:c86674de26a99ef036d78a',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
