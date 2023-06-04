import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Call, Message } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from '@mui/material';

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
    const [formData, setFormData] = useState({ name: "", email: "", contact: "" });

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
                        <TextField InputProps={{ startAdornment: <InputAdornment position='start'><Message /></InputAdornment>, readOnly: props.status, value: props.person.name }} style={{ width: "100%", textAlign: "center" }} onChange={props.handle}>

                        </TextField>
                    </Typography>
                    <Typography id="modal-modal-description">
                        <TextField InputProps={{ startAdornment: <InputAdornment position='start'><Message /></InputAdornment>, readOnly: props.status, value: props.person.email }} style={{ width: "100%", textAlign: "center" }}>

                        </TextField>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField InputProps={{ startAdornment: <InputAdornment position='start'><Call /></InputAdornment>, readOnly: props.status, value: props.person.contact }} style={{ width: "100%", textAlign: "center" }}>
                        </TextField>
                    </Typography>
                    {(props.method !== "") &&
                        < Button type='submit' color="success" variant='outlined'>Submit</Button>
                    }

                </Box>
            </Modal>
        </div >
    );
}