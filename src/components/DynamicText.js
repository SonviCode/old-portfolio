import React, { useEffect } from 'react';

const DynamicText = () => {

    useEffect(() => {
      

    }, [])
    

    return (
        <span className='dynamic-text'>
            <span>Je suis un développeur :</span>
            <span id='text-target'></span>
        </span>
    );
};

export default DynamicText;