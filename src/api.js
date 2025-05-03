// src/api.js
import axios from 'axios';

const WAQI_TOKEN = 'fac8abc183081e838698be2be2e38c3f75881de9';

export const fetchCityAQI = async (city) => {
  try {
    const res = await axios.get(`https://api.waqi.info/feed/${city}/?token=${WAQI_TOKEN}`);
    const d = res.data.data;

    return {
      city: d.city.name,
      aqi: d.aqi,
      pm25: d.iaqi.pm25?.v || 0,
      pm10: d.iaqi.pm10?.v || 0,
      no2: d.iaqi.no2?.v || 0,
      lat: d.city.geo[0],
      lng: d.city.geo[1],
      time: d.time.s
    };
  } catch (err) {
    console.error("Error fetching city:", city, err.message);
    return null;
  }
};
