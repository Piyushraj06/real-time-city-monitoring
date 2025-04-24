import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { motion } from 'framer-motion';
import { getPollutionData } from '../api';
import 'leaflet/dist/leaflet.css';

// Fix leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const [pollutionData, setPollutionData] = useState(null);

  useMapEvents({
    async click(e) {
      const { lat, lng } = e.latlng;
      setPosition(e.latlng);
      const data = await getPollutionData(lat, lng);
      setPollutionData(data);
    },
  });

  return position && (
    <Marker position={position}>
      <Popup>
        {pollutionData ? (
          <div className="space-y-2">
            <h3 className="font-bold text-lg">{pollutionData.city?.name || 'Unknown Location'}</h3>
            <p className={`text-xl font-bold ${getAqiColor(pollutionData.aqi)}`}>
              AQI: {pollutionData.aqi}
            </p>
            <p>PM2.5: {pollutionData.iaqi?.pm25?.v || 'N/A'} µg/m³</p>
            <p>PM10: {pollutionData.iaqi?.pm10?.v || 'N/A'} µg/m³</p>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </Popup>
    </Marker>
  );
};

const getAqiColor = (aqi) => {
  if (aqi > 300) return 'text-red-600';
  if (aqi > 200) return 'text-red-500';
  if (aqi > 100) return 'text-orange-400';
  return 'text-green-500';
};

export default function MapView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="bg-black/30 p-4 rounded-xl border border-red-800/50">
        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={5}
          style={{ height: '600px', borderRadius: '0.5rem' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          <LocationMarker />
        </MapContainer>
      </div>
    </motion.div>
  );
}