import React, {Fragment} from 'react';

const Error = ({texto}) => {
    return(
        <div className='alert alert-danger text-center p-2'>
            <p>{texto}</p>
        </div>
    )
}

export default Error;