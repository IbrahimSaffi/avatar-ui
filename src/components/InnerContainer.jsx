import React from 'react'
import avatars from "../avatars"

export default function InnerContainer(props) {
  return (
    <div style={{display:props.cardDisplay?"flex":"none"}} className='card' >
        <div className="arrow"></div>
        <p className="label">Choose your avatar</p>
        <div className="avatars">
            {avatars.map((avatar,i)=>{
             return <div style={{backgroundColor:i===props.movingBorder? "#69737a":"#2C2B2B"}} className='animate' >
                <div className="animated-border"></div>
                 <img onClick={()=>
                  {
                    if(props.movingBorder===null){
                      props.handleClick(i)
                    }
                   
                  }
                  } className={i===props.movingBorder?"avatar animate":(i===props.selected?"avatar selected":"avatar")}  src={avatar.src} alt="" srcset="" />
                </div>
            })}
        </div>
    </div>
  )
}
