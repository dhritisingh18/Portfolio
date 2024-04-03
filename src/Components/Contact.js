import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import resumeUrl from '../Assets/Dhriti Singh Resume.pdf';
import './Contact.css';
import TextField from '@mui/material/TextField';







const handleDownload= ()=>{

    const a= document.createElement('a');
    a.href = resumeUrl;
      
    a.download = "Resume_Dhriti_Singh";
    
    document.body.appendChild(a);
    
    a.click();
    
    document.body.removeChild(a);
  
  }

  

export function Contact(){
    const [email,setEmail]=useState('');
    const [name,setName] = useState('');
    const [message,setMessage]=useState('');

    return(
        <div className="main-contact-container" id="contact" >
        <Typography sx={{textAlign:'justify',marginLeft:"5%",marginTop:"3%",marginBottom:"4%",fontWeight:"bold" ,fontSize:"60px",color:"#ed8907"}}>Contact Me</Typography>
        <div className="contact-container"  >
           
            <div className="contact-info">
                <Card sx={{ maxWidth: "100%",backgroundColor:"black" ,height:"100%" ,width:"100%"}}>
        
                    <CardContent sx={{margin:"1%",textAlign:"start"}}>
                    
                        <div style={{display:"flex",margin:"8%"}}>
                        <EmailIcon style={{fontSize:"30px",color:"#ed8907"}}/> 
                        <Typography variant="h6" component="div" color="white" >
                            dhritisingh3@gmail.com
                        </Typography>
                        </div>
                        <div style={{display:"flex",margin:"8%"}}>
                        <CallIcon style={{fontSize:"30px",color:"#ed8907"}}/> 
                        <Typography variant="h6" component="div" color="white"  sx={{'@media screen and (max-width: 500px)': {
                            maxWidth: '100%', 
                            marginLeft: "10%"
                            },}}>
                            (+1)4389240335 &nbsp; , &nbsp; (+91)8510858553
                        </Typography>
                        </div>
                        <div className="link-container">
                            <a href="https://www.linkedin.com/in/dhriti-singh-851793182/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon  style={{fontSize:"30px",color:"white"}}/>
                            </a>
                            &nbsp; &nbsp;
                            <a href="https://github.com/dhritisingh18" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon style={{fontSize:"30px",color:"white"}}/>
                            </a>
                        </div>
                    </CardContent>

                </Card>
            </div>
            
            <div className="button-container">
            <Button  size="large" variant="contained" onClick={handleDownload} className="button-download" sx={{ fontSize: '1.5rem', marginRight:"12px", padding: '16px 24px',color:"Window",backgroundColor:"#ed8907", "&:hover": {
                                backgroundColor: "#ed8907",
                            } ,'@media screen and (max-width: 500px)': {
                            maxWidth: '100%', 
                            marginLeft: "10%"
                            },}}>Download CV</Button>
            </div>
         
        </div>
        </div>
    )
}