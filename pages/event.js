import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Event = ({ event }) => {
    const [events, setEvents] = useState(event)
    const router = useRouter();

    const sportsList = async () => {
        const response = await fetch('http://localhost:3001/events?category=sports');
        const data = await response.json();
        setEvents(data);
        router.push('/event?category=sports', undefined, { shallow: true });

    }
    return (
        <div>
            <button onClick={sportsList}>sports</button>
            {
                events.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item.title} || {item.category}</h1>
                        </div>
                    );
                })
            }

            {/* <h1>event</h1> */}
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const { query } = context;
    const { category } = query;
    console.log(query);
    const queryString = category ? 'category=sports' : '';
    const response = await fetch(`http://localhost:3001/events?${queryString}`);
    const data = await response.json();

    return {
        props: {
            event: data
        }
    }
}

export default Event;