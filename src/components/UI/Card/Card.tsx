import React from "react";
import styled from "./Card.module.css";
import { CardType } from "../../../utils/types";
import { extractParagraphs } from "../../../utils/utils";

export const Card: React.FC<CardType> = (data) => {
  const { artist_display, date_display, title, image_id } =
    data;
  const apiPath = `https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`;
  return (
    <div className={styled.card}>
        <div className={styled.img_container}>
            <img src={apiPath} className={styled.img} />
        </div>
        <h3>{title}</h3>
        <p> <b>автор: </b>{artist_display}</p>
        <p><b>дата выхода:</b> {date_display}</p>
    </div>
  );
};
