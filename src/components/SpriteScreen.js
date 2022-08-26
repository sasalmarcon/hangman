import React from "react";

const SpriteScreen = (props) =>{
   
    return (
        <div className=" h-1/2 flex items-center justify-between">
            <div>
                <img className = "h-64" id = "hang" src={`./images/hangman${props.step}.png`} alt = ""/>
            </div>
        </div>
    )
}

export default SpriteScreen;