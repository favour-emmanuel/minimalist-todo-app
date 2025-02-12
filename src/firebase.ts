import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjKTEP7l_0Jep1JVGdQXTguYWptjDFJEg",
  authDomain: "minimalist-todo-app-1eee3.firebaseapp.com",
  projectId: "minimalist-todo-app-1eee3",
  storageBucket: "minimalist-todo-app-1eee3.firebasestorage.app",
  messagingSenderId: "769686919066",
  appId: "1:769686919066:web:1291a98d02efcddd580c23",
  measurementId: "G-919EEP07PK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
