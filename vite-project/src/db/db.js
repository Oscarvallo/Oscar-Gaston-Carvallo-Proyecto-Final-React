import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importa Firestore desde Firebase

const firebaseConfig = {
    apiKey: "AIzaSyBVTzhsUhimTTFWRjfB3xbF5C3BTyU5vpk",
    authDomain: "tienda-jaqaar.firebaseapp.com",
    projectId: "tienda-jaqaar",
    storageBucket: "tienda-jaqaar.appspot.com",
    messagingSenderId: "937723625893",
    appId: "1:937723625893:web:9b34fecf8d4212c0f7284c"
  
};

// Inicializa Firebase
initializeApp(firebaseConfig);

export const db = getFirestore(); // Obtiene Firestore desde la instancia de Firebase

// Exporta ambas instancias para que puedas importarlas en otros archivos
