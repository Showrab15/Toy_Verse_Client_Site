import React from 'react';

const SingleGalleryPhoto = ({gallery}) => {
    // console.log(gallery)
    return (
        <div>
                <div className="card h-full w-full bg-red-100 shadow-xl animate-bounce">
                  <figure className="px-10 py-10">
                    <img src={gallery.image} alt="Shoes" className="rounded-xl animate-pulse" />
                  </figure>
                
                </div>
        </div>
    );
};

export default SingleGalleryPhoto;