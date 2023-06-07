


const Kid =({item})=>{
    return(
    <div>
        kids
        {
        item.map((i)=>(
            <h1>{i}</h1>
        ))
    }
    </div>
    )
    
}
export default Kid;