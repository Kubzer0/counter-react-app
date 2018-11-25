import React from 'react'

class Counter extends React.Component {

    state = {
        number: this.props.startValue
    }

    incByOneHandler() {
        this.setState({ number: this.state.number + 1 })
    }

    incByFiveHandler() {
        this.setState({ number: this.state.number + 5 })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.number}
                </div>
                <button
                    onClick={() => this.incByOneHandler()}
                >
                    Dodaj 1
                </button>
                <button
                    onClick={() => this.incByFiveHandler()}
                >
                    Dodaj 5
                </button>

            </div>

        )
    }
}

export default Counter