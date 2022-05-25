import React from 'react';

const post = ({ post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    );
};

export default post;

export const getStaticPaths = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsJson = await posts.json();
    const paths = postsJson.map(post => ({
        params: {
            postId: `${post.id}`
        }
    }))

    return {
        // paths:[
        //     {
        //         params: {postId: '1'}
        //     },
        //     {
        //         params: {postId: '1'}
        //     }
        // ]
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const { params } = context;
    console.log(params);
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const postJson = await post.json();
    return {
        props: {
            post: postJson
        }
    }

}