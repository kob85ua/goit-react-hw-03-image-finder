import React from "react";
import LoadMoreBtn from "./StyledBtn";
const Button = ({ onLoadMore }) => {
  return <LoadMoreBtn onClick={onLoadMore}>Load more</LoadMoreBtn>;
};
export default Button;
