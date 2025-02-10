import styled from "./Home.module.css";
import ReceptList from "../../UI/ReceptList/ReceptList";
import { ButtonAddRecept } from "../../UI/AddRecept/ButtonAddRecept";

export const Home = () => {
  return (
    <div className={styled.home}>
      <div className={styled.recept_block}>
        <ReceptList />
        <ButtonAddRecept />
      </div>
    </div>
  );
};
