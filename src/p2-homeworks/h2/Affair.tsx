import React from 'react'
import {AffairType} from "./HW2";
import c from './Affairs.module.css'


type AffairPropsType = {
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) =>void
}

function Affair(props: AffairPropsType) {

    const deleteAffair = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={c.affair}>
            <div className={c.item}>{props.affair.name}</div>
            <div className={c.item}>{props.affair.priority}</div>
            <button onClick={deleteAffair} className={c.buttons}>X</button>
        </div>
    )
}

export default Affair
