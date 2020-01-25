import React from "react"

class PhotoCard extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="well shoot!"/>
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default PhotoCard