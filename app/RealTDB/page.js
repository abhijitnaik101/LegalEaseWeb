"use client"
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../Firebase";


const db = getDatabase(app);

const RealTDB = () => {

    const putData = () => {
        console.log('putData called');
        set(ref(db, 'users/exp1'), {
            username: "abhi",
            email: "xyz@gmail",
        });
    }

    return (
        <>
            <button onClick={putData} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Button
            </button>
        </>
    )
}

export default RealTDB;