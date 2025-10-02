import React from 'react'
import propTypes from 'prop-types';

export const BlurBlob = ({position, size}) => {
    // Destructure position and size props
    const {top, left} = position;
    const {width, height} = size;

  return (

    <div className='absolute'
    style={{
        top:top,
        left:left,
        width:width,
        height:height,
        transform:'translate(-50%, -50%)',
    }}>

        <div className='w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob'></div>

    </div>
  )
}

// Define prop types
BlurBlob.propTypes = {
    position: propTypes.shape({
        top: propTypes.string,
        left: propTypes.string,
    }),

    size: propTypes.shape({
        width: propTypes.string,
        height: propTypes.string,
    }),
}

export default BlurBlob
