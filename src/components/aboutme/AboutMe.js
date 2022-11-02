import React from "react";
import cl from "./AboutMe.module.css"
import me_one from "../../img/me_one.png"
import me_two from "../../img/me_two.png"

const AboutMe = () => {
    return (
        <div className={cl.about}>
            <div className="container">
                <div className={cl.text}>
                    <span className="blueText">Милиан О'Войд</span> — занимается музыкой 6 лет, за
                    свой путь успел побывать на Studio 21,
                    продать треки Facebook, свести более <span className="blueText">1500</span> треков,
                    написать около <span className="blueText">300</span> битов, поработать с популярными артистами.
                </div>

                <div className={cl.photos}>
                    <img className={cl.img_one} src={me_one} />
                    <img className={cl.img_two} src={me_two} />
                </div>
            </div>
        </div>
    )
}

export { AboutMe }