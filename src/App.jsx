import SearchBar from "./Components/SearchBar"
import toast, { Toaster } from 'react-hot-toast';
import ImageGallery from "./Components/ImageGallery";
import { useState } from "react"

const notify = () => { toast('Search query cannot be empty.') };

function App() {
    const [query, setQuery] = useState("")
    function handleSearch(searchQuery) {
        if (!searchQuery) {
            notify();
        }
        else {
            setQuery(searchQuery);
        }
    };
    return (
        <>
            <header>
                <SearchBar onSearch={handleSearch} notify={notify} />
                <Toaster />
            </header>
            <ImageGallery query={query} />
        </>
    )
}

export default App
