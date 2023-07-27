import React, { useState, useEffect, useRef } from "react";
import "./Cssfiles/Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdHeight, MdHotelClass } from "react-icons/md";

import { IoMdClose } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { BiConversation } from "react-icons/bi";
import { MdBrunchDining } from "react-icons/md";
import { RiBox2Fill } from "react-icons/ri";
import { PiCallBellThin } from "react-icons/pi";
import { MdOutlineCallEnd } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";
import { IoIosCall } from "react-icons/io";
import { Box, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Cookies from "js-cookie";
import axios from "axios";
import { getAuth, signInWithPopup } from "firebase/auth";
import "./Cssfiles/animations.css";
import { Translate } from "@mui/icons-material";

const Header = (props) => {
  const [data, setData] = useState([]);
  const nav = useNavigate();
  const gotoHome = () => {
    nav("/");
  };
  const gotoLogin = () => {
    nav("/login");
  };
  const gotoSignup = () => {
    nav("/signup");
  };
  const gotoGallery = () => {
    nav("/gallery");
  };
  const gotoReservation = () => {
    nav("/reserve");
  };
  const gotoDining = () => {
    nav("/dining");
  };
  const gotoContact = () => {
    nav("/contact");
  };
  const gotoProfile = () => {
    nav("/profile");
  };
  const gotoHistory = () => {
    nav("/history");
  };
  const gotoFeatures = () => {
    nav("/features");
  };
  const gotoFeedBack = () => {
    nav("/feedback");
  };
  const aboutSectionRef = useRef(null);

  const gotoAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      nav("/about");
    }
  };

  // const handleLogout=()=>
  // {
  //   sessionStorage.setItem('isLoggedIn', true);
  //   Cookies.remove('email');
  //   nav('/');

  // }
  const location = useLocation();
  const { showProf } = location.state || {};

  useEffect(() => {
    // const unSubscribe = onAuthStateChanged(getAuth(), (user) => {
    const response = "";
    axios
      .get(`http://127.0.0.1:2020/api/v1/auth/profile1/get/${Cookies.get("email")}`)
      .then((response) => {
        setData(response.data[0]);
        // Cookies.set('name',data.name)
        // The problem here is that setting the cookie happens immediately after making the API call, but since the API call is asynchronous, the data state might not be updated yet when you try to set the cookie. As a result, data.name could be undefined, leading to the cookie being set with an undefined value.
        // console.log(response.data[0].name);
      })
      .catch((error) => {
        console.log(error);
      });
    // });

    // return unSubscribe;
  }, []);
  // useEffect(() => {
  //   if (data.name) {
  //     Cookies.set("name", data.name);
  //   }
  // }, [data]);

  const [active, setActive] = useState("nav_list_items");
  // const [showProfile, setShowProfile] = useState(props.about);
  // const [showAbout, setshowAbout] = useState(`${props.about}`);
  // const [activea, setActivea] = useState('not_show');
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === "nav_list_items"
      ? setActive("nav_list_items nav__active")
      : setActive("nav_list_items");

    //toggle Icon
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  const [bbb, setBbb] = useState("not_basic_show");

  const [aaa, setAaa] = useState("hide_dots");

  const func = () => {
    bbb === "not_basic_show"
      ? setAaa("not_basic_show")
      : setAaa("not_basic_show");

    aaa === "hide_dots" ? setBbb("hide_dots") : setBbb("hide_dots");
  };
  const funa = (about) => {
    if (about === "false") {
      return;
    } else {
      // const divStyle = {
      //   width: '200px',
      //   height: '200px',
      //   backgroundColor: 'red',
      //   animation: 'slide-in 1s ease-in-out',
      //   // transform: 'translateX(-100%)', // Initial position, same as 0% in keyframes
      // };
      return (
        <>
          <div
            ref={aboutSectionRef}
            style={{
              backgroundColor: "lightblue",
              minHeight: "2500px",
              // background:
              //   "linear-gradient(to bottom,rgba(0, 0, 85,0.8),rgba(69, 195, 237,0.9))",
              backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSGXywXcPE5Sp27Q3RVkd2KcH2VgGNz48v1W1uZZ_ovsJP1DTYy-JQiWW2-JepQVqMoA&usqp=CAU")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: "0.9",
            }}
          >
            {/* Your "About" section content goes here */}
            <h2 style={{ color: "gold", paddingTop: "30px", fontSize: 30 }}>
              About Resort
            </h2>
            {/* <p>This is the about section content.</p> */}
            {/* <div style={divStyle}></div> */}
            <div>
              <div className="co">
                <div
                  className="top_content"
                  style={{
                    textAlign: "center",
                    width: "50vw",
                    margin: "0 auto",
                    paddingTop: "150px",
                    color: "lightblue",
                    fontWeight: "bolder",
                    fontSize: 20,
                    paddingBottom: "150px",
                  }}
                >
                  <p>
                    The Mediterranean atmosphere, exclusive hospitality and
                    luxury of a break in contact with nature.
                  </p>
                  <p>
                    The sunset that sets the air ablaze, the Aeolian Islands
                    with soft outlines standing out on the horizon and Vulcano,
                    an island with a wild charm. The Therasia Resort Sea & Spa,
                    nestled on the promontory of Vulcanello, dominates this
                    breathtaking view.
                  </p>
                  <p>
                    An exclusive retreat with soft Mediterranean lines mixed
                    with the harmonious Aeolian architecture, formed by typical
                    pulere (columns), cannizzi (reed roofing) and arches facing
                    the sea. The rooms of the elegant and romantic Therasia
                    bring to mind the wild elements of this land, thanks to the
                    skilful use of local materials: from lava stone to
                    terracotta, cedar wood and olive wood. The thousand nuances
                    of soft colours relax the soul, which can find its natural
                    balance in the perfect silence of this oasis.
                  </p>
                </div>
                <div className="whoo">
                  <div
                    className="ima"
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      maxWidth: "1200px",
                      marginLeft: "200px",
                      marginBottom: "80px",
                    }}
                  >
                    <div
                      className="im"
                      style={{
                        maxWidth: "400px",
                        maxHeight: "400px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="https://cdn.blastness.info/media/759/gallery-nuove/thumbs/full/1024_Discesa-al-mare-e-piscinette1.webp"
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                          borderRadius: "30px 0px 30px 0px",
                          boxShadow: "10px 10px 4px rgba(0, 0, 0, 0.25)",
                        }}
                        alt=""
                      />
                    </div>
                    <div
                      className="contentt"
                      style={{
                        color: "lightblue",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "20px",
                      }}
                    >
                      <p
                        className="tit"
                        style={{ fontWeight: "bolder", color: "#bf900d" }}
                      >
                        The sea
                      </p>
                      <p>
                        The resort has private access to the sea with
                        well-equipped areas for sunbathing.
                      </p>
                      <p>
                        The exclusive solariums are equipped with umbrellas and
                        sun loungers, allowing you to enjoy the sea and the last
                        rays of sunshine.
                      </p>
                    </div>
                  </div>
                  <div
                    className="ima"
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      maxWidth: "1200px",
                      marginLeft: "200px",
                      marginBottom: "80px",
                    }}
                  >
                    <div
                      className="contentt"
                      style={{
                        color: "lightblue",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "20px",
                      }}
                    >
                      <p
                        className="tit"
                        style={{ fontWeight: "bolder", color: "#bf900d" }}
                      >
                        Oasis with a view of infinity
                      </p>
                      <p>
                        The elegant infinity pools at the Therasia Resort Sea &
                        Spa are oases with a view of infinity, natural homage to
                        the enchanting scenery that embraces the resort.
                      </p>
                      <p>
                        The elegant swimming pools, with their solarium
                        constantly kissed by the sun, are the perfect place to
                        relax and rediscover a new dimension of well-being.
                      </p>
                    </div>
                    <div
                      className="im"
                      style={{
                        maxWidth: "400px",
                        maxHeight: "300px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="https://cdn.blastness.info/media/759/gallery-nuove/thumbs/full/768_infinity-pool.webp"
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                          borderRadius: "0px 30px 0px 30px",
                          boxShadow: "-10px 10px 4px rgba(0, 0, 0, 0.25)",
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="ima"
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      maxWidth: "1200px",
                      marginLeft: "200px",
                      marginBottom: "80px",
                    }}
                  >
                    <div
                      className="im"
                      style={{
                        maxWidth: "400px",
                        maxHeight: "400px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="https://cdn.blastness.info/media/759/gallery-nuove/thumbs/full/1024_percorso-natura-therasia1.webp"
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                          borderRadius: "30px 0px 30px 0px",
                          boxShadow: "10px 10px 4px rgba(0, 0, 0, 0.25)",
                        }}
                        alt=""
                      />
                    </div>
                    <div
                      className="contentt"
                      style={{
                        color: "lightblue",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "20px",
                      }}
                    >
                      <p
                        className="tit"
                        style={{ fontWeight: "bolder", color: "#bf900d" }}
                      >
                        Nature trail
                      </p>
                      <p>
                        The Resort surrounded by nature has a 1.5 km long nature
                        trail for physical activity, jogging, walking and
                        breathing in the fresh sea air.
                      </p>
                      <p>
                        A path on the promontory overlooking the sea, through
                        Mediterranean scrub and succulent plants. A real
                        “open-air” gym available to guests.
                      </p>
                    </div>
                  </div>
                  <div
                    className="ima"
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      maxWidth: "1200px",
                      marginLeft: "200px",
                      marginBottom: "80px",
                    }}
                  >
                    <div
                      className="contentt"
                      style={{
                        color: "lightblue",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "20px",
                      }}
                    >
                      <p
                        className="tit"
                        style={{ fontWeight: "bolder", color: "#bf900d" }}
                      >
                        Services
                      </p>
                      <p>
                        Spoken Languages: Italian – English – French – German –
                        Spanish – Russian<br></br>
                        Extra beds: on request<br></br>
                        Internet: Free Wi-Fi Internet!<br></br>
                        Reception Services: Reception 24/7, Luggage storage,
                        Currency exchange, Concierge<br></br>
                        General Services: Rooms for disabled guests, Room
                        service, Heating, Air conditioning, Lift, Safe,
                        Newspapers, Free shuttle service to the centre/port,
                        Airport shuttle, for a fee, Seafront<br></br>
                        Outdoor spaces: Terrace, Solarium, Garden<br></br>
                        Business Services: Spaces for meetings, Fax/photocopier
                      </p>
                    </div>
                    <div
                      className="im"
                      style={{
                        maxWidth: "400px",
                        maxHeight: "300px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="https://cdn.blastness.info/media/759/gallery-nuove/thumbs/full/1024_interni.webp"
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                          borderRadius: "0px 30px 0px 30px",
                          boxShadow: "-10px 10px 4px rgba(0, 0, 0, 0.25)",
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  // useEffect(() => {
  //   if (Cookies.get("email")) {
  //     setShowProfile(true);
  //   }
  // }, []);

  const funx = (home) => {
    if (home === "home") {
      return (
        <div className="boxx" style={{ position: "absolute", zIndex: "2" }}>
          <div
            className={props.home}
            style={{
              marginLeft: "250px",
              marginTop: "200px",
              position: "relative",
              zIndex: "1",
            }}
          >
            <MdHotelClass
              style={{
                height: "400px",
                width: "400px",
                color: "#52c7ee",
                opacity: "0.2",
              }}
            />
          </div>
          <div
            className="contentt"
            style={{
              marginTop: "-250px",
              marginLeft: "450px",
              color: "red",
              position: "relative",
              zIndex: "1",
            }}
          >
            <p className="para">WELCOME TO</p>
            <p className="para">SCENIC SOLITUDE RESORT</p>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <header className={props.type}>
        <div className="none">
          <div className="boxx" style={{ position: "relative", zIndex: "1" }}>
            {/* {funx(props.home)} */}
          </div>
        </div>

        <div className="header-main">
          <div className="brand">
            {/* <span className="small-logo">
            <MdHotelClass style={{marginRight:'100px',height:'70px',width:'70px',opacity:'0.5'}}/>
          </span> */}
            Scenic Solitude Resort
          </div>

          <ul className={active}>
            <li className="nav_item" onClick={gotoHome}>
              HOME
            </li>
            <li className="nav_item" onClick={gotoAbout}>
              ABOUT
            </li>
            { !sessionStorage.getItem("isLoggedIn") && (
              <ul className={active}>

              <li className="nav_item" onClick={gotoLogin}>
                LOGIN
              </li>
            <li className="nav_item" onClick={gotoSignup}>
              SIGN UP
            </li>
              </ul>
            )}
            {sessionStorage.getItem("isLoggedIn") && (
               <div onClick={gotoProfile}>
              <Avatar style={{ backgroundColor: "blue" }}>
              <p
              style={{ justifyContent: "center", marginTop: "15px" }}
              >
              {Cookies.get("email").charAt(0).toUpperCase()}
              </p>
              </Avatar>
              <div className="nav_item" style={{ marginLeft: "-8px" }}>
              PROFILE
              </div>
              {/* <li className="nav_item" onClick={handleLogout}>
              LOGOUT
            </li> */}
            </div> 
            )}

            <div
              className={bbb}
              style={{ backgroundColor: "#000055", marginTop: "115px" }}
            >
              <div className={props.home}>
                {/* {console.log(props.home)} */}

                <div
                  className="inside"
                  style={{
                    backgroundColor: "#00003c72",
                    paddingLeft: "30px",
                    minHeight: "690px",
                    marginBottom: "10px",
                    width: "300px",
                    right: "0",
                  }}
                >
                  <li
                    className="nav_item_inside"
                    style={{ marginTop: "20px" }}
                    onClick={gotoGallery}
                  >
                    <TfiGallery /> GALLERY
                  </li>
                  <li className="nav_item_inside" onClick={gotoReservation}>
                    <BiConversation /> RESERVATION
                  </li>
                  <li className="nav_item_inside" onClick={gotoHistory}>
                    <BiConversation /> BOOKING HISTORY
                  </li>
                  <li className="nav_item_inside" onClick={gotoDining}>
                    <PiCallBellThin /> DINING
                  </li>
                  <li className="nav_item_inside" onClick={gotoFeatures}>
                    <BiConversation /> FEATURES
                  </li>
                  {/* <li className="nav_item_inside" onClick={gotoContact}>
                    <IoIosCall /> CONTACT
                  </li> */}
                  <li className="nav_item_inside" onClick={gotoFeedBack}>
                    < BiConversation/> FEEDBACK
                  </li>
                </div>
              </div>
            </div>
          </ul>

          <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </header>

      {funa(props.about)}
    </>
  );
};

export default Header;
