import React, { useState } from 'react'
import { Box } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false)
    return (
        <Box component='nav'>
            <Box className='top_nav' sx={{ padding: '10px 50px', bgcolor: '#ddd', fontSize: '14px' }}>
                <ul>
                    <li>For the home</li>
                    <li>For business and public sector</li>
                    <li>For global business</li>
                    <li style={{ margin: '0 -15px' }}>|</li>
                    <li style={{ display: 'flex', alignItems: 'center', color: 'blue' }}>UK </li><KeyboardArrowRightIcon sx={{ fontSize: '20px', marginLeft: '-30px' }} />
                </ul>
            </Box>
            <Box className='bottom_nav' sx={{
                display: 'flex',
                alignItems: 'center', justifyContent: 'space-between', padding: '30px 50px', bgcolor: '#5514b4', color: '#fff', fontSize: '18px'
            }}>
                <ul>
                    <div className='logo'>BT</div>
                    <li onMouseEnter={() => setDropdown(true)}>Broadband</li>
                    <li onMouseEnter={() => setDropdown(true)}>TV</li>
                    <li onMouseEnter={() => setDropdown(true)}>Sport</li>
                    <li onMouseEnter={() => setDropdown(true)}>Mobile</li>
                    <li onMouseEnter={() => setDropdown(true)}>Gaming</li>
                    <li onMouseEnter={() => setDropdown(true)}>Discover BT Halo</li>
                </ul>
                <ul>
                    <li onMouseEnter={() => setDropdown(true)}>Help</li>
                    <li onMouseEnter={() => setDropdown(true)}>MyBT</li>
                    <li onMouseEnter={() => setDropdown(true)}>Email</li>
                </ul>
                {dropdown && <div className='dropdown' onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                    <div>
                        <ul>
                            <li><b>Broadband <KeyboardArrowRightIcon /></b></li>
                            <hr style={{ width: '100%', border: '1px solid #eee' }} />
                            <li>Broadband deals</li>
                            <li>Discover broadband</li>
                            <li>Upgrade broadband</li>
                            <li>Broadband accessories</li>
                        </ul>
                        <ul>
                            <li><b>Landline <KeyboardArrowRightIcon /></b></li>
                            <hr style={{ width: '100%', border: '1px solid #eee' }} />
                            <li>Landline deals</li>
                            <li>Digital Voice</li>
                        </ul>
                        <ul>
                            <li><b>&nbsp;</b></li>
                            <hr style={{ width: '100%', border: '1px solid #eee' }} />
                            <li>Manage landline</li>
                            <li>Calling features</li>
                            <li>Calling costs</li>
                            <li>Buy a home phone</li>
                        </ul>
                        <ul>
                            <li><b>Switching to BT and moving</b></li>
                            <hr style={{ width: '100%', border: '1px solid #eee' }} />
                            <li>Moving home</li>
                            <li>Switch to BT</li>
                        </ul>
                    </div>
                </div>}
            </Box>
        </Box>
    )
}
