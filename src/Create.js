import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, firestore } from './firebase.config'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const Create = () => {
    const blogsRef = firestore.collection('blogs');

    const [title, setTitle] = useState('');
    const [postCont,setPostCont]=useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { uid } = auth.currentUser;

        await blogsRef.add({
            text: title,
            postCont:postCont,
            author: auth.currentUser.displayName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            
        });
        history.push('/');
    }

    return (
        <div className="form-content">
            <form onSubmit={handleSubmit}>
                <p>Add a New Blog</p>
               
              
  


                <input
                    type="text"
                    required
                    value={title}
                    placeholder="title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                 <input
                    type="text"
                    required
                    value={postCont}
                    placeholder="post"
                    onChange={(e) => setPostCont(e.target.value)}
                />
                <input
                    type="text"
                    required
                    value={auth.currentUser.displayName}
                    placeholder="author"
                />
            
                <button className='btn-add'>Add Blog</button>
                
            </form>
        </div>
    );
}

export default Create;