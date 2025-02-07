import React, { useCallback, useState } from "react";
import styled from "./ReceptList.module.css";
import { Button } from "../Button/Button";
import { ReceptItemType } from "../../../utils/types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ToggleItemInFavorites } from "./reseptListSlice.slice";

const recepts: ReceptItemType[] = [
  { id: 1, name: "лазанья" },
  { id: 2, name: "каша" },
  { id: 3, name: "борщ" },
];

export const ReceptList = () => {
  const dispatch = useAppDispatch();

  const favorites = useAppSelector(
    (state) => state.reducerFavorite.favoritesList
  );
  console.log(favorites);
  const handelClick = useCallback(
    (item: ReceptItemType) => {
      dispatch(ToggleItemInFavorites(item));
    },
    [dispatch]
  );

  return (
    <ul>
      {recepts.map((item) => (
        <li key={item.id}>
          <div>
            <h3>{item.name}</h3>
            <Button
              onClick={() => handelClick(item)}
              btnState={
                true ? favorites.some((el) => el.id === item.id) : false
              }
            ></Button>
          </div>
        </li>
      ))}
    </ul>
  );
};
