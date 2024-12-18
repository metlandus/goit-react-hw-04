import React, { useState } from 'react';
import SearchBar from "./Components/SearchBar/SearchBar";
import toast, { Toaster } from 'react-hot-toast';
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import ImageModal from "./Components/ImageModal";

const notify = () => { toast('Search query cannot be empty.') };

function App() {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSearch = (searchQuery) => {
        if (!searchQuery) {
            notify();
        } else {
            setQuery(searchQuery);
            setPage(1); // Reset page to 1 on new search
        }
    };

    const loadMore = () => {
        setLoading(true);
        setPage(prevPage => prevPage + 1);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        console.log('Modal close requested');
        setSelectedImage(null);
    };

    return (
        <>
            <header>
                <SearchBar onSearch={handleSearch} />
                <Toaster />
            </header>
            <ImageGallery query={query} page={page} setImages={setImages} onImageClick={handleImageClick} />
            {images.length > 0 && !loading && <button onClick={loadMore}>Load More</button>}
            {loading && <div>Loading...</div>}
            <ImageModal isOpen={!!selectedImage} onRequestClose={closeModal} image={selectedImage} />
        </>
    );
}

export default App;