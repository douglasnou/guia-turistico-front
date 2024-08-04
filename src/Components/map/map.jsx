import React, { useCallback, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { } from 'react';


export const containerStyle = {
  width: '100%',
  height: '500px'
};



export const MyComponent = ({cart}) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCzzYcasXoUZhc3ROKPKp8dXYHyxjTNitM"
  })

  const center = {
    lat: Number(cart[0].lat),
    lng: Number(cart[0].ltn)
  };

  const [map, setMap] = useState(null)

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onUnmount={onUnmount}
      >
        <Marker position={center} title={cart[0].nome} />
        <></>
      </GoogleMap>
    </div>
  ) : <></>
}