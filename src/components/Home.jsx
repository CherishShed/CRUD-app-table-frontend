import React, { useEffect, useState } from 'react';
import ToastComp from './toastComponent';
import api from '../controllers/data';
import BasicModal from './person';
import DataTable from './DataTable';

function HomePage() {
    const [mydata, setMyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [person, setPerson] = useState({ name: "", email: "", contact: "" });
    const handleOpen = (value) => {
        setOpen(true);
        findPerson(value)
            .then((found) => {
                const { name, email, contact } = found[0];
                setPerson({ name, email, contact });
            })

    }
    const handleClose = () => {
        setOpen(false)
        setPerson({ name: "", email: "", contact: "" });
    };
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


    return (
        <div>
            {(loading) &&
                <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_LBnGq7OY4M.json" mode="bounce" background="transparent" speed="1" style={{ width: "500px", height: "500px", margin: "0 auto" }} loop autoplay></lottie-player>
            }
            {(!loading) &&
                <DataTable handleOpen={handleOpen} mydata={mydata} />
            }
            <BasicModal open={open} handleClose={handleClose} person={person} />
        </div>
    )
}

export default HomePage;