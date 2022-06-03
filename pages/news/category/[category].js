import React from 'react';

const categoryList = ({ categoryData }) => {
    console.log("c", categoryData);
    return (
        <div>
            {
                categoryData.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item.title}</h1>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default categoryList;

export const getServerSideProps = async (context) => {
    const { params } = context;
    const { category } = params;
    console.log(category);
    const response = await fetch(`http://localhost:3001/news?category=${category}`);
    const data = await response.json();
    return {
        props: {
            categoryData: data
        }
    }
}