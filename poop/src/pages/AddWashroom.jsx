import React from 'react'
import { useEffect, useState } from "react";
import { Box, TextField, Checkbox, FormGroup, FormControlLabel, Button } from "@mui/material";
import axios from "axios";
import Dialog from "../components/Dialog";
import Footer3 from '../components/Footer/Footer3';

function AddWashroom() {
    const [data, setData] = useState({
        name: "",
        address: "",
        summer_hour: "",
        winter_hour: "",
        info: "",
        wheelchair: "",
        lat: "",
        long: ""
    });

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Box>
            <div className='loginContainer'>
            <Box
                display="flex"
                flexDirection={"column"}
                maxWidth={400}
                alignItems="center"
                justifyContent="center"
                margin="auto"
                padding={3}
                gap={2}
                backgroundColor="rgba(255, 245, 233, 1)">
                <TextField
                    margin="normal"
                    type={"text"}
                    name="name"
                    placeholder="Name"
                    value={data.name}
                    onChange={changeHandler}
                    variant="standard"
                />
                <TextField
                    margin="normal"
                    type={"text"}
                    name="address"
                    placeholder="Address"
                    value={data.address}
                    onChange={changeHandler}
                    variant="standard"
                />
                <TextField
                    margin="normal"
                    type={"text"}
                    name="summer_hour"
                    placeholder="Summer hours"
                    value={data.summer_hour}
                    onChange={changeHandler}
                    variant="standard"
                />
                <TextField
                    margin="normal"
                    type={"text"}
                    name="winter_hour"
                    placeholder="Winter hours"
                    value={data.winter_hour}
                    onChange={changeHandler}
                    variant="standard"
                />
                <TextField
                    margin="normal"
                    type={"text"}
                    name="info"
                    placeholder="Info"
                    value={data.info}
                    onChange={changeHandler}
                    variant="standard"
                />
                <TextField
                    margin="normal"
                    type={"text"}
                    name="lat"
                    placeholder="Latitude"
                    value={data.lat}
                    onChange={changeHandler}
                />
                <TextField
                    margin="normal"
                    type={"text"}
                    name="long"
                    placeholder="Longitude"
                    value={data.long}
                    onChange={changeHandler}
                />
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Wheelchair accessible?" />
                </FormGroup>
                <Dialog></Dialog>
            </Box>
            <Footer3 />
            </div>
        </Box>
    )
}

export default AddWashroom
