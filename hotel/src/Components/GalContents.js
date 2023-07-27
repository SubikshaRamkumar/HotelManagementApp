// import React, { useState } from 'react'
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Box from '@mui/material/Box';
// import './Cssfiles/Gallery.css'
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import { Repeat } from '@mui/icons-material';


// const GalContents = () => {

//     const [choseAll, setChoseAll] = useState(true);
//     const [choseIn, setChoseIn] = useState(true);
//     const [choseOut, setChoseOut] = useState(true);
//     const [choseRS, setChoseRS] = useState(true);
//     const [choseDining, setChoseDining] = useState(true);
//     const [choseSpa, setChoseSpa] = useState(true);

//     return (
//         <div className='galContent'>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     flexDirection: 'column',

//                     alignItems: 'center',
//                     '& > *': {
//                         m: 1,
//                     },
//                 }} className='choose'
//             >

//                 <ButtonGroup variant="text" aria-label="text button group" color="secondary">
//                     <Button onClick={() => setChoseAll(true)}>ALL</Button>
//                     <Button onClick={() => setChoseOut(true)}>OUTDOORS</Button>
//                     <Button onClick={() => setChoseIn(true)}>INDOORS</Button>
//                     <Button onClick={() => setChoseRS(true)}>ROOMS AND SUITES</Button>
//                     <Button onClick={() => setChoseDining(true)}>DINING</Button>
//                     <Button onClick={() => setChoseSpa(true)}>SPA</Button>
//                 </ButtonGroup>
//             </Box>
//             <div>
//                 {choseAll===true ? (

//                     <ImageList sx={{ width: 800, height: 500,marginLeft:'25%',marginTop:'30px',gridTemplateRows: 'repeat(auto-fit, minmax(258px, 1fr))'}} cols={3} rowHeight={164} >
//                         {itemDataAll.map((item) => (
//                             <ImageListItem key={item.img}>
//                                 <img
//                                     src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
//                                     srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//                                     alt={item.title}
//                                     loading="lazy"
//                                 />
//                             </ImageListItem>
//                         ))}
//                          setChoseAll(flase);
//                     </ImageList>
//                 ) :
//                 choseOut===true ? (

//                     <ImageList sx={{ width: 800, height: 500,marginLeft:'25%',marginTop:'30px' }} cols={3} rowHeight={164}>
//                         {itemDataOut.map((item) => (
//                             <ImageListItem key={item.img}>
//                                 <img
//                                     src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
//                                     srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//                                     alt={item.title}
//                                     loading="lazy"
//                                 />
//                             </ImageListItem>
//                         ))}
//                          setChoseOut(true);
//                     </ImageList>
//                 ) :
//                 choseIn===1 ? (

//                     <ImageList sx={{ width: 800, height: 500,marginLeft:'25%',marginTop:'30px' }} cols={3} rowHeight={164}>
//                         {itemDataIn.map((item) => (
//                             <ImageListItem key={item.img}>
//                                 <img
//                                     src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
//                                     srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//                                     alt={item.title}
//                                     loading="lazy"
//                                 />
//                             </ImageListItem>

//                         ))}
//                         setChoseIn(true);
//                     </ImageList>
//                 ):
//                 choseRS===1 ? (

//                     <ImageList sx={{ width: 800, height: 500,marginLeft:'25%',marginTop:'30px' }} cols={3} rowHeight={164}>
//                         {itemDataRS.map((item) => (
//                             <ImageListItem key={item.img}>
//                                 <img
//                                     src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
//                                     srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//                                     alt={item.title}
//                                     loading="lazy"
//                                 />
//                             </ImageListItem>

//                         ))}
//                         setChoseRS(true);
//                     </ImageList>
//                 ):
//                 choseDining===1 ? (

//                     <ImageList sx={{ width: 800, height: 500,marginLeft:'25%',marginTop:'30px' }} cols={3} rowHeight={164}>
//                         {itemDataD.map((item) => (
//                             <ImageListItem key={item.img}>
//                                 <img
//                                     src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
//                                     srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//                                     alt={item.title}
//                                     loading="lazy"
//                                 />
//                             </ImageListItem>

//                         ))}
//                         setChoseDining(true);
//                     </ImageList>
//                 ):
//                 choseSpa===1 ? (

//                     <ImageList sx={{ width: 800, height: 500,marginLeft:'25%',marginTop:'30px' }} cols={3} rowHeight={164}>
//                         {itemDataSpa.map((item) => (
//                             <ImageListItem key={item.img}>
//                                 <img
//                                     src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
//                                     srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//                                     alt={item.title}
//                                     loading="lazy"
//                                 />
//                             </ImageListItem>

//                         ))}
//                         setChoseSpa(true);
//                     </ImageList>
//                 ):


//                 null
//                         }
//             </div>

