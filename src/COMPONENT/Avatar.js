
import React from 'react'

export const Avatar = (props) => {
    const {urL ,width="100px", height="100px"} = props;
    return (
        <>
           <div style={{ width,height,margin:"auto"}}>
         <img src={urL}  className="rounded-circle card-img-top" />
         </div>
     </>
    )
}


