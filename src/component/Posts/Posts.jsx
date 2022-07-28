import React from 'react';
import UseData from '../../hooks/UseData';
import PostCard from '../PostCard/PostCard';
import SuggestionSection from '../SuggestionSection/SuggestionSection';

const Posts = () => {
    const [user, data] = UseData();
    return (
        <div>
            {
                data.map((el, i) => (
                    i === 2 ? <div key={i}>
                        <PostCard data={el} />
                        <SuggestionSection />
                    </div>
                        :
                        <PostCard key={i} data={el} />
                ))
            }

        </div>
    );
};

export default Posts;