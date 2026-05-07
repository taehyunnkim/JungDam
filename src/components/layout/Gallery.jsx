import '../../scss/Gallery.scss';
import { useEffect } from 'react';

const imageModules = import.meta.glob('../../images/gallery/*', { eager: true });
const galleryImages = Object.entries(imageModules)
    .sort(([a], [b]) => b.localeCompare(a, undefined, { numeric: true, sensitivity: 'base' }))
    .map(([, mod]) => mod.default);

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