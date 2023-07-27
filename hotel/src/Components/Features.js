import React from 'react'
import Header from './Header'

const Features = () => {
  return (
    <div>
       <div
      style={{
        backgroundImage:
          'url("https://t4.ftcdn.net/jpg/02/94/66/11/240_F_294661109_lmICWxfTmzfQdLZjEmXpGNRzR5BV4k2g.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // backgroundPosition:'right'
        
      }}
    >
      <Header type="noBack" home="nohome" about='false' />
      <h2 style={{ color: "#f2cd7c ", paddingTop: "30px", fontSize: 30,fontWeight:'bold',marginBottom:'60px' }}>
              Different Features Available
            </h2>
            {/* <p>This is the about section content.</p> */}
            {/* <div style={divStyle}></div> */}
            <div>
              <div className="co">
                {/* <div
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
                </div> */}
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
                        src="https://cdn.blastness.info/media/759/gallery-nuove/thumbs/medium/1024_palestra.webp"
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
                        color: "#000055",
                        fontWeight:'bold',
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "20px",
                        maxWidth:'500px'
                      }}
                    >
                      <p
                        className="tit"
                        style={{ fontWeight: "bolder", color: "#000055" }}
                      >
                       Fitness room
                      </p>
                      <p>
                      A large fitness room for a dynamic workout with the latest Technogym equipment.
                      </p>
                      <p>
                      It is also possible to take classes like yoga, pilates and muscle toning with our personal trainer, who is always available for guests.
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
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "20px",
                          color: "#000055",
                        maxWidth:'500px',
                        fontWeight:'bold',
                      }}
                    >
                      <p
                        className="tit"
                        style={{ fontWeight: "bolder", color:  "#000055" }}
                      >
Diabasi                      </p>
                      <p>
                      after 20 years, it is still the biggest Professional School of Massage. Our mission is to train Massage therapists capable of improving their Customers’ quality of life.
                      </p>
                      <p>
                      It’s a method of investigation and verification that Diabasi has tested on over 40 massage techniques, which it offers its students and that fall within the classic, sporting and holistic disciplines. 

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
                        src="https://cdn.blastness.info/media/759/gallery-nuove/thumbs/full/1024_spa.webp"
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
                        src="https://images.unsplash.com/photo-1601482441062-b9f13131f33a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZyUyMGhhbGx8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
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
                        
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "20px",
                        color: "#000055",
                        maxWidth:'500px',
                        fontWeight:'bold',
                      }}
                    >
                      <p
                        className="tit"
                        style={{ fontWeight: "bolder", color: "#000055" }}
                      >
                        Events & Weddings
                      </p>
                      <p>
                      A location far away from the world, which becomes a place of togetherness and emotions. That’s why the Scenic solitude Resort Sea & Spa becomes the exclusive and ideal retreat for a wedding or a special event.
                      </p>
                      {/* <p>
                        A path on the promontory overlooking the sea, through
                        Mediterranean scrub and succulent plants. A real
                        “open-air” gym available to guests.
                      </p> */}
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
                        
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "20px",
                        color: "lightblue",
                        maxWidth:'500px',
                        fontWeight:'bold',
                      }}
                    >
                      <p
                        className="tit"
                        style={{ fontWeight: "bolder", color: "lightblue" }}
                      >
                       Russuri Bar
                      </p>
                      <p>
                      Enjoy the ultimate magical moment: sunset over the islands.
                      </p>
                      <p>Comfortable and charming, a stone's throw from the beautiful infinity pool and the Resort’s seaside platform, the "I Russuri" bar is the ideal place for a simple break, a quick snack or an aperitif at sunset.
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
                        src="https://cdn.blastness.info/media/759/gallery-nuove/thumbs/full/1024_bar-russari.webp"
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
      <div>
        Features
      </div>
      </div>
    </div>
  )
}

export default Features
