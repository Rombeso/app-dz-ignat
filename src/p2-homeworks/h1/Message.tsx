import React from 'react'
import s from './Message.module.css'

type MessagePropstype = {
    avatar: any
    name: string
    message: string
    time: string
}

export function Message(props: MessagePropstype) {
    return (
        <div className={s.message}>
            {/*<div className={s.avatar}>*/}

            {/*</div>*/}
            <img className={s.img} src={props.avatar}></img>
            <div className={s.angle}></div>
            <div className={s.text}>
            <h3 className={s.nick}>{props.name}</h3>
                <div className={s.message}>
                <span >{props.message}</span>
            <span className={s.time}>{props.time}</span>
            </div>
        </div>
        </div>
    )
}

export default Message
