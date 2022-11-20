import React, { useEffect, useState } from 'react';
import { useJsApiLoader, GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// import MapContainer from '../components/MapContainer';

function Home() {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  if (!isLoaded) { }

  const [washroom, setWashroom] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState("");

  const fetchData = () => {
    return fetch("http://localhost:8000/washrooms")
      .then((response) => response.json())
      .then((data) => setWashroom(data))
  }

  useEffect(() => {
    fetchData();
  }, [])

  const defaultCenter = {
    lat: 49.2832763, lng: -123.099849
  }

  const mapStyles = {
    height: "100vh",
    width: "100%"
  };


  return (
    <>
      <LoadScript
        googleMapsApiKey="AIzaSyCLBW0x_JuW8PVI_2Ts8gAjE2-K1Hzd76s">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
          {
            washroom.map(item => {
              return (
                <div key={item.recordid}>
                  <div>
                    <Marker
                      position={{ lat: item.fields.geom.coordinates[1], lng: item.fields.geom.coordinates[0] }}
                      onClick={() => {
                        setSelectedMarker(item);
                      }}
                    />
                  </div>
                  <div>
                    <Marker position={{ lat: 49.2832763, lng: -123.099849 }} />
                  </div>
                </div>
              )
            })
          }
          {selectedMarker && (
            <InfoWindow position={{ lat: selectedMarker.fields.geom.coordinates[1], lng: selectedMarker.fields.geom.coordinates[0] }}>
              <div>
                <h1>{selectedMarker.fields.name}</h1>
                <button type='button' onClick={() => { setSelectedMarker("") }}>Close</button>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default Home;