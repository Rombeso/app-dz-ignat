import React from 'react'
import {Link} from 'react-router-dom';
import {PropsType} from "./Routes";
import classes from "./Header.module.css"

type ThisType = {
    path: PropsType
}

function Header(props: ThisType) {
    return (
        <div className={classes.wrapper}>
            <input className={classes.checkMenu} type={"checkbox"} id={'check-menu'}/>
            <label className={classes.mainLabel} htmlFor={'check-menu'}>MENU</label>
            <div className={classes.burgerLine + " " + classes.first}></div>
            <div className={classes.burgerLine + " " + classes.second}></div>
            <div className={classes.burgerLine + " " + classes.third}></div>
            <div className={classes.burgerLine + " " + classes.forth}></div>
            <nav className={classes.mainMenu}>
                <Link to={props.path.PRE_JUNIOR} className={classes.links}>PreJunior</Link>
                <Link to={props.path.JUNIOR} className={classes.links}>Junior</Link>
                <Link to={props.path.JUNIOR_PLUS} className={classes.links}>JuniorPlus</Link>
            </nav>

        </div>
    )
}

export default Header
