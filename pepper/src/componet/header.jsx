import { useState } from "react";
import "./header.css";

function Header() {
    const [otilo, setOtilo]=useState(`mixb`)
    document.documentElement.className=otilo
    return(
     <>
    <div className="gen">
        <h2>
            TaskAhead
        </h2>
        <div className="otilo">
            <span onClick={()=>setOtilo("theme")} className="theme"></span>
            <span onClick={()=>setOtilo("white")} className="theme white"></span>
            <span onClick={()=>setOtilo(" mixa")} className="theme mixa"></span>
            <span onClick={()=>setOtilo(" mixb")} className="theme mixb"></span>
        </div>
    </div>
     </>
    );
}
export default Header