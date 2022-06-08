import React from 'react';

const Comments = () => {
    const [comments, setComments] = React.useState([]);
    const [comment, setComment] = React.useState('');

    const fetchComments = async () => {
        const response = await fetch('http://localhost:3000/api/comments');
        const data = await response.json();
        setComments(data);
    }

    const submitComments = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comment })
        });
        const data = await response.json();
        console.log(data);
    }


    return (
        <div>
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
            <button onClick={submitComments}>submit</button>
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