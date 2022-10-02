import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import { imgUrl } from '../../constants/constants'
import './stylec.css'
export default function Carrousal(props) {
const [movies,setMovies]=useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
    })

  })
  return (
    <div>
        <div className="heading">
            <h2>{props.title}</h2>
        </div>
        <div className="container2">
            <div className='ps'>
            {movies.map((obj)=>
            <img className={props.isSmall ? 'smallPoster':'poster'}  src={`${imgUrl+obj.poster_path}`} alt="" ></img>

            )}
            </div>
           

        </div>
    </div>
  )
}
