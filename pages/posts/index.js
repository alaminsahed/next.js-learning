import Link from 'next/link';
import React from 'react';

const posts = ({ posts }) => {
    return (
        <div>
            {
                posts.map(post => {
                    return (

                        <div key={post.id}>
                            <Link href={`/posts/${post.id}`} passHref>
                                <h1>{post.title}</h1>
                            </Link>

                        </div>

                    )
                })
            }
        </div>
    );
};

export default posts;

export const getStaticProps = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsJson = await posts.json();
    return {
        props: {
            posts: postsJson
        }
    }
}