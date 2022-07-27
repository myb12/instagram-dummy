import React from 'react';
import PostCard from '../PostCard/PostCard';

const Posts = () => {
    return (
        <div>
            {
                [...new Array(5)].map((el, i) => <PostCard key={i} />)
            }
        </div>
    );
};

export default Posts;