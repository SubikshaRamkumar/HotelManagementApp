import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "./Header";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./Reduxx/action.js";
import { caseSuccess } from "./Reduxx/userSlice.js";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const signInWithGoogle = async () => {
  //   const auth = getAuth();
  //   const provider = new GoogleAuthProvider();

  //   try {
  //     const result = await signInWithPopup(auth, provider);
  //     // nav('/',{showprof:true});
  //   } catch (e) {
  //     setError(e);
  //   }
  // };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:2020/api/v1/auth/profile1/get/${Cookies.get("email")}`)
      // axios
      //   .get("http://127.0.0.1:2020/showGuest/")
      .then((response) => {
        setData(response.data[0]);

        // console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      Cookies.set("email", email, { expires: 1 });

      const response = await axios.post(
        "http://127.0.0.1:2020/api/v1/auth/authenticate",
        {
          email,
          password,
        }
      );
      dispatch(
        caseSuccess({
          email: email,
        })
      );

      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      sessionStorage.setItem("isLoggedIn", true);

      nav("/");
    } catch (e) {
      if (e.message === "Firebase: Error (auth/wrong-password).") {
        setError("Wrong Password. Please Try again");
      }
      if (e.message === "Firebase: Error (auth/user-not-found).") {
        setError("Wrong Email. Please Try Again");
      }
      if (e.message === "Firebase: Error (auth/invalid-email).") {
        setError("Wrong Email. Please Try Again");
      }

      // else{
      //   setError(e.message);
      // }
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#7795AA", height: "790px" }}>
        {/* {error && <p>{error}</p> */}

        <Header type="noBack" home="nohome" about="false" />
        <div
          className="img"
          style={{
            minHeight: "70vh",
            backgroundPosition: "center",
            background:
              'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://t4.ftcdn.net/jpg/02/94/66/11/240_F_294661109_lmICWxfTmzfQdLZjEmXpGNRzR5BV4k2g.jpg")',
            borderRadius: "0 200px 0 200px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginLeft: "50px",
            marginRight: "50px",
            boxShadow: "40px 40px 200px #00003c72",
          }}
        >
          <div className="container mt-5">
            <section className="d-flex justify-content-between">
              <div
                className="left_data mt-3 p-3"
                style={{ width: "100%", marginLeft: "450px" }}
              >
                <h3
                  className="mb-5 text-center"
                  style={{ color: "lightblue", fontSize: "xxx-large" }}
                >
                  Sign In
                </h3>
                {error && (
                  <p style={{ color: "red", textAlign: "center" }}>{error}</p>
                )}
                <Form>
                  <Form.Group
                    className="mb-5"
                    controlId="formBasicEmail"
                    style={{ width: "430px" }}
                  >
                    <Form.Control
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    className="col-lg-6"
                    style={{
                      backgroundColor: "#000055",
                      borderRadius: "50px",
                      width: "150px",
                      marginLeft: "130px",
                    }}
                    onClick={handleLogin}
                  >
                    Submit
                  </Button>
                </Form>
                {/* <p className='mt-3' style={{ marginLeft: '140px' }}>
                  <a href='/signup'>Forgot password</a>
                </p> */}
              </div>
              <div>
                {/* <Button
                  onClick={signInWithGoogle}
                  style={{
                    fontSize: '16px',
                    padding: '10px 20px',
                    borderColor: '#dc3545',
                    color: '#dc3545',
                    cursor: 'pointer',
                  }}
                
                  variant='outline-danger'
                >
                  Sign in with Google
                </Button> */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
// // // import React from 'react'

// // // const Login = () => {
// // //   return (
// // //     <div>
// // //       login
// // //     </div>
// // //   )
// // // }

// // // export default Login

// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Sign_img from './Sign_img';
// import { Link, useNavigate } from 'react-router-dom';
// import Header from './Header';
// import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
// import { Navigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// // import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// const Login = () => {

//     const nav = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setpassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     // const [inpval, setinpval] = useState({
//     //     //thss and name attribute should be same
//     //     email: "",

//     //     password: ""
//     // })

//     // const [data, setData] = useState([]);
//     // const getData = (e) => {
//     //     // console.log(e.target.value);
//     //     const { value, name } = e.target;
//     //     // console.log(value,name)
//     //     // console.log(inpval)

//     //     setinpval(() => {
//     //         return {
//     //             ...inpval,
//     //             [name]: value
//     //         }
//     //     })
//     // }

//     const signInWithGoogle = async () => {
//         const auth = getAuth();
//         const provider = new GoogleAuthProvider();

//         try {
//           const result = await signInWithPopup(auth, provider);
//         //   const user = result.user;
//         //   Cookies.set('Id', user.email);
//           navigate('/');
//         } catch (e) {
//           setError(e.message);
//         }
//       };
//     const handlelogin = async() => {
//         try{
//             await signInWithEmailAndPassword(getAuth(), email, password);
//             console.log(email, password);
//             Cookies.set('email', email);
//             navigate('/');
//         }
//         catch(e){
//             setError(e.message);
//         }
//     }

//     const addData = (e) => {
//         e.preventDefault();

//         const getUserArr = localStorage.getItem("userhotel");
//         // console.log(getUserArr)

//         // const { email, password } = inpval; //obj destructuring done

//         if (email === "") {
//             alert("email is req")
//         } else if (!email.includes("@")) {
//             alert("please enter valid email address")
//         } else if (password === "") {
//             alert("password is req")

//         }
//         else if (password.length < 8) {
//             alert("password length should be greater thaan 8")
//         }
//         else {
//             if (getUserArr && getUserArr.length) {
//                 const userdata = JSON.parse(getUserArr);
//                 console.log(userdata)
//                 const userlogin = userdata.filter((ele, k) => {
//                     return ele.email === email && ele.password === password
//                 })
//                 // console.log(userlogin)
//                 if (userlogin.length === 0) {
//                     alert("Invalid details")
//                 }
//                 else {

//                     nav('/')
//                     // alert("user login success");
//                 }
//             }
//         }

//     }

//     return (
//         <>
//             <div style={{ backgroundColor: '#7795AA', height: '790px' }}>
//               {error && <p>{error}</p>}
//                 <Header type='noBack' home='nohome' />
//                 <div className='img' style={{
//                     minHeight: '70vh',
//                     backgroundPosition:'center',
//                     background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://t4.ftcdn.net/jpg/02/94/66/11/240_F_294661109_lmICWxfTmzfQdLZjEmXpGNRzR5BV4k2g.jpg")',
//                     borderRadius: '0 200px 0 200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginLeft: '50px', marginRight: '50px',boxShadow:'40px 40px 200px #00003c72 '
//                 }}>
//                     <div className="container mt-5"  >
//                         <section className='d-flex justify-content-between'>
//                             <div className="left_data mt-3 p-3" style={{ width: "100%", marginLeft: '450px' }}>
//                                 <h3 className="mb-5 text-center " style={{ color: 'lightblue', fontSize: 'xxx-large' }}>Sign In</h3>
//                                 <Form>

//                                     <Form.Group className="mb-5 " controlId="formBasicEmail" style={{ width: '430px' }}>

//                                         <Form.Control type="email" name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />

//                                     </Form.Group>

//                                     <Form.Group className="mb-5" controlId="formBasicPassword">

//                                         <Form.Control type="password" name='password' value={password} onChange={e => setpassword(e.target.value)} placeholder="Password" />
//                                     </Form.Group>

//                                     <Button variant="primary" className="col-lg-6" style={{ backgroundColor: '#000055', borderRadius: '50px', width: '150px', marginLeft: '130px' }} onClick={handlelogin}>
//                                         Submit
//                                     </Button>

//                                 </Form>
//                                 <p className="mt-3" style={{ marginLeft: '140px' }}><a href='/signup'>Forgot password</a></p>
//                             </div>
//                             {/* <Sign_img /> */}
//                             <Button onClick={signInWithGoogle}>Sign in with google</Button>
//                         </section>
//                     </div>
//                 </div>
//             </div>
//             {/* </div>
// </div> */}
//         </>
//     )
// }

// export default Login

// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Sign_img from './Sign_img';
// import { Link, useNavigate } from 'react-router-dom';
// import Header from './Header';
// import { loginUser } from '../actions/authActions';

// const Login = ({ loginUser }) => {
//   const nav = useNavigate();

//   const [inpval, setinpval] = useState({
//     email: "",
//     password: ""
//   });

//   const getData = (e) => {
//     const { value, name } = e.target;
//     setinpval((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const addData = (e) => {
//     e.preventDefault();
//     const { email, password } = inpval;

//     if (email === "") {
//       alert("email is required");
//     } else if (!email.includes("@")) {
//       alert("please enter a valid email address");
//     } else if (password === "") {
//       alert("password is required");
//     } else if (password.length < 8) {
//       alert("password length should be greater than 8");
//     } else {
//       // Dispatch the loginUser action
//       loginUser({ email, password }, nav);
//     }
//   };

//   return (
//     <>
//       <div style={{ backgroundColor: '#00003c72', height: '790px' }}>
//         <Header type='noBack' home='nohome' />
//         <div className='img' style={{
//           minHeight: '70vh',
//           background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vKb2w5HlMTcx0HoOnTw2TORZeNheyWHGrBeFKTpDlw&s")',
//           borderRadius: '0 200px 0 200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginLeft: '50px', marginRight: '50px'
//         }}>
//           <div className="container mt-5"  >
//             <section className='d-flex justify-content-between'>
//               <div className="left_data mt-3 p-3" style={{ width: "100%", marginLeft: '450px' }}>
//                 <h3 className="mb-5 text-center " style={{ color: '#000055', fontSize: 'xxx-large' }}>Sign In</h3>
//                 <Form>
//                   <Form.Group className="mb-5 " controlId="formBasicEmail" style={{ width: '430px' }}>
//                     <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
//                   </Form.Group>
//                   <Form.Group className="mb-5" controlId="formBasicPassword">
//                     <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
//                   </Form.Group>
//                   <Button variant="primary" className="col-lg-6" style={{ backgroundColor: '#000055', borderRadius: '50px', width: '150px', marginLeft: '130px' }} onClick={addData}>
//                     Submit
//                   </Button>
//                 </Form>
//                 <p className="mt-3" style={{ marginLeft: '140px' }}><a href='/signup'>Forgot password</a></p>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default connect(null, { loginUser })(Login);
