import React, { useRef, useState } from 'react'
import Videofooter from './componetes/footer/videofooter'
import "./video.css"

function Video() {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

        function handdleStart(){
            
            if(play){
                videoRef.current.pause()
                setPlay(false)
            } else {
                videoRef.current.play()
                setPlay(true)
            }
        }



  return (
    <div className='video'>
        <video 
            className='video__player'
            ref={videoRef}
            onClick={handdleStart}
            loop
            src='https://firebasestorage.googleapis.com/v0/b/jornada3-a7924.appspot.com/o/bird.mp4?alt=media&token=c683dc6f-f027-43e1-a9ba-43be147e4843'

        >
        </video>
        {/* side bar */}
        <Videofooter />

    </div>
  )
}

export default Video;