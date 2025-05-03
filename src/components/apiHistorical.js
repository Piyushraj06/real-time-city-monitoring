export const fetchCityHistoricalData = async (city) => {
  try {
    // Simulating random historical data for different pollutants over time
    const data = Array.from({ length: 10 }).map((_, index) => ({
      time: `2025-05-${index + 1}`,  // Random dates (e.g., 2025-05-1, 2025-05-2, etc.)
      pm25: (Math.random() * 100).toFixed(2),  // Random PM2.5 values between 0 and 100
      pm10: (Math.random() * 100).toFixed(2),  // Random PM10 values between 0 and 100
      no2: (Math.random() * 100).toFixed(2),  // Random NO2 values between 0 and 100
    }));

    return data;
  } catch (error) {
    console.error('Error fetching historical data:', error);
    throw error;
  }
};
