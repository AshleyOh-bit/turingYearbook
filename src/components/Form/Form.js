import React from "react"
import "./Form.css"

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            photo: "",
            quote: "",
            superlative: ""
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    clearInputs = () => {
        this.setState({
            name: "",
            photo: "",
            quote: "",
            superlative: ""
        })
    }

    submitStudent = event => {
        event.preventDefault()
        const newStudent = {
            id: Date.now(),
            ...this.state
        }
        console.log(newStudent)
        this.props.handleClick(newStudent)
        this.clearInputs()
    }


    render() {
        return (
            <form>
                <input value={this.state.name} name="name" placeholder="Name" onChange={event => this.handleChange(event)}/>
                <input value={this.state.photo} name="photo" placeholder="Photo" onChange={event => this.handleChange(event)}/>
                <input value={this.state.quote} name="quote" placeholder="Quote" onChange={event => this.handleChange(event)}/>
                <input value={this.state.superlative} name="superlative" placeholder="Superlative" onChange={event => this.handleChange(event)}/>
                <button onClick={event => this.submitStudent(event)}>Submit</button>
            </form>
        )

    }
}

export default Form