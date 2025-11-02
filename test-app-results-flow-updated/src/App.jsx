import {useState} from "react";
import Test from "./Test";import Result from "./Result";
export default function App(){const[user,setUser]=useState(null);const[q,setQ]=useState(null);
return user ? <Result userAnswers={user} questions={q} onBack={()=>setUser(null)}/> : <Test onFinish={(ua,qs)=>{setUser(ua);setQ(qs);}}/>;
}
