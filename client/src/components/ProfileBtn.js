import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Menu } from '@mui/material';
import { MenuItem } from '@mui/material';
import { useAuth } from '../database/auth';
import { AccountCircle } from '@mui/icons-material';
import { ShrinkDiv } from './FlexDiv';

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
        <ShrinkDiv>
            <IconButton 
              id="profile-btn"
              aria-controls={'profile-menu'}
              aria-haspopup="true"
              onClick={handleClick}
              variant="text"
              color="secondary">
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
        </ShrinkDiv>
    );
}