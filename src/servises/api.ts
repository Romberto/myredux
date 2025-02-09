import axios from "axios";
import { ReceptItemType } from "../utils/types";

const APIPATH =
  "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,description,date_endl,image_id&page=1&limit=12";

export const fetchApiPage = async () => {
  try {
    const response = await axios.get(APIPATH);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAllRecept = async () => {
  try {
    const response = await fetch("http://localhost:3000/recepts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchAddToFavoritas = async (item: ReceptItemType) => {
  try {
    const response = await fetch("http://localhost:3000/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    if (response.ok) {
      return await response.json();
    } else {
      return Promise.reject("Сеть ответила с ошибкой");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchRemoveOnFavoritas = async (item: ReceptItemType) => {
  try {
    const response = await fetch(`http://localhost:3000/favorites/${item.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      return Promise.reject("Сеть ответила с ошибкой");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchGetAllFavoritas = async () => {
  try {
    const response = await fetch("http://localhost:3000/favorites");
    if (!response.ok) {
      return Promise.reject("Ошибка запроса");
    }
    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};
