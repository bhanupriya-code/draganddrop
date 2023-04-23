import { useState } from "react"
import classes from './Clock.module.css'

const Clock = () => {

    let time = new Date().toLocaleTimeString()

    const[currentTime, setCurrentTime] = useState(time)

    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        setCurrentTime(time)

    }

    setInterval(updateTime, 1000)
return(
    <>
    <h1 className={classes.digtime}>{currentTime}</h1>
    </>
)
}

export default Clock