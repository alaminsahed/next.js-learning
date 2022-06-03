import React from 'react';
import Link from 'next/link';


const news = ({ news }) => {
    return (
        <div>
            <h1>news</h1>
            {
                news.map(item => {
                    return (

                        <div key={item.id}>
                            <Link href={`/news/${item.id}`} passHref>
                                <h2>{item.id} {item.title}</h2>
                            </Link>
                        </div>

                    )
                })
            }
        </div>
    );
};

export default news;

export const getServerSideProps = async () => {
    const response = await fetch('http://localhost:3001/news');
    const data = await response.json();

    return {
        props: {
            news: data
        }
    }
}