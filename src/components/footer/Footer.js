import React from "react";
import cl from "./Footer.module.css"
import icon_tg from "../../img/tg.png"
import icon_inst from "../../img/insta.png"
import icon_youtube from "../../img/yt.png"

const Footer = () => {
    return (
        <div className={cl.footer}>
            <div className={cl.textForm}>
                <p className={cl.text}><span className="blueText">КУПИТЬ</span> ДОСТУП</p>
                <p className={cl.text + " " + cl.grey}>ИЗМЕНИТЬ ЖИЗНЬ</p>
                <p className={cl.text + " " + cl.grey}>ВЫРАСТИ В МУЗЫКЕ</p>
                <p className={cl.text + " " + cl.grey}>КАЧЕСТВЕННЫЙ ЗВУК</p>
                <p className={cl.text + " " + cl.grey}>ПОЛУЧИТЬ МОТИВАЦИЮ</p>
                <p className={cl.text + " " + cl.grey}>ИВЕСТИРОВАТЬ В СЕБЯ</p>
                <p className={cl.text + " " + cl.grey}>СИЛЬНОЕ ОКРУЖЕНИЕ</p>
                <p className={cl.text}>МОЖНО <span className="blueText">В ТГ БОТЕ</span></p>
            </div>

            <a href="https://t.me/milianstorebot" target="_blank">
                <div className={cl.link}>@milianstorebot</div>
            </a>

            <div className={cl.link_two}>
                <p className={cl.link_two_text}>ВОПРОСЫ?</p>

                <a href="https://t.me/robichh" target="_blank">
                    <div className={cl.one_link}>
                        @robichh
                    </div>
                </a>
            </div>

            <p className={cl.intro}>МИЛИАН О'ВОЙД</p>

            <div className={cl.icons}>
                <a href="https://t.me/milianovoid" target="_blank"><img className={cl.tg} src={icon_tg} /></a>
                <a href="https://www.youtube.com/channel/UCeYNmVIE0TRHIxBIMvFd9iQ" target="_blank"><img className={cl.youtube} src={icon_youtube} /></a>
                <a href="https://instagram.com/milianovoid" target="_blank"><img className={cl.inst} src={icon_inst} /></a>
            </div>
        </div>
    )
}

export { Footer }