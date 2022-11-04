import React from 'react';

import 'firebase/firestore';
import 'firebase/auth';
import { firestore } from './firebase.config'
import BlogItem from './BlogItem';
import { Link } from 'react-router-dom';


import { useCollectionData } from 'react-firebase-hooks/firestore';



const BlogList = () => {
    const blogsRef = firestore.collection('blogs');
    const query = blogsRef.orderBy('createdAt', 'desc').limit(25);

    const [blogs] = useCollectionData(query, { idField: 'id' });

    return (
        <div>
            <Link to="/create"><button className="add add__plus">+</button></Link>
            <div className="content">

                <div className="blog-container">
                    {blogs && blogs.map(blog => {
                        return (
                            <BlogItem key={blog.id} blog={blog} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BlogList;