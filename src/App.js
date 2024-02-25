import React from 'react';
import './App.css';
import { Box, Typography } from '@mui/material';
import Navbar from './Level0/Navbar';
import MyCard from './Level0/MyCard';
import PieChart from './Level1/PieChart';
import ScatterPlot from './Level1/ScatterPlot';
import BarGraph from './Level1/BarGraaph';
import LineGraph from './Level1/LineGraph';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Home from './Level2/Home';
import Login from './Level2/Login';



export default function App() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    values: [12, 19, 3, 5, 2, 3] // Example data
  };
  return (
    <Box component='main'>
      <Navbar />
      
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '20px', bgcolor: '#2a2a2a', color: '#fff' }}>
        <Typography sx={{ borderBottom: '1.5px solid transparent', cursor: 'pointer', ':hover': { borderBottom: '1.5px solid #fff' } }}>Not a BT customer yet?</Typography>
      </Box>

      <Box className='container'>
        <Box className='content' sx={{ width: '50%' }}>
          <Typography>Welcome to BT</Typography>
          <Typography variant='h2' sx={{ marginTop: '10px', marginBottom: '40px' }}>You can save on your broadband package when you upgrade</Typography>
          <Typography variant='h6'>As an existing BT customer you could get exclusive offers on our fastest broadband ever and TV. Or you can pay less for your current package.</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
          <button>View your personalised offer</button>
          <button>All about our broadband</button>
        </Box>
        <MyCard />
         
      </Box>
      <h1>Pie Chart Example</h1>
      <PieChart data={data} />
      <ScatterPlot></ScatterPlot>
      <BarGraph></BarGraph>
      <LineGraph></LineGraph>
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={withAuthenticator(<Home />)} />
      </Routes>
    </Router>
    </Box>
    
  );
}
