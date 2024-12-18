import axios from 'axios'
import React, { useState, useEffect } from 'react'

async function getImages() {
    const response = await axios.get("https://api.unsplash.com/search/photos/?client_id=hkjwB-PykovBpV36V-FW_a-7KXisiGNlLtS_6Us3u-0&query=flowers")
    console.log(response.data.results)
    return response.data.results;
}

const ImageCard = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getImages();
            setImages(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            {images.map((image) => (
                    <div key={image.id}>
                        <img src={image.urls.small} alt={image.alt_description} />
                    </div >
            ))}
        </div>
    )
}

export default ImageCard