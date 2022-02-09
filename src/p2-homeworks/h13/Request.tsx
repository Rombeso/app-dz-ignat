import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {API} from "./RequestsAPI";
import s from "./HW13.module.css";

export const Request = () => {
    let [response, setResponse] = useState('')
    let [checked, setChecked] = useState(false)




    const postApi = () => {
        API.post(checked)
            .then(res => {
                setResponse(res.statusText)
            })
            .catch((error) => {
                console.log( {...error} );
                console.log( error.response ? error.response.data.errorText : error.message )
                setResponse(error.response.data.errorText)
            });
        }


    return <div className={s.div}>
        <SuperButton onClick={postApi}>
            Request
        </SuperButton>
        <SuperCheckbox
            // checked={checked}
            onChangeChecked={setChecked}
        />
        Response: {response}
    </div>
}