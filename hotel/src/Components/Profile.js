import React from "react";
import Header from "./Header";
import "./Cssfiles/Profile.css";
import { Paper, Box, Avatar, Button } from "@mui/material";
import { BsFillPersonFill, BsClockHistory } from "react-icons/bs";
import { FaAmazonPay } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";
import TextField from "@mui/material/TextField";
const Profile = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://t4.ftcdn.net/jpg/02/94/66/11/240_F_294661109_lmICWxfTmzfQdLZjEmXpGNRzR5BV4k2g.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header type="noBack" home="nohome" />
      <div className="profilecontent">
        <div className="listt">
          <Box
            className="box1"
            sx={{
              "& > :not(style)": {
                width: 300,
                height: 450,
                backgroundColor: "#00003cba",
              },
            }}
          >
            <Paper elevation={3} className="paperpp">
              <div className="ava">
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 100, height: 100, marginTop: "40px",backgroundColor:'#ADD8E6',color: '#000055'}}
                />
              </div>
              <div className="small_det">
                <h4 className="u_name">Username</h4>
                <div>Description about u in one line</div>
              </div>
              <div className="cont">
                <div className="i">
                  <BsFillPersonFill />
                  <div style={{ marginLeft: "30px" }}>Personal Information</div>
                </div>
                <div className="i">
                  <BsClockHistory />
                  <div style={{ marginLeft: "30px" }}>Booking History</div>
                </div>
                <div className="i">
                  <FaAmazonPay />
                  <div style={{ marginLeft: "30px" }}>Payment</div>
                </div>
                <div className="i">
                  <TbJewishStarFilled />
                  <div style={{ marginLeft: "30px" }}>Preferences</div>
                </div>
              </div>
            </Paper>
          </Box>
        </div>
        <div className="dett">
          <Box
            className="box2"
            sx={{
              "& > :not(style)": {
                width: 800,
                height: 525,
                backgroundColor: "#00003cba",
              },
            }}
          >
            <Paper elevation={3} className="paperpp2">
              <div className="wholeright">
                <div className="headprofile">Personal Information</div>
                <div className="contentpro">
                  <div className="stcol">
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      InputProps={{
                        style: {
                          width: "300px",
                          marginLeft: "60px",
                          color: "#ADD8E6",
                          marginBottom: "20px",
                        },
                      }}
                      sx={{
                        "& .MuiInputLabel-root": {
                          marginLeft: "60px", // Adjust the marginLeft value for the label
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#00003c72", // Set the outline color to "blue" or any other valid CSS color value
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "#6f7475d5" },
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Phone Number"
                      variant="outlined"
                      InputProps={{
                        style: {
                          width: "300px",
                          marginLeft: "60px",
                          color: "#ADD8E6",
                          marginBottom: "20px",
                        },
                      }}
                      sx={{
                        "& .MuiInputLabel-root": {
                          marginLeft: "60px", // Adjust the marginLeft value for the label
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#00003c72", // Set the outline color to "blue" or any other valid CSS color value
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "#6f7475d5" },
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Street Address"
                      variant="outlined"
                      InputProps={{
                        style: {
                          width: "300px",
                          marginLeft: "60px",
                          color: "#ADD8E6",
                          marginBottom: "20px",
                        },
                      }}
                      sx={{
                        "& .MuiInputLabel-root": {
                          marginLeft: "60px", // Adjust the marginLeft value for the label
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#00003c72", // Set the outline color to "blue" or any other valid CSS color value
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "#6f7475d5" },
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="State/Province/Region"
                      variant="outlined"
                      InputProps={{
                        style: {
                          width: "300px",
                          marginLeft: "60px",
                          color: "#ADD8E6",
                          marginBottom: "20px",
                        },
                      }}
                      sx={{
                        "& .MuiInputLabel-root": {
                          marginLeft: "60px", // Adjust the marginLeft value for the label
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#00003c72", // Set the outline color to "blue" or any other valid CSS color value
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "#6f7475d5" },
                      }}
                    />
                  </div>
                  <div className="ndcol">
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      InputProps={{
                        style: {
                          width: "300px",
                          marginLeft: "20px",
                          color: "#ADD8E6",
                          marginBottom: "20px",
                        },
                      }}
                      sx={{
                        "& .MuiInputLabel-root": {
                          marginLeft: "20px", // Adjust the marginLeft value for the label
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#00003c72", // Set the outline color to "blue" or any other valid CSS color value
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "#6f7475d5" },
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="city"
                      variant="outlined"
                      InputProps={{
                        style: {
                          width: "300px",
                          marginLeft: "20px",
                          color: "#ADD8E6",
                          marginBottom: "20px",
                        },
                      }}
                      sx={{
                        "& .MuiInputLabel-root": {
                          marginLeft: "20px", // Adjust the marginLeft value for the label
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#00003c72", // Set the outline color to "blue" or any other valid CSS color value
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "#6f7475d5" },
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="PostalCode"
                      variant="outlined"
                      InputProps={{
                        style: {
                          width: "300px",
                          marginLeft: "20px",
                          color: "#ADD8E6",
                          marginBottom: "20px",
                        },
                      }}
                      sx={{
                        "& .MuiInputLabel-root": {
                          marginLeft: "20px", // Adjust the marginLeft value for the label
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#00003c72", // Set the outline color to "blue" or any other valid CSS color value
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "#6f7475d5" },
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Country"
                      variant="outlined"
                      InputProps={{
                        style: {
                          width: "300px",
                          marginLeft: "20px",
                          color: "#ADD8E6",
                          marginBottom: "20px",
                        }, //for the box
                      }}
                      sx={{
                        "& .MuiInputLabel-root": {
                          marginLeft: "20px", // Adjust the marginLeft value for the label
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#00003c72", // Set the outline color to "blue" or any other valid CSS color value
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "#6f7475d5" },
                      }}
                    />
                  </div>
                </div>

                <div className="buttonpro1" style={{justifyContent:'center',display:'flex',marginTop:'30px'}}>
                <Button className="buttonpro"variant="outlined" style={{backgroundColor:"#ADD8E6",color:'#000055',borderRadius:'10px',fontSize:'medium'}}>Save Changes</Button>
                </div>
              </div>
            </Paper>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Profile;
