import React, { useState } from "react";
import MyCard from "./MyCard";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import insta from '../Assets/insta.png';
import movie from '../Assets/movie.png';
import warzone from '../Assets/warzone.png';
import traffic from '../Assets/traffic.png';
import library from '../Assets/library.png';
import tummy from '../Assets/tummy.png';

import './Projects.css';


let cards={
    "Movie":{
        title:"Movies Web App",
        content: "The Movie Web app is powered by ReactJS, which showcases a movie recommendation system based on selected genre and it utilizing local storage for user preferences. It features pagination, favorites management, detailed movie info, related movies, search functionality, sorting, and custom CSS styling for an engaging user experience",
        src:{movie},
        link:"https://dhritisingh18.github.io/movies",
        tag:"movie"
    },
    "Insta":{
        title:"Instagram Web App",
        content: "Introducing Instagram Web App Clone: A dynamic platform mirroring Instagram's functionality, powered by Firestore for seamless backend operations. Ensures secure login/signup, efficient database handling, and forget password feature. Users can upload videos, engage with content, and enjoy auto-play feed. Built with React.js, Material UI, functional components, hooks, and NoSQL database for a delightful experience.",
        src:{insta},
        link:"https://reels-app-92c5c.web.app",
        tag:"insta"
    },
    "Warzone":{
        title:"Warzone Game",
        content: "My project involves developing a Risk computer game compatible with Warzone's rules and map files. Utilizing various design patterns like State, Singleton, and Command, we ensure scalability and flexibility. With comprehensive JavaDoc and rigorous testing using JUnit, our implementation promises an immersive gaming experience.",
        src:{warzone},
        link:"https://github.com/dhritisingh18/Warzone-Game/tree/master",
        tag:"warzone"
    },
    "Traffic":{
        title:"Traffic Sign Detection",
        content: "Applied analytical skills to spearhead an innovative project leveraging Artificial Intelligence methodologies, including Convolutional Neural Network (CNN) models such as ResNet 18, ShuffleNet V2, and MobileNet V3, to revolutionize traffic sign detection accuracy and efficiency. Experience with TensorFlow, SciKit, and PyTorch was utilized for fine-tuning LLMs, along with data cleaning, feature engineering,statistical analysis.",
        src:{traffic},
        link:"https://github.com/dhritisingh18/COMP6721-GroupA",
        tag:"traffic"
    },
    "Library":{
        title:"Libray Management Sysytem in C# .NET",
        content: "Developed a comprehensive Library Management System utilizing C# and .NET framework, featuring an intuitive user interface and exceptional UX design. Implemented advanced functionality for book cataloging, borrower management, and real-time inventory tracking, ensuring efficient library operations and seamless user experience.",
        src:{library},
        link:"https://github.com/dhritisingh18/Library-Management-System",
        tag:"library"
    },
    "Tummy":{
        title:"The Tummy Section",
        content: "Developed a fullstack app, an online food delivery app, featuring multi-vendor support, tailored admin panels, secure role-based access, customized food ordering, menu creation and user-friendly functions with compliance and security support. Utilized Spring Boot, Java, React and Redux, SQL Server.",
        src:{tummy},
        link:"https://github.com/dhritisingh18/Tummy-Section",
        tag:"tummy"
    }
}



export function Projects(){
    const [showCard, setShowCard] = useState(false);
    const handleButtonClick = ()=>{
        if(showCard===true){
            setShowCard(false);
        }
        else{
            setShowCard(true);
        }
    }

    return(
        <div className="project-container" id="projects">
        <Typography sx={{textAlign:'justify',marginLeft:"5%",marginTop:"3%",marginBottom:"3%",fontWeight:"bold" ,fontSize:"60px",color:"#ed8907"}}>Projects</Typography>
 
        <div className="div-cards" style={{display:"flex",flexWrap:"wrap",backgroundColor:"black",justifyContent:"space-around",width:"100%"}}>

        <MyCard info={cards.Tummy}/>
        <MyCard info={cards.Insta}/>
        <MyCard info={cards.Warzone}/>
       {showCard &&  <MyCard info={cards.Traffic}/>}
       {showCard && <MyCard info={cards.Library}/>}
       { showCard && <MyCard info={cards.Movie}/>}
       

        </div>
        <div sx={{textAlign:"center"}}>
        <Button  size="medium" variant="contained" onClick={handleButtonClick} className="button-download" sx={{ textAlign:"center",fontSize: '1rem', marginRight:"12px",color:"Window",backgroundColor:"#ed8907","&:hover": {
            backgroundColor: "#ed8907",
        } ,'@media screen and (max-width: 500px)': {
          maxWidth: '100%', 
          marginRight: "30%",
          fontSize:"0.8rem",
          display: "block"
        },}}>{showCard?"View Less":"View More"}</Button>
        </div>
        </div>
    )
}