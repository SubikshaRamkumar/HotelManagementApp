import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import { Link, useNavigate } from 'react-router-dom';
// import Header from './Header';

const Login = () => {

    const nav = useNavigate();



    const [inpval, setinpval] = useState({
        //thss and name attribute should be same
        email: "",

        password: ""
    })

    const [data, setData] = useState([]);
    const getData = (e) => {
        // console.log(e.target.value);
        const { value, name } = e.target;
        // console.log(value,name)
        // console.log(inpval)

        setinpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }
    const addData = (e) => {
        e.preventDefault();

        const getUserArr = localStorage.getItem("userhotel");
        // console.log(getUserArr)

        const { email, password } = inpval; //obj destructuring done

        if (email === "") {
            alert("email is req")
        } else if (!email.includes("@")) {
            alert("please enter valid email address")
        } else if (password === "") {
            alert("password is req")

        }
        else if (password.length < 8) {
            alert("password length should be greater thaan 8")
        }
        else {
            if (getUserArr && getUserArr.length) {
                const userdata = JSON.parse(getUserArr);
                console.log(userdata)
                const userlogin = userdata.filter((ele, k) => {
                    return ele.email === email && ele.password === password
                })
                // console.log(userlogin)
                if (userlogin.length === 0) {
                    alert("Invalid details")
                }
                else {

                    nav('/')
                    // alert("user login success");
                }
            }
        }


    }

    return (
        <>
            <div style={{ backgroundColor: '#00003c72', height: '790px' }}>
              
                {/* <Header type='noBack' home='nohome' /> */}
                <div className='img' style={{
                    minHeight: '70vh',
            
                    background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vKb2w5HlMTcx0HoOnTw2TORZeNheyWHGrBeFKTpDlw&s")',
                    borderRadius: '0 200px 0 200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginLeft: '50px', marginRight: '50px'
                }}>
                    <div className="container mt-5"  >
                        <section className='d-flex justify-content-between'>
                            <div className="left_data mt-3 p-3" style={{ width: "100%", marginLeft: '450px' }}>
                                <h3 className="mb-5 text-center " style={{ color: '#000055', fontSize: 'xxx-large' }}>Sign In</h3>
                                <Form>


                                    <Form.Group className="mb-5 " controlId="formBasicEmail" style={{ width: '430px' }}>

                                        <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />

                                    </Form.Group>



                                    <Form.Group className="mb-5" controlId="formBasicPassword">

                                        <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
                                    </Form.Group>
                                  
                                    <Button variant="primary" className="col-lg-6" style={{ backgroundColor: '#000055', borderRadius: '50px', width: '150px', marginLeft: '130px' }} onClick={addData}>
                                        Submit
                                    </Button>
                                   
                                </Form>
                                <p className="mt-3" style={{ marginLeft: '140px' }}><a href='/signup'>Forgot password</a></p>
                            </div>
                            {/* <Sign_img /> */}
                        </section>
                    </div>
                </div>
            </div>
            {/* </div>
</div> */}
        </>
    )
}

export default Login

