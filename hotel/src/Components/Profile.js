import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Cssfiles/Profile.css";
import { Paper, Box, Avatar, Button } from "@mui/material";
import { BsFillPersonFill, BsClockHistory } from "react-icons/bs";
import { FaAmazonPay } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Cookies from "js-cookie";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Navigate, useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { caseSuccess, caseFailure } from "./Reduxx/userSlice";


const Profile = (props) => {
  // const handleCaseSuccess = () => {
  //   // Dispatch 'caseSuccess' action with a payload
  //   props.dispatch(caseSuccess(props.email));
  // };
  // const handleCaseFailure = () => {
  //   // Dispatch 'caseFailure' action
  //   props.dispatch(caseFailure());
  // };

  const [data, setData] = useState([]);
  const nav = useNavigate();
  const handleShowProfile = () => {
    nav("/proside");
  };
  const handleShowHistory = () => {
    nav("/history");
  };
  useEffect(() => {
    
      
      axios
        .get(`http://127.0.0.1:2020/api/v1/auth/profile1/get/${Cookies.get("email")}`)
        .then((response) => {
          setData(response.data);
          // console.log(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });

   
  }, []);
  
  return (
    
    <div
      style={{
        backgroundImage:
          'url("https://t4.ftcdn.net/jpg/02/94/66/11/240_F_294661109_lmICWxfTmzfQdLZjEmXpGNRzR5BV4k2g.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Header type="noBack" home="nohome" about='false'  />

      <div className="profilecontent">
        <div className="listt">
          <Box
            className="box1"
            sx={{
              "& > :not(style)": {
                width: 500,
                height: 450,
                backgroundColor: "#00003cba",
              },
            }}
          >
            <Paper elevation={10} className="paperpp">
              <div className="ava">
                <Avatar
                  // alt={Cookies.get('name').charAt(0).toUpperCase()}
                  src="/static/images/avatar/1.jpg"
                  sx={{
                    width: 100,
                    height: 100,
                    marginTop: "40px",
                    backgroundColor: "#ADD8E6",
                    color: "#000055",
                  }}
                />
              </div>
              <div className="small_det">
              {/* <p>Case: {props.email}</p>
              <button onClick={handleCaseSuccess}>Set Case Success</button> */}

                {/* <div>{data.name}</div> */}
                {/* <h4 className="u_name">{data.name.toUpperCase()}</h4>  
                The error message "Cannot read properties of undefined (reading 'toUpperCase')" typically occurs when you try to access the method or property of a variable that is undefined. In this case, it seems to be happening inside the Profile component while trying to use the toUpperCase() method on a variable. To resolve the issue, you need to check where you are trying to use toUpperCase() and make sure that the variable you are calling it on is not undefined */}
                <h4 className="u_name">{data.name && <p>{data.name.toUpperCase()}</p>}</h4>
                {/* <div>Description about u in one line</div> */}
              </div>
              <div className="cont">
                <div className="i">
                  <BsFillPersonFill />
                  <div
                    style={{ marginLeft: "30px" }}
                    onClick={handleShowProfile}
                  >
                    Personal Information
                  </div>
                </div>
                <div
                  className="i"
                  //  onClick={handleview}
                >
                  <BsClockHistory />
                  <div
                    style={{ marginLeft: "30px" }}
                    onClick={handleShowHistory}
                  >
                    Booking History
                  </div>
                </div>
                {/* <div className="i">
                  <FaAmazonPay />
                  <div style={{ marginLeft: "30px" }}>Payment</div>
                </div>
                <div className="i">
                  <TbJewishStarFilled />
                  <div style={{ marginLeft: "30px" }}>Preferences</div>
                </div> */}
              </div>
            </Paper>
          </Box>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Profile;
// const mapStateToProps = (state) => ({
//   email: state.case.case, // Access the 'case' data from the 'case' slice in the Redux store
// });

// export default connect(mapStateToProps)(Profile);