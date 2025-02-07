import { useEffect, useState } from "react";
import { Button } from "./components/UI/Button/Button";
import { fetchApiPage } from "./servises/api";
import { Card } from "./components/UI/Card/Card";
import { CardList } from "./components/UI/CardList/CardList";
import { Provider } from "react-redux";
import { ReceptList } from "./components/UI/ReceptList/ReceptList";

function App() {
  const [dataList, setDataList] = useState([]);
  const handleButtonClick = () => {
    const fetchApi = async () => {
      try {
        const data = await fetchApiPage();
        setDataList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  };

  const expData = {
    artist_display: "Joan Mitchell\nAmerican, 1925-1992",
    date_display: "1955",
    description:
      "<p>Although influenced by Abstract Expressionist artists in New York in the early 1950s, Joan Mitchell did not prioritize self-expression: her often exuberant abstractions were “about landscape, not about me,” she once explained. Mitchell painted large, light-filled canvases animated by loosely applied skeins of bright color—here infused with the energy of a large metropolis.</p>\n<p>The title suggests a relationship between the painting’s network of pigments and the nerves or arteries of an urban space. The sense of spontaneity conveyed in City Landscape, however, belies Mitchell’s methods. Unlike many of her contemporaries, who were dubbed “action painters,” Mitchell worked slowly and deliberately. “I paint a little,” she said. “Then I sit and look at the painting, sometimes for hours. Eventually, the painting tells me what to do.”</p>\n",
    id: 86385,
    title: "City Landscape",
    image_id: "109d0e0b-d6ae-6d97-01b7-002376d27ba9",
  };

  return (
  <ReceptList/>
  );
}

export default App;
