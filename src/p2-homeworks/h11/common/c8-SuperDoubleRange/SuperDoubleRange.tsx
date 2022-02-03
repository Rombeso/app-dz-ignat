import React, {ChangeEvent} from 'react'
import Nouislider from "nouislider-react";
import '../nouislider.css'

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: [string, string] ) => {
            onChangeRange([+e[0], +e[1]])
    }


    return (
        <>
            <Nouislider range={{min: 0, max: 100}}
                        start={value}
                        connect
                // @ts-ignore
                        onChange={onChangeCallback}
            />
        </>
    )
}

export default SuperDoubleRange

// https://github.com/mmarkelov/react-nouislider

// import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
// import s from "../c7-SuperRange/SuperRange.module.css";
//
// type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
//
// type SuperDoubleRangePropsType = DefaultInputPropsType & {
//     // onChangeRange?: (value: [number, number]) => void
//     onChangeRange?: (value: number) => void
//     // value?: [number, number]
//     // min, max, step, disable, ...
// }
//
// // const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
// //     {
// //
// //         onChangeRange, value,
// //         // min, max, step, disable, ...
// //     }
// // )
//
// const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
//                                                                    type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
//                                                                    onChange, onChangeRange,
//                                                                    className,
//
//                                                                    ...restProps// все остальные пропсы попадут в объект restProps
//                                                                }) => {
//     // сделать самому, можно подключать библиотеки
//     const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
//         onChange && onChange(e) // сохраняем старую функциональность
//
//         onChangeRange && onChangeRange(+e.currentTarget.value)
//     }
//     const finalRangeClassName = `${s.range} ${className ? className : ''}`
//     return (
//         <>
//             <input
//                 type={'range'}
//                 onChange={onChangeCallback}
//                 className={finalRangeClassName}
//                 value={restProps.value}
//             />
//             DoubleRange
//         </>
//     )
// }
//
// export default SuperDoubleRange
