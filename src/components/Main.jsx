import { useState } from "react"
import avatars from "../avatars"
import InnerContainer from "./InnerContainer"
export default function Main(){
    let [selected,setSelected] = useState(0)
    let [cardDisplay ,setCardDisplay] = useState(false)
    let [movingBorder,setMovingBorder] = useState(null)
    console.log(avatars[selected])
    function handleClick(i){
        setTimeout(()=>{
            setSelected(i)
            setMovingBorder(null)
            setCardDisplay(false)
        },2000)
        setMovingBorder(i)
    }
    return (
        <div className="outer-container">
            <img style={{border:cardDisplay?"1px solid #69737a":""}}  onClick={()=>!cardDisplay?setCardDisplay(true):setCardDisplay(false)} className="curr img"  src={avatars[selected].src}  alt="" />
           <InnerContainer handleClick ={handleClick} cardDisplay={cardDisplay} movingBorder ={movingBorder} selected = {selected} />
        </div>
    )
}