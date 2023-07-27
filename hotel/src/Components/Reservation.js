import React, { useState, useEffect } from "react";
import "./Cssfiles/Reservation.css";
import Header from "./Header";

import TextField from "@mui/material/TextField";

import MenuItem from "@mui/material/MenuItem";
import Input from "@mui/base/Input";
import { styled } from "@mui/system";
import axios from "axios";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { createTheme } from "@mui/material/styles";
import Button from "react-bootstrap/Button";
import Appfr from "../Appfr";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Cookies from "js-cookie";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [roomType, setRoomType] = useState("");
  const [ng, setNg] = useState(0);
  const [ad, setAd] = useState("");
  const [df, setDd] = useState("");
  const [pickup, setPickup] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("NotPaid");
  const [splReq, setSplreq] = useState("");
  const [rev, setRev] = useState("");


  const nav = useNavigate();
  useEffect(() => {
    
    if(sessionStorage.getItem("isLoggedIn")){
      axios
        .get(`http://127.0.0.1:2020/api/v1/auth/profile1/get/${Cookies.get("email")}`)
        .then((response) => {
          setFname(response.data.name);
          setEmail(response.data.email);
          // console.log(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
      }
      else{
        const shouldNavigate = window.confirm("Please log in to continue. Navigate to the login page?");
        if (shouldNavigate) {
          nav('/login');
        }
        else
        {
          nav('/');

        }
      }
    }, []);

    useEffect(()=>{
      setAmount(convertedNumber*ng);
    },[ng,roomType])

    const getLastFourCharacters = (str) => {
      if (str.length >= 4) {
        return str.substring(str.length - 4);
      } else {
        return 1; // Return the whole string if it's less than four characters
      }
    };
    const lastFourCharacters = getLastFourCharacters(roomType);
    const convertedNumber = parseInt(lastFourCharacters);
    
    // console.log(convertedNumber)
    
    useEffect(() => {
      const fetchData = async () => {
        try
        {
          
          await axios
          .get("http://127.0.0.1:2020/api/v1/auth/showAllRooms")
          .then((response) => {
          
            // console.log(response.data)
          })
      }
      catch(error) {
        console.log(error);
      }
    };
    
    fetchData();
  }, []);
  
  // const handleSubmit = async (event) => {
    
    //     };
    
    const loadscript = (src) => {
      
      return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src;
        
        script.onload = () => {
          resolve(true);
        }
        
        script.onerror = () => {
          resolve(false);
        }
        document.body.appendChild(script);
        
      })
    }
    
    
    const handlePayment = async (am,e) => {
      e.preventDefault();
      
      if (!fname || !lname || !email || !roomType || !ng || !ad || !df) {
        alert("Please fill in all required fields before proceeding to payment.");
        return;
      }
      const res = await loadscript("https://checkout.razorpay.com/v1/checkout.js")
      
    if(!res)
    {
      alert("You are offline..Failed to load Razorpay")
      return
    }
    
    const options = {
      key:"rzp_test_V2vuy5GVn3WxlX",
      currency : "INR",
      amount:am*100,
      name : "Hotel Booking",
      description :"thanks for booking",
      // image : ""
      handler :  async function(response){
        // console.log(response)
        // alert(response.razorpay_payment_id)
        if(response.razorpay_payment_id)
        {
          const dataa = {
            name: fname,
            // lname : lname,
            email: email,
            roomType: roomType,
            adate: ad,
            ddate: df,
            numofRoom: ng,
            amount : amount,
            payment_id : response.razorpay_payment_id,
            payment_status:"paid"
          };
          try {
            const resu= await axios.post(
              "http://127.0.0.1:2020/api/v1/auth/addReserv",
              dataa
              );
              console.log(resu.data);
            } catch (error) {
              console.log("error", error);
            }
            
            alert("payment successfull");
          }
      },
      
      prefill : {
        // name : "Subiksha"
      }
    };
    
    const paymentObject = new  window.Razorpay(options)
    paymentObject.open();
    
  }
  
  const types = [
    {
      value: "Non AC Single - Rs.1500",
      label: "Non AC Single - Rs.1500",
    },
    {
      value: "Non AC Double - Rs.2500",
      label: "Non AC Double - Rs.2500",
    },
    {
      value: "AC Double - Rs.3000",
      label: "AC Double - Rs.3000",
    },
    {
      value: "AC Single - Rs.2000",
      label: "AC Single - Rs.2000",
    },
    {
      value: "Penthouse - Rs.4500",
      label: "Penthouse - Rs.4500",
    },
    {
      value: "Family Room- Rs.5500",
      label: "Family Room - Rs.5500",
    },
    {
      value: "Suite room - Rs.6000",
      label: "Suite room - Rs.6000",
    },
  ];
  
  
  
  
  return (
    
    <form onSubmit={(e) => {e.preventDefault();setAmount(convertedNumber);}}>
              
      <div className="wholed">
        <Header type="noBack" home="nohome" about='false' />
        <div className="secondhalf" style={{ color: "white" }}>
          <div className="head">
            <div style={{ fontSize: "30px" }}>BOOKING</div>
            <h4>Experience something new every moment</h4>
          </div>
          <div className="form">
            <div className="name">
              <label style={{ fontSize: "20px" }}>Name :</label>
              <TextField
              
              id="outlined-basic"
              label="FirstName"
              variant="outlined"
              InputProps={{
                style: {
                  color: "white",
                  },
                }}
                InputLabelProps={{
                  style: { color: "gray" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white", // Set the outline color to "blue" or any other valid CSS color value
                    },
                  },
                }}
                value={fname}
                // value="Heloo"
                onChange={(e) => setFname(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="LastName"
                variant="outlined"
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
                InputLabelProps={{
                  style: { color: "gray" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white", // Set the outline color to "blue" or any other valid CSS color value
                    },
                  },
                }}
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div className="email">
              <label style={{ fontSize: "20px" }}>Email :</label>
              <TextField
              
                style={{
                  marginLeft: "210px",
                  width: "500px",
                }}
                id="outlined-basic"
                label="Enter email"
                variant="outlined"
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
                InputLabelProps={{
                  style: { color: "gray" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white", // Set the outline color to "blue" or any other valid CSS color value
                    },
                  },
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <TextField id="outlined-basic" label="LastName" variant="outlined" /> */}
            </div>
            <div className="room-type">
              <label style={{ fontSize: "20px" }}>Room Type</label>
              <TextField
              required
                value={roomType}
                onChange={(e) => {setRoomType(e.target.value);}}
                id="outlined-select-currency"
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
                InputLabelProps={{
                  style: { color: "gray" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white", // Set the outline color to "blue" or any other valid CSS color value
                    },
                  },
                }}
                select
                label="Select Room Type"
                defaultValue="single"
                helperText="Please select your room type"
                style={{ marginLeft: "165px", width: "500px" }}
              >
                {types.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="guests">
              <label style={{ fontSize: "20px" }}>Number of rooms :</label>
              <TextField
              required
              value={ng<=0 ? 0 : ng}
              onChange={(e) => {setNg(e.target.value)}}
              // onChange={(e) => setAmount(convertedNumber*ng)}
              InputProps={{
                  style: {
                    color: "white",
                  },
                }}
                InputLabelProps={{
                  style: { color: "gray" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white", // Set the outline color to "blue" or any other valid CSS color value
                    },
                  },
                }}
                id="outlined-basic"
                label="Number of rooms"
                type="number"
                variant="outlined"
                style={{ marginLeft: "100px" }}
              />
            </div>
            <div className="guests">
              <label style={{ fontSize: "20px" }}>Amount :</label>
              <TextField
              required
                value={amount<=0 ? 0 : amount}
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
                InputLabelProps={{
                  style: { color: "gray" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white", // Set the outline color to "blue" or any other valid CSS color value
                    },
                  },
                }}
                id="outlined-basic"
                label="Amount"
                type="number"
                variant="outlined"
                style={{ marginLeft: "185px" }}
              />
            </div>
            <div className="date" style={{ marginLeft: "-100px" }}>
              <label style={{ fontSize: "20px" }}>
                Arrival Date and Time :
              </label>
              <input
              required
                type="date"
                style={{ padding: "20px", marginLeft: "-90px", opacity: "0.5" }}
                value={ad}
                onChange={(e) => setAd(e.target.value)}
              ></input>
              <input
              required
                type="date"
                style={{ padding: "20px", marginLeft: "-90px", opacity: "0.5" }}
                value={df}
                onChange={(e) => setDd(e.target.value)}
              ></input>
           
            </div>
            </div>
              <Button
                onClick={(e)=>handlePayment(amount,e)}
                className="button_to_pay"
                style={{
                  backgroundColor: "#ADD8E6",
                  color: "blue",
                  borderRadius: "50px",
                  width: "150px",
                  marginLeft: "900px",
                  marginTop: "100px",
                  marginBottom: "100px",
                }}
              >
                Proceed to pay
              </Button>

              {/* <Button
                onClick={handleSubmit}
                className="button"
                style={{
                  backgroundColor: "#ADD8E6",
                  color: "blue",
                  borderRadius: "50px",
                  width: "150px",
                  marginLeft: "900px",
                  marginTop: "100px",
                  marginBottom: "100px",
                }}
              >
                Submit
              </Button> */}
              {/* {console.log(df)} */}
          </div>
        </div>
    </form>
  );
};

export default Reservation;
