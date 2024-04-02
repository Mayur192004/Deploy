import {React,useState} from 'react'
import {FaQuoteLeft,FaQuoteRight } from 'react-icons/fa';
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import './Card.css'

export default function Card(props) {

  const [readmore, setReadmore] = useState(false);
  const readmoreHandler = () => {
      setReadmore(!readmore);
  };
    let onedata=props.onedata;

    const description = readmore ? onedata.text : `${onedata.text.substring(0, 200)}....`;

  return (
    <div className=''>
      <div className='image'>
      <img src={onedata.image} className='image image1  float-start shadow-lg' />
      <div className='backcircle '> </div>

     </div>
     
   <div className="name">
       <h3 className=' '>{onedata.name}</h3>
       </div>   
       <div className='exam_name'>
            <h5 >{onedata.exam}</h5>
            </div>
      <div>
        <FaQuoteLeft/>
      </div>

      <div className='para'>
        <p>{description}</p>
        <span onClick={readmoreHandler} className="readmore btn-primary">{readmore ? 'show less' : 'read more'}</span>

      </div>
      <div>
        <FaQuoteRight/>
      </div>
      
    </div>
  )
}
