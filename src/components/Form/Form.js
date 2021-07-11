import React from "react"
import "./Form.css"

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            photo: "",
            quote: "",
            superlative: ""
        }
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleClick() {

    }

    render() {
        return (
            <form>
                <input value={this.state.name} name="name" placeholder="Name" onChange={event => this.handleChange(event)}/>
                <input value={this.state.photo} name="photo" placeholder="Photo" onChange={event => this.handleChange(event)}/>
                <input value={this.state.quote} name="quote" placeholder="Quote" onChange={event => this.handleChange(event)}/>
                <input value={this.state.superlative} name="superlative" placeholder="Superlative" onChange={event => this.handleChange(event)}/>
                <button onClick={event => this.handleClick(event)}>Submit</button>
            </form>
        )

    }
}

export default Form