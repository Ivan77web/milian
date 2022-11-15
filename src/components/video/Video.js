import React from "react";
import cl from "./Video.module.css"

const Video = () => {
    return (
        <div className={cl.videoBlock}>
            <div className="container">

                <div className={cl.videoWithBorder}>

                    <div className={cl.one} />
                    <div className={cl.two} />
                    <div className={cl.three} />
                    <div className={cl.four} />

                    <div className={cl.video}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/yMdqwrLiKhU"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="
                            accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>

                </div>

            </div>
        </div>
    )
}

export { Video }