import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

export default function Map({ location }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  if (!isLoaded) return <p>Cargando mapa...</p>;

  return (
    <GoogleMap
      center={location}
      zoom={15}
      mapContainerStyle={{ width: '100%', height: '400px' }}
    >
      <Marker position={location} />
    </GoogleMap>
  );
}
