import { auth, firestore } from './firebase.config'



const BlogItem = (props) => {
    const { text,postCont, author, uid, id } = props.blog;

    const blogClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    const handleDelete = async () => {
        await firestore.collection('blogs').doc(id).delete();

    
    }
    return (
        <div className={`blog ${blogClass}`}>
            <div className="text">
            <p className="blog-text">{text} </p>
            <p className="blog-post">{postCont} </p>

            <p className="blog-author">{author} </p> </div>
            {uid === auth.currentUser.uid ? <button className="delete" onClick={handleDelete}>Delete</button> : ''}
           

        </div>
    )
}

export default BlogItem;