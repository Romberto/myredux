import axios from "axios";

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
