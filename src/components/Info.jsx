import React from "react";

function Info () {
    return (
        <div>
            <img src="src/images/Mypic.jpg" />
            <div className="Top"></div>
            <h1 className="Name"><b>Saar Agrawal</b></h1>
            <h2>DTU'25||IT</h2>
            <h3>
                <a target="_blank" href="https://dharmawarrior.github.io/My-Resume/">My-Resume</a>
            </h3>
            <button className="Left">
                <a target="_blank" href="mailto:saarwayind.1610@gmail.com">
                    <img src="src/Icons/Mail.png" className="Mail" />
                    <text className="TextL">Email</text>
                </a>
            </button>
            <button className="Right">
                <a target="_blank" href="https://www.linkedin.com/in/saar-agrawal-4b3b75179/">
                    <img src="src/Icons/LinkedIn.png" className="LinkedIn" />
                    <text className="TextR">LinkedIn</text>
                </a>
            </button>
        </div>
    )
}

export default Info
//320