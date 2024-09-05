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
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
export function Skills(){

    return(
        <div className="skills-container" id="skills">
            <Typography sx={{textAlign:'justify',marginLeft:"5%",marginTop :"5%",fontWeight:"bold" ,fontSize:"60px",color:"#ed8907", '@media (max-width:650px)': {
      marginTop: '4%',
    }}}>My Skills</Typography>

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
                    Spring , Spring Boot,Hibernate,JPA, React Js,Angluar, Material UI, Bootstrap, CSS, JavaScript, AWS SQS QUEUE , C#, .NET, SQL Server
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
            <Card sx={{ maxWidth: "450px",margin: "4%",height:"400px" ,backgroundColor:"#252526", borderRadius:"20px" ,transition: "background-color 0.3s", 
    "&:hover": {
      backgroundColor: "#ed8907",
      cursor: "pointer"
    },}}>
                <CardContent>
                    <DeveloperModeIcon sx={{marginLeft:"10%",  fontSize: '5rem', color:"white" }}/>
                    
                    <Typography sx={{marginLeft:"10%",fontSize:"30px",color:"white"}}>
                         C# .NET Development
                    </Typography>

                    <Typography sx={{margin:"8%",color:"white",'@media screen and (max-width: 500px)': {
    maxWidth: '100%',
    margin: '5%' ,
    overflow: 'hidden',
    fontSize: '12px'
  }}}>Developed projects and maintained Restful APIs using .Net, resulting in a 25% reduction in API response time on Chaayos E-commerce App.
Introduced new features on the product recommendation and integrated the Bazar Ecommerce App.Built applications and platform features, the following approach resulted in faster development of features and contributed to gaining more clients for BAZAR App.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: "450px",margin: "4%",height:"400px" ,backgroundColor:"#252526", borderRadius:"20px" ,transition: "background-color 0.3s", 
    "&:hover": {
      backgroundColor: "#ed8907",
      cursor: "pointer"
    },}}>
                <CardContent>
                    <WorkspacePremiumIcon sx={{marginLeft:"10%",  fontSize: '5rem', color:"white" }}/>
                    
                    <Typography sx={{marginLeft:"10%",fontSize:"30px",color:"white"}}>
                         Certifications  <a href="https://leetcode.com/u/Dhriti_Singh/" target="_blank" rel="noopener noreferrer"> <OpenInNewIcon  sx={{  fontSize: '2rem', color:"white" }}/></a> <a href="https://www.hackerrank.com/profile/dhritisingh3" target="_blank" rel="noopener noreferrer"> <OpenInNewIcon sx={{  fontSize: '2rem', color:"white" }} /></a>
                      
                    </Typography>

                    <Typography sx={{margin:"3%",color:"white",'@media screen and (max-width: 500px)': {
    maxWidth: '100%',
    margin: '5%' ,
    overflow: 'hidden',
    fontSize: '8px'
  }}}>
                  • Solved 280+ Questions on Leetcode Platform <br></br>
• Gold Badge in SQL and Gold Badge in Problem Solving on Hackerank <br></br>
• Problem Solving Certification and Java Certification on Hackerank <br></br>
• Programming and Problem-Solving Certification in Java (Pepcoding India Pvt. Ltd)<br></br>
• Data Structures and Algorithms in C++ (Coding Blocks)<br></br>
• Achieved 2nd Rank in HackGTBIT Hackathon 
                    </Typography>
                </CardContent>
            </Card>
            </div>
         </div>
    )
}