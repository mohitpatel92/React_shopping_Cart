import {initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAzpCvqEwNP5NuaKHYEs0H5FYAu4m08YN0",
    authDomain: "app-1096d.firebaseapp.com",
    projectId: "app-1096d",
    storageBucket: "app-1096d.firebasestorage.app",
    messagingSenderId: "1081866559135",
    appId: "1:1081866559135:web:179378b70a69e66298ccaa",
    databaseURl : 'https://app-1096d-default-rtdb.firebaseio.comm'
  };

  export const app = initializeApp(firebaseConfig)