import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const MapContainer = () => {

    const mapStyles = {
        height: "100vh",
        width: "100%"
    }

    const defaultCenter = {
        lat: 49.232, lng: -123.119
    }

    const locations = [
        {
            name: "Location 1",
            location: {
                lat: 49.246292,
                lng: -123.116226
            }
        }
        // {
        //     name: "Location 2",
        //     location: {
        //         lat: 41.3917,
        //         lng: 2.1649
        //     },
        // },
        // {
        //     name: "Location 3",
        //     location: {
        //         lat: 41.3773,
        //         lng: 2.1585
        //     },
        // },
        // {
        //     name: "Location 4",
        //     location: {
        //         lat: 41.3797,
        //         lng: 2.1682
        //     },
        // },
        // {
        //     name: "Location 5",
        //     location: {
        //         lat: 41.4055,
        //         lng: 2.1915
        //     },
        // }
    ];

    return (
        <LoadScript
            googleMapsApiKey='AIzaSyCLBW0x_JuW8PVI_2Ts8gAjE2-K1Hzd76s'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}>
                {
                    locations.map(item => {
                        return (
                            <Marker key={item.name} position={item.location} />
                        )
                    })
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default MapContainer;