import React from 'react'

import {useDispatch, useSelector} from "react-redux";
import {InitType, loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import loadingImg from './../h10/bll/loading-waiting.gif'
import SuperButton from "../h4/common/SuperButton/SuperButton";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, InitType >(state => state.loading)
    const dispatch = useDispatch();
    console.log(loading)
    const setLoading = () => {
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout(()=> {
            dispatch(loadingAC(false))
        },5000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading.loading
                ? (
                    <div>
                    <img src={loadingImg} style={{width: 45, margin: 10}}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
