import React from 'react';
import { useRouter } from 'next/router';

const Id = () => {
    const router = useRouter();
    console.log(router.query.id);

    return (
        <div>
            <h1>{router.query.id}</h1>
        </div>
    );
};

export default Id;