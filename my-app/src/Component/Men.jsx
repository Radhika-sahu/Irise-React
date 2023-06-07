import { useState } from "react";



const Men =({image})=>{
    const [number,setnumber]=useState(5674);
    const [isLike,setLike]=useState(true);
   function counter(){
 setnumber((prevState)=>prevState+1);
    }
    function dcounter()
    {
        setnumber((prevState)=>prevState-1);
    }
    function like()
    {
        setLike(false)
        alert("Liked")
    }
    return(
        <div>
          <h1>Mens</h1>  
          <h2>counter:{number}</h2>
          <button onClick={counter}>+</button>
          <button onClick={dcounter}>-</button>
          {isLike?<h2>Liked</h2>:<h2>NotLiked</h2>}
          <button onClick={like}>like</button>

         {image.map((i)=>(
            <div>
            <h1>images:</h1>
            <img src={i}/>
            </div>
          ))}
        </div>
    )
}
export default Men;