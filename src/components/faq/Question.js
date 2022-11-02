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
                            <p>Я бедолага, но хочу курс, что делать?</p>

                            <div
                                className={cl.arrow}
                                onClick={() => setIsOpen(!isOpen)}
                                style={isOpen ? { transform: "rotate(135deg)", marginTop: "7px" } : {}}
                            >
                                <div className={cl.arrowOne} />
                                <div className={cl.arrowTwo} />
                            </div>
                        </div>

                        <p className={isOpen ? cl.answer : cl.active}>
                            <i>
                                Для тебя доступна полугодовая рассрочка. Для её одобрения потребуется 5 минут твоего времени 
                                и первичный взнос. Для уточнения вопроса рассрочки отпиши в 
                                телеграмм: <a className="blueText" href="https://t.me/milianstorebot" target="_blank">@robichh</a>
                            </i>
                        </p>
                    </div>
                    :
                    <div>
                        <div className={cl.question}>
                            <p>{q}</p>

                            <div
                                className={cl.arrow}
                                onClick={() => setIsOpen(!isOpen)}
                                style={isOpen ? { transform: "rotate(135deg)", marginTop: "7px" } : {}}
                            >
                                <div className={cl.arrowOne} />
                                <div className={cl.arrowTwo} />
                            </div>
                        </div>

                        <p className={isOpen ? cl.answer : cl.active}><i>{a}</i></p>
                    </div>
            }
        </div>
    )
}

export { Question }