import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }


    const correctMonth =  date.getMonth() >= 0 && date.getMonth() < 9 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)
    const correctHours =  date.getHours() >= 0 && date.getHours() < 9 ? '0' + date.getHours() : date.getHours()
    const correctMinutes =  date.getMinutes() >= 0 && date.getMinutes() < 9 ? '0' + (date.getMinutes()+1) : (date.getMinutes()+1)
    const correctSeconds =  date.getSeconds() >= 0 && date.getSeconds() < 9 ? '0' + (date.getSeconds()+1) : (date.getSeconds()+1)

    const stringTime = `${correctHours}:${correctMinutes}:${correctSeconds}`
    const stringDate = `${date.getDate()}.${correctMonth}.${date.getFullYear()}`

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ? (
                <div>
                    {stringDate}
                </div>
            ) : (<br/> )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
