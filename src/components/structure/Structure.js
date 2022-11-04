import { motion } from "framer-motion";
import React from "react";
import cl from "./Structure.module.css"

const Structure = () => {
    const elemAnimation = {
        hidden: {
            opacity: 0
        },

        visible: {
            opacity: 1
        }
    }

    return (
        <motion.div 
            className={cl.structure}
            initial="hidden"
            whileInView="visible"
        >
            <div className="container">
                <div className={cl.structureBlock}>
                    
                    <div className={cl.intro}>
                        <div className={cl.introText}> <p className="blueText">СТРУКТУРА &nbsp;</p> КУРСА</div>
                        <motion.div 
                            className={cl.tail}
                            variants={elemAnimation}

                            transition={{
                                duration: 2
                            }}
                        >
                            <div className={cl.line} />
                            <div className={cl.circle} />
                            <div className={cl.smallLine} />
                            <div className={cl.cmallCircle} />
                        </motion.div>
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
        </motion.div>
    )
}

export { Structure }