import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import searchApi from './services/search-api'
import ImageGallery from './components/ImageGallery'
import Button from './components/Button'
import Loader from "react-loader-spinner";
import Modal from './components/Modal';
import styles from './App.module.css'

export default class App extends Component {
  state = {
    search: '',
    isLoading: false,
    page: 1,
    images: [],
    showModal: false,
    largeImageUrl: null,
    imgTags: null,
    error: null
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchImages();
    }
  }

  handleSubmit = query => {
    if (this.state.search === query) {
      return
    }
    this.setState({ search: query, page: 1, images: [] })
  }

  fetchImages = () => {
    const { search, page } = this.state;

    this.setState({ isLoading: true });

    searchApi({ search, page }).then(images => {
      if (images.length < 1) {
        this.setState({ error: true })
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...images], page: prevState.page + 1, error: false,
        }))
        if (page !== 1) {
          this.scrollToBottom()
        }
      }
    }).catch(error => this.setState({ error })).finally(() => this.setState({ isLoading: false }))
  }

  scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }

  setImgInfo = ({ target }) => {
    const { largeimageurl, tags } = target.dataset;
    this.setState({ largeImageURL: largeimageurl, imgTags: tags });
    this.toggleModal();
  }

  render() {

    const {
      images,
      showModal,
      largeImageURL,
      imgTags,
      isLoading,
    } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader type="ThreeDots" color="#006eff" height={100} width={100} />}
        <ImageGallery
          images={images}
          onSetImgInfo={this.setImgInfo}
        />
        {images.length > 0 && !isLoading && (
          <Button onLoadMore={this.fetchImages} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={imgTags} />
          </Modal>
        )}
      </div >
    );
  }
}

