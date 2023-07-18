import React, { useState } from 'react'
import './Cssfiles/Reservation.css'
import Header from './Header'

import TextField from '@mui/material/TextField';


import MenuItem from '@mui/material/MenuItem';
import Input from '@mui/base/Input';
import { styled } from '@mui/system';
import axios from 'axios';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from 'react-bootstrap/Button';
import Appfr from '../Appfr'
const Reservation = () => {

  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [email,setEmail]=useState("");
  const [roomType,setRoomType]=useState("");
  const [ng,setNg]=useState("");
  const [ad,setAd]=useState("");
  const [df,setDd]=useState("");
  const [pickup,setPickup]=useState("");
  const [splReq,setSplreq]=useState("");
  const [rev,setRev]=useState("");

  const handleSubmit = async(event) => {
    const data = {
      name : fname,
      // lname : lname,
      email: email,
      roomType : roomType,
      adate: ad,
      ddate: df,
      numofRoom: ng,
    }
    event.preventDefault();
    try{
      const response = await axios.post("http://127.0.0.1:2020/addCust", data);
      console.log(response.data);
    }
    catch(error) {
      console.log("error", error);
    }
  }
  
  const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
      <Input
        slots={{ input: StyledInputElement, textarea: StyledTextareaElement }}
        {...props}
        ref={ref}
      />
    );
  });
  const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  };

  const StyledInputElement = styled('input')(
    ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
  );

  const StyledTextareaElement = styled(TextareaAutosize)(
    ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
  );
  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: 'white',
          },
          input: {
            color: 'white',
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: 'white',
          },
        },
      },
    },
  });
  const types = [
    {
      value: 'Non AC Single',
      label: 'Non AC Single',
    },
    {
      value: 'Non AC Double',
      label: 'Non AC Double',
    },
    {
      value: 'AC Double',
      label: 'AC Double',
    },
    {
      value: 'AC Single',
      label: 'AC Single',
    },
    {
      value: 'Penthouse',
      label: 'Penthouse',
    },
    {
      value: 'Family Room',
      label: 'Family Room',
    },
    {
      value: 'Suite room',
      label: 'Suite room',
    },
  ];
  return (
    <form onSubmit={e=>e.preventDefault()}>
    <div className='wholed'>
      <Header type='noBack' home='nohome' />
      <div className="secondhalf" style={{color:'white'}}>
        <div className="head">
          <div style={{fontSize:'30px'}}>BOOKING</div>
          <h4>Experience something new every moment</h4>
        </div>
        <div className="form">
          <div className="name">
            <label style={{ fontSize: '20px' }}>Name :</label>
            <TextField id="outlined-basic" label="FirstName" variant="outlined"
            
              InputProps={{
                style: {
                  color: 'white',
                },
              }}
              InputLabelProps={{
                style: { color: 'white' },

              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Set the outline color to "blue" or any other valid CSS color value
                  },
                },
              }}
value={fname}
onChange={e=>setFname(e.target.value)}
            />
            <TextField id="outlined-basic" label="LastName" variant="outlined"
              InputProps={{
                style: {
                  color: 'white',
                },
              }}
              InputLabelProps={{
                style: { color: 'white' },

              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Set the outline color to "blue" or any other valid CSS color value
                  },
                },
              }}
              value={lname}
onChange={e=>setLname(e.target.value)}
            />
          </div>
          <div className="email">
            <label style={{ fontSize: '20px' }}>Email :</label>
            <TextField style={{
              marginLeft: '210px', width: '500px'

            }} id="outlined-basic" label="Enter email" variant="outlined"

              InputProps={{
                style: {
                  color: 'white',
                },
              }}
              InputLabelProps={{
                style: { color: 'white' },

              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Set the outline color to "blue" or any other valid CSS color value
                  },
                },
              }} 
              value={email} onChange={e=>setEmail(e.target.value)}/>
            {/* <TextField id="outlined-basic" label="LastName" variant="outlined" /> */}
          </div>
          <div className="room-type">
            <label style={{ fontSize: '20px' }}>Room Type</label>
            <TextField
            value={roomType} onChange={e=>setRoomType(e.target.value)}
              id="outlined-select-currency"
              InputProps={{
                style: {
                  color: 'white',
                },
              }}
              InputLabelProps={{
                style: { color: 'white' },

              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Set the outline color to "blue" or any other valid CSS color value
                  },
                },
              }}
              select
              label="Select Room Type"
              defaultValue="single"
              helperText="Please select your room type"
              style={{ marginLeft: '165px', width: '500px' }}
            >
              {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="guests">
            <label style={{ fontSize: '20px' }}>Number of guest :</label>
            <TextField 
            value={ng} onChange={e=>setNg(e.target.value)}
            InputProps={{
              style: {
                color: 'white',
              },
            }}
              InputLabelProps={{
                style: { color: 'white' },

              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Set the outline color to "blue" or any other valid CSS color value
                  },
                },
              }} id="outlined-basic" label="Number of guest" type='number' variant="outlined" style={{ marginLeft: '100px' }} />
          </div>
          <div className="date" style={{ marginLeft: '-100px' }}>
            <label style={{ fontSize: '20px' }}>Arrival Date and Time :</label>
            <input type='date' style={{padding:'20px',marginLeft:'-90px',opacity:'0.5'}} value={ad} onChange={e=>setAd(e.target.value)}></input>
            <input type='date' style={{padding:'20px',marginLeft:'-90px',opacity:'0.5'}} value={df} onChange={e=>setDd(e.target.value)}></input>
            {/* <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DemoContainer components={['DateRangePicker']}>
                <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }}
               
                  InputProps={{
                    sx: {
                      color: 'white', // Change the text color of the input
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: 'white', // Change the text color of the input label
                    },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white',
                      },
                    },
                  }} />
              </DemoContainer>
            </LocalizationProvider>
            </ThemeProvider> */}

          </div>
          <div className="pickup">
            <label style={{ fontSize: '20px' }}>Free Pickup :</label>
            <TextField 
            value={pickup} onChange={e=>setPickup(e.target.value)}
            InputProps={{
              style: {
                color: 'white',
              },
            }}
              InputLabelProps={{
                style: { color: 'white' },

              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Set the outline color to "blue" or any other valid CSS color value
                  },
                },
              }} id="outlined-basic" label="PickUp" variant="outlined" style={{ marginRight: '440px' }} />
            {/* <TextField id="outlined-basic" label="LastName" variant="outlined" /> */}
          </div>
          <div className="det">
            <label style={{ fontSize: '20px' }}>Location :</label>
            <CustomInput style={{ marginRight: '344px' ,opacity:'0.5'}} aria-label="Demo input" multiline placeholder="Type address..." />
          </div>
          <div>
            {console.log(fname)}
            <label style={{ fontSize: '20px' , marginTop:'40px' }}>Willing to provide us review of our website :</label>
<Appfr/>
            <Button onClick={handleSubmit} className="button" style={{ backgroundColor: '#ADD8E6',color:'blue', borderRadius: '50px', width: '150px', marginLeft: '900px', marginTop: '100px', marginBottom: '100px'}}> 
            Submit
            </Button>
            {console.log(df)}
            
           </div>
        </div>
      </div>

    </div>
    </form>
  )
}

export default Reservation
