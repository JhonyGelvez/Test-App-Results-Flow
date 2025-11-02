import {useState} from "react";
export default function Test({onFinish}){const qs=[{q:'2+2?',a:'4'},{q:'Capital of France?',a:'Paris'}];
const[ans,setAns]=useState({});
return (<div><h2>Test</h2>{qs.map((x,i)=><div key={i}><p>{x.q}</p><input onChange={e=>setAns({...ans,[i]:e.target.value})}/></div>)}<button onClick={()=>onFinish(ans,qs)}>Finish</button></div>);}
