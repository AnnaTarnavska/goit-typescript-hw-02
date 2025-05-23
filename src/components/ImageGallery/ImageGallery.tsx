import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { UnsplashImages } from "../../types/MainTypes";

// type ImageItem = {
//     id: string | number;
//     urls: {
//         regular: string;
//         small: string;
//     };
//     alt_description: string | undefined;
// };

type ImageGalleryProps = {
    hits: UnsplashImages[];
    onImageClick: (imageUrl: string) => void;
};

const ImageGallery = ({ hits, onImageClick }: ImageGalleryProps) => {

  return (
        <ul className={s.imageGallery}>
            {Array.isArray(hits) && hits.map((item) => (
                <li key={item.id} className={s.ImageCard}>
                <ImageCard item={item} onClick={() => onImageClick(item.urls.regular)} />
                </li>
            ))}
        </ul>
    );

            
}


export default ImageGallery;