// import React from 'react'

// const SignUp = () => {
//   return (
//     <div>
//       signup
//     </div>
//   )
// }

// export default SignUp

// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Sign_img from './Sign_img';
// import {NavLink} from 'react-router-dom';
// import Header from './Header';


// const Signup = () => {

//     const [inpval, setinpval] = useState({
//         name: "",   //thss and name attribute should be same
//         email: "",
//         date: "",
//         password: ""
//     })

//     const[data,setData]=useState([]);
//     const getData = (e) => {
//         // console.log(e.target.value);
//         const { value, name } = e.target;
//         // console.log(value,name)
//         // console.log(inpval)

//         setinpval(() => {
//             return {
//                 ...inpval,
//                 [name]: value
//             }
//         })
//     }
//     const addData = (e) => {
//         e.preventDefault();

//         // console.log(inpval)
//         //validation
//         const { name, email, date, password } = inpval; //obj destructuring done

//         if (name == "") {
//             alert("name field is req")
//         } else if (email === "") {
//             alert("email is req")
//         } else if (!email.includes("@")) {
//             alert("please enter valid email address")
//         } else if (date === "") {
//             alert("date is req")
//         } else if (password === "") {
//             alert("password is req")

//         }
//         else if (password.length < 8) {
//             alert("password length should be greater thaan 8")
//         }
//         else {
//             // console.log("data added")
//             localStorage.setItem("userhotel",JSON.stringify([...data,inpval])) //key......if no val in local storage,empty default taken.. so ...data
//         }


//     }

//     return (

//         <div style={{backgroundColor: '#00003c72', height: '790px' }}>
            
//             <Header type='noBack' home='nohome'/>
//             <div className='img' style={{
//                     minHeight: '70vh',
            
//                     background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vKb2w5HlMTcx0HoOnTw2TORZeNheyWHGrBeFKTpDlw&s")',
//                     borderRadius: '0 200px 0 200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginLeft: '50px', marginRight: '50px'
//                 }}>
//             <div className="container mt-3">
//                 <section className='d-flex justify-content-between'>
//                     <div className="left_data mt-3 p-3" style={{ width: "100%", marginLeft: '450px' }}>
//                         <h3 className="text-center"style={{ color: '#000055', fontSize: 'xxx-large' }}>Sign Up</h3>
//                         <Form>
//                             <Form.Group className="mb-5" controlId="formBasicEmail" style={{ width: '430px' }}>

//                                 <Form.Control type="text" name='name' onChange={getData} placeholder="Enter your name" />

//                             </Form.Group>

//                             <Form.Group className="mb-5" controlId="formBasicEmail">

//                                 <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />

//                             </Form.Group>

//                             <Form.Group className="mb-5" controlId="formBasicEmail">

//                                 <Form.Control type="date" name='date' onChange={getData} />

//                             </Form.Group>

//                             <Form.Group className="mb-5" controlId="formBasicPassword">

//                                 <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
//                             </Form.Group>

//                             <Button variant="primary" className="col-lg-6" style={{ backgroundColor: '#000055', borderRadius: '50px', width: '150px', marginLeft: '130px' }} onClick={addData}>
//                                         Submit
//                                     </Button>
//                         </Form>
//                         <p className="mt-3" style={{color:"#000055",marginLeft:'70px'}}>Already have an account <span ><NavLink to="/login" style={{color:'#000055'}}>Sign in</NavLink></span></p>
//                     </div>
                    
//                 </section>
//             </div>
//             </div>
//         </div>
//     )
// }

// export default Signup



import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {NavLink, useNavigate} from 'react-router-dom';
import Header from './Header';
import { createUserWithEmailAndPassword,getAuth } from 'firebase/auth';
import axios from 'axios';
import Profile from './Profile';
import Cookies from 'js-cookie';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');
    const [error, setError] = useState('');
    const [uname, setUname] = useState('');
    const navigate = useNavigate();



const HandleSignup = async() => {
    try{
        if(!email || ! password || !cpassword ||!uname)
        {
            setError('Fill all details');
            return;

        }
        if(password!==cpassword){
            setError('Password and Confirm password do not match');
            return;
        }
        const data = {
            email : email,
            name : uname,
            password : password,
            phoneNumber : '',
            location : '',
            city: '',
            state: '',
            postalCode :'',
            country : '',
    
        }
        
        await createUserWithEmailAndPassword(getAuth(), email, password);
        Cookies.set('email', email,{ expires: 1 });
        const response1 = await axios.post("http://127.0.0.1:2020/api/v1/auth/register", data);
        // const response = await axios.post("http://127.0.0.1:2020/addGuest", data);
        
        console.log(response1.data); 
        sessionStorage.setItem('isLoggedIn', true);
        // console.log(response1); 
        navigate('/');
        // <Profile emaill={email} uuname={uname} />
    }
    catch(e){
        // setError(e.message);
        if(e.message==="Firebase: Error (auth/email-already-in-use)."){
            setError("Email already in use. Please Try again");
            
          }
        
    }
}
return (

        <div style={{backgroundColor: '#7795AA', height: '1000px' }}>
            {/* {error  && alert(error) && setError("")} */}
            {/* {error && <p>{error}</p>} */}
            <Header type='noBack' home='nohome' about='false' />
            <div className='img' style={{
                    minHeight: '70vh',
            
                    background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://t4.ftcdn.net/jpg/02/94/66/11/240_F_294661109_lmICWxfTmzfQdLZjEmXpGNRzR5BV4k2g.jpg")',
                    borderRadius: '0 200px 0 200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginLeft: '50px', marginRight: '50px',boxShadow:'40px 40px 200px #00003c72 '
                }}>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%", marginLeft: '450px' }}>
                        <h3 className="text-center"style={{ color: 'lightblue', fontSize: 'xxx-large' }}>Sign Up</h3>
                        {error && 
      <p style={{color:'red',textAlign:'center'}}>{error}</p>       
        }
                        <Form>
                            <Form.Group className="mb-5" controlId="formBasicName" style={{ width: '430px' }}>

                                <Form.Control type="text" name='name'value={uname} onChange={e => setUname(e.target.value)} placeholder="Enter your name" />

                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />

                            </Form.Group>

                            {/* <Form.Group className="mb-5" controlId="formBasicEmail">

                                <Form.Control type="date" name='date'  />

                            </Form.Group> */}

                            <Form.Group className="mb-5" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' value={password} onChange={e => setpassword(e.target.value)} placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-5" controlId="formBasicConfirmPassword">

                                <Form.Control type="password" name='confirm password' value={cpassword} onChange={e => setcpassword(e.target.value)} placeholder="Confirm Password" />
                            </Form.Group>

                            <Button variant="primary" className="col-lg-6" style={{ backgroundColor: '#000055', borderRadius: '50px', width: '150px', marginLeft: '130px' }} onClick={HandleSignup}>
                                        Submit
                                    </Button>
                        </Form>
                        <p className="mt-3" style={{color:"darkblue",marginLeft:'70px',fontWeight:'bolder'}}>Already have an account  -<span ><NavLink to="/login" style={{color:'darkblue',marginLeft:'7px'}}>Login</NavLink></span></p>
                    </div>
                    
                </section>
            </div>
            </div>
        </div>
    )
}

export default Signup