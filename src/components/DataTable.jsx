import React from 'react';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import { RemoveRedEye } from '@mui/icons-material';
import { ButtonGroup, IconButton } from '@mui/material';

function DataTable(props) {
    const columns = [
        {
            name: "id",
            label: "Id",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "name",
            label: "Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "email",
            label: "Email",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "contact",
            label: "Contact",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "actions",
            label: "actions",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta) => {
                    return (
                        <ButtonGroup>
                            <IconButton onClick={() => props.handleOpen(tableMeta.rowData[0])}>
                                <RemoveRedEye />
                            </IconButton>
                            <IconButton onClick={() => props.handleOpen(tableMeta.rowData[0])}>
                                <EditIcon />
                            </IconButton>
                        </ButtonGroup>
                    );
                }
            }

        },
    ];
    const options = {
        filterType: 'checkbox',
        onRowSelectionChange: (event, item) => {
            const me = item.map((set) => {
                return props.mydata[set.index].id;
            })
            console.log(me);
        }
    };
    return (
        <MUIDataTable
            title={"CRUD App"}
            data={props.mydata}
            columns={columns}
            options={options}

        />)
}

export default DataTable;