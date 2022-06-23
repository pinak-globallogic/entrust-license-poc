import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Tooltip from '@mui/material/Tooltip';





export default function Actions({licenseID}) {
    const deleteBtnClick = () => {
        if(window.confirm('Are you sure you want to delete this wallet?')){
            //ToDo
        }
    }

  return (
    <div className="col-md-4 col-12 d-lg-block">
    <ul className="list-group">
   
        <Link to={`/editLicense/${licenseID.name}`}>
        <Tooltip title="Edit">
        <Button variant="contained"><EditIcon sx={{ fontSize: 20 }}/></Button>
        </Tooltip>
        </Link>
       
        <Link to="/license" onClick={() => this.deleteBtnClick()}>
        <Tooltip title="Delete">
        <Button variant="outlined" tooltip="delete"><ClearIcon sx={{ fontSize: 20 }}/></Button>
        </Tooltip>
        </Link>
        
    </ul>
    </div>
  )
}
