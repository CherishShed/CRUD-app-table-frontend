import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Call, Message, AccountCircle } from "@mui/icons-material";
import { Button, InputAdornment, TextField, ButtonGroup } from '@mui/material';
import api from "../controllers/data"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: "2px 2px 2px #000",
    p: 4,
};

export default function BasicModal(props) {
    const [formData, setFormData] = useState({});
    useEffect(() => {
        setTimeout(async () => {
            api.getOne(props.person)
                .then((found) => {
                    setFormData({ ...found[0] });
                })
        }, 1000);
    }, [props.person])

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box component={"form"} sx={style} method={props.method} action='/' onSubmit={(event) => {
                    event.preventDefault();
                }} className='form'>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <TextField InputProps={{ startAdornment: <InputAdornment position='start'><AccountCircle /></InputAdornment>, readOnly: props.status }} style={{ width: "100%", textAlign: "center" }} onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value })
                        }} required value={formData.name}>
                        </TextField>
                    </Typography>
                    <Typography id="modal-modal-description">
                        <TextField InputProps={{ startAdornment: <InputAdornment position='start'><Message /></InputAdornment>, readOnly: props.status }} style={{ width: "100%" }} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} required value={formData.email} type='email' >
                        </TextField>
                    </Typography>
                    <Typography id="modal-modal-description">
                        <TextField InputProps={{ startAdornment: <InputAdornment position='start'><Call /></InputAdornment>, readOnly: props.status }} style={{ width: "100%", textAlign: "center" }} onChange={(e) => { setFormData({ ...formData, contact: e.target.value }) }} required value={formData.contact}>
                        </TextField>
                    </Typography>
                    <ButtonGroup>
                        {(props.method !== "") &&
                            <Button type='submit' color="success" variant='outlined' onClick={(event) => {
                                event.preventDefault();
                                props.handleSubmit(props.person, formData);
                            }}>Submit</Button>
                        }

                    </ButtonGroup>
                </Box>
            </Modal>
        </div >
    );
}