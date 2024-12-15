import SearchBar from "./Components/SearchBar"
import toast, { Toaster } from 'react-hot-toast';
import ImageGallery from "./Components/ImageGallery";

const notify = () => { toast('Search query cannot be empty.') };

function App() {
    return (
        <>
            <header>
                <SearchBar notify={notify} />
                <Toaster />
            </header>
            <ImageGallery />
        </>
    )
}

export default App
