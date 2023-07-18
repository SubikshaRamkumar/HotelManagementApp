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
import Sign_img from './Sign_img';
import {NavLink, useNavigate} from 'react-router-dom';
import Header from './Header';
import { createUserWithEmailAndPassword,getAuth } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');
    const [uname, setUname] = useState('');
    const navigate = useNavigate();



const HandleSignup = async() => {
    try{
        // if(password!==confirmPassword){
        //     setError('Password and Confirm password do not match');
        //     return;
        // }
        await createUserWithEmailAndPassword(getAuth(), email, password);
        // const data = {
        //     email : email,
        //     userName : username,
        //     bio : '',
        //     city : '',
        //     relation : '',
        // }
        // const response = await axios.post("http://127.0.0.1:8080/Profile/add", data);
        // console.log(response.data); 
        navigate('/');
    }
    catch(e){
        setError(e.message);
    }
}
return (

        <div style={{backgroundColor: '#00003c72', height: '790px' }}>
            {error!==null ? <p>{error}</p>: <p></p>}
            <Header type='noBack' home='nohome'/>
            <div className='img' style={{
                    minHeight: '70vh',
            
                    background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vKb2w5HlMTcx0HoOnTw2TORZeNheyWHGrBeFKTpDlw&s")',
                    borderRadius: '0 200px 0 200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginLeft: '50px', marginRight: '50px'
                }}>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%", marginLeft: '450px' }}>
                        <h3 className="text-center"style={{ color: '#000055', fontSize: 'xxx-large' }}>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-5" controlId="formBasicEmail" style={{ width: '430px' }}>

                                <Form.Control type="text" name='name' placeholder="Enter your name" />

                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicEmail">

                                <Form.Control type="date" name='date'  />

                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' value={password} onChange={e => setpassword(e.target.value)} placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" className="col-lg-6" style={{ backgroundColor: '#000055', borderRadius: '50px', width: '150px', marginLeft: '130px' }} onClick={HandleSignup}>
                                        Submit
                                    </Button>
                        </Form>
                        <p className="mt-3" style={{color:"#000055",marginLeft:'70px'}}>Already have an account <span ><NavLink to="/login" style={{color:'#000055'}}>Sign in</NavLink></span></p>
                    </div>
                    
                </section>
            </div>
            </div>
        </div>
    )
}

export default Signup

