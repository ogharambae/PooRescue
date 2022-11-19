import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const MapContainer = () => {

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };


    const locations = [
        {
            "datasetid": "public-washrooms",
            "recordid": "6a38d8caeac579986354a8ff2d6b129942c1eda6",
            "fields": {
                "summer_hours": "Hours of the centre",
                "location": "Barclay Manor (WECC)",
                "name": "Barclay Heritage Square",
                "address": "1433 Barclay Street",
                "primaryind": "4",
                "type": "Public Toilet in Park",
                "winter_hours": "Hours of the centre",
                "geo_local_area": "West End",
                "geom": {
                    "coordinates": [
                        -123.132560510918,
                        49.2872148697549
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "7bae32725576a39a6fe0a12adb926e95c82a38f3",
            "fields": {
                "summer_hours": "10:00 am - Dusk",
                "location": "West side",
                "name": "David Lam Park",
                "address": "1300 Pacific Boulevard",
                "primaryind": "16",
                "type": "Public Toilet in Park",
                "winter_hours": "10:00 am - Dusk",
                "geo_local_area": "Downtown",
                "geom": {
                    "coordinates": [
                        -123.125415035162,
                        49.2723830073375
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "8290f2c4b5d11339243331ef72503f6381fcbd1f",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Central, field house",
                "name": "Elm Park",
                "address": "5800 Elm Street",
                "primaryind": "17",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Kerrisdale",
                "geom": {
                    "coordinates": [
                        -123.163283944614,
                        49.2334319792246
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "1ffd2f61756a0c69fd2c084cf1f5cbee38def19f",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Central, field house",
                "name": "Granville Park",
                "address": "3001 Fir Street",
                "primaryind": "25",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Fairview",
                "note": "No Caretaker",
                "geom": {
                    "coordinates": [
                        -123.14196994988,
                        49.2584930114999
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "09878539cbb76bc9e889c8cdd2c7220c8bb73783",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Central, field house",
                "name": "Hastings Community Park",
                "address": "3000 E Pender Street",
                "primaryind": "29",
                "type": "Public Toilet in Park",
                "winter_hours": "Closed",
                "geo_local_area": "Hastings-Sunrise",
                "note": "No Caretaker",
                "geom": {
                    "coordinates": [
                        -123.03787394911,
                        49.2806479707568
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "98fd76c9535e5b3ed63bea6a18757fa7b49b0061",
            "fields": {
                "summer_hours": "Dawn - 11:00 pm",
                "location": "Service Yard - public exterior attached to service building",
                "name": "Jericho Beach Park",
                "address": "3941 Point Grey Road",
                "primaryind": "32",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn - 11:00 pm",
                "geo_local_area": "West Point Grey",
                "geom": {
                    "coordinates": [
                        -123.20280599872,
                        49.2744279889871
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "0a381757e13c807822f3d8cf1e667917bd8904c5",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "At Trout Lake",
                "name": "John Hendry (Trout Lake) Park",
                "address": "3300 Victoria Drive",
                "primaryind": "33",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Kensington-Cedar Cottage",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.061387988851,
                        49.2539260388866
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "e8c671483de6f9882bae20e842e6d0ed56e9501d",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Kitsilano Showboat concession",
                "name": "Kitsilano Beach Park",
                "address": "1499 Arbutus Street",
                "primaryind": "36",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Kitsilano",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.157542967602,
                        49.2730140340116
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "0714795b999347e66670f3a28d68d12fecef38f5",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Lifeguard station",
                "name": "Kitsilano Beach Park",
                "address": "1499 Arbutus Street",
                "primaryind": "37",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Kitsilano",
                "geom": {
                    "coordinates": [
                        -123.153702974672,
                        49.2744719935869
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "a1cb35a604e47c3b98f4415f81c39407babe1bb4",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Central, field house",
                "name": "Maple Grove Park",
                "address": "6875 Yew Street",
                "primaryind": "40",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Kerrisdale",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.159582974748,
                        49.2233840215141
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "88835a51cdb95662ff70c3bf2c25a07e44341679",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Central, field house",
                "name": "McBride Park",
                "address": "3350 W 4th Avenue",
                "primaryind": "41",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Kitsilano",
                "note": "No Caretaker",
                "geom": {
                    "coordinates": [
                        -123.180140962198,
                        49.2681069665443
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "2d840180f368335be1b9b5797823a9682488f29c",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Oval",
                "name": "Memorial South Park",
                "address": "5955 Ross Street",
                "primaryind": "42",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Sunset",
                "note": "No Caretaker",
                "geom": {
                    "coordinates": [
                        -123.084388002617,
                        49.2307380348496
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "110368ae8aaed3eb37ce31b45ffd8168764b2a5c",
            "fields": {
                "summer_hours": "7:30 am - 9:00 pm",
                "location": "Lookout",
                "name": "Queen Elizabeth Park",
                "address": "4600 Cambie Street",
                "primaryind": "55",
                "type": "Public Toilet in Park",
                "winter_hours": "7:30 am - 9:00 pm",
                "geo_local_area": "Riley Park",
                "geom": {
                    "coordinates": [
                        -123.112919003359,
                        49.2421839651063
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "67484ff47f5edbd017212fc9c68620fb5005dd4a",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "North east corner, fieldhouse",
                "name": "Quilchena Park",
                "address": "4590 Magnolia Street",
                "primaryind": "57",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Arbutus-Ridge",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.148723944856,
                        49.2446430482962
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "af5e8e72e6116e05412c147fe02c69a38ee928d1",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "North side",
                "name": "Riverfront Park",
                "address": "2750 E Kent Ave S",
                "primaryind": "58",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Killarney",
                "geom": {
                    "coordinates": [
                        -123.051846970695,
                        49.2057680376434
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "7bf8874505385907b8d4d9266d009e958d9d905f",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "South west corner, fieldhouse",
                "name": "Ross Park",
                "address": "7402 Ross Street",
                "primaryind": "60",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Sunset",
                "geom": {
                    "coordinates": [
                        -123.082798035022,
                        49.2166999806775
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "f6cb23d193922771b56bb3ff94cd7368f3e836f6",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "South side, fieldhouse",
                "name": "Rupert Park",
                "address": "1600 Rupert Street",
                "primaryind": "61",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Hastings-Sunrise",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.030604979627,
                        49.2701350041925
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "56ad0a0c3899e3319b6b3375a25a84da82bee660",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "North side",
                "name": "Slocan Park",
                "address": "2750 E 29th Avenue",
                "primaryind": "63",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Renfrew-Collingwood",
                "geom": {
                    "coordinates": [
                        -123.047952017189,
                        49.2444379784009
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "ba78a88edf521b334bfa92e9d91a3062396cf35b",
            "fields": {
                "summer_hours": "Weekdays only 8:30 am - 5:00 pm",
                "location": "Park Board Main office",
                "name": "Stanley Park",
                "address": "2000 W Georgia Street",
                "primaryind": "67",
                "type": "Public Toilet in Park",
                "winter_hours": "Weekdays only 8:30 am - 5:00 pm",
                "note": "Wheelchair accessible",
                "geom": {
                    "coordinates": [
                        -123.145354964422,
                        49.2908669672286
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "802e59401dd6e88b8cd201713080a72945e8b7ba",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Ceperley Picnic Shelter",
                "name": "Stanley Park",
                "address": "2000 W Georgia Street",
                "primaryind": "72",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "note": "Wheelchair accessible",
                "geom": {
                    "coordinates": [
                        -123.148714956707,
                        49.2936169900948
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "0b24e012294aad3418d21ee9eea145ff73443341",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Fish House",
                "name": "Stanley Park",
                "address": "2000 W Georgia Street",
                "primaryind": "74",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "note": "Key to accessible washroom on west side of Fish House available at Pitch and Putt Golf Course ticket booth",
                "geom": {
                    "coordinates": [
                        -123.146580040925,
                        49.2922930215573
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes, key available at Pitch and Putt ticket booth",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "f3b671557b797c7dce8762695a884cc1a7236c4e",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Info Booth",
                "name": "Stanley Park",
                "address": "2000 W Georgia Street",
                "primaryind": "75",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "note": "Wheelchair accessible",
                "geom": {
                    "coordinates": [
                        -123.131432966091,
                        49.2977530146591
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "4af9eeaf174d6cc77640bdc46f6daf5271ebe326",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Pavilion",
                "name": "Stanley Park",
                "address": "2000 W Georgia Street",
                "primaryind": "77",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "note": "Accessible washroom entered from parking lot level, to the left side of the building.",
                "geom": {
                    "coordinates": [
                        -123.134051016088,
                        49.2995490315169
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes, entered from parking lot level",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "80eaaa516d659286205e614530fbbcbce94e783b",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Pitch & Putt Golf Course",
                "name": "Stanley Park",
                "address": "2000 W Georgia Street",
                "primaryind": "78",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "note": "Not accessible, key to accessible washroom on west side of Fish House available at ticket booth",
                "geom": {
                    "coordinates": [
                        -123.146599024764,
                        49.2930350373012
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "041416a1c898289db1a8c67b4476558afb402a92",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Prospect Point Picnic, fieldhouse",
                "name": "Stanley Park",
                "address": "2000 W Georgia Street",
                "primaryind": "80",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "note": "Wheelchair accessible, Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.148388039898,
                        49.3105500283612
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "57de73e8a4da983dafc9460589e0b8174510f3fc",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Concession",
                "name": "Sunset Beach Park",
                "address": "1204 Beach Avenue",
                "primaryind": "84",
                "type": "Public Toilet in Park",
                "winter_hours": "7:00 am - Dusk",
                "geo_local_area": "West End",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.137950043494,
                        49.2788370147886
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "633b2ef35afbdc5d7bbf6c2cdc5a737a905b613d",
            "fields": {
                "summer_hours": "Dawn to 10:15 pm",
                "name": "Trillium Park",
                "address": "600 National Avenue",
                "primaryind": "87",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to 10:15 pm",
                "geo_local_area": "Strathcona",
                "geom": {
                    "coordinates": [
                        -123.092911042306,
                        49.2748
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "65ccc74fa6e9af2667742d3f878d1d33732b6dd3",
            "fields": {
                "summer_hours": "Hours of operation only",
                "location": "Floral hall",
                "name": "VanDusen Botanical Garden",
                "address": "5251 Oak Street",
                "primaryind": "88",
                "type": "Public Toilet in Park",
                "winter_hours": "Hours of operation only",
                "geo_local_area": "Shaughnessy",
                "geom": {
                    "coordinates": [
                        -123.128638340165,
                        49.2385104498556
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "3e96228c18a9b13150c804f02cd494b46437eb66",
            "fields": {
                "summer_hours": "Men: 6am - Women: 8am to Midnight",
                "location": "SW corner of intersection",
                "name": "Main at Hastings",
                "address": "SW corner of intersection",
                "primaryind": "94",
                "type": "Comfort Station",
                "winter_hours": "Men: 6am - Women: 8am to Midnight",
                "geo_local_area": "Downtown",
                "note": "N/A",
                "geom": {
                    "coordinates": [
                        -123.09985,
                        49.281107
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "City of Vancouver"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "3ff45515295014f3ff6881899d448ec14a8105c5",
            "fields": {
                "summer_hours": "24 hrs",
                "location": "NW corner of intersection",
                "name": "Hastings at Carral - Pigeon Park",
                "address": "NW corner of intersection",
                "primaryind": "98",
                "type": "Automated Public Toilet",
                "winter_hours": "24 hrs",
                "geo_local_area": "Downtown",
                "note": "Please call 311 for maintenance requests",
                "geom": {
                    "coordinates": [
                        -123.104602,
                        49.2816384
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "City of Vancouver"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "99ece71c74eb3643c4d6fe67cb9c0e8c1e7b40c9",
            "fields": {
                "summer_hours": "6am to 10pm",
                "location": "NE corner of intersection",
                "name": "Main at Terminal",
                "address": "NE corner of intersection",
                "primaryind": "99",
                "type": "Automated Public Toilet",
                "winter_hours": "6am to 10pm",
                "geo_local_area": "Strathcona",
                "note": "Please call 311 for maintenance requests",
                "geom": {
                    "coordinates": [
                        -123.099778,
                        49.2731387
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "City of Vancouver"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "fca28fc084462fb822dd3415022c000f497078f7",
            "fields": {
                "summer_hours": "24 hrs",
                "location": "NE corner of intersection",
                "name": "Nelson at Howe",
                "address": "NE corner of intersection",
                "primaryind": "101",
                "type": "Automated Public Toilet",
                "winter_hours": "24 hrs",
                "geo_local_area": "Downtown",
                "note": "Please call 311 for maintenance requests",
                "geom": {
                    "coordinates": [
                        -123.123516,
                        49.2796964
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "City of Vancouver"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "1b5614ba3846affe058f187ad1110d721e4f0018",
            "fields": {
                "summer_hours": "24 hrs",
                "location": "NW corner of intersection",
                "name": "Richards at Davie - Emery Barnes Park",
                "address": "NW corner of intersection",
                "primaryind": "103",
                "type": "Automated Public Toilet",
                "winter_hours": "24 hrs",
                "geo_local_area": "Downtown",
                "note": "Please call 311 for maintenance requests",
                "geom": {
                    "coordinates": [
                        -123.124114,
                        49.2760544
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "City of Vancouver"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "22f2404ebfb7ceafb228eb625559525f2acf0d25",
            "fields": {
                "summer_hours": "6am to 10pm",
                "location": "NW corner of intersection",
                "name": "Robson at Granville",
                "address": "NW corner of intersection",
                "primaryind": "104",
                "type": "Automated Public Toilet",
                "winter_hours": "6am to 10pm",
                "geo_local_area": "Downtown",
                "note": "Please call 311 for maintenance requests",
                "geom": {
                    "coordinates": [
                        -123.120082,
                        49.2816325
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "City of Vancouver"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "c34d923a840c7765d6df294690f970ef1334a0e1",
            "fields": {
                "summer_hours": "24 hrs",
                "location": "NW corner of intersection",
                "name": "Robson at Richards",
                "address": "NW corner of intersection",
                "primaryind": "105",
                "type": "Automated Public Toilet",
                "winter_hours": "24 hrs",
                "geo_local_area": "Downtown",
                "note": "Please call 311 for maintenance requests",
                "geom": {
                    "coordinates": [
                        -123.118054,
                        49.2803243
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "City of Vancouver"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "8c272250ee17f25f70a7fcbaaf88295e57dfe16a",
            "fields": {
                "summer_hours": "6am to 10pm",
                "location": "NE Side of VAG Building",
                "name": "Vancouver Art Gallary",
                "address": "NE Side of VAG Building",
                "primaryind": "106",
                "type": "Automated Public Toilet",
                "winter_hours": "6am to 10pm",
                "geo_local_area": "Downtown",
                "note": "Please call 311 for maintenance requests",
                "geom": {
                    "coordinates": [
                        -123.119864,
                        49.282961
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "City of Vancouver"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "793e7960e380aa663040ad6bc95f66c0cdc77236",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "East side, fieldhouse",
                "name": "Adanac Park",
                "address": "1025 Boundary Road",
                "primaryind": "1",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Hastings-Sunrise",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.024071960319,
                        49.2758809677686
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "7a670401a7376b658683fbfabd6eba6855d20896",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Central, field house",
                "name": "Balaclava Park",
                "address": "4594 Balaclava Street",
                "primaryind": "3",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Dunbar-Southlands",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.175460949361,
                        49.2452339943975
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "f518aea63395ed86439951693f7aedac136c4f77",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "East side, fieldhouse",
                "name": "Beaconsfield Park",
                "address": "3215 Slocan Street",
                "primaryind": "5",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Renfrew-Collingwood",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.049933959326,
                        49.2552329902121
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "68e2d481a112444e68dafda32423974957d0b336",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "East edge, fieldhouse",
                "name": "Braemar Park",
                "address": "895 W 27th Avenue",
                "primaryind": "7",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "South Cambie",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.124483021671,
                        49.2474209947128
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "d91b3e0e514278cef4c144df8b771412a0f2877b",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "North east corner fieldhouse",
                "name": "Brewers Park",
                "address": "4175 Victoria Drive",
                "primaryind": "8",
                "type": "Public Toilet in Park",
                "winter_hours": "Closed",
                "geo_local_area": "Kensington-Cedar Cottage",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.065425949078,
                        49.2478549906707
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "12e2cf68079b708c830dcdc24dd2c097aa30cdc8",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Fieldhouse",
                "name": "Burrard View Park",
                "address": "650 North Penticton Street",
                "primaryind": "9",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Hastings-Sunrise",
                "note": "No Caretaker",
                "geom": {
                    "coordinates": [
                        -123.049648970845,
                        49.2903639621952
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "f2cf3509faeac1bf371502a5026f063b8c1a7ea5",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "South side at fieldhouse",
                "name": "CRAB Park at Portside",
                "address": "101 E Waterfront Road",
                "primaryind": "10",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Downtown",
                "geom": {
                    "coordinates": [
                        -123.101835004137,
                        49.2845920073111
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "22b9e1a25b4954082fcd828d8d480db1a510399a",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "West side, field house",
                "name": "Carnarvon Park",
                "address": "2995 W 19th Avenue",
                "primaryind": "11",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Arbutus-Ridge",
                "geom": {
                    "coordinates": [
                        -123.172609010381,
                        49.2567420168862
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "0e633882c57d14975d8b7a87840a4717dbca36a6",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "North east corner, fieldhouse",
                "name": "Clinton Park",
                "address": "2690 Grant Street",
                "primaryind": "13",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Hastings-Sunrise",
                "geom": {
                    "coordinates": [
                        -123.049782027867,
                        49.2711450328993
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "b24430902a638d7e70adab0257f1f2faca6b24d0",
            "fields": {
                "summer_hours": "Dawn to Dusk Weekends only",
                "name": "Columbia Park",
                "address": "5908 Alberta Street",
                "primaryind": "15",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk Weekends only",
                "geo_local_area": "Oakridge",
                "geom": {
                    "coordinates": [
                        -123.112908974023,
                        49.231522997877
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "37d9e43c5cecaed5e21ff0c72db756ec9488a568",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Community Hall",
                "name": "Falaise Park",
                "address": "3434 Falaise Avenue",
                "primaryind": "19",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Renfrew-Collingwood",
                "note": "Women's is closed Mon - Fri during school days",
                "geom": {
                    "coordinates": [
                        -123.029405986745,
                        49.2551230346758
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "f4864e84265d167c4e3b264aac38738af57fec22",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "North east corner, fieldhouse",
                "name": "Garden Park",
                "address": "1851 Garden Drive",
                "primaryind": "22",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Grandview-Woodland",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.058333994001,
                        49.2682859984386
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "7d70b204f13e34abb9ac026623a2b05bfbe7cc78",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "South side",
                "name": "Grandview Park",
                "address": "1255 Commercial Drive",
                "primaryind": "24",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Grandview-Woodland",
                "geom": {
                    "coordinates": [
                        -123.069954446436,
                        49.2737616313216
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "bbe8ee7e90bfa74330656e8880c1ac795aa4b75e",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Centre west by parking lot",
                "name": "Grays Park",
                "address": "4850 St. Catherines Street",
                "primaryind": "26",
                "type": "Public Toilet in Park",
                "winter_hours": "Closed",
                "geo_local_area": "Kensington-Cedar Cottage",
                "geom": {
                    "coordinates": [
                        -123.084887032665,
                        49.2407870046013
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "d57ec8c8d9391ff766e9032a25c42529d9c09b24",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "West, caretaker house (actually in Kits)",
                "name": "Hadden Park",
                "address": "1905 Ogden Avenue",
                "primaryind": "27",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Kitsilano",
                "note": "No Caretaker",
                "geom": {
                    "coordinates": [
                        -123.15030998211,
                        49.2774609930893
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "3ad0e53065985906b284cdbee323ea7e6687e2e8",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Concession/fieldhouse",
                "name": "Jericho Beach Park",
                "address": "3941 Point Grey Road",
                "primaryind": "31",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "West Point Grey",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.191658959557,
                        49.2715800212711
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "a5bd7726d7daf4a44e6774a2971ecfd5dea68826",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "North side, fieldhouse",
                "name": "Jonathan Rogers Park",
                "address": "110 W 7th Avenue",
                "primaryind": "34",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Mount Pleasant",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.107620016125,
                        49.2644980299255
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "7d50201a1111d8b663979eeded307aebe402c2ba",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "North west corner, fieldhouse",
                "name": "Jones Park",
                "address": "5350 Commercial Street",
                "primaryind": "35",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Kensington-Cedar Cottage",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.068328027105,
                        49.2362049589966
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "aa1996f0817ff268b247003ec2a5368815bd6033",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Central, field house",
                "name": "Memorial West Park",
                "address": "4701 Dunbar Street",
                "primaryind": "43",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Dunbar-Southlands",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.188455003096,
                        49.2433349852208
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "9d55a4f771f5414d7d316c0328507a44bec5e854",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "North east corner",
                "name": "Montgomery Park",
                "address": "1040 W 43rd Avenue",
                "primaryind": "45",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Oakridge",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.129240986478,
                        49.2318260466293
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "de3cbf922d91efcf2e1645a43e1dcdfdd8970d48",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "South side of pool building",
                "name": "New Brighton Park",
                "address": "3201 New Brighton Road",
                "primaryind": "47",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Hastings-Sunrise",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.036025007443,
                        49.2893339699629
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "f4c918e7ee44b714903a8bc858dc8d5073813c33",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "North east corner, fieldhouse",
                "name": "New Brighton Park",
                "address": "3201 New Brighton Road",
                "primaryind": "48",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Hastings-Sunrise",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.036308,
                        49.289293
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "5c2270857ee6e14b8069c97132d38c736c07479a",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "East side field house",
                "name": "Oak Park",
                "address": "900 W 59th Avenue",
                "primaryind": "50",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Marpole",
                "geom": {
                    "coordinates": [
                        -123.127640978659,
                        49.216285995094
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "2b05da027fd1f50c84fe822129842cd75356f964",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Sout east corner, fieldhouse",
                "name": "Prince Edward Park",
                "address": "3773 Prince Edward Street",
                "primaryind": "53",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Riley Park",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.097056994174,
                        49.2511909721127
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "7aa09965a58ecc69878e0f11108e40f5b949169c",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "name": "Robson Park",
                "address": "599 Kingsway",
                "primaryind": "59",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Mount Pleasant",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.092848986795,
                        49.2586270164444
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "aed3e3577f1c2881deeaf6fcde15290313e1de45",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "2nd Beach, fieldhouse",
                "name": "Stanley Park",
                "address": "2000 W Georgia Street",
                "primaryind": "68",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "note": "Wheelchair accessible",
                "geom": {
                    "coordinates": [
                        -123.150733000629,
                        49.2956269925671
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "3d4f49135c265ae0013b5ed31d9de12687c6d408",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Chilco",
                "name": "Stanley Park",
                "address": "2000 W Georgia Street",
                "primaryind": "73",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "note": "Wheelchair accessible",
                "geom": {
                    "coordinates": [
                        -123.138591029397,
                        49.2939220383499
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "982a68cf8779090e68b9396e34ded6102a92e833",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Totems",
                "name": "Stanley Park",
                "address": "2000 W Georgia Street",
                "primaryind": "81",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "note": "Wheelchair accessible",
                "geom": {
                    "coordinates": [
                        -123.12127801962,
                        49.2994400235276
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "c27197be9188a57005dd4ca002e852d0d2de2718",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Centre",
                "name": "West Point Grey Park",
                "address": "2250 Trimble Street",
                "primaryind": "92",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "West Point Grey",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.204579564378,
                        49.2665415433898
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "5cb95998e28d7eaab80fe14c361c9cd91c3d4c07",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Central, field house",
                "name": "Woodland Park",
                "address": "705 Woodland Drive",
                "primaryind": "94",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Grandview-Woodland",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.073220004653,
                        49.2783689722403
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "7d9321814cc3e80871bbc56ce51e9427fb0669ce",
            "fields": {
                "summer_hours": "Men: 6am - Women: 8am to Midnight",
                "location": "N/A",
                "name": "Victory Square",
                "address": "N/A",
                "primaryind": "95",
                "type": "Comfort Station",
                "winter_hours": "Men: 6am - Women: 8am to Midnight",
                "geo_local_area": "Downtown",
                "note": "N/A",
                "geom": {
                    "coordinates": [
                        -123.110132,
                        49.2825906
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "City of Vancouver"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "c15e4bb2ffb88510b03158408d8308ba3bfb4f9b",
            "fields": {
                "summer_hours": "24 hrs",
                "location": "NE corner of intersection",
                "name": "Bute at Davie",
                "address": "NE corner of intersection",
                "primaryind": "96",
                "type": "Automated Public Toilet",
                "winter_hours": "24 hrs",
                "geo_local_area": "West End",
                "note": "Please call 311 for maintenance requests",
                "geom": {
                    "coordinates": [
                        -123.133141,
                        49.2818541
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "City of Vancouver"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "2c41fe9b197714a156b9505513034be8e99c112b",
            "fields": {
                "summer_hours": "10:00 am - 11:00 pm",
                "location": "South side, fieldhouse",
                "name": "Andy Livingstone Park",
                "address": "89 Expo Boulevard",
                "primaryind": "2",
                "type": "Public Toilet in Park",
                "winter_hours": "10:00 am - 11:00 pm",
                "geo_local_area": "Downtown",
                "geom": {
                    "coordinates": [
                        -123.103599022256,
                        49.2778209665246
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "ec83b5f1d5e9528e412573c1fe14b4d17de7100a",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "North side, fieldhouse",
                "name": "Bobolink Park",
                "address": "2510 Hoylake Avenue",
                "primaryind": "6",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Victoria-Fraserview",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.056414955041,
                        49.2156069867489
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "e45847e5ce0d8646f02d66b1640630d49cdd9fb4",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "East side fieldhouse",
                "name": "Chaldecott Park",
                "address": "4175 Wallace Street",
                "primaryind": "12",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Dunbar-Southlands",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.19112496205,
                        49.2494269600837
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "cffddb42608bdecf0e9d162f20c4c25f5a816472",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "South corner, fieldhouse",
                "name": "Collingwood Park",
                "address": "5275 McKinnon Street",
                "primaryind": "14",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Renfrew-Collingwood",
                "geom": {
                    "coordinates": [
                        -123.036715960679,
                        49.2365299637476
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "1c6cda420f93b7de32367386166c56b0fff4cf43",
            "fields": {
                "summer_hours": "7:00 am - Dusk",
                "location": "Bathhouse",
                "name": "English Bay Beach Park",
                "address": "1700 Beach Avenue",
                "primaryind": "18",
                "type": "Public Toilet in Park",
                "winter_hours": "10:00 am - Dusk",
                "geo_local_area": "West End",
                "geom": {
                    "coordinates": [
                        -123.142804967084,
                        49.2861540400257
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "e5b41bb1c39d3b4281c9ebc55b2cff0c84dfb0f1",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "West corner",
                "name": "Fraser River Park",
                "address": "8705 Angus Drive",
                "primaryind": "20",
                "type": "Public Toilet in Park",
                "winter_hours": "Closed",
                "geo_local_area": "Kerrisdale",
                "note": "April 1 to October 31",
                "geom": {
                    "coordinates": [
                        -123.149856004532,
                        49.2073949985982
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "4db97cc81ebbe7a32203eb0b37b53e0eabffdaac",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Kerr Road @13th hole",
                "name": "Fraserview Golf Course",
                "address": "7800 Vivian Drive",
                "primaryind": "21",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Killarney",
                "geom": {
                    "coordinates": [
                        -123.042299667586,
                        49.2112953517694
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "d4c25d7c4b8ffbf77b4ae42728d3bbfe29fc9281",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "East side",
                "name": "Gordon Park",
                "address": "6675 Commercial Street",
                "primaryind": "23",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Victoria-Fraserview",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.069499978534,
                        49.2238700450659
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "c3104bc445d707274a189b9f6384d9ff0f129d2f",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Central",
                "name": "Harbour Green Park",
                "address": "1199 W Cordova Street",
                "primaryind": "28",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Downtown",
                "geom": {
                    "coordinates": [
                        -123.121466998595,
                        49.2898040141255
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "6c00d26e78b365fcea36f5772a9a488c3da92ccb",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Concession at fieldhouse",
                "name": "Locarno Park",
                "address": "4445 NW Marine Drive",
                "primaryind": "38",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "West Point Grey",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.206555013072,
                        49.2750659923232
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "27ec5a4a30722d972d58574268882e5ebcf9fb37",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "North west corner, fieldhouse",
                "name": "MacLean Park",
                "address": "710 Keefer Street",
                "primaryind": "39",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Strathcona",
                "note": "No Caretaker",
                "geom": {
                    "coordinates": [
                        -123.0893660404,
                        49.27900702288
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "b206d53c88adbf625e78ea1916828321f0884f10",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "South west corner at Community Hall",
                "name": "Moberly Park",
                "address": "7646 Prince Albert Street",
                "primaryind": "44",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Sunset",
                "geom": {
                    "coordinates": [
                        -123.087354978911,
                        49.2152529959461
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "957fb9c1194f527f177b4bbc34e6f613e5884828",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "North side, fieldhouse",
                "name": "Nanaimo Park",
                "address": "2390 E 46th Avenue",
                "primaryind": "46",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Victoria-Fraserview",
                "note": "No Caretaker",
                "geom": {
                    "coordinates": [
                        -123.057429042023,
                        49.2282419990449
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "69f3a02c9ffe880580a8cd777d6edd1296290b51",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "West side, field house",
                "name": "Norquay Park",
                "address": "5050 Wales Street",
                "primaryind": "49",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Renfrew-Collingwood",
                "note": "No Caretaker",
                "geom": {
                    "coordinates": [
                        -123.051424959911,
                        49.2379749903438
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "46440f4c573412718e82f018e7510069b228dbaa",
            "fields": {
                "summer_hours": "Tue - Sat 9:00 am - 8:00 pm",
                "location": "North east corner",
                "name": "Oppenheimer Park",
                "address": "400 Powell Street",
                "primaryind": "51",
                "type": "Public Toilet in Park",
                "winter_hours": "Tue - Sat 9:00 am - 5:00 pm",
                "geo_local_area": "Strathcona",
                "note": "Family washroom available",
                "geom": {
                    "coordinates": [
                        -123.094181035354,
                        49.2829379681762
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "d31bb51ea45fef4ab391350d7c4bdcc2953827d9",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "South side, fieldhouse",
                "name": "Pandora Park",
                "address": "2325 Franklin Street",
                "primaryind": "52",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Grandview-Woodland",
                "geom": {
                    "coordinates": [
                        -123.057478049186,
                        49.2822799986755
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "9c0ddd18444dacc89bb85a5201bbf77e450f57b6",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Fieldhouse",
                "name": "Queen Elizabeth Park",
                "address": "4600 Cambie Street",
                "primaryind": "54",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Riley Park",
                "note": "No Caretaker",
                "geom": {
                    "coordinates": [
                        -123.111577056628,
                        49.2389380178008
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "b558473697fa726f9991a73f46fc417340a0b3ff",
            "fields": {
                "summer_hours": "7:30 am - 9:00 pm",
                "location": "Under \"Seasons\"",
                "name": "Queen Elizabeth Park",
                "address": "4600 Cambie Street",
                "primaryind": "56",
                "type": "Public Toilet in Park",
                "winter_hours": "7:30 am - 9:00 pm",
                "geo_local_area": "Riley Park",
                "geom": {
                    "coordinates": [
                        -123.112844975315,
                        49.2422110176667
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "88a5c7b3a42c0f77032bd7a3572ce8d908f956d9",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Pitch & Putt (north side)",
                "name": "Rupert Park",
                "address": "1600 Rupert Street",
                "primaryind": "62",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Hastings-Sunrise",
                "geom": {
                    "coordinates": [
                        -123.030682959269,
                        49.2730500015562
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "f133ddbc3f60cecf64f45c513547f5168c773665",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "West, fieldhouse",
                "name": "Spanish Banks Beach Park",
                "address": "4801 NW Marine Drive",
                "primaryind": "64",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "West Point Grey",
                "geom": {
                    "coordinates": [
                        -123.222679055401,
                        49.2774719860241
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "9092e851d52c783be1e405713aa52790239c508e",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "East, fieldhouse",
                "name": "Spanish Banks Beach Park",
                "address": "4801 NW Marine Drive",
                "primaryind": "65",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "West Point Grey",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.21492003747,
                        49.2762439755221
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "1fb3e3a6199bb1b2fbe1e895bd84331c714d248c",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Train, Picnic Shelter",
                "name": "Stanley Park",
                "address": "2000 W Georgia Street",
                "primaryind": "66",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "note": "Wheelchair accessible",
                "geom": {
                    "coordinates": [
                        -123.132923042179,
                        49.3020690032254
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "1c3402aad54e9b82cc4c774523721e4749ad0721",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "3rd Beach, fieldhouse",
                "name": "Stanley Park",
                "address": "2000 W Georgia Street",
                "primaryind": "69",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "note": "Wheelchair accessible at parking lot level, Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.155931048676,
                        49.3031529920237
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "7b4c042d392c17c9c5227426496929217af02465",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Aquarium plaza",
                "name": "Stanley Park",
                "address": "2000 W Georgia Street",
                "primaryind": "70",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "note": "Wheelchair accessible",
                "geom": {
                    "coordinates": [
                        -123.13070000487,
                        49.2998679959831
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "a5948d27dc8c257520f44ef8acafff51899ed70f",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Brockton Oval",
                "name": "Stanley Park",
                "address": "2000 W Georgia Street",
                "primaryind": "71",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "note": "Wheelchair accessible, Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.126023002581,
                        49.2996259645902
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "f5422b2f8a47ea8844d1d0d11184de98b0413a25",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Lumberman's Arch",
                "name": "Stanley Park",
                "address": "2000 W Georgia Street",
                "primaryind": "76",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "note": "Wheelchair accessible",
                "geom": {
                    "coordinates": [
                        -123.130707978951,
                        49.3029259847064
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "3f8aaf46cbda33644bb5f3259468ce517d995d2e",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Prospect Point",
                "name": "Stanley Park",
                "address": "2000 W Georgia Street",
                "primaryind": "79",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "note": "Wheelchair accessible",
                "geom": {
                    "coordinates": [
                        -123.142649989276,
                        49.3124120320746
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "60488b20480d3c4997f9884297ee40e590043a6d",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "South side, fieldhouse",
                "name": "Strathcona Park",
                "address": "857 Malkin Avenue",
                "primaryind": "82",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Strathcona",
                "geom": {
                    "coordinates": [
                        -123.086188991758,
                        49.2745570066112
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "c0982961d889001122e5d1c7797823efa3e7e4ec",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "North west corner, fieldhouse",
                "name": "Sunrise Park",
                "address": "1950 Windermere Street",
                "primaryind": "83",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Hastings-Sunrise",
                "geom": {
                    "coordinates": [
                        -123.03601798246,
                        49.2669229919436
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "1bc160681c9bd1da51cd498fba1e1219468833f4",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "South, field house",
                "name": "Tatlow Park",
                "address": "2845 W 3rd Avenue",
                "primaryind": "85",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Kitsilano",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.169511949678,
                        49.269476011815
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "6f901be622394aab15152fc147e0a5c5570d5293",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "North side, fieldhouse",
                "name": "Trafalgar Park",
                "address": "2610 W 23rd Avenue",
                "primaryind": "86",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Arbutus-Ridge",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.163471973425,
                        49.2515549664121
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "3ca44a03fc8cee69fe7483179965c044e952d185",
            "fields": {
                "summer_hours": "Hours of operation only",
                "location": "At front entrance",
                "name": "VanDusen Botanical Garden",
                "address": "5251 Oak Street",
                "primaryind": "89",
                "type": "Public Toilet in Park",
                "winter_hours": "Hours of operation only",
                "geo_local_area": "Shaughnessy",
                "geom": {
                    "coordinates": [
                        -123.129557645767,
                        49.2386594327158
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "f8198ea257533852d31d73c47e481fc4b88a5772",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Burrard Civic Marina",
                "name": "Vanier Park",
                "address": "1000 Chestnut Street",
                "primaryind": "90",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Kitsilano",
                "note": "Sometimes later in summer",
                "geom": {
                    "coordinates": [
                        -123.139855943743,
                        49.2751960118216
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "c15d46b55d0503e87916baa1606573de59fe1ded",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "West side",
                "name": "Victoria Park",
                "address": "1425 Victoria Drive",
                "primaryind": "91",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Grandview-Woodland",
                "geom": {
                    "coordinates": [
                        -123.067413016488,
                        49.2717440428088
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "d06e2cf6da8822894ed4c99495a27a99553f0e9b",
            "fields": {
                "summer_hours": "Dawn to Dusk",
                "location": "Fieldhouse",
                "name": "Winona Park",
                "address": "7575 Columbia Street",
                "primaryind": "93",
                "type": "Public Toilet in Park",
                "winter_hours": "Dawn to Dusk",
                "geo_local_area": "Marpole",
                "note": "Caretaker on site",
                "geom": {
                    "coordinates": [
                        -123.112948945253,
                        49.2157179803502
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "e0473724b75d76989f8eb14251515581ef53d9cb",
            "fields": {
                "summer_hours": "24 hrs",
                "location": "Mid Block Between Davie St and See-Em_la Lane",
                "name": "Bute at Davie",
                "address": "Mid Block Between Davie St and See-Em_la Lane",
                "primaryind": "97",
                "type": "Automated Public Toilet",
                "winter_hours": "24 hrs",
                "geo_local_area": "West End",
                "note": "Please call 311 for maintenance requests",
                "geom": {
                    "coordinates": [
                        -123.133157,
                        49.282003
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "City of Vancouver"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "597fe6748e215813348b21d847ce4121603db933",
            "fields": {
                "summer_hours": "24 hrs",
                "location": "West side of park",
                "name": "Nelson Park",
                "address": "West side of park",
                "primaryind": "100",
                "type": "Automated Public Toilet",
                "winter_hours": "24 hrs",
                "geo_local_area": "West End",
                "note": "Please call 311 for maintenance requests",
                "geom": {
                    "coordinates": [
                        -123.130677,
                        49.283378
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "City of Vancouver"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        },
        {
            "datasetid": "public-washrooms",
            "recordid": "68f7f18a762fb656999dac2fc7a75b6abf1651d2",
            "fields": {
                "summer_hours": "24 hrs",
                "location": "NW corner of intersection",
                "name": "Powell at Main",
                "address": "NW corner of intersection",
                "primaryind": "102",
                "type": "Automated Public Toilet",
                "winter_hours": "24 hrs",
                "geo_local_area": "Downtown",
                "note": "Please call 311 for maintenance requests",
                "geom": {
                    "coordinates": [
                        -123.099849,
                        49.2832763
                    ],
                    "type": "Point"
                },
                "wheel_access": "No",
                "maintainer": "City of Vancouver"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        }
    ]

    const defaultCenter = {
        lat: 49.232, lng: -123.119
    }

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
                            <Marker key={item.recordid} position= {{ lat: item.fields.geom.coordinates[0], lng: item.fields.geom.coordinates[1] }} />
                        )
                    })
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default MapContainer;