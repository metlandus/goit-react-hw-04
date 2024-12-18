import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ query, page, setImages, onImageClick }) => {
    const [localImages, setLocalImages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (query) {
            async function fetchData() {
                setLoading(true);
                const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=hkjwB-PykovBpV36V-FW_a-7KXisiGNlLtS_6Us3u-0&query=${query}&page=${page}&orientation=landscape`);
                if (page === 1) {
                    setLocalImages(response.data.results);
                    setImages(response.data.results);
                    (console.log(response.data.results))
                } else {
                    setLocalImages(prevImages => [...prevImages, ...response.data.results]);
                    setImages(prevImages => [...prevImages, ...response.data.results]);
                }
                setLoading(false);
            }
            fetchData();
        }
    }, [query, page, setImages]);

    return (
        <div className={styles.gallery}>
            {localImages.map((image) => (
                <div key={image.id} className={styles.imageCard} onClick={() => onImageClick(image)}>
                    <img src={image.urls.small} alt={image.alt_description} className={styles.image} />
                </div>
            ))}
            {loading && <div className={styles.loading}>Loading...</div>}
        </div>
    );
};

export default ImageGallery;