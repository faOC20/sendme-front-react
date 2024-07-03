
import { initializeApp } from "firebase/app";
import { getStorage, ref , uploadBytes, getDownloadURL} from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyBu08-IvSnv8vN_2JFKj4f-jV2IlPi0Bqo",
  authDomain: "sendme-files.firebaseapp.com",
  projectId: "sendme-files",
  storageBucket: "sendme-files.appspot.com",
  messagingSenderId: "614151676192",
  appId: "1:614151676192:web:c3ad802832699ed5e4f745"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export const uploadFile = async (file)=>{
   const storageRef = ref(storage, `references/${v4()}`)
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url

}