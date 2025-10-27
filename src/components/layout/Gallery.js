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
import pic26 from "../../images/gallery/26.jpg";
import pic27 from "../../images/gallery/27.jpg";
import pic28 from "../../images/gallery/28.jpg";
import pic29 from "../../images/gallery/29.jpg";
import pic30 from "../../images/gallery/30.jpg";
import pic31 from "../../images/gallery/31.jpg";
// import pic19 from "../../images/gallery/19.jpg";
// Import video
import video1 from "../../images/gallery/video.mp4";
import poster from "../../images/gallery/poster.jpeg";
import '../../scss/Gallery.scss';
import { useEffect } from 'react';

function Gallery({setPage}) {
    useEffect(() => {
        setPage("gallery");
        window.scrollTo(0, 0);
    }, [setPage]);

    return(
        <div className="container galleryContainer first">
            <div>
                <img src={main} alt="gallery" />
                <img src={pic1} alt="gallery" />
                <img src={pic2} alt="gallery" />
                <img src={pic3} alt="gallery" />
                <img src={pic4} alt="gallery" />
                <img src={pic5} alt="gallery" />
                <img src={pic6} alt="gallery" />
                <img src={pic7} alt="gallery" />
                <img src={pic8} alt="gallery" />
                <img src={pic9} alt="gallery" />
                <img src={pic10} alt="gallery" />
                <img src={pic11} alt="gallery"/>
                <img src={pic12} alt="gallery"/>
                <img src={pic13} alt="gallery" />
                <img src={pic14} alt="gallery"/>
                <img src={pic15} alt="gallery"/>
                <img src={pic16} alt="gallery"/>
                <img src={pic17} alt="gallery"/>
                <img src={pic18} alt="gallery"/>
                <img src={pic20} alt="gallery"/>
                <img src={pic21} alt="gallery"/>
                <img src={pic22} alt="gallery"/>
                <img src={pic23} alt="gallery"/>
                <img src={pic24} alt="gallery"/>
                <img src={pic25} alt="gallery"/>
                <img src={pic26} alt="gallery"/>
                <img src={pic27} alt="gallery"/>
                <img src={pic28} alt="gallery"/>
                <img src={pic29} alt="gallery"/>
                <img src={pic30} alt="gallery"/>
                <img src={pic31} alt="gallery"/>
                <video controls poster={poster}>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src={pic19} alt="gallery"/> */}
            </div>
        </div>
    );
}

export default Gallery;