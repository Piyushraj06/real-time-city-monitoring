import axios from 'axios';

const API_KEY = 'YOUR_AQICN_API_KEY'; // Get from https://aqicn.org/api/

export const getPollutionData = async (lat, lng) => {
  try {
    const response = await axios.get(
      `https://api.waqi.info/feed/geo:${lat};${lng}/?token=${API_KEY}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching pollution data:", error);
    return null;
  }
};