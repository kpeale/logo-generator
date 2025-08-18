// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAohYRBj5alCVCKmYi3ShSv7LRU0N7B8lQ',
  authDomain: 'logo-generator-a680a.firebaseapp.com',
  projectId: 'logo-generator-a680a',
  storageBucket: 'logo-generator-a680a.firebasestorage.app',
  messagingSenderId: '581682445716',
  appId: '1:581682445716:web:ac18735022e94c0655e381',
  measurementId: 'G-QJMSFSRRBF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
