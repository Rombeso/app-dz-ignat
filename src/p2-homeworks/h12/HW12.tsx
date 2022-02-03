import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {setThemeAC, StateThemeType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {


    // useDispatch, onChangeCallback
    const themeState: StateThemeType = useSelector<AppStoreType, StateThemeType >(state => state.theme)
    const dispatch = useDispatch();
    const theme = themeState.theme

    const onChangeOption = (theme:string) => {
        dispatch(setThemeAC(theme))
    }
    console.log(theme)


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect
                options={themes}
                // value={theme}
                onChangeOption={onChangeOption}
            />

            <hr/>
        </div>
    );
}

export default HW12;
