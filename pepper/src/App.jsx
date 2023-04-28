import Header from './componet/header'
import Input from './componet/input';
import Third from './componet/thirdcomp';
import { useState, useEffect } from "react";
function App() {

  const[task, setTask]= useState([

    JSON.parse(localStorage.getItem("task")) || []
    // {"id":1, "name":"zino","time":"mummy"},
    // {"id":2, "name":"Excel","time":"Abacha"},
    // {"id":3, "name":"Maureen","time":"250k"},
    // {"id":4, "name":"victor","time":"CEO"},
    // {"id":5, "name":"Nozie","time":"Javascript"},
    // {"id":6, "name":"Nathan","time":"Pepper"},
    // {"id":7, "name":"Ashawo","time":"God abeg"}
  
]);
useEffect(()=>{
  localStorage.setItem("task", JSON.stringify(task))
}, [task])
  return(
   <>
   <Header/>
    <main>
      <Input task={task} setTask={setTask}/>
      <Third task={task} setTask={setTask} />
    </main>
   </>
  );
}
export default App