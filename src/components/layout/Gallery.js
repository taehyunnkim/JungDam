import '../../scss/Gallery.scss';
import { useEffect } from 'react';

const requireContext = require.context('../../images/gallery', false, /\.(jpg|jpeg|JPG|JPEG|png|PNG|gif|GIF)$/);
const galleryImages = requireContext.keys()
    .sort((a, b) => b.localeCompare(a, undefined, { numeric: true, sensitivity: 'base' }))
    .map(key => requireContext(key));

function Gallery({setPage}) {
    useEffect(() => {
        setPage("gallery");
        window.scrollTo(0, 0);
    }, [setPage]);

    return(
        <div className="container galleryContainer first">
            <div className="masonry-grid">
                {galleryImages.map((img, index) => (
                    <div key={index} className="masonry-item">
                        <img src={img} alt={`Gallery ${index + 1}`} />
                    </div>
                ))}
                {/* Uncomment to add video:
                <div className="masonry-item">
                    <video controls poster={poster}>
                        <source src={video1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                */}
            </div>
        </div>
    );
}

export default Gallery;