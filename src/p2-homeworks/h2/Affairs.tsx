import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import c from "./Affairs.module.css";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: FilterType) =>void
    deleteAffairCallback: (id: number) =>void
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}

        />
    ))

    const setFilterHandler = (value: FilterType ) => {
        props.setFilter(value)
    }

    return (
        <div>

            {mappedAffairs}

            <button className={c.buttons} onClick={() => setFilterHandler('all')}>All</button>
            <button className={c.buttons} onClick={() => setFilterHandler('high')}>High</button>
            <button className={c.buttons} onClick={() => setFilterHandler('middle')}>Middle</button>
            <button className={c.buttons} onClick={() => setFilterHandler('low')}>Low</button>
        </div>
    )
}

export default Affairs
