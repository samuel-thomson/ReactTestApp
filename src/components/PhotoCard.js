import React from "react"

function PhotoCard(props) {
    return (
        <div>
            <img style={height 200} src={props.image} alt="well shoot!"/>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default PhotoCard