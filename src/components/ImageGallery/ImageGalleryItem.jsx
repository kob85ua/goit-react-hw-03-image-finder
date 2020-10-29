import React from "react";
import {
  ImageGalleryItemStyled,
  ImageGalleryItemImage,
} from "./StyledImgGal&Item";
const ImageGalleryItem = ({ id, webformatURL, tags, onModalOpen }) => (
  <ImageGalleryItemStyled key={id}>
    <ImageGalleryItemImage
      src={webformatURL}
      alt={tags}
      onClick={onModalOpen}
    />
  </ImageGalleryItemStyled>
);
export default ImageGalleryItem;
