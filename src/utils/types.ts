import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  btnState: boolean;
  onClick:()=>void;
  children?: React.ReactNode;
  className?: string;
  
};

export type CardType = {
  artist_display: string;
  date_display: string;
  description: string | null;
  id: number;
  title: string;
  image_id: string | null;
};
export type CardListType = {
  data: CardType[]
}

export type ReceptItemType = {
  id: string,
  title: string,
  views: number
}



export type ReceptType = {

}