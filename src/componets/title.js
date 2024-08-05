import React from 'react';
import "./css/all.css";
import title from './css/title.module.css'

function Title(){
    return (
        <div className={title.background}>
            <div className={title.container}>
                <div className={title.titleYock}></div>
                <div className={title.leftDoor}></div>
                <div className={title.rightDoor}></div>
            </div>
        </div>
    );
}

export default Title;