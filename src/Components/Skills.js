import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Skills.css'
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
export function Skills(){

    return(
        <div className="skills-container" id="skills">
            <Typography sx={{textAlign:'justify',marginLeft:"5%",marginTop :"5%",fontWeight:"bold" ,fontSize:"60px",color:"#ed8907"}}>My Skills</Typography>

            <div className="skills-cards">
            <Card sx={{ maxWidth: "450px",margin: "4%",height:"400px" ,backgroundColor:"#252526", borderRadius:"20px", transition: "background-color 0.3s", // Smooth transition effect
    "&:hover": {
      backgroundColor: "#ed8907", 
      cursor: "pointer"
    },}}>
                <CardContent>
                    <TerminalIcon sx={{marginLeft:"10%",  fontSize: '5rem', color:"white" }}/>
                    
                    <Typography sx={{marginLeft:"10%",fontSize:"30px",color:"white"}}>
                         Software Developer Experience
                    </Typography>

                    <Typography sx={{margin:"10%",color:"white", fontSize:"15px",'@media screen and (max-width: 500px)': {
    maxWidth: '100%',
    margin: '5%' ,
    overflow: 'hidden',
    fontSize: '12px'
  }}}>
                    I've led technical projects at Chaayos Sunshine Teahouse, mentoring teams, facilitating seamless migrations, and implementing innovative solutions using Java, Spring, React , Angular like Dynamic menu creation and ordering flow for channel Partners SWIGGY, ZOMATO.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: "450px",margin: "4%",height:"400px" ,backgroundColor:"#252526", borderRadius:"20px" ,transition: "background-color 0.3s", 
    "&:hover": {
      backgroundColor: "#ed8907",
      cursor: "pointer"
    },}}>
                <CardContent>
                    <CodeIcon sx={{marginLeft:"10%",  fontSize: '5rem', color:"white" }}/>
                    
                    <Typography sx={{marginLeft:"10%",fontSize:"30px",color:"white"}}>
                         Core and Advance Java and DSA
                    </Typography>

                    <Typography sx={{margin:"10%",color:"white",maxWidth: "100%" ,'@media screen and (max-width: 500px)': {
    maxWidth: '100%',
    margin: '5%' ,
    overflow: 'hidden',
    fontSize: "12px"
  }}}>
                    Core Java, Spring , Spring boot, Design Patterns, JUnit ,OOPS, Multithreading
                    Arrays, String,Maps,Recursion,Backtracking,Linked List, Dynamic Programming,Graphs, Greedy
                        </Typography>
                </CardContent>
            </Card>
            
            <Card sx={{ maxWidth: "450px",margin: "4%",height:"400px" ,backgroundColor:"#252526", borderRadius:"20px" ,transition: "background-color 0.3s", 
    "&:hover": {
      backgroundColor: "#ed8907",
      cursor: "pointer"
    },}}>
                <CardContent>
                    <IntegrationInstructionsIcon sx={{marginLeft:"10%",  fontSize: '5rem', color:"white" }}/>
                    
                    <Typography sx={{marginLeft:"10%",fontSize:"30px",color:"white"}}>
                         Frontend and Backend Development
                    </Typography>

                    <Typography sx={{margin:"10%",color:"white",'@media screen and (max-width: 500px)': {
    maxWidth: '100%',
    margin: '5%' ,
    overflow: 'hidden',
    fontSize: '12px'
  }}}>
                    Spring , Spring Boot,Hibernate,JPA, React Js,Angluar, Material UI, Bootstrap, CSS, JavaScript, AWS SQS QUEUE
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: "450px",width:"450px",margin: "4%",height:"400px" ,backgroundColor:"#252526", borderRadius:"20px" ,transition: "background-color 0.3s", 
    "&:hover": {
      backgroundColor: "#ed8907",
      cursor: "pointer"
    },}}>
                <CardContent>
                    <StorageIcon sx={{marginLeft:"10%",  fontSize: '5rem', color:"white" }}/>
                    
                    <Typography sx={{marginLeft:"10%",fontSize:"30px",color:"white"}}>
                         Databases
                    </Typography>

                    <Typography sx={{margin:"10%",color:"white",'@media screen and (max-width: 500px)': {
    maxWidth: '100%',
    margin: '5%' ,
    overflow: 'hidden',
    fontSize: '12px'
  }}}>
                        MySQL, MongoDB
                    </Typography>
                </CardContent>
            </Card>
            </div>
         </div>
    )
}