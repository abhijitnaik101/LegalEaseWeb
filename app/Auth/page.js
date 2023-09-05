const { app } = require("../Firebase");
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

function Auth() {
    const signupUser = () => {
        createUserWithEmailAndPassword(
            auth,
            "xyz@gmail.com",
            "abcdefghij"
        ).then((value) => console.log(value));
    };

    return ( 
        <>
            <button onClick={signupUser} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Create User
            </button>
        </>
    )
}
export default Auth;