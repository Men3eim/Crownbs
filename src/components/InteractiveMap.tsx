import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: '/logos/Crownbs.png',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor
});

interface Location {
  id: string;
  name: string;
  position: [number, number];
  address: string[];
  city: string;
  phone: string;
  email: string;
  services: string[];
  timezone: string;
  established: string;
}

interface InteractiveMapProps {
  location: Location;
}

export default function InteractiveMap({ location }: InteractiveMapProps) {
  const handleMarkerClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.position[0]},${location.position[1]}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="h-[400px] w-full rounded-2xl overflow-hidden border-4 border-amber-500/50 shadow-2xl">
      <MapContainer center={location.position} zoom={15} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <Marker position={location.position} icon={customIcon} eventHandlers={{
          click: handleMarkerClick,
        }}>
          <Popup>
            <div className="font-sans">
              <h3 className="font-bold text-lg text-amber-600">Crown Business Solutions</h3>
              <p className="font-medium">{location.name}</p>
              {location.address.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
