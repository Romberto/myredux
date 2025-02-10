import React, { useEffect } from "react";
import styled from "./ReceptList.module.css";
import { ReceptItemType } from "../../../utils/types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchReceptAll } from "../ReceptList/reseptListSlice.slice";
import { ReceptItem } from "../ReceptItem/ReceptItem";
import { getAllFavoritas } from "../ReceptItem/Togglerecept.slice";

const ReceptList = () => {
  const dispatch = useAppDispatch();
  const recepts: ReceptItemType[] = useAppSelector(
    (state) => state.receptReduser.recepts
  );
  const isLoading = useAppSelector((state) => state.receptReduser.isLoading);
  useEffect(() => {
    dispatch(fetchReceptAll());
    dispatch(getAllFavoritas());
  }, [dispatch]);
  const toggleFavorites = () => {
    console.log("fdfgd");
  };
  return (
    <>
      { isLoading === "pending" ? "isLoad..." : isLoading === "fulfilled" ? <ul className={styled.recerts}>
        {recepts.map((item) => {
          return (
            <li key={item.id}>
              <ReceptItem {...item} />
            </li>
          );
        })}
      </ul>: "error"}
    </>
  );
};

export default React.memo(ReceptList);
