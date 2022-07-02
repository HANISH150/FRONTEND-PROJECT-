import React from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom';

function Home() {
  const navigate=useNavigate();
  return (
    <>
    <div className="home1 container mx-auto">
      <div className="row">
        <div className="col-5">
          <img src="images\friends.svg" alt="" />
        </div>
        <div className="c1 col-7">
          <h3 className='text-center'>HeLLo TheRe!!</h3>
          <p>Are u searching to roam around and chill with ur friends??</p>
          <p>If yes, then its GREAT!!</p>
          <p>^-^ Check out our site for such great stuff ^-^</p>
          <div className='text-center'><button className='homeb1 m-3 ' onClick={()=>navigate('/options')} >CHECK OUT</button></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
