import React from "react";
import cl from "./DifferentInfo.module.css"

const DifferentInfo = () => {
    return (
        <div className={cl.info}>
            <div className="container">
                <div className={cl.star}>*</div>

                <div className={cl.textBlock}>
                    <div className={cl.text}> <span className="blueText">6</span> лет моего опыта</div>
                    <div className={cl.text}>звукорежиссерские <span className="blueText">навыки</span></div>
                    <div className={cl.text}><span className="blueText">уникальные</span> фишки</div>
                    <div className={cl.text}>саунд-дизайн <span className="blueText">high</span> уровня</div>
                    <div className={cl.text}><span className="blueText">западное</span> звучание</div>
                    <div className={cl.text}>качественное <span className="blueText">сведение</span></div>
                    <div className={cl.text}><span className="blueText">громкий</span> мастеринг</div>
                </div>
            </div>
        </div>
    )
}

export { DifferentInfo }