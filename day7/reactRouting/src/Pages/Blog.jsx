import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Blog() {
  const [offset,setOffset]=useState(0);
  const limit=10;
  
  const data = useLoaderData();
  console.log(data);
  const pages=Math.ceil(data.length/limit);
  
  return <div>{

     data.slice(offset,limit+offset).map((d)=>{
      return <div key={d.id}>
        {d.title}
      </div>
     })
     
    }

    <button disabled={offset===0} onClick={()=>setOffset(offset-limit)}>Prev</button>
    {
      Array(pages).fill(0).map((ele, idx)=> <button className="p-2 m-2 border border-black" style={{
        backgroundColor:`${offset/limit === idx ?'yellow':'white'}`   
      }} onClick={()=>{
        setOffset(idx*limit)
      }} key={idx}>{idx+1}</button>
      )
    }
    <button  disabled={offset/10===pages-1} onClick={()=>setOffset(offset+limit)}>Next</button>
    </div>;
}


export default Blog;
