import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import cl from "./Question.module.css"

const Question = ({ q, a, withLink }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {
                withLink
                    ?
                    <div>
                        <div className={cl.question}>
                            <p className={cl.questionText}>Я бедолага, но хочу курс, что делать?</p>

                            <div
                                className={cl.arrow}
                                onClick={() => setIsOpen(!isOpen)}
                                style={isOpen ? { transform: "rotate(180deg)", marginTop: "7px" } : {}}
                            >
                                <div className={cl.arrowOne} />
                                <div className={cl.arrowTwo} />
                            </div>
                        </div>

                        <AnimatePresence
                            initial={false}
                        >
                            {
                                isOpen && (
                                    <motion.p
                                        className={cl.answer}

                                        initial={{
                                            height: 0,
                                            opacity: 0,
                                        }}

                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                        }}

                                        exit={{
                                            height: 0,
                                            opacity: 0,
                                        }}
                                    >
                                        <i>
                                            Для тебя доступна полугодовая рассрочка. Для её одобрения потребуется 5 минут твоего времени
                                            и первичный взнос. Для уточнения вопроса рассрочки отпиши в
                                            телеграмм: <a className="blueText" href="https://t.me/milianstorebot" target="_blank">@robichh</a>
                                        </i>
                                    </motion.p>
                                )
                            }
                        </AnimatePresence>
                    </div>
                    :
                    <div>
                        <div className={cl.question}>
                            <p className={cl.questionText}>{q}</p>

                            <div
                                className={cl.arrow}
                                onClick={() => setIsOpen(!isOpen)}
                                style={isOpen ? { transform: "rotate(180deg)", marginTop: "7px" } : {}}
                            >
                                <div className={cl.arrowOne} />
                                <div className={cl.arrowTwo} />
                            </div>
                        </div>

                        <AnimatePresence
                            initial={false}
                        >
                            {
                                isOpen && (
                                    <motion.p
                                        className={cl.answer}

                                        initial={{
                                            height: 0,
                                            opacity: 0,
                                        }}

                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                        }}

                                        exit={{
                                            height: 0,
                                            opacity: 0,
                                        }}
                                    >
                                        <i>{a}</i>
                                    </motion.p>
                                )
                            }
                        </AnimatePresence>
                    </div>
            }
        </div>
    )
}

export { Question }