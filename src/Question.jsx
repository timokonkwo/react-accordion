import { useState } from "react"

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"

export default function Question(props){

    const [display, setDisplay] = useState(false)

    const toggle = () => {
        setDisplay(prev => !prev)
    }
    return (
        <div className="question">
            <header>
                <h4>{props.title}</h4>
                {display ? <AiOutlineMinusCircle className="btn" onClick={toggle}/> : <AiOutlinePlusCircle className="btn" onClick={toggle}/>}
            </header>

            {display && <p>{props.info}</p>}
        </div>
    )
}