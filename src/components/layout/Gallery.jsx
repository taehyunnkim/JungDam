import '../../scss/Gallery.scss';
import { useEffect, useState } from 'react';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Pull year+month from a full date in the filename: YYYY-MM-DD or MM-DD-YYYY.
// Bare YYYY-NN names are sequential indices, not months — deliberately ignored.
// Returns { year, month } or null when no full date is encoded.
function parseDate(path) {
    const name = path.split('/').pop();
    let m;
    if ((m = name.match(/(\d{4})-(\d{2})-\d{2}/))) {
        return { year: +m[1], month: +m[2] };
    }
    if ((m = name.match(/(\d{2})-\d{2}-(\d{4})/))) {
        return { year: +m[2], month: +m[1] };
    }
    return null;
}

const imageModules = import.meta.glob('../../images/gallery/*', { eager: true });
const galleryImages = Object.entries(imageModules)
    .map(([path, mod]) => {
        const d = parseDate(path);
        return {
            path,
            src: mod.default,
            date: d ? `${MONTHS[d.month - 1]} ${d.year}` : null,
            key: d ? d.year * 100 + d.month : -1,
        };
    })
    .sort((a, b) => {
        // Dated items first, newest first; undated fall back to filename order.
        if (b.key !== a.key) return b.key - a.key;
        return b.path.localeCompare(a.path, undefined, { numeric: true, sensitivity: 'base' });
    });

// Store photo always leads the gallery.
const mainIdx = galleryImages.findIndex((img) => /main\./i.test(img.path));
if (mainIdx > 0) {
    galleryImages.unshift(galleryImages.splice(mainIdx, 1)[0]);
}

function columnCount() {
    return window.innerWidth > 1000 ? 3 : 2;
}

// Distribute row-major into N columns so the newest dated photos land across
// the top of every column (CSS multicol would cluster them column-major).
function splitColumns(images, cols) {
    const buckets = Array.from({ length: cols }, () => []);
    images.forEach((img, i) => buckets[i % cols].push(img));
    return buckets;
}

function Gallery({setPage}) {
    const [cols, setCols] = useState(columnCount());

    useEffect(() => {
        setPage("gallery");
        window.scrollTo(0, 0);
    }, [setPage]);

    useEffect(() => {
        const onResize = () => setCols(columnCount());
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const columns = splitColumns(galleryImages, cols);

    return(
        <div className="container galleryContainer first">
            <div className="masonry-grid">
                {columns.map((column, ci) => (
                    <div key={ci} className="masonry-col">
                        {column.map((img) => (
                            <div key={img.path} className="masonry-item">
                                <img src={img.src} alt="Gallery" />
                                {img.date && <span className="masonry-date">{img.date}</span>}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;