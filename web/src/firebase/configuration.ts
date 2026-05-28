import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAsSBc13dX9gtfpbvPiqZ6bOEdiQSc3RdI",
  authDomain: "plancord-78ebf.firebaseapp.com",
  projectId: "plancord-78ebf",
  storageBucket: "plancord-78ebf.firebasestorage.app",
  messagingSenderId: "1032065156903",
  appId: "1:1032065156903:web:0b7eff065b5802fb000b02"
};

const app = initializeApp(firebaseConfig);

export { app };
