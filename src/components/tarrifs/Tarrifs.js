import React, { useEffect, useState } from "react";
import cl from "./Tarrifs.module.css"
import micro from "../../img/prize.png"
import { motion } from "framer-motion";

const Tarrifs = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const hours = date.getHours();

    const [priceOne, setPriceOne] = useState(null);
    const [priceTwo, setPriceTwo] = useState(null);
    const [increasePriceDay, setIncreasePriceDay] = useState(0);
    const [increasePriceHour, setIncreasePriceHour] = useState(0);
    const [commentData, setCommentData] = useState("");

    const titleAnimation = {
        hidden: {
            x: -500
        },

        visible: {
            x: 0
        }
    }

    const cardAnimationLeft = {
        hidden: {
            x: -500,
            opacity: 0
        },

        visible: {
            x: 0,
            opacity: 1
        }
    }

    const cardAnimationRight = {
        hidden: {
            x: 500,
            opacity: 0
        },

        visible: {
            x: 0,
            opacity: 1
        }
    }

    const correctWordDay = (day) => {
        if (day) {
            if (day === 1 || day === 21 || day === 31) {
                return (" день");
            } else if ((day > 1 && day < 5) || (day > 21 && day < 25)) {
                return (" дня")
            } else if ((day > 4 && day < 21) || (day > 24 && day < 31)) {
                return (" дней")
            }
        }
    }

    const correctWordHour = (hour) => {
        if (hour) {
            if (hour === 1 || hour === 21 || hour === 31) {
                return (" час");
            } else if ((hour > 1 && hour < 5) || (hour > 21 && hour < 25)) {
                return (" часа")
            } else if ((hour > 4 && hour < 21) || (hour > 24 && hour < 31)) {
                return (" часов")
            }
        }
    }

    useEffect(() => {
        if (month == 10) {
            if (day > 10 && day < 19) {
                setPriceOne(18);
                setPriceTwo(38)

                setIncreasePriceDay(18 - day);
                setIncreasePriceHour(23 - hours);
            } else if (day > 18 && day < 25) {
                setPriceOne(20);
                setPriceTwo(40);

                setIncreasePriceDay(24 - day)
                setIncreasePriceHour(23 - hours);
            } else if (day > 24 && day < 28) {
                setPriceOne(22);
                setPriceTwo(42);

                setIncreasePriceDay(27 - day);
                setIncreasePriceHour(23 - hours);
            } else {
                setPriceOne(null);
                setPriceTwo(null);
            }

            if (day < 11) {
                setCommentData("Скоро анонс")
            } else if (day > 27) {
                setCommentData("Курс закрыт")
            }

        } else {
            setPriceOne(null);
            setPriceTwo(null);
            setIncreasePriceDay(null)
            setIncreasePriceHour(null);
            setCommentData("Курс закрыт")
        }
    }, [])

    return (
        <motion.div
            className={cl.tarrifs}
            initial="hidden"
            whileInView="visible"
        >
            <div className={"container " + cl.twoTarrifs}>
                <motion.div
                    className={cl.title}
                    variants={titleAnimation}

                    transition={{
                        duration: .8
                    }}
                >
                    <div>
                        <p className="blueText">УРОВЕНЬ</p>
                        ДОСТУПА
                    </div>

                    <div className={cl.tail} />
                </motion.div>

                <div className={cl.variants}>
                    <motion.div
                        className={cl.small}
                        variants={cardAnimationLeft}
                        transition={{
                            duration: 1
                        }}
                    >
                        <div>
                            <p className={cl.bigTitle}><span className="blueText">Б</span>ЕДОЛ </p>
                        </div>

                        <div className={cl.options}>
                            <ul>
                                <li> &#8226; закрытый чат</li>
                                <li> &#8226; обратная связь от кураторов</li>
                                <li> &#8226; прямые эфиры</li>
                            </ul>
                        </div>

                        <div className={cl.line} />

                        <div className={cl.price}>
                            <div className={cl.valuation}>ЦЕННОСТЬ - &#8734;</div>
                            {
                                priceOne
                                    ?
                                    <div className={cl.valuePrice}>ЦЕНА - <span className="blueText">{priceOne}</span>к</div>
                                    :
                                    <div className={cl.closeShop}>{commentData}</div>
                            }
                            <div className={cl.comment}>доступна рассрочка</div>
                            <div className={cl.number}>количество мест - 20</div>
                        </div>

                        {
                            (day > 10 && day < 25 && month === 10)
                                ?
                                <div className={cl.increasePrice}>
                                    <p className={cl.increaseTextSmall}>Цена увеличится через:</p>
                                    <p className={cl.increaseTextBig}>
                                        {
                                            increasePriceDay !== 0
                                                ?
                                                <div style={{ display: "flex" }}>
                                                    <div className="blueText">{increasePriceDay}&nbsp;</div>
                                                    {correctWordDay(increasePriceDay)}&nbsp;
                                                </div>
                                                :
                                                ""
                                        }

                                        {
                                            increasePriceHour !== 0
                                                ?
                                                <div style={{ display: "flex" }}>
                                                    <div className="blueText">{increasePriceHour}&nbsp;</div>
                                                    {correctWordHour(increasePriceHour) + " "}
                                                </div>
                                                :
                                                ""
                                        }

                                        {
                                            increasePriceDay === 0 && increasePriceHour === 0
                                                ?
                                                "менее часа"
                                                :
                                                ""
                                        }
                                    </p>
                                </div>
                                :
                                <div />
                        }

                        <div className={cl.buttonBuy}>
                            <a href="https://milianovoid.getcourse.ru/miliandelaetmillion" target="_blank">Оформить</a>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={cardAnimationRight}
                        className={cl.big}
                        transition={{
                            duration: 1
                        }}
                    >
                        <div>
                            <p className={cl.bigTitle}><span className="blueText">Д</span>УМИНАТОР </p>
                        </div>

                        <div className={cl.options}>
                            <p className={cl.introMini}>доп уроки:</p>

                            <ul className={cl.options_one}>
                                <li> &#8226; Как работать с артистами</li>
                                <li> &#8226; Делаем деньги на музыке</li>
                                <li> &#8226; Если решил стать артистом</li>
                            </ul>

                            <ul className={cl.options_two}>
                                <li> &#8226; закрытый чат</li>
                                <li> &#8226; обратная связь от Милиана</li>
                                <li> &#8226; прямые эфиры</li>
                                <li> &#8226; разборы проектов популярных артистов</li>
                                <li> &#8226; потенциальное сотрудничество</li>
                            </ul>
                        </div>

                        <div className={cl.line} />

                        <div className={cl.price}>
                            <div className={cl.valuation}>ЦЕННОСТЬ - &#8734; &#8734;</div>
                            {
                                priceOne
                                    ?
                                    <div className={cl.valuePrice}>ЦЕНА - <span className="blueText">{priceTwo}</span>к</div>
                                    :
                                    <div className={cl.closeShop}>{commentData}</div>
                            }
                            <div className={cl.comment}>доступна рассрочка</div>
                            <div className={cl.number}>количество мест - 6</div>
                        </div>

                        {
                            (day > 10 && day < 25 && month === 10)
                                ?
                                <div className={cl.increasePrice}>
                                    <p className={cl.increaseTextSmall}>Цена увеличится через:</p>
                                    <p className={cl.increaseTextBig}>
                                        {
                                            increasePriceDay !== 0
                                                ?
                                                <div style={{ display: "flex" }}>
                                                    <div className="blueText">{increasePriceDay}&nbsp;</div>
                                                    {correctWordDay(increasePriceDay)}&nbsp;
                                                </div>
                                                :
                                                ""
                                        }

                                        {
                                            increasePriceHour !== 0
                                                ?
                                                <div style={{ display: "flex" }}>
                                                    <div className="blueText">{increasePriceHour}&nbsp;</div>
                                                    {correctWordHour(increasePriceHour) + " "}
                                                </div>
                                                :
                                                ""
                                        }

                                        {
                                            increasePriceDay === 0 && increasePriceHour === 0
                                                ?
                                                "менее часа"
                                                :
                                                ""
                                        }
                                    </p>
                                </div>
                                :
                                <div />
                        }

                        <div className={cl.buttonBuy}>
                            <a href="https://milianovoid.getcourse.ru/miliandelaetmillion" target="_blank">Оформить</a>
                        </div>
                    </motion.div>
                </div>

                <div className={cl.info}>
                    <motion.div
                        className={cl.prize}
                        variants={cardAnimationLeft}
                        transition={{
                            duration: 1
                        }}
                    >
                        <div className={cl.prizeText}>
                            <div className={cl.plus}>
                                <div className={cl.one} />
                                <div className={cl.two} />
                            </div>

                            <div className={cl.text}>
                                СРЕДИ УЧАСТНИКОВ КУРСА РАНДОМНО БУДЕТ ПРОВЕДЕН РОЗЫГРЫШ МИКРОФОНА RODE NT-1A
                            </div>
                        </div>

                        <img className={cl.microIMG} src={micro} />
                    </motion.div>

                    <motion.div
                        className={cl.data}
                        variants={cardAnimationRight}
                        transition={{
                            duration: 1
                        }}
                    >
                        <div className={cl.start}>
                            Старт продаж с <span className="blueText">11.11</span> по <span className="blueText">27.11</span>
                        </div>

                        <div className={cl.textDate}>
                            Даты прохождения курса :
                        </div>

                        <div className={cl.date}>
                            <span className="blueText">28 ноября</span> 2022 - <span className="blueText">30 декабря</span> 2022
                        </div>
                    </motion.div>
                </div>

            </div>
        </motion.div>
    )
}

export { Tarrifs }