'use client'


import React,{FC,useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import Button from '@mui/material/Button';
import Image from 'next/image'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link as Link_} from "@nextui-org/react";
import SchoolIcon from '@mui/icons-material/School';
import {Chip} from "@nextui-org/react";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessForm from "./Form";
import { BrowserRouter as Router, Route,Link, Routes } from 'react-router-dom';



export default function Home() {

  return (  
    
    <main className="flex min-h-screen flex-col  items-center justify-between">
      
      <section className='justify-center' id='home'>
      <Navbar/>
      
      <MYProfile/>
      <CVButton/>

      </section>
      
      <Typography variant="h5" className=' font-semibold' color={'GrayText'} noWrap component="div" sx={{ flexGrow: 2 ,mt:10,mb:3}}>ABOUT ME</Typography>
      <section id='about'>
      
      <Intro />
      </section>
      <Typography variant="h5" className=' font-semibold' color={'GrayText'} noWrap component="div" sx={{ flexGrow: 2 ,mt:10}}>MY EDUCATION</Typography>
      <section className='mx-6 justify-between' id='education'>
      
      <Education STD={' Matriculation'} href={"https://drive.google.com/file/d/1JbkalhYqZCGCGTi6YLMvqyLEw3qpSCtx/view?usp=sharing"} School='Pune university' yr=" 2018-19 "/>
      <Education STD={'Higher Secondary School'} href={"https://drive.google.com/file/d/1HFXtpYVcvxPLhMvco-whzvCg1xNXOcBT/view?usp=sharing"} School='Pune university' yr=" 2020-21 "/>
      <Education STD={'Bachelor Degree'} href={""} School='Pune university' yr=" 21- "/>
      </section>
      <Typography variant="h5" className=' font-semibold' color={'GrayText'} noWrap component="div" sx={{ flexGrow: 2 ,mx:24,my:3,}}>MY SKILLS</Typography>
      <section className='container grid  grid-rows-3 items-center justify-center lg:h-100 px-4  space-y-4 mt-4' id='skill'>
        
        <div className='items-center grid grid-cols-5 grid-rows-1 gap-6   bg-gray-200 pl-10  rounded-md'>
        <Skills src='/react.png' name='React.js'/>
        <Skills src={'/html.png'} name='.html'/>
        <Skills src='/css-3.png' name='.css'/>
        <Skills src='/js.png' name='.js'/>
        <Skills src='/bootstrap.png' name='Boostrap'/>
        </div>
        <div className='items-center grid grid-cols-5 grid-rows-1 gap-6   bg-gray-200 pl-10  rounded-md'>
        <Skills src='/github.png' name='github'/>
        <Skills src='/mysql.png' name='mysql'/>
        <Skills src='/mongodb.png' name='mongodb'/>
        <Skills src='/next.png' name='next'/>
        <Skills  src='/Django.png' name='django'/>
        </div>
        <div className='items-center grid grid-cols-5 grid-rows-1 gap-6   bg-gray-200 pl-10  rounded-md'>
        <Skills src='/keras.png' name='keras'/>
        <Skills src='/tensorflow.png' name='tensorflow'/>
        <Skills src='/sklearn.jpg' name='Sklearn'/>
        <Skills src='/flutter.png' name='flutter'/>
        <Skills  src='/android.png' name='android'/>
        </div>

      </section>
      <Typography variant="h5" className=' font-semibold' color={'GrayText'} noWrap component="div" sx={{ flexGrow: 2 ,mx:24,mt:16}}>MY PROJECTS</Typography>
      <section className='flex lg:flex-row flex-col my-8' id='project'>
      <Projects img="/tensorflow.png" title="Emart" text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" />
      <Projects img="/tensorflow.png" title="Ping Pong AI game" text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"/>
      <Projects  img="/tensorflow.png" title="Tic Tac Toe AI app" text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"/>
      </section>
      <Typography variant="h5" className=' font-semibold' color={'GrayText'} noWrap component="div" sx={{ flexGrow: 2 ,mx:24,my:2,}}>CONTACT ME</Typography>
      <section className='flex flex-row my-8 w-full' id='contact'>
        <Form/>
      </section>
      <Footer/>
    </main>
    
  )
}







function appBarLabel(label: string) {


 
  
  return (
    <>
    <Toolbar >
    <Typography variant="h5" className=' font-semibold mx-4' color={'GrayText'} noWrap component="div" sx={{ flexGrow: 2 }}>
   
        {label}
      </Typography>
      <IconButton  edge="end" color="inherit" aria-label="menu" sx={{ mr: 4 }}>
      
        
        <NightsStayIcon />
      
        
      </IconButton>
      <Menu />
      
      
      
    </Toolbar>
    
    </>
  );
}



