// Import the functions you need from the SDKs you need
import admin from "firebase-admin";
const serviceAccount = require ("../../helpers/serviceAccount.json")

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


if(!admin.apps.length){
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export default admin