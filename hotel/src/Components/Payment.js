import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Payment = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCVC] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formatExpiryDate = (input) => {
    // Allow only numbers and /
    const cleanedInput = input.replace(/[^0-9/]/g, '');
  
    // Separate month and year
    let month = cleanedInput.slice(0, 2);
    let year = cleanedInput.slice(2, 6);
  
    // Restrict month to 2 characters
    if (month.length > 2) {
      month = month.slice(0, 2);
    }
  
    // Restrict year to 4 characters
    if (year.length > 2) {
      year = year.slice(0, 2);
    }
  
    // Combine the formatted month and year with a single /
    return `${month}${year ? '/' : ''}${year}`;
  };

  const handleExpiryDateChange = (e) => {
    const formattedInput = formatExpiryDate(e.target.value);
    setExpiryDate(formattedInput);
  };

  return (
    <div className="full" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <div style={{ backgroundColor: 'gainsboro' }}>
        <Button onClick={handleClickOpen}>Pay Using Card</Button>
        <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <Box component="form" sx={{ '& .MuiTextField-root': { width: '55ch', m: '1' } }} noValidate autoComplete="off">
                <TextField required id="outlined-required" label="Card Holder's Name" />
                <FormControl sx={{ m: '1', width: '25ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment>
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="text"
                      placeholder="MM/YYYY"
                      pattern="\d\d/\d{0,4}"
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                      style={{
                        width: '120px',
                        padding: '8px',
                        fontSize: '16px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                      }}
                    />
                  </div>
                </div>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">CVC</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={cvc}
                    onChange={(e) => setCVC(e.target.value)}
                    inputProps={{ maxLength: 3 }} // Set maximum length to 3 characters
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="CVC"
                  />
                </FormControl>
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Proceed</Button>
          </DialogActions>
        </Dialog>
        <Button  onClick={handleClickOpen2}>Pay Using QR Code</Button>
        <Dialog open={open2} TransitionComponent={Transition} keepMounted onClose={handleClose2} aria-describedby="alert-dialog-slide-description">
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <Box component="form" sx={{ '& .MuiTextField-root': { width: '55ch', m: '1' } }} noValidate autoComplete="off">
                <div>
<img src='./GoogleQR.png'/>

                </div>

                </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Proceed</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Payment;
