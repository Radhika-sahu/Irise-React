

import { useNavigate } from "react-router-dom";
const Navbar=()=>
{
    const router=useNavigate();
    return(
        <div style={{display:"flex",justifyContent:"space-around"}}>
<div onClick={()=>router('/Men')}>Mens</div>
<div onClick={()=>router('/Women')}>Womes</div>
    <div onClick={()=>router('/Kid')}>Kids</div>
    </div>
    )
}
export default Navbar;