import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA7ATrMTU83CzTcXCJnMZcYvMbuwVrefaI",
  authDomain: "tripbuddies-5a91c.firebaseapp.com",
  projectId: "tripbuddies-5a91c",
  storageBucket: "tripbuddies-5a91c.appspot.com",
  messagingSenderId: "38937303065",
  appId: "1:38937303065:web:7a31d65cc747a8aea23288",
  measurementId: "G-W46ZZZCC1C"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);



export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
export { storage };
