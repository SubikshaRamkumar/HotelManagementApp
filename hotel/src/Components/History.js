
import Header from './Header'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(BookingId,UserName, Email,NumberOfRoom, RoomType,CheckIn,CheckOut,Amount,PaymentStatus="Paid",paymentId) {
    return {BookingId,UserName, Email,NumberOfRoom, RoomType,CheckIn,CheckOut,Amount,PaymentStatus,paymentId };
  }

  
  
  const History = () => {
    const nav = useNavigate();
    const goToReservation = () => {
      nav('/reserve');
    };
  const card = (
    <React.Fragment>
      <CardContent style={{ backgroundColor: '#ADD8E6' }}>
        <Typography sx={{ color:'darkblue',fontSize: 20 ,maxWidth:'500px',minHeight:'200px',textAlign:'center',paddingTop:'30px'}} color="text.secondary" gutterBottom>
        No Bookings Yet...<br/><br/>"Your incredible experience awaits! Reserve your spot now to enjoy personalized service, stunning views, and ultimate comfort."
        </Typography>
        {/* <Typography variant="h5" component="div">
          be
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      <CardActions style={{ backgroundColor: '#ADD8E6'}}>
        <Button size="small" onClick={goToReservation} style={{color:'darkblue',fontWeight:'bolder',fontSize:20}}>Reserve</Button>
      </CardActions>
    </React.Fragment>
  );
    
    const [listData, setListData] = useState([]);
    const rows = listData.map((item) =>
      createData(
        item.id,
        item.name,
        item.email,
        item.numofRoom,
        item.roomType,
        item.adate,
        item.ddate,
        item.amount,
        item.payment_status,
        item.payment_id
      )
    );
    const len =  listData.length;
    useEffect(() => {
      if(sessionStorage.getItem("isLoggedIn")){

        const fetchData = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:2020/api/v1/auth/showCust/${Cookies.get("email")}`);
            setListData(response.data);
            // console.log(response.data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }
      else{
        const shouldNavigate = window.confirm("Please log in to continue. Do you want to navigate to the login page?");
        if (shouldNavigate) {
          nav('/login');
        }
        else
        {
          nav('/');

        }
      }
      }, []);

      const handleHome = () => {
        nav("/login");
      }
      
  return (
    <>
   {localStorage.getItem('token')===null ? <div style={{alignItems: "center", display: "flex", flexDirection: "column"}}><h1>Login to Continue</h1><div><Button variant="contained" onClick={handleHome}>Login</Button></div></div> : 
   
       <div
      style={{
        backgroundImage:
          'url("https://t4.ftcdn.net/jpg/02/94/66/11/240_F_294661109_lmICWxfTmzfQdLZjEmXpGNRzR5BV4k2g.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height:'100vh'
      }}
    >
      <Header type="noBack" home="nohome" about='false' />


      <div className="table"style={{display:'flex',justifyContent:'center',marginTop:'180px'}}>
        {len!==0 ? (

        <TableContainer component={Paper} style={{maxWidth:'1300px'}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Booking Id</StyledTableCell>
            <StyledTableCell align="right">UserName</StyledTableCell>
            <StyledTableCell align="right">UserMailId</StyledTableCell>
            <StyledTableCell align="right">Number Of Room</StyledTableCell>
            <StyledTableCell align="right">Room Type</StyledTableCell>
            <StyledTableCell align="right">CheckIn</StyledTableCell>
            <StyledTableCell align="right">CheckOut</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Payment Status</StyledTableCell>
            <StyledTableCell align="right">Payment Id</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.BookingId}>
              <StyledTableCell component="th" scope="row">
                {row.BookingId}
              </StyledTableCell>
          
              <StyledTableCell align="right">{row.UserName}</StyledTableCell>
              <StyledTableCell align="right">{row.Email}</StyledTableCell>
              <StyledTableCell align="right">{row.NumberOfRoom}</StyledTableCell>
              <StyledTableCell align="right">{row.RoomType}</StyledTableCell>
              <StyledTableCell align="right">{row.CheckIn}</StyledTableCell>
              <StyledTableCell align="right">{row.CheckOut}</StyledTableCell>
              <StyledTableCell align="right">{row.Amount}</StyledTableCell>
              <StyledTableCell align="right">{row.PaymentStatus}</StyledTableCell>
              <StyledTableCell align="right">{row.paymentId}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    ): (
      <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
    )}
      </div>
    </div>
    }
    </>
  )
}

export default History
