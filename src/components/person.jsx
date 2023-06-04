import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Call, Message, AccountCircle } from "@mui/icons-material";
import { Button, InputAdornment, TextField, ButtonGroup } from '@mui/material';

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
    const [formData, setFormData] = useState({ name: props.person.name, email: props.person.email, contact: props.person.contact });
    const id = props.id;
    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box component={"form"} sx={style} method={props.method} action='/' onSubmit={(event) => {
                    props.handleSubmit(formData)
                    setFormData({ name: "", email: "", contact: "" })
                    event.preventDefault();
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <TextField InputProps={{ startAdornment: <InputAdornment position='start'><AccountCircle /></InputAdornment>, readOnly: props.status, value: props.person.name }} style={{ width: "100%", textAlign: "center" }} onChange={(e) => { setFormData({ ...FormData, name: e.target.value }) }} required>
                        </TextField>
                    </Typography>
                    <Typography id="modal-modal-description">
                        <TextField InputProps={{ startAdornment: <InputAdornment position='start'><Message /></InputAdornment>, readOnly: props.status, value: props.person.email }} style={{ width: "100%", textAlign: "center" }} onChange={(e) => { setFormData({ ...FormData, email: e.target.value }) }} required>
                        </TextField>
                    </Typography>
                    <Typography id="modal-modal-description">
                        <TextField InputProps={{ startAdornment: <InputAdornment position='start'><Call /></InputAdornment>, readOnly: props.status, value: props.person.contact }} style={{ width: "100%", textAlign: "center" }} onChange={(e) => { setFormData({ ...FormData, contact: e.target.value }) }} required>
                        </TextField>
                    </Typography>
                    <ButtonGroup>
                        {(props.method !== "") &&
                            <Button type='submit' color="success" variant='outlined'>Submit</Button>
                        }
                        <Button color="error" variant='outlined' onClick={(event) => {
                            event.preventDefault();
                            props.handleClose()
                        }}>Close</Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </div >
    );
}