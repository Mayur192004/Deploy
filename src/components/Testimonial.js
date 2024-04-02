import {React,useState} from 'react'
import Card  from './Card';
import './Testimonial.css'
import {FaQuoteLeft,FaQuoteRight } from 'react-icons/fa';
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";


function Testimonial(props) {
   
  const[index,setindex]=useState(0);

  function leftshifthandler(){
    if(index-1<0){
       setindex(data.length-1);
    }
    else{
      setindex(index-1);
    }
  }
  function rightshifthandler(){
    if(index+1>=data.length){
      setindex(0);
   }
   else{
     setindex(index+1);
   }
  }
  function lastbuttonhandler(){
      let randindex= Math.floor( Math.random()*data.length);
      setindex(randindex);
  }

    let data=props.data;
  return (
    <div className='card shadow-on-hover rounded'>
      <Card onedata={data[index]}> </Card>

      <div onClick={leftshifthandler} className='page_next'> <button className='btn btn-dark leftbutton'><BsArrowLeftSquare/></button> 
             <button onClick={rightshifthandler} className='btn btn-dark right button'> <BsArrowRightSquare/></button> 
      </div>

      <div> <button onClick={lastbuttonhandler} className='btn btn-primary rounded shadow mt-6 mb-5'>Jai Shree Ram !!</button></div>
    </div>
  )
}

export default Testimonial;
