import React, { useEffect, useState } from 'react';
import ToastComp from './toastComponent';
import api from '../controllers/data';
import BasicModal from './person';
import DataTable from './DataTable';
import { toast } from 'react-toastify';

function HomePage() {
    const [mydata, setMyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [person, setPerson] = useState({ name: "", email: "", contact: "", id: 0 });
    const [modalStatus, setModalStatus] = useState(false)
    const [editText, setEditText] = useState("")
    const [method, setMethod] = useState("");



    const handleViewOpen = (value) => {
        setMethod("")
        setModalStatus(true);
        setOpen(true);
        findPerson(value)
            .then((found) => {
                const { name, email, contact } = found[0];
                setPerson({ name, email, contact });
            })

    }
    const handleClose = () => {

        setEditText("");
        setModalStatus(true);
        setModalStatus(false);
        setMethod("")
        setOpen(false)
        setPerson({ name: "", email: "", contact: "" });
    };

    const handleEditOpen = (value) => {
        setMethod("PATCH");
        setModalStatus(false);
        setOpen(true);
        findPerson(value)
            .then((found) => {
                const { name, email, contact } = found[0];
                setPerson({ name, email, contact });
            })

    }

    useEffect(() => {
        setTimeout(() => {
            api.getAllData()
                .then((result) => setMyData(result));
            setLoading(false);

        }, 1000)
    }, [])
    async function findPerson(id) {
        let found = await api.getOne(id);
        return found;
    }

    async function handleSubmit(formData) {
        if (method === "POST") {
            api.createPerson(formData)
                .then((result) => {
                    if (result === "success") {
                        setEditText("Created Successfully");
                        toast.success(editText, {
                            position: toast.POSITION.TOP_RIGHT,
                            className: 'foo-bar'
                        });
                    } else {
                        setEditText("Error occured");
                        toast.error(editText, {
                            position: toast.POSITION.TOP_RIGHT,
                            className: 'foo-bar'
                        });
                    }
                })
        } else {
            api.editPerson(formData)
                .then((result) => {
                    if (result === "success") {
                        setEditText("Created Successfully");
                        toast.success(editText, {
                            position: toast.POSITION.TOP_RIGHT,
                            className: 'foo-bar'
                        });
                    } else {
                        setEditText("Error occured");
                        toast.error(editText, {
                            position: toast.POSITION.TOP_RIGHT,
                            className: 'foo-bar'
                        });
                    }
                })
        }
    }

    return (
        <div>
            {(loading) &&
                <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_LBnGq7OY4M.json" mode="bounce" background="transparent" speed="1" style={{ width: "500px", height: "500px", margin: "0 auto" }} loop autoplay></lottie-player>
            }
            {(!loading) &&
                <DataTable handleOpen={handleViewOpen} mydata={mydata} handleEditOpen={handleEditOpen} />
            }
            <BasicModal open={open} handleClose={handleClose} person={person} status={modalStatus} method={method} handleSubmit={handleSubmit} />
            <ToastComp />
        </div>
    )
}

export default HomePage;