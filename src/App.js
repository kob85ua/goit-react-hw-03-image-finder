import React, { Component } from "react";

import "./components/styles.css";

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import LoaderBlock from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";

import APIkey from "./services/APIkey";
import imagesApi from "./services/imagesApi";

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    searchQuery: "",
    page: 1,
    showModal: false,
    modalImgUrl: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
    if (prevState.page !== this.state.page && this.state.page !== 2) {
      this.scrollToWindow();
    }
    if (prevState.modalImgUrl !== this.state.modalImgUrl) {
      this.urlForModal();
    }
  }
  scrollToWindow = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  urlForModal = () => {
    return this.state.modalImgUrl;
  };
  openModalAndSetUrl = (eTarget) => {
    console.log(eTarget);
    if (eTarget !== undefined) {
      this.setState((state) => ({
        modalImgUrl: state.images.find(
          ({ webformatURL }) => webformatURL === eTarget.src
        ).largeImageURL,
        showModal: true,
      }));
    }
  };
  closeModal = () => {
    this.setState({ showModal: false, modalImgUrl: "" });
  };
  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });
    imagesApi
      .fetchImagesWithQuery(searchQuery, page, APIkey)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearchBarSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };
  render() {
    const { isLoading, images, error, showModal } = this.state;
    const urlForModal = this.urlForModal();

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchBarSubmit}> </Searchbar>

        {images.length > 0 && (
          <ImageGallery
            images={images}
            onModalOpen={(e) => this.openModalAndSetUrl(e.target)}
          />
        )}
        {showModal && (
          <Modal onClose={this.closeModal} onClick={this.closeModal}>
            <img src={urlForModal} alt="Modal" />
          </Modal>
        )}
        {images.length > 0 && !isLoading && (
          <Button onLoadMore={this.fetchImages}>Load more</Button>
        )}
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <LoaderBlock></LoaderBlock>}
      </div>
    );
  }
}

export default App;
