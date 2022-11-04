import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { auth } from './firebase.config'

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div className="content">
            <button className="login" onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
}

export default SignIn;