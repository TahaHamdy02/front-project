import React from 'react'
import { Link } from 'react-router-dom'
import './mainbg.css'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
const Mainbg = ({pageTiltle,path1,to1,path2,to2,path3,to3}) => {
  return (
    <div className='app__mainbg flex__center'>
      <h1 className='headtext__cormorant'>{pageTiltle}</h1>
      <h4 className="app__mainbg-path">
      
        <Link to={to1} >{path1}</Link>   
         {path2 ? <MdOutlineKeyboardArrowRight/> :null}
         {path2 ? <Link to={to2}>{path2}</Link> :null}
         {path3 ? <MdOutlineKeyboardArrowRight/>:null}
         {path3 ? <Link to={to3}>{path3}</Link>:null}
          </h4>
    </div>
  )
}

export default Mainbg
