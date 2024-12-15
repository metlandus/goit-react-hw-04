import axios from 'axios'
import React from 'react'

async function getImages() {
    const data = await axios.get("https://api.unsplash.com/photos/?client_id=hkjwB-PykovBpV36V-FW_a-7KXisiGNlLtS_6Us3u-0")
    console.log(data.data)
}

const ImageCard = () => {
    { getImages() }
    return (
        <div>
            <img src="" alt="" />
        </div>
    )
}

export default ImageCard