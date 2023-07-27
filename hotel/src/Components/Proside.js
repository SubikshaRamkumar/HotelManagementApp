import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Cssfiles/Profile.css";
import { Paper, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Cookies from "js-cookie";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import {  useNavigate } from "react-router-dom";
const Proside = () => {
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [pin, setPin] = useState("");
    const [location, setLocation] = useState("");
    const [State, setState] = useState("");
    const [data, setData] = useState([]);
    const [update, setUpdate] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const navigate = useNavigate();
  
    useEffect(() => {


      const unSubscribe = onAuthStateChanged(getAuth(), (user) => {
        const response = "";
        axios
          .get(`http://127.0.0.1:2020/api/v1/auth/profile1/get/${Cookies.get("email")}`)
          .then((response) => {
            setData(response.data);
                 
        // setUname(response.data[0].name)
        // setEmail(response.data[0].email)
        // setLocation(response.data[0].location)
        // setPhone(response.data[0].phoneNumber)
        // setCity(response.data[0].city)
        // setState(response.data[0].state)
        // setPin(response.data[0].postalCode)
        // setCountry(response.data[0].country)
        console.log(response.data);
            // console.log(response.data[0]);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  
      return unSubscribe;
    }, []);
  
  
    const handleSave = async () => {
      const post = {
        id: data.id,
        name: data.name,
        email: data.email,
        city: city,
        password:data.password,
        phoneNumber: phone,
        role: data.role,
        location: location,
        postalCode: pin,
        state: State,
        country: country,
      };
      try {
        const response = await axios.put(
          `http://127.0.0.1:2020/api/v1/auth/updateGuest1/${data.id}`,
          post
        );
        console.log(response.data);
        // setUpdatedData(response.post);
        setUname(response.data.name)
        setEmail(response.data.email)
        setLocation(response.data.location)
        setPhone(response.data.phoneNumber)
        setPassword(response.data.password)
        setCity(response.data.city)
        setState(response.data.state)
        setPin(response.data.postalCode)
        setCountry(response.data.country)
        // console.log(response.data);
        setData(response.data);
        navigate("/profile");
      } catch (e) {
        setError(e.message);
      }
      // window.location.reload();
    };
  
    const handleClick = () => {
      setUpdate(!update);
    };
  return (
    <div
      style={{
        backgroundImage:
          'url("https://t4.ftcdn.net/jpg/02/94/66/11/240_F_294661109_lmICWxfTmzfQdLZjEmXpGNRzR5BV4k2g.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height:'100vh'
      }}
    >
      <Header type="noBack" home="nohome" about='false'  />
    
        <div className="lab" style={{ marginTop: "50px", position: "absolute" }}>
        <FormControlLabel
          style={{ marginLeft: "1000px" }}
          control={<Switch onClick={handleClick} />}
          label="Edit Profile"
        />
      </div>
      
          {update !== true ? (
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
                        {/* <label style={{marginLeft: "60px"}}>Name</label> */}
                        <TextField
                          id="outlined-basic"
                          label="Name"
                          value={data.name}
                        //   onChange={e=>setUname(e.target.value)}
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
                          value={data.phoneNumber}
                        //   onChange={(e) => setPhone(e.target.value)}
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
                          value={data.location}
                        //   onChange={(e) => setLocation(e.target.value)}
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
                          value={data.state}
                        //   onChange={(e) => setState(e.target.value)}
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
                          value={data.email}
                        //   onChange={(e) => setEmail(e.target.value)}
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
                          value={data.city}
                        //   onChange={(e) => setCity(e.target.value)}
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
                          value={data.postalCode}
                        //   onChange={(e) => setPin(e.target.value)}
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
                          value={data.country}
                        //   onChange={(e) => setCountry(e.target.value)}
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

                    <div
                      className="buttonpro1"
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        marginTop: "30px",
                      }}
                    >
                      {/* <Button
                      className="buttonpro"
                      variant="outlined"
                      style={{
                        backgroundColor: "#ADD8E6",
                        color: "#000055",
                        borderRadius: "10px",
                        fontSize: "medium",
                      }}
                      >
                      Edit Changes
                    </Button> */}
                    </div>
                  </div>
                </Paper>
              </Box>
            </div>
          ) : (
            <div>
              {" "}
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
                          {/* <label style={{marginLeft: "60px"}}>Name</label> */}
                          <TextField
                            id="outlined-basic"
                            label="Name"
                            value={data.name}
                            // value="hELLO"
                            // onChange={e=>setUname(e.target.value)}
                            variant="outlined"
                            // disabled
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
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
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
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
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
                            value={State}
                            onChange={(e) => setState(e.target.value)}
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
                            value={data.email}
                            // disabled
                            // onChange={e=>setEmail(e.target.value)}
                            InputProps={{
                              style: {
                                color:'lightblue',
                                width: "300px",
                                marginLeft: "20px",
                                
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
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
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
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
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
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
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

                      <div
                        className="buttonpro1"
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          marginTop: "30px",
                        }}
                      >
                        <Button
                          className="buttonpro"
                          variant="outlined"
                          style={{
                            backgroundColor: "#ADD8E6",
                            color: "#000055",
                            borderRadius: "10px",
                            fontSize: "medium",
                          }}
                          onClick={handleSave}
                        >
                          Save Changes
                        </Button>
                      </div>
                    </div>
                  </Paper>
                </Box>
              </div>
            </div>
          )}
        
    </div>
  )
}

export default Proside
