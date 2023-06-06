import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    
    // console.log(posts);
    return (
        <div>
           <h2>All Posts are here: {posts.length}</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
                {
                    posts.map(post => <Post
                    post={post}
                    key={post.userId}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;