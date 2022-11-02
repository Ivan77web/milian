import React from "react";
import cl from "./Header.module.css"

const Header = () => {
    return(
        <div className={cl.header}>
            <div className={cl.logo}>
                <div className={cl.bigLetter}>М</div>

                <div className={cl.words}>
                    <p className={cl.word + " " + cl.word_one}>илиан</p>
                    <p className={cl.word + " " + cl.word_two}>делает</p>
                    <p className={cl.word + " " + cl.word_three}>узыку</p>
                </div>

                <p className={"blueText " + cl.star}>*</p>
            </div>
        </div>
    )
}

export {Header}