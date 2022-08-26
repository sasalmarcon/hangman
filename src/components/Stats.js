import React from "react";

const Stats = (props) =>{

    return (
        <div className="bg-gray-200">
          <div>
            <p className="mx-2 my-2 font-semibold text-2xl">Lives : {`${props.lives}`}</p>
          </div>
        </div>
    )
}

export default Stats;