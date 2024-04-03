import React from "react";
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
}




export function Projects(){
    return(
        <div className="project-container" id="projects">
        <Typography sx={{textAlign:'justify',marginLeft:"5%",marginTop:"3%",marginBottom:"3%",fontWeight:"bold" ,fontSize:"60px",color:"#ed8907"}}>Projects</Typography>
 
        <div className="div-cards" style={{display:"flex",flexWrap:"wrap",backgroundColor:"black",justifyContent:"space-around",width:"100%"}}>

          
        <MyCard info={cards.Insta}/>
        <MyCard info={cards.Warzone}/>
        <MyCard info={cards.Movie}/>

        </div>
        </div>
    )
}