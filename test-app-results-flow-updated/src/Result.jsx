import jsPDF from "jspdf";
export default function Result({userAnswers,questions,onBack}){return (<div><h2>Results</h2>{questions.map((q,i)=><div key={i}><p>{q.q}</p><p>Your: {userAnswers[i]}</p><p>Correct: {q.a}</p></div>)}<button onClick={()=>{const d=new jsPDF();d.text("Results",10,10);d.save("results.pdf");}}>PDF</button><button onClick={onBack}>Dashboard</button></div>);}
