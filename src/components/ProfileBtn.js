import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Button, IconButton, Menu } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { MenuItem } from '@mui/material';
import { useAuth } from '../database/auth';
import { AccountCircle } from '@mui/icons-material';

export default function ProfileBtn() {
    const [ anchorEl, setAnchorEl ] = useState(null);
    const open = Boolean(anchorEl);
    const { signOut } = useAuth();
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    function logOutNow() {
        handleClose();
        signOut();
    }

    return (
        <div>
            <IconButton 
              id="profile-link"
              aria-controls={'profile-menu'}
              aria-haspopup="true"
              onClick={handleClick}
              variant="text">
                  <AccountCircle />
              </IconButton>
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                  'arial-labelledby': 'basic-button'
              }}
            >
                <MenuItem component={ Link } to='/profile'>Account</MenuItem>
                <MenuItem onClick={logOutNow}>Sign Out</MenuItem>
            </Menu>
        </div>
    );
}