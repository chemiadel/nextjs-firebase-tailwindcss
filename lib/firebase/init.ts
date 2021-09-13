// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export default function initFirebase(){
  const firebaseConfig = {
    //your public config
  };
  
  // Initialize Firebase
  const apps=getApps()
  if(!apps.length){
    initializeApp(firebaseConfig);
  }
  
}

