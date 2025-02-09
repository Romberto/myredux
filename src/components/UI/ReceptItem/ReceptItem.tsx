import React, { useEffect, useState } from "react";
import styled from "./ReceptItem.module.css";
import { ReceptItemType } from "../../../utils/types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addToFavoritas, RemoveOnFavoritas } from "./Togglerecept.slice";
import { FaRegStar, FaStar } from "react-icons/fa";

export const ReceptItem: React.FC<ReceptItemType> = (item) => {

  const dispatch = useAppDispatch();
  const favoritas = useAppSelector((state) => state.toggleReduser.favoritas);
  const isExist = favoritas.some((elem) => elem.id === item.id);
  const { title } = item;

  // добавить или удалить из избранного
  const toggleFavorites = () => {
    if (!isExist) {
      dispatch(addToFavoritas(item));
    } else {
      dispatch(RemoveOnFavoritas(item));
    }
  };

  return (
    <div className={styled.wrapper}>
      <h3>{title}</h3>
      {isExist ? <FaStar onClick={toggleFavorites}/> : <FaRegStar onClick={toggleFavorites}/>}
      
      
    </div>
  );
};
