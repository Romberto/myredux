import React from "react"
import styled from './CadrList.module.css'
import { CardListType, CardType } from "../../../utils/types";
import { Card } from "../Card/Card";
import { useAppDispatch } from "../../../app/hooks";

export const CardList:React.FC<CardListType> = ({data}) => {

  

  return (
    <ul className={styled.cards}>
        {data.map((item)=>(
            <li key={item.id}>
                <Card {...item}/>
            </li>
        ))}
    </ul>
  )
};
