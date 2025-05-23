// import React from "react";
import s from './ImageCard.module.css';

type ImageItem = {
    urls: {
        small: string;
    };
    alt_description: string | undefined;
};

type ImageCardProps = {
    item: ImageItem;
    onClick: (item: ImageItem) => void;
};


const ImageCard = ({ item, onClick }: ImageCardProps) => {
    return (
        <div onClick={() => onClick(item)}>
            <img src={item.urls.small} alt={item.alt_description} className={s.imageCard} />

        </div>
    );

}
export default ImageCard;