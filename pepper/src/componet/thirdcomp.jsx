import "./third.css"


function Third({task,setTask}) {
    function deleten(id) {
      const updatedTask =task.filter((task)=>id !== task.id);
      setTask(updatedTask)
    }
     
    return(
        <>
       <div className="set">
           <section className="gen2">
               <div>
                 <h3>Todo</h3>
                 <span className="count">
                  {task.length}
                 </span>
               </div>
               <div className="topright">
                <p onClick={()=> setTask([])}>Clear All</p>
               </div>
           </section>
           <section className="gen3">
            {
                task.map((data)=>(
                   <div className="card" key={data.id} >
                <div className="toptop">
                    <h4>{data.name}</h4>
                    <button className="delete"onClick={()=>deleten(data.id)}>
                        Delete
                    </button>

                </div>
                <div className="time">
                 {data.time}
                </div>
             </div> 
                ))
            }
             
           </section>
       </div>
        </>
    );
    
}
export default Third