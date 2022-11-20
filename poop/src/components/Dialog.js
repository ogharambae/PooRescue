import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const navigate = useNavigate();

    const handleClose = async (e) => {
        await e.preventDefault();
        var data = {
            "datasetid": "public-washrooms",
            "recordid": "abc123abc123",
            "fields": {
                "summer_hours": "Fire hall operation hours",
                "location": "Vacouver Fire Hall No.2",
                "name": "Demo washroom",
                "address": "199 Main St",
                "type": "Toilet in building",
                "winter_hours": "Fire hall operation hours",
                "geo_local_area": "Hastings-Sunrise",
                "note": "Caretaker on site",
                "info": "May not always be open",
                "geom": {
                    "coordinates": [
                        -123.10005247592927,
                        49.28327045170959
                    ],
                    "type": "Point"
                },
                "wheel_access": "Yes",
                "maintainer": "Parks & Recreation"
            },
            "record_timestamp": "2020-10-15T03:31:50.455-07:00"
        }
        await axios.put("http://localhost:8000/washrooms", data)
            .then((d) => {
                console.log(d)
            })
        await setOpen(false);
        await navigate("/home");
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Submit
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                titleStyle={{ textAlign: "center" }}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Washroom created successfully!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This washroom will now be visible to you and all other users.
                        Thank you for contributing!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Ok!</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

