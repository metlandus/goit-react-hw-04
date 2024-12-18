import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ImageGallery = ({ query }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (query) {
            async function fetchData() {
                const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=hkjwB-PykovBpV36V-FW_a-7KXisiGNlLtS_6Us3u-0&query=${query}`);
                setImages(response.data.results);
            }
            fetchData();
        }
    }, [query]);

    return (
        <div>
            {images.map((image) => (
                <div key={image.id}>
                    <img src={image.urls.small} alt={image.alt_description} />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;