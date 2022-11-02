import React from "react";
import cl from "./Structure.module.css"

const Structure = () => {
    return (
        <div className={cl.structure}>
            <div className="container">
                <div className={cl.structureBlock}>
                    
                    <div className={cl.intro}>
                        <div className={cl.introText}> <p className="blueText">СТРУКТУРА &nbsp;</p> КУРСА</div>
                        <div className={cl.tail}>
                            <div className={cl.line} />
                            <div className={cl.circle} />
                            <div className={cl.smallLine} />
                            <div className={cl.cmallCircle} />
                        </div>
                    </div>

                    <div className={cl.enum}>
                        <p className={cl.one_Enum}>Оптимизация проекта </p>
                        <p className={cl.one_Enum}>Сведение инструментала </p>
                        <p className={cl.one_Enum}>Подготовка исходников </p>
                        <p className={cl.one_Enum}>Коррекция нот и эквализация </p>
                        <p className={cl.one_Enum}>Компрессия и сатурация </p>
                        <p className={cl.one_Enum}>Пространственная обработка </p>
                        <p className={cl.one_Enum}>Саунд-дизайн high уровня</p>
                        <p className={cl.one_Enum}>Мастеринг</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Structure }