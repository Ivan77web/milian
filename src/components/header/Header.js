import { motion } from "framer-motion";
import React from "react";
import cl from "./Header.module.css"

const Header = () => {
    return(
        <div className={cl.header}>
            <motion.div 
                className={cl.logo}
                initial={{opacity: 0}}
                animate={{opacity: 1}}

                transition={{duration: 2}}

            >
                <div className={cl.bigLetter}>М</div>

                <div className={cl.words}>
                    <p className={cl.word + " " + cl.word_one}>илиан</p>
                    <p className={cl.word + " " + cl.word_two}>делает</p>
                    <p className={cl.word + " " + cl.word_three}>узыку</p>
                </div>

                <p className={"blueText " + cl.star}>*</p>
            </motion.div>
        </div>
    )
}

export {Header}