const theme = createTheme({
  palette: {
    mode:'light',
    primary: {
      main: '#fffff',
      },
    },
  });

function Navbar() {
  

    return (
    
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider  theme={theme}>
        
        <AppBar position="fixed"  color="inherit"  sx={{ boxShadow: 0 }}>
          {appBarLabel('Pratik')}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}

function Menu() {
  const items = [
    {
      href:'#home',
      key: "new",
      label: "Home",
    },
    {
      href:'#about',
      key: "copy",
      label: "About",
    },
    {
      href:'#education',
      key: "education",
      label: "Education",
    },
    {
      href:'#skill',
      key: "edit",
      label: "Skills",
    },
    {
      href:'#project',
      key: "delete",
      label: "Projects",
    },
    {
      href:'#contact',
      key: "delete",
      label: "Contact",
    },
    

  ];

  return (
    <Dropdown>
      <DropdownTrigger>
      <IconButton edge="end" color="inherit" aria-label="menu" sx={{ mr: 4 }}>
       
       <MenuIcon />
     </IconButton>
      </DropdownTrigger>
      <DropdownMenu  className='flex w-40 rounded-lg items-center justify-center shadow-md  bg-white '  items={items} style={{margin:" 0 0 0 -0.7rem"}}>
        {(item) => (
          <DropdownItem
            key={item.key}
            color={'primary'}
            className=' justify-center hover:bg-gray-200'
            href={item.href}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
        
}


function MYProfile(){
  return (
    <>
    
    <section className=' items-center my-3' style={{height:'26rem'}}>
      <div className='relative  w-80 h-80 items-center'>
        <div className=' absolute  object-right  '>
          <Blob url='name'/>
        </div>
        
        
      </div>
      <Title/>
      <Connect/>
        

    </section>
    
    </>
  )
}
function CVButton(){
  return(
    <div className=' mx-24'>
    <Button variant="outlined"  color='primary'   href='https://docs.google.com/document/d/1PzLgYV0vm3BsbVXcwsHOjBsJNHE_vraTTxf8-oYSVmI/edit?usp=sharing' >
      Download CV
    </Button>
    </div>
        
      
  )
}

interface Blobprops {
  url: string,
  
}
const Blob : FC<Blobprops>=(props? ): JSX.Element=>{
  
  return (
   <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg" style={{opacity: 1,height:'25rem'}} filter="blur(0px)" transform="rotate(0)"><image x="0" y="0" className='block object-contain align-middle justify-end max-h-2' width="100%" height="100%" clipPath="url(#shape)" href="https://media.licdn.com/dms/image/D4D03AQH-Jf2x9M3Bbw/profile-displayphoto-shrink_800_800/0/1704433276138?e=1710979200&v=beta&t=UJOdjAbFBSwlNY27-bd3CAVapQ4lCiqdRVIpc2QO1B0" preserveAspectRatio="none"></image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style={{color: 'rgb(246, 106, 234)'}}></stop>                            <stop offset="100%" style={{color: 'rgb(246, 106, 234)'}} ></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="19700ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></svg>
        )
}


function Title(){
  return (
    <>
     <Typography  variant="h5" noWrap component="div" sx={{ flexGrow: 2 ,textAlign:'center',mt:'1rem'}}>
     👋Hii i am Pratik Date
      </Typography>

    
    </>
  )
}

function Connect(){
  return(
    <>
    <div style={{width:'15rem',padding:'0 0 0 4rem'}}>
    <div className='flex flex-row   justify-between  my-1 mx-3 '>
      <IconButton  href={"https://wa.me/9767451907"}><WhatsAppIcon   /></IconButton>
      <IconButton href='https://www.linkedin.com/in/pratik-date-883023244'><LinkedInIcon/></IconButton>
      <IconButton href='https://twitter.com/PratikDate35561'><TwitterIcon /></IconButton>
      <IconButton href="https://github.com/Pratikdate"><GitHubIcon/></IconButton>
      <IconButton href=""><TelegramIcon/></IconButton>

    </div>
    </div>

    </>
  )
}






function Intro(){
  return(
    <>
    <section className='flex flex-row p-3 ' id='#about'>
      <div className='block  text-center  justify-around'>
      <p> I am a computer science student with a passion for technology, programming, and artificial intelligence. 🧠</p>
      <p>I am always hungry for new knowledge and strive to explore the latest trends and tools that help me create innovative solutions. 💻</p>
      <p>My passion for artificial intelligence goes beyond my studies - I aim to understand its various aspects and how it can be applied to solve real-world problems.</p>
      <p>I believe that the future of technology lies in the hands of AI, and I am excited to be a part of that future.</p>
      <p>On my GitHub, you will find various projects related to programming and artificial intelligence that showcase my growth and learning in these areas.</p>
      <p>With each project, I aim to learn something new and enhance my skills.</p>
      <p>Feel free to explore my projects and reach out to me if you have any questions or would like to discuss potential collaboration opportunities.</p>
      <p>Thank you for visiting my profile. I'm glad you're here! 🎉</p>
      </div>
    </section>
    </>
  )
}




interface Edu{
  School:string,
  href:string,
  STD:string,
  yr:string

}

const Education: FC<Edu>=(props?):JSX.Element=>{ 
  return(
    <>
    <Card className="lg:w-[600px] md:w-[500px] sm:w-[400px] my-6 shadow-md hover:shadow-2xl" >
      <CardHeader className="flex gap-3">
        <SchoolIcon/>
        
        <Chip radius="md" style={{borderRadius:'4px',padding:'0 0 0.1rem 0.1rem',background:"#a8acb3",margin:'0.1rem 0 0 0' }} variant="shadow" >{props?.yr}</Chip>
          
        
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{props?.STD}</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link_
          isExternal
          showAnchorIcon
          href={props?.href}
        >
          {props?.School}
        </Link_>
      </CardFooter>
    </Card>
    

    </>
  )
}

interface Skillsprops{
  src: string,
  name: string
}



const Skills:FC<Skillsprops> =(props):JSX.Element =>{
  return (
    <Card
      isFooterBlurred
      radius="md"
      className="border-solid  shadow-lg items-center  justify-center p-2 bg-slate-300  rounded-md  "
    >
       <Image
        alt="Woman listing to music"
        className='rounded-md'
        height={60}
        src={props.src}
        width={60}

      />
      
      <CardFooter className="w-full justify-center items-center">
      
        {props.name}
      
      </CardFooter>
    </Card>
  );
}


interface ProjectInterface{
  img:string,
  //share:string,
  //learn_more:string,
  text:string,
  title:string,

}

const Projects:FC<ProjectInterface>=(props):JSX.Element=>{
  return(
    <>
    <Card className='shadow-md  hover:shadow-current mx-4 my-4' style={{ maxWidth: 280 }}>
      <CardMedia
        sx={{ height: 120 }}
        image={props.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
  )

}




function Form(){
  return(
    <>
    <div className='  flex  flex-row w-full h-60 items-center justify-center   '>
      <div className='flex flex-col w-full h-60    max-md:hidden    items-center justify-between  '>
        <Typography variant="h6"  noWrap component="div" sx={{ flexGrow: 2 ,mx:1}}>
          <AddIcCallIcon className='mr-2' fontSize='large' color='primary'/>
          Contact me
          <Typography className='ml-8' color={'gray'} variant='body2' noWrap component="div" sx={{ flexGrow: 2 ,mx:1}}>+91 9767451907</Typography>
        </Typography>

        <Typography variant="h6"  noWrap component="div" sx={{ flexGrow: 2 ,ml:8}}>
          <MailOutlineIcon className='mr-2' fontSize='large' color='primary'/>
          Email
          <Typography className='ml-8' color={'gray'} variant='body2' noWrap component="div" sx={{ flexGrow: 2 ,mx:1}}>pratikdate100@gmail.com</Typography>
        </Typography>

        <Typography variant="h6"  noWrap component="div" sx={{ flexGrow: 2 ,mr:4}}>
          <AddLocationAltIcon className='mr-2' fontSize='large' color='primary'/>
            Location
          <Typography className='ml-8' color={'gray'} variant='body2' noWrap component="div" sx={{ flexGrow: 2 ,mx:1}}>Pune,India</Typography>
        </Typography>
        </div>
        <MessForm/>
    </div>
    
    
    </>
  )
}


function Footer(){
  return(
    <>
    <Typography className='mb-6' color={'gray'} variant='body2' noWrap component="div" sx={{ flexGrow: 2 ,mx:1}}>Made with <FavoriteBorderIcon/> by Pratik</Typography>
        
    </>
  )
}