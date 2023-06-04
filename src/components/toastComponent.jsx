import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function ToastComp(props) {
    const notify = () => {
        toast.success(props.text, {
            position: toast.POSITION.TOP_RIGHT,
            className: 'foo-bar'
        });
    };

    return (
        <>
            <button onClick={notify}>Notify</button>
            <ToastContainer />
        </>
    );
}

export default ToastComp;