import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Button, Menu } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { MenuItem } from '@mui/material';
import { useAuth } from '../database/auth';

const NavLink = styled(Link)`
  color: white;
`;

const NavBtn = styled(Button)`
    color: white
`;

export default function ProfileLink() {
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
            <NavBtn 
              id="profile-link"
              aria-controls={'profile-menu'}
              aria-haspopup="true"
              onClick={handleClick}
              variant="text">Profile</NavBtn>
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