import styled from "./ButtonAddRecept.module.css";
import plus from "../../../assets/plus.svg";
import { useState } from "react";
import { AddReceptModul } from "../AddReceptModal/AddReceptModul";

export const ButtonAddRecept = () => {
  const [isModulShow, setIsModulShow] = useState(false)
  const buttonAddClick = () => {
    setIsModulShow(true)
  };

  return (
    <>
    {isModulShow && <AddReceptModul onClick={() => setIsModulShow(false)} />}
    <button className={styled.btn} onClick={buttonAddClick}>
      <img src={plus} />
    </button>
    </>
    
    
  );
};
