import { Typography } from "@mui/material";
import React from "react";

const titles={
                "Skills":[{domain:"Web Development",
                content: "JavaScript, HTML ,CSS ,Bootstrap,Material UI , JavaScript (Node.js) ,React Js  ,Angular "
                } ,
                {domain:"Jave Development",
                content: "Core Java, Spring , Spring boot, Design Patterns, JUnit ,OOPS, Multithreading"
                }   ,
                {domain:"Data Structure And Algorithms",
                content: "Arrays, String,Maps,Recursion,Backtracking,Linked List, Dynamic Programming,Graphs, Greedy Algorithms, Trees"
                }   ,
                {domain:"Databases",
                content: "MySQL, MongoDB"
                } ] ,

                "Experience":[
                {domain:"July 2022 – July 2023",
                content: "Software Engineer at Chaayos Sunshine Teahouse Pvt. Ltd ,New Delhi, India"
                } ,
                {domain:"Jan 2022 – June 2022",
                content: "Software Enginerr Intern at Chaayos Sunshine Teahouse Pvt. Ltd ,New Delhi, India"
                }   ,
                {domain:"Jan 2021 – Oct 2021",
                content: "Teaching Assistant at Pepcoding India Pvt. Ltd,New Delhi, India "
                }   
                ],
                
                "Education":[
                    {
                    domain:"2023-2025 (Expected)",
                    content: "Masters In Applied Computer Science",
                    cgpa:"CGPA: 3.34"},
                    {domain:"2018- 2022",
                    content: "Bachelor of Technology, Guru Gobind Singh Indraprastha University",
                    cgpa:"CGPA: 9.36/10"
                    }  
                    ]
            }

export function AboutContent({title}){
    return(
        <div>
          {
            titles[title].map((obj,index)=>(
                <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h8" color="#ed8907" fontWeight="bold">{obj.domain}</Typography>
                <Typography variant="h8" color="white">{obj.content}</Typography>
                <Typography variant="h8" color="white">{obj.cgpa?obj.cgpa:""}</Typography>
                </div>
            ))
          }
        </div>
    )
}