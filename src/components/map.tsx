import { MapContainer, TileLayer } from 'react-leaflet'

export default function Map() {
  return (
    <MapContainer className="w-full h-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  )
}
