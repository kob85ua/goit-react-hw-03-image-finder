import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import { ImageGalleryStyled } from "./StyledImgGal&Item";
const ImageGallery = ({ images, onModalOpen }) => (
  <ImageGalleryStyled>
    {images.map(({ id, webformatURL, tags }) => (
      <ImageGalleryItem
        id={id}
        webformatURL={webformatURL}
        tags={tags}
        onModalOpen={onModalOpen}
      ></ImageGalleryItem>
    ))}
  </ImageGalleryStyled>
);

export default ImageGallery;
