import React from 'react';

const comment = ({ comment }) => {


    return (
        <div>
            <h1>{comment.id}</h1>
            <h1>{comment.text}</h1>
        </div>
    );
};

export default comment;

export const getServerSideProps = async (context) => {
    const { params } = context;
    const { commentId } = params;
    const response = await fetch(`http://localhost:3000/api/comments/${commentId}`);
    const data = await response.json();
    return {
        props: {
            comment: data
        }
    }

}