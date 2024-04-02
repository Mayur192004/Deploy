import logo from './logo.svg';
import './App.css';
import Testimonial from './components/Testimonial';
import { useState } from 'react';
 

const data=[
  {
    id:1,
    name:"Mayur Deshmukh",
    exam:"NTSE",
    image:"https://img1.wsimg.com/isteam/ip/c20e576c-caf7-40c2-a67a-4884de694192/NTSE.PNG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true",
    text:"NTSE or National Talent Search Examination is a national level exam conducted by the National Council of Educational Research and Training (NCERT) for granting scholarships to meritorious students studying in class 10th.",
  },
  {
    id:2,
    name:"Mayur Deshmukh",
    exam:"MTSE (Class 9)",
    image:"https://www.successcds.net/images/mtse-maharashtra-talent-search-examination-2021.webp",
    text:'Centre for Talent Search and Excellence, N. Wadia College, Pune, conducts the MTSE Exam 2024. Online Application Forms for MTS Examination 2024 will be available on the website from 1st November 2024. This talent search exam is open for students studying in classes 8, 9, and 10 in government-recognized schools.2 Nov 2023',  },
  {
    id:3,
    name:"Mayur Deshmukh",
    exam:"RMO(Class 10)",
    image:"https://d20x1nptavktw0.cloudfront.net/wordpress_media/2019/08/rmo-banner-1.png",
    text:"RMO or Regional Math Olympiad is the second stage of the mathematics talent search examination that is conducted in India. The exam is conducted by Regional Coordinator under the guidance of Homi Bhabha Centre for Science Education (HBCSE), Mumbai. The regional coordinator is in charge of conducting evaluations of the answer sheets. After checking the answers of the students, the results are sent to HBCSE where it is declared online.",  },
  {
    id:4,
    name:"Mayur Deshmukh",
    exam:"JEE MAIN(2022)",
    image:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/09/jee-main-1599573866.jpg",
    text:"The AIEEE was introduced in 2002, since the newly established NIT and IIIT universities wanted an entrance examination paper of a higher standard than the Common Engineering Test (CET), which was formerly used for admission to all non-IIT engineering universities, including even RECs and IIITs, owing mostly to the rising competition and the goal of maintaining the exclusiveness of such institutes of national importance. It was renamed to JEE-Main in 2013.",  },
  {
    id:5,
    name:"Mayur Deshmukh",
    exam:"JEE ADVANCED(2022)",
    image:"https://education.sakshi.com/sites/default/files/images/2022/04/15/jee-advanced-1650010868.png",
    text:'It has been ranked as one of the toughest exams in the world.[8][9] High school students from across the country prepare for several years to take this exam, and most of these students have attended coaching institutes. The difficulty and low acceptance rate puts extreme pressure on students taking the exam. In an interview in 2018, former IIT Delhi director V. Ramgopal Rao, famously said that the exam is "tricky and difficult" because it is framed to "reject candidates, not to select them"',  },
];

function App() {

  return (
    <div className="App bg-dark bg-opacity-10 ">

      <div className='text  '>

        <div><h2 className='heading h2'>My Acheivements (*)</h2></div>

        <div><p className='line'></p> </div>

        <Testimonial data={data}> </Testimonial>

        </div>
    </div>
  );
}

export default App;


  