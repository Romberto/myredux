import React from "react";
import styled from "./AddReceptModul.module.css";
import { createPortal } from "react-dom";

type AddReceptModulType = {
  onClick: () => void;
};

export const AddReceptModul: React.FC<AddReceptModulType> = ({ onClick }) => {
  const rootModul = document.querySelector("#root-modal");
  const handleClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };
  if (rootModul) {
    return createPortal(
      <div className={styled.wrapper} onClick={handleClick}>
        <div className={styled.modal}></div>
      </div>,
      rootModul
    );
  } else {
    console.error("Not element #root-modal");
  }
};
