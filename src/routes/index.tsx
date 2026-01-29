import { ClientOnly, createFileRoute } from '@tanstack/react-router'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="relative h-screen w-screen z-0">
      <ClientOnly>
        <MapContainer 
          center={[48.866669, 2.33333]}
          zoom={13}
          className="h-screen w-full"
          scrollWheelZoom={true}
          zoomControl={false}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
        </MapContainer>
      </ClientOnly>
    </div>
  )
}
