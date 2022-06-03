import React from 'react';



const newsDetails = ({ newsDetails }) => {
    console.log("a", newsDetails)
    return (
        <div>
            <h1>{newsDetails.id}</h1>

        </div>
    );
};

export default newsDetails;

export const getServerSideProps = async (context) => {
    const { params } = context;
    const { newsId } = params;
    console.log(newsId);
    const response = await fetch(`http://localhost:3001/news/${newsId}`);
    const data = await response.json();
    return {
        props: {
            newsDetails: data
        }
    }
}