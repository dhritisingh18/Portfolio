import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Home.css';
import dp from '../Assets/ProfilePicture.jpg'
import resumeUrl from '../Assets/CV Dhriti Singh.pdf';


const handleDownload= ()=>{

  const a= document.createElement('a');
  a.href = resumeUrl;
    
  a.download = "Resume_Dhriti_Singh";
  
  document.body.appendChild(a);
  
  a.click();
  
  document.body.removeChild(a);

}

export function Home(){
    return(
        <div className="card-container" id="home">
        <div className="intro-container">
        <Card sx={{ maxWidth: "100%",backgroundColor:"black" ,height:"100%" }}>
      
        <CardContent sx={{margin:"20%",textAlign:"start"}}>
          <Typography gutterBottom variant="h5" component="div" color="white" fontWeight="bold">
            Software Developer
          </Typography>
          <Typography variant="h2" component="div" color="white" fontWeight="bold">
            Hi I'm
          </Typography>
          <Typography variant="h2" component="div" color="#ed8907" fontWeight="bold" fontSize="70px">
            Dhriti Singh
          </Typography>
        </CardContent>
        <CardActions style={{margin:"20%",marginLeft:"30%",marginBottom:"30%"}}>
          <Button  size="large" variant="contained" onClick={handleDownload} className="button-download" sx={{ fontSize: '1.5rem', marginRight:"12px", padding: '16px 24px',color:"Window",backgroundColor:"#ed8907", "&:hover": {
            backgroundColor: "#ed8907",
        } ,'@media screen and (max-width: 500px)': {
          maxWidth: '100%', 
          marginRight: "30%",
          fontSize:"0.8rem"
        },}}>Download CV</Button>
        </CardActions>
      </Card>
      </div>
      <div className="image-container">
      <Card sx={{ maxWidth: "70%",backgroundColor:"black",height:"80%",marginTop:"5%" }}>
      
      <CardContent >
        <div style={{maxWidth:"100%",overflow:"hidden"}}>
        <img src={dp} style={{height: "auto",width:"100%",display:"block",objectFit:"cover", mixBlendMode:"screen",opacity: "0.8" ,borderRadius:"80px"}} />

        </div>
      </CardContent>
    </Card>
    </div>
      </div>
    )
}