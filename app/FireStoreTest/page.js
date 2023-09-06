import { collection, getFirestore, updateDoc } from 'firebase/firestore';
import { app } from '../Firebase';

const firestore = getFirestore(app)

function Fstore() {

    const writeData = async () => {
        const result = addDoc(collection(firestore, "cities"), { name:"Etherland", pincode: 1234 })
    }

    const makeSubCollection = async () => {
        await addDoc(collection(firestore, "cities/hfdhjdk id"), {name : "some name"})
    }

    const getDocument = async () => {
        const ref = dec(firestore, "cities", "hgsjsg id");
        const snap = await getDoc(ref);

        console.log(snap.data())
    }

    const getDocumentByQuery = async() => {
        const collectionRef = collection(firestore, "users");
        const q = query(collectionRef, where('isMale', '==', true))
        const snapshot = await getDocs(q);
        snapshot.forEaach((data) => console.log(data.data()));
    }

    const update = async () => {
        const docRef = doc(firestore, 'cities', 'jhdg id');
        await updateDoc(docRef, {
            name: 'New Delhi',
        })
    }

    return(
        <>
        <div className='App'>
            <h1>Firebase firestore</h1>
        </div>
        </>
    )
}

export default Fstore;