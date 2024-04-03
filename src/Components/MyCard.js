import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


const ImageWithHoverCard = ({info}) => {
    console.log(info.src[info.tag])
  return (
    <div style={{margin:"2%"}}>
    <Card
      sx={{
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: '-100%',
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(237, 137, 7, 0.8)',
          transition: 'bottom 0.3s ease-in-out',
        },
        '&:hover::before': {
          bottom: 0,
        },
        borderRadius:"20px"
      }}
    >
      <img
        src={info.src[info.tag]}
        alt="Sample"
        style={{ width: '350px', height: '400px', objectFit: 'cover' }}
      />
      <CardContent
        sx={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          opacity: 0,
          transition: 'opacity 0.3s',
          '&:hover': {
            opacity: 1,
          },
          width:"80%",
          height:"50%"  ,
          textAlign:"center",
          marginTop: "10%"      
        }}
      >
        <Typography variant="h5" component="div" sx={{margin:"1%"}}>
          {info.title}
        </Typography>
        <Typography sx={{color:"white",fontSize:"15px"}}>
        {info.content}
        </Typography>
        <a href={info.link} target="_blank" rel="noopener noreferrer">
        <OpenInNewIcon style={{fontSize:"50px",margin:"3%",color:"white"}}/>
        </a>
      </CardContent>
    </Card>
    </div>
  );
};

export default ImageWithHoverCard;
