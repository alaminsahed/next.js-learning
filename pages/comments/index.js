import React from 'react';

const Comments = () => {
    const [comments, setComments] = React.useState([]);

    const fetchComments = async () => {
        const response = await fetch('http://localhost:3000/api/comments');
        const data = await response.json();
        setComments(data);
    }
    return (
        <div>
            <button onClick={fetchComments}>Comments</button>
            {
                comments.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item.text}</h1>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Comments;