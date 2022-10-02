import React from 'react'
import './style.css'
import Logo from './images/logo.png'
import { useEffect, useState } from 'react'
export default function Navbar () {
  const[color,setColor]=useState('')
  const listenScrollEvent=()=>{
    if (window.scrollY > 200) {
      setColor('rgba(0, 0, 0, 10');
    }
      else{
        setColor('')
      }
  }
  useEffect(()=>{
      window.addEventListener('scroll',listenScrollEvent)
  })
  return (
    <div className='main'  style={{backgroundColor:color}}>
        <div className="title">
        <img className='logo' src={Logo} alt="" />
        </div>
        <div className="noti">
           <a href="/home">Home</a>  <a href="/abt">TVShows</a>   <a href="/con">Movies</a>  <a href="/con">Series</a> 
       
        </div>
        <div className="profile">
        <img src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'alt="" />
        </div>
    </div>
  )
}
