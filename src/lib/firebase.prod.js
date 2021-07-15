import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';
const config = {
  apiKey: "AIzaSyDZxfk8rkoxSv-ZYYorJqAIp3mv4mwQCGk",
  authDomain: "netflix-36564.firebaseapp.com",
  projectId: "netflix-36564",
  storageBucket: "netflix-36564.appspot.com",
  messagingSenderId: "688826492732",
  appId: "1:688826492732:web:dab96dd0adc95961c5a039",
  measurementId: "G-YC7FFHZRWW"


};
const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };