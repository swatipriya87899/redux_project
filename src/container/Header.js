import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AppBar } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <div style={{marginBottom:'80px'}}>
        <AppBar>
            <Toolbar className='header'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>FakeShop</Typography>
            </Toolbar>
        </AppBar>
    </div>
  ) 
}

export default Header