/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import spin from "../assets/Spinner.svg"
import { useState,useEffect } from 'react'

const Map = ({ location }) => {
  const lat = location?.lat
  const lon = location?.lng


  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    // Update the map key when the location changes
    setMapKey(mapKey + 1);
  }, [lat,lon]);

  if (!lat || !lon) {
    return (
      <div className='flex mt-44 justify-center'>
        <img src={spin} alt="" className='w-[8vh]' />
      </div>
    )
  }


  return (
    <div id="map" className='z-0 relative'>
      <MapContainer key={mapKey} center={[lat, lon]} zoom={15} scrollWheelZoom={true} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]}>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map