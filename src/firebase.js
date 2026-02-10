import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBskwYR4_nXvC4wXJOFtWh0lihOIx-yBoE",
  authDomain: "shdshop.firebaseapp.com",
  projectId: "shdshop",
  appId: "1:411380816491:web:ab1b600d25c38771ecef2e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
