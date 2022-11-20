import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import MapContainer from '../components/MapContainer';

function Home() {
    const [washroom, setWashroom] = useState([]);

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
                googleMapsApiKey='AIzaSyCLBW0x_JuW8PVI_2Ts8gAjE2-K1Hzd76s'>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}>
                    {
                        washroom.map(item => {
                            return (
                                <Marker key={item.fields.primaryind} position={{ lat: item.fields.geom.coordinates[1], lng: item.fields.geom.coordinates[0] }} />
                            )
                        })
                    }
                </GoogleMap>
            </LoadScript>
        </>
    );
}

export default Home;