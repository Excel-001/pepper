import"./input.css"

function Input({task, setTask}) {
    function handlesubmite(e) {
        e.preventDefault();
        const date = new Date();
        const time= date.toLocaleTimeString();
        const day= date.toLocaleDateString();
    const newitem={
        id: date.getTime(),
        name: e.target.jiggy.value,
        time: `${time}${day}` 
    }   
    setTask([...task, newitem])
    e.target.jiggy.value=""
    }
    return(
        <>
        <section className="ok">
            <form className="geni" onSubmit={handlesubmite}>
                <input  maxLength={27} autoComplete="off" placeholder="add task" name="jiggy" type="text"/>
                <button type="submite" className="button1" >Add</button>
            </form>
        </section>
        </>
    );
}
export default Input