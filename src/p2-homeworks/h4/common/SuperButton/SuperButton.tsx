import React from 'react'
import s from './SuperButton.module.css'
// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    onClickCallback?: ()=>void
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className, disabled,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${s.button} ${red ? s.red : s.default} ${className} ${disabled ? s.disabled : ''}`
    const onClickCallback = () => {

    }

    return (
        <button
            className={finalClassName}
            onClick={onClickCallback}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
