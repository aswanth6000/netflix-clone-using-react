import React,{useEffect, useState} from 'react'
import { API_KEY , imgUrl } from '../../constants/constants'
import axios from '../../axios'
import './styleb.css'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/movie/week?api_key=${API_KEY}`).then((response)=>{
      setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
    })
  },[])
  return (
    <div className='main2'>
        <div className="container" style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path : ""})`}}>
          <div className="name">
          <h1>{movie ? movie.title : ""}</h1>
          </div>
          <div className="info">
            <button>
              Play
            </button>
            <button>
              Watchlater
            </button>
          </div>
          <div className="p">
            <p>
              {movie ? movie.overview : ""}
            </p>
          </div>
        </div>
    </div>
  )
}
export default Banner