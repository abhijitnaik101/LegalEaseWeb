import { getStorage, ref } from "firebase/storage";
import { app } from "../Firebase";

// Create a root reference
const storage = getStorage(app);

// Create a reference to 'mountains.jpg'
const mountainsRef = ref(storage, 'img1.jpg');

// Create a reference to 'images/mountains.jpg'
const mountainImagesRef = ref(storage, 'images/img1.jpg');

// While the file names are the same, the references point to different files
mountainsRef.name === mountainImagesRef.name;           // true
mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 