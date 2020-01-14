import React from "react"

function PhotoCard(props) {
    return (
        <div>
            <img src={props.image} alt="well shoot!"/>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default PhotoCard