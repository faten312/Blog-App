import 'firebase/firestore';
import 'firebase/auth';
import { auth } from './firebase.config'


const SignOut = () => {
    return auth.currentUser && (
        <button className='add' onClick={() => auth.signOut()}>Sign Out</button>
    );
}

export default SignOut;