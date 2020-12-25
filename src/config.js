import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
	authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
	projectId: `${process.env.REACT_APP_PROJECT_ID}`,
	messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
	appId: `${process.env.REACT_APP_ID}`,
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const db = firebase.database();
export default config;