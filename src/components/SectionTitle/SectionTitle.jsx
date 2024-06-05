import React from 'react';

const SectionTitle = ({ heading }) => {
    return (
        <div className='mx-auto text-center md: w-3/12 my-10'>
            <h3 className='text-black text-3xl uppercase border-y-4 py-4 font-semibold'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;