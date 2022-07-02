import React from 'react'
import { useNavigate} from 'react-router-dom';
import './Options.css'

function Options() {
    let moviesimg = "https://static.toiimg.com/photo/msid-90581894/90581894.jpg?114530";
    let lunchimg = "https://i.scdn.co/image/ab67706f0000000333ecfc2b6631d21a75440f95";
    let relaximg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM32MrH998skB5l8rHzznZaV9aduYjr7eApw&usqp=CAU";
    let favimg = "https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg";

    const navigate=useNavigate();
  return (
    <>
    <div className="container  mt-5">
        <div className="container text-center mb-5"><h1>CHECK IN!!</h1></div>

        <div className="card1 d-flex justify-content-center row p-5 h-50">
            <div className="card2 col-sm-3">
            <h3>MOVIES!!</h3>
                <img className='w-100 h-50 mx-auto optimg' src={moviesimg} alt="" />
                <p>Lets check out trending movies!! </p>
                <button className='b1 w-50 mx-auto ' onClick={()=>navigate('/movies')}>CLICK HERE</button>
            </div>
            <div className="card2 col-sm-3">
            <h3>LUNCH!!</h3>
                <img className='w-100 h-50 mx-auto optimg' src={lunchimg} alt="" />
                <p>Look for nearby restaurants... </p>
                <button className='b1 w-50 mx-auto ' onClick={()=>navigate('/hotels')}>CLICK HERE</button>
            </div>
            <div className="card2 col-sm-3">
            <h3>RELAX!!</h3>
                <img className='w-100 h-50 mx-auto optimg' src={relaximg} alt="" />
                <p>Get relaxed by visiting these places... </p>
                <button className='b1 w-50 mx-auto '>CLICK HERE</button>
            </div>
            <div className="card2 col-sm-3">
            <h3>FAVOURITES!!</h3>
                <img className='w-100 h-50 mx-auto optimg' src={favimg} alt="" />
                <p>Check your favourites list @ @</p>
                <button className='b1 w-50 mx-auto '>CLICK HERE</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Options
