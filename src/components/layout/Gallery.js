import main from "../../images/gallery/main.jpg";
import pic1 from "../../images/gallery/1.jpg";
import pic2 from "../../images/gallery/2.jpg";
import pic3 from "../../images/gallery/3.jpg";
import pic4 from "../../images/gallery/4.jpg";
import pic5 from "../../images/gallery/5.jpg";
import pic6 from "../../images/gallery/6.jpg";
import pic7 from "../../images/gallery/7.jpg";
import pic8 from "../../images/gallery/8.jpg";
import pic9 from "../../images/gallery/9.jpg";
import pic10 from "../../images/gallery/10.jpg";
import pic11 from "../../images/gallery/11.jpg";
import pic12 from "../../images/gallery/12.jpg";
import pic13 from "../../images/gallery/13.jpg";
import pic14 from "../../images/gallery/14.jpg";
import pic15 from "../../images/gallery/15.jpg";
import pic16 from "../../images/gallery/16.jpg";
import pic17 from "../../images/gallery/17.jpg";
import pic18 from "../../images/gallery/18.jpg";
import pic20 from "../../images/gallery/20.jpeg";
import pic21 from "../../images/gallery/21.jpeg";
import pic22 from "../../images/gallery/22.jpeg";
import pic23 from "../../images/gallery/23.jpeg";
import pic24 from "../../images/gallery/24.jpeg";
import pic25 from "../../images/gallery/25.jpeg";
import pic27 from "../../images/gallery/26-2.JPG";
import pic26 from "../../images/gallery/27-2.JPG";
import pic28 from "../../images/gallery/28-2.JPG";
import pic29 from "../../images/gallery/29-2.JPG";
import pic202601 from "../../images/gallery/2026-01.JPG";
import pic202602 from "../../images/gallery/2026-02.JPG";
import pic202603 from "../../images/gallery/2026-03.JPG";
import pic202604 from "../../images/gallery/2026-04.JPG";
import pic202605 from "../../images/gallery/2026-05.JPG";
import pic202606 from "../../images/gallery/2026-06.JPG";
import pic202607 from "../../images/gallery/2026-07.JPG";
import pic202608 from "../../images/gallery/2026-08.JPG";
import pic202609 from "../../images/gallery/2026-09.JPG";
import pic202610 from "../../images/gallery/2026-10.JPG";
import pic202611 from "../../images/gallery/2026-11.JPG";
// import pic30 from "../../images/gallery/30.jpg";
// import pic31 from "../../images/gallery/31.jpg";
// import pic19 from "../../images/gallery/19.jpg";
// Import video
// import video1 from "../../images/gallery/video.mp4";
// import poster from "../../images/gallery/poster.jpeg";
import '../../scss/Gallery.scss';
import { useEffect } from 'react';

// Array of all gallery images - easy to add/remove images
const galleryImages = [
    main, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9,
    pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18,
    pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic28, pic29,
    pic202601, pic202602, pic202603, pic202604, pic202605, pic202606, pic202607, pic202608, pic202609, pic202610, pic202611
    // Uncomment to add more images:
    // pic30, pic31, pic19
];

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