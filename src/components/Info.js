import React from 'react';

const Info = ({info}) => {
    
    if(Object.keys(info).length === 0 ) return null;

    return(
        <div className='card border-light'>
            <div className='card-header bg-primary text-light font-weidht-bold'>
                Información artista
            </div>
            <div className='card-body'>
                <img src={info.strArtistThumb} alt='logo-artista'/>
            </div>

        </div>
    );
}

export default Info;