import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './About.css';
import { AboutContent } from './AboutContent';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';
import { CarouselProvider, Slider, Slide,Image } from 'pure-react-carousel';
import insta from '../Assets/insta.png';
import movie from '../Assets/movie.png';
import Pagination from '@mui/material/Pagination';


// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';


function About() {
  
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='about-container' id="about">
      <Card className='card-data' sx={{maxWidth:"50%", height:"100%", backgroundColor:"black",color:"white",'@media screen and (max-width: 650px)': {
    maxWidth: '100%',
    width: "100%" // Change maxWidth for screens <= 500px
  },}}>
              <Typography sx={{textAlign:'justify',marginLeft:"10%",marginTop:"11%",fontWeight:"bold" ,fontSize:"60px",color:"#ed8907"}}>About Me</Typography>
              <CardContent sx={{height:"100%", marginLeft:"5%",marginRight:"5%",marginTop:"2%"}}>
                <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: "left",lineHeight: '2'}}>
                 I am a seasoned Software Engineer with extensive experience spanning multiple industries, including Dynamic menu creation and ordering flow for channel partners  with Swiggy and Zomato. Specializing in backend development, I have played a pivotal role in architecting and implementing robust systems using technologies like Java, Spring Boot, and OTP using AWS SQS QUEUE. My expertise extends to crafting scalable solutions to complex problems, evident in my work optimizing delivery workflows and enhancing customer experiences at leading food delivery platforms. With proficiency in Java, Spring Boot, OTP, and other technologies, I spearheaded projects like the Chaayos Dine-In Ecommerce App and contributed to innovative solutions. Additionally, my proactive problem-solving approach and effective communication skills consistently drive impactful outcomes in diverse environments.
                </Typography>

              </CardContent>
           </Card>
         
           


                
    <Box sx={{ maxWidth:"50%",width: '100%', typography: 'body1',marginTop:"3%" ,'@media screen and (max-width: 500px)': {
    maxWidth: '100%',
    margin: '5%' // Change maxWidth for screens <= 500px
  },}}>
      <TabContext value={value}>
        <Box >
          <Tabs
          value={value}
          onChange={handleChange}
          textColor="#ed8907"
          indicatorColor="#ed8907"
          aria-label="secondary tabs example"
          sx={{marginTop: "20%"}}
        >
          {/* <TabList onChange={handleChange} > */}
            <Tab label="Skills" value="1" sx={{color: value === "1" ? "#ed8907" : "white" }} />
            <Tab label="Experience" value="2" sx={{color: value === "2" ? "#ed8907" : "white" }} />
            <Tab label="Education" value="3" sx={{color: value === "3" ? "#ed8907" : "white" }}/>
          {/* </TabList> */}
          </Tabs>
        </Box>
        <Box sx={{margintTop:"10%"}}>
        <TabPanel value="1"><AboutContent title="Skills"/></TabPanel>
        <TabPanel value="2"><AboutContent title="Experience"/></TabPanel>
        <TabPanel value="3"><AboutContent title="Education"/></TabPanel>
        </Box>
      </TabContext>
    </Box>
    </div>
  );


  // return (
  //   <div className='card-container-about'>
  //    {cards.map((card, index) => (
  //       <Card key={index} sx={{ maxWidth: 500, cursor: 'pointer', margin: '10px', border: selectedCard === index ? '2px solid blue' : '1px solid', padding: '10px' }} onClick={() => handleCardClick(index)}>
      
  //         <CardContent>
  //           <Typography gutterBottom variant="h5" component="div">
  //             {card.title}
  //           </Typography>
  //           {selectedCard === index && <Typography variant="body2" color="text.secondary"><AboutContent title={card.title} /></Typography>}
  //         </CardContent>
  //       </Card>
  //     ))}
  //   </div>
  // );
}

export default About;