//         </div>
//     )
// }
// const itemDataAll = [
//     {
//       img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//       title: 'Coffee',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//         title: 'Burger',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//       title: 'Breakfast',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//       title: 'Camera',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//       title: 'Hats',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//       title: 'Honey',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//       title: 'Basketball',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//       title: 'Fern',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//       title: 'Mushrooms',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//       title: 'Tomato basil',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//       title: 'Sea star',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//       title: 'Bike',
//     },
//   ];
// const itemDataOut = [
//     {
//         img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//         title: 'Breakfast',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//         title: 'Burger',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//       title: 'Camera',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//       title: 'Coffee',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//       title: 'Hats',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//       title: 'Honey',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//       title: 'Basketball',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//       title: 'Fern',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//       title: 'Mushrooms',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//       title: 'Tomato basil',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//       title: 'Sea star',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//       title: 'Bike',
//     },
//   ];
// const itemDataIn = [
//     {
//         img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//         title: 'Burger',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//       title: 'Camera',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//       title: 'Breakfast',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//       title: 'Coffee',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//       title: 'Hats',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//       title: 'Honey',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//       title: 'Basketball',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//       title: 'Fern',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//       title: 'Mushrooms',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//       title: 'Tomato basil',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//       title: 'Sea star',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//       title: 'Bike',
//     },
//   ];
// const itemDataRS = [
//     {
//         img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//         title: 'Burger',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//       title: 'Camera',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//       title: 'Breakfast',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//       title: 'Coffee',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//       title: 'Hats',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//       title: 'Honey',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//       title: 'Basketball',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//       title: 'Fern',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//       title: 'Mushrooms',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//       title: 'Tomato basil',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//       title: 'Sea star',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//       title: 'Bike',
//     },
//   ];
// const itemDataD = [
//     {
//         img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//         title: 'Burger',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//       title: 'Camera',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//       title: 'Breakfast',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//       title: 'Coffee',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//       title: 'Hats',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//       title: 'Honey',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//       title: 'Basketball',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//       title: 'Fern',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//       title: 'Mushrooms',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//       title: 'Tomato basil',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//       title: 'Sea star',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//       title: 'Bike',
//     },
//   ];
// const itemDataSpa = [
//     {
//         img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//         title: 'Burger',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//       title: 'Camera',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//       title: 'Breakfast',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//       title: 'Coffee',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//       title: 'Hats',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//       title: 'Honey',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//       title: 'Basketball',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//       title: 'Fern',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//       title: 'Mushrooms',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//       title: 'Tomato basil',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//       title: 'Sea star',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//       title: 'Bike',
//     },
//   ];
// export default GalContents


import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import './Cssfiles/Gallery.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const GalContents = () => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    function srcset(image, size, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }
    const renderImageList = () => {
        if (selectedButton === 'all') {
            return (
                <ImageList
                    sx={{ width: 800, height: 500, marginLeft: '25%', marginTop: '30px' }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {itemDataAll.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            );
        } else if (selectedButton === 'out') {
            return (
                <ImageList
                    sx={{ width: 800, height: 500, marginLeft: '25%', marginTop: '30px' }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {itemDataOut.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            );
        }
        else if (selectedButton === 'in') {
            return (
                <ImageList
                    sx={{ width: 800, height: 500, marginLeft: '25%', marginTop: '30px' }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {itemDataIn.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            );
        }
        else if (selectedButton === 'din') {
            return (
                <ImageList
                    sx={{ width: 800, height: 500, marginLeft: '25%', marginTop: '30px' }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {itemDataDin.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            );
        }
        else if (selectedButton === 'rs') {
            return (
                <ImageList
                    sx={{ width: 800, height: 500, marginLeft: '25%', marginTop: '30px' }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {itemDataRS.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            );
        }
        else if (selectedButton === 'spa') {
            return (
                <ImageList
                    sx={{ width: 800, height: 500, marginLeft: '25%', marginTop: '30px' }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {itemDataSpa.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            );
        }
        else {
            return (
                <ImageList
                    sx={{ width: 800, height: 500, marginLeft: '25%', marginTop: '30px' }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {itemDataAll.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            );
        }
    };

    return (
        <div className="galContent">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
                className="choose"
            >
                <ButtonGroup variant="text" aria-label="text button group" color="secondary">
                    {/* Add the "onClick" event handlers for the buttons */}
                    <Button onClick={() => handleButtonClick('all')}>ALL</Button>
                    <Button onClick={() => handleButtonClick('out')}>OUTDOORS</Button>
                    <Button onClick={() => handleButtonClick('in')}>INDOORS</Button>
                    <Button onClick={() => handleButtonClick('din')}>DININGS</Button>
                    <Button onClick={() => handleButtonClick('rs')}>ROOMS AND SUITES</Button>
                    <Button onClick={() => handleButtonClick('spa')}>SPA</Button>
                </ButtonGroup>
            </Box>
            <div>{renderImageList()}</div>
        </div>
    );
};

const itemDataAll = [
    {
        img: 'https://cdn.blastness.info/media/759/gallery-nuove/thumbs/full/1024_russuri-nuova.webp',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1686167989565-7e0db711f277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3V0ZG9vciUyMHJvb21zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];
const itemDataOut = [
    {
        img: 'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];
const itemDataIn = [
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];
const itemDataRS = [
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];
const itemDataDin = [
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];
const itemDataSpa = [
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];

export default GalContents;
