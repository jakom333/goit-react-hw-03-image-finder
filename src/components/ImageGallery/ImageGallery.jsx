import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem'
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css'

const ImageGallery = ({ images, onSetImgInfo, openModal }) => {
    return (
        <ul className={styles.ImageGallery}>
            {images.map(({ webformatURL, largeImageURL, tags, id }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    tags={tags}
                    onSetImgInfo={onSetImgInfo}
                    openModal={openModal} />
            ))}
        </ul>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    onSetImgInfo: PropTypes.func.isRequired,
};

export default ImageGallery;
