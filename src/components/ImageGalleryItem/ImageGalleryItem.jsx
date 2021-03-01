import React from 'react'
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ webformatURL,
    largeImageURL,
    tags = '',
    onSetImgInfo,
    openModal, }) => {
    console.log(webformatURL)
    return (
        <li className={styles.ImageGalleryItem}>
            <img src={webformatURL} alt={tags} className={styles.ImageGalleryItemImage} onClick={() => {
                onSetImgInfo({ largeImageURL, tags });
                openModal();
            }} />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    onSetImgInfo: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
