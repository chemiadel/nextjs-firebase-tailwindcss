// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
function initFirebase() {
	const firebaseConfig = {
		apiKey: process.env.NEXT_PUBLIC_apiKey,
		authDomain: process.env.NEXT_PUBLIC_authDomain,
		projectId: process.env.NEXT_PUBLIC_projectId,
		storageBucket: process.env.NEXT_PUBLIC_storageBucket,
		messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
		appId: process.env.NEXT_PUBLIC_appId
	};

	// Initialize Firebase
	const apps = getApps();
	if (!apps.length) {
		initializeApp(firebaseConfig);
	}
}

export const app = initFirebase();
export const database = getFirestore();